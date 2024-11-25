import axios, { AxiosError } from 'axios';
import { CITY_INDICATORS } from '../constants/indicators';
import { PageData, WikipediaApiResponse } from '../types/pageData.type';
import { NewPlaceInfoWithPhotos, Place, PlaceInfoWithRatingAndPhotos, SummaryOfPlaceInfo } from '../types/place.type';

const GOOGLE_MAP_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

// 장소 사진 가져오는 함수
async function getPlacePhotos(placeId: string): Promise<NewPlaceInfoWithPhotos | null> {
  try {
    const url = `/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,formatted_address,photo,geometry&key=${GOOGLE_MAP_API_KEY}`;
    const response = await axios.get(url);
    const details: PlaceInfoWithRatingAndPhotos = response.data.result;

    // 사진 URL 생성
    const photos = details?.photos
      ? details.photos.map(
          (photo) =>
            `/maps/api/place/photo?maxwidth=400&photoreference=${photo.photo_reference}&key=${GOOGLE_MAP_API_KEY}`
        )
      : [];
    return { ...details, photos };
  } catch (error) {
    console.error('getPlacePhotos() 함수 에러: ', error);
    return null;
  }
}

// 장소 설명 가져오는 함수 (by 위키피디아)
export async function getPlaceDescription(placeName: string): Promise<string | null> {
  try {
    const url = `/wikipedia-api/api/rest_v1/page/summary/${encodeURIComponent(placeName)}`;
    const response = await axios.get(url);
    return response.data.extract; // 장소에 대한 요약 설명 반환
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response && error.response.status === 404) {
        return '설명 없음';
      }
      console.error('getPlaceDescription() 함수 에러: ', error);
      return null;
    } else {
      console.error('예상하지 못한 에러 발생:', error);
      return null;
    }
  }
}

// 지역 사진 및 설명 가져오는 함수 (by 위키피디아)
export async function getLocationDetails(neighborhood: string, district: string, city: string) {
  const url = '/wikipedia-api/w/api.php';

  // 지역 정보 배열 (우선순위)
  let searchQueries: string[] = [''];
  if (city === '광주') {
    searchQueries = [
      `${neighborhood} (${city})`,
      `${neighborhood} (광주광역시)`,
      `${neighborhood} (${district})`,
      neighborhood,
    ];
  } else {
    searchQueries = [`${neighborhood} (${city})`, `${neighborhood} (${district})`, neighborhood];
  }

  const params = {
    action: 'query', // 문서 조회
    prop: 'extracts|revisions|pageimages', // 개요, 페이지 전체 내용, 이미지 가져오기
    format: 'json', // JSON 형식으로 응답
    rvslots: '*', // 모든 슬롯(본문 내용 포함) 가져오기
    rvprop: 'content', // 본문 내용 가져오기
    piprop: 'original', // 원본 이미지 URL 가져오기
    exintro: 'true', // 첫 섹션만 가져오기
    titles: '',
    // origin: '*', // CORS 회피
  };

  try {
    for (const query of searchQueries) {
      params.titles = query;
      const queryString = new URLSearchParams(params as Record<string, string>).toString();
      const response = await fetch(`${url}?${queryString}`);
      const data: WikipediaApiResponse = await response.json();
      // 페이지 데이터 추출
      const pageData: PageData = Object.values(data.query.pages)[0];
      // 페이지가 없으면 계속해서 다른 쿼리로 시도
      if (pageData.missing == '') {
        continue;
      }

      const intro: string = pageData.extract;
      const fullText: string = pageData.revisions[0]?.slots?.main['*']; // 전체 텍스트
      const imageUrl: string = pageData.original?.source; // 이미지 URL

      // 위키피디아 문서 페이지에서 특정 섹션(개요, 특징, 유래, 역사)의 텍스트만 추출
      const summary =
        intro +
        '<br>' +
        (fullText.includes('== 개요 ==')
          ? '<h3><b>개요</b></h3>' +
            fullText
              .split('== 개요 ==')[1]
              ?.split('==')[0]
              .trim()
              .replace(/\[\[(.*?)\]\]/g, '<b>$1</b>')
              .replace(/<ref.*?<\/ref>/gs, '') +
            '<br><br>'
          : '') +
        (fullText.includes('== 특징 ==')
          ? '<h3><b>특징</b></h3>' +
            fullText
              .split('== 특징 ==')[1]
              ?.split('==')[0]
              .trim()
              .replace(/\[\[(.*?)\]\]/g, '<b>$1</b>')
              .replace(/<ref.*?<\/ref>/gs, '') +
            '<br><br>'
          : '') +
        (fullText.includes('== 유래 ==')
          ? '<h3><b>유래</b></h3>' +
            fullText
              .split('== 유래 ==')[1]
              ?.split('==')[0]
              .trim()
              .replace(/\[\[(.*?)\]\]/g, '<b>$1</b>')
              .replace(/<ref.*?<\/ref>/gs, '') +
            '<br><br>'
          : '') +
        (fullText.includes('== 역사 ==')
          ? '<h3><b>역사</b></h3>' +
            fullText
              .split('== 역사 ==')[1]
              ?.split(/\n== [^=]/)?.[0]
              .trim()
              .replace(/=== (.*?) ===/g, '<h3><b>$1</b></h3>')
              .replace(/\[\[(.*?)\]\]/g, '<b>$1</b>')
              .replace(/<ref.*?<\/ref>/gs, '') +
            '<br><br>'
          : '') +
        (fullText.includes('== 역사와 유래 ==')
          ? '<h3><b>역사와 유래</b></h3>' +
            fullText
              .split('== 역사와 유래 ==')[1]
              ?.split('==')[0]
              .trim()
              .replace(/\[\[(.*?)\]\]/g, '<b>$1</b>')
              .replace(/<ref.*?<\/ref>/gs, '') +
            '<br><br>'
          : '') +
        (fullText.includes('== 지명 ==')
          ? '<h3><b>지명</b></h3>' +
            fullText
              .split('== 지명 ==')[1]
              ?.split('==')[0]
              .trim()
              .replace(/\[\[(.*?)\]\]/g, '<b>$1</b>')
              .replace(/<ref.*?<\/ref>/gs, '')
          : '');

      return {
        summary,
        imageUrl: imageUrl || null,
      };
    }
  } catch (error) {
    console.error('getLocationDetails() 함수 에러:', error);
    return {
      summary: '오류가 발생했습니다.',
      imageUrl: null,
    };
  }
}

// 특정 지역에 대한 장소 목록 가져오는 함수
export async function getPlaces(location: string): Promise<SummaryOfPlaceInfo[]> {
  const textSearchQuery = `${location} 인기 명소`;
  const textSearchUrl = `/maps/api/place/textsearch/json?query=${encodeURIComponent(
    textSearchQuery
  )}&region=kr&key=${GOOGLE_MAP_API_KEY}`;

  try {
    const textResponse = await fetch(textSearchUrl);
    const textData = await textResponse.json();
    const places: Place[] = textData.results;

    // 장소의 사진 및 설명 가져오기
    const placesWithDetails = await Promise.all(
      places.map(async (place) => {
        const photosResult: NewPlaceInfoWithPhotos | null = await getPlacePhotos(place.place_id);
        const photos = photosResult?.photos ?? [];
        const description: string | null = (await getPlaceDescription(place.name)) ?? '';

        const geometry = place.geometry || {
          location: { lat: 0, lng: 0 },
          viewport: {
            northeast: { lat: 0, lng: 0 },
            southwest: { lat: 0, lng: 0 },
          },
        };

        return {
          name: place.name ?? '', // name이 undefined일 경우 빈 문자열
          formatted_address: place.formatted_address ?? '', // address 처리
          geometry,
          rating: place.rating ?? 0, // rating 기본값 0
          photos,
          description,
        };
      })
    );
    return placesWithDetails;
  } catch (error) {
    console.error('getPlaces() 함수 에러:', error);
    return [];
  }
}

// 대한민국 인기 여행지 가져오는 함수
export async function getPopularPlaces(): Promise<SummaryOfPlaceInfo[]> {
  const textSearchQuery = '대한민국 인기 명소';
  const textSearchUrl = `/maps/api/place/textsearch/json?query=${encodeURIComponent(
    textSearchQuery
  )}&region=kr&key=${GOOGLE_MAP_API_KEY}`;

  try {
    const textResponse = await fetch(textSearchUrl);
    const textData = await textResponse.json();
    const places: Place[] = textData.results;

    // 장소의 사진 및 설명 가져오기
    const placesWithDetails = await Promise.all(
      places.map(async (place) => {
        const photosResult: NewPlaceInfoWithPhotos | null = await getPlacePhotos(place.place_id);
        const photos = photosResult?.photos ?? [];
        const description: string | null = (await getPlaceDescription(place.name)) ?? '';

        const geometry = place.geometry || {
          location: { lat: 0, lng: 0 },
          viewport: {
            northeast: { lat: 0, lng: 0 },
            southwest: { lat: 0, lng: 0 },
          },
        };

        return {
          name: place.name ?? '', // name이 undefined일 경우 빈 문자열
          formatted_address: place.formatted_address ?? '', // address 처리
          geometry,
          rating: place.rating ?? 0, // rating 기본값 0
          photos,
          description,
        };
      })
    );
    return placesWithDetails;
  } catch (error) {
    console.error('getPopularPlaces() 함수 에러:', error);
    return [];
  }
}

// 특정 장소 타입에 맞는 장소들만 가져오는 함수
export async function getPlacesBasedOnTheme(korName: string, engName: string): Promise<SummaryOfPlaceInfo[]> {
  // 매개변수 받기
  // 위도, 경도 배열로 만들기
  // 데이터 전체 불러오기
  // 무한 스크롤
  let allPlaces: Place[] = [];

  // for (const location of CITY_INDICATORS) {
  let nextPageToken = null;

  do {
    try {
      const url = `/maps/api/place/textsearch/json?query=${encodeURIComponent(korName)}&location=${
        CITY_INDICATORS[4].lat
      },${CITY_INDICATORS[4].lng}&radius=10000&type=${engName}&region=kr&key=${GOOGLE_MAP_API_KEY}`;

      const response = await fetch(nextPageToken ? `${url}&pagetoken=${nextPageToken}` : url);
      const data = await response.json();
      const result: Place[] = data.results;
      console.log(result);

      allPlaces = allPlaces.concat(result);
      nextPageToken = data.next_page_token;

      if (nextPageToken) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
    } catch (error) {
      console.error('getPlacesBasedOnTheme() 함수 에러: ', error);
      break;
    }
  } while (nextPageToken);
  // }
  console.log('All Places: ', allPlaces);
  const placesWithDetails = await Promise.all(
    allPlaces.map(async (place) => {
      const photosResult: NewPlaceInfoWithPhotos | null = await getPlacePhotos(place.place_id);
      const photos = photosResult?.photos ?? [];
      const description: string | null = (await getPlaceDescription(place.name)) ?? '';

      const geometry = place.geometry || {
        location: { lat: 0, lng: 0 },
        viewport: {
          northeast: { lat: 0, lng: 0 },
          southwest: { lat: 0, lng: 0 },
        },
      };

      return {
        name: place.name ?? '', // name이 undefined일 경우 빈 문자열
        formatted_address: place.formatted_address ?? '', // address 처리
        geometry,
        rating: place.rating ?? 0, // rating 기본값 0
        photos,
        description,
      };
    })
  );

  return placesWithDetails;
}

// 설문조사 후 추천 여행지 가져오는 함수
export async function getRecommendPlaces(
  lat: number,
  lng: number,
  theme: string | string[]
): Promise<Place[] | undefined> {
  let url: string = '';
  let result: Place[] = [];
  console.log(typeof theme, Array.isArray(theme));

  try {
    if (typeof theme === 'string') {
      url = `/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=10000&type=${theme}&region=kr&key=${GOOGLE_MAP_API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      result = data.results;
      console.log(result);
    } else {
      const requests = theme.map((t) => {
        return (url = `/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=10000&type=${t}&region=kr&key=${GOOGLE_MAP_API_KEY}`);
      });
      const data = await Promise.all(requests.map((url) => fetch(url).then((response) => response.json())));
      console.log(data);
      result = data[0].results;
      console.log(result);
    }
    return result;
  } catch (error) {
    console.error('getRecommendPlaces() 함수 에러: ', error);
  }
}
