import axios, { AxiosError } from 'axios';
import { PageData, WikipediaApiResponse } from '../types/pageData.type';
import { Place, PlaceInfoWithPhotos, PlaceResponse, SummaryOfPlaceInfo } from '../types/place.type';

const GOOGLE_MAP_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const MAP_URL = import.meta.env.VITE_MAPS_API_URL;
const WIKIPEDIA_URL = import.meta.env.VITE_WIKIPEDIA_API_URL;

// 장소 사진 가져오는 함수
// 장소 사진을 가져오기 위해서는 장소 세부정보 요청을 해서 photo_reference 값을 가져와야 함
async function getPlacePhotos(placeId: string): Promise<string[]> {
  try {
    const url = `${MAP_URL}/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,formatted_address,photo,geometry&key=${GOOGLE_MAP_API_KEY}`;
    const response = await axios.get(url);
    const details: PlaceInfoWithPhotos = response.data.result;

    // 장소 사진 요청
    const photos: string[] = details?.photos
      ? details.photos.map(
          (photo) =>
            `${MAP_URL}/maps/api/place/photo?maxwidth=400&photoreference=${photo.photo_reference}&key=${GOOGLE_MAP_API_KEY}`
        )
      : [];
    return photos;
  } catch (error) {
    console.error('getPlacePhotos() 함수 에러: ', error);
    return [];
  }
}

// 장소 설명 가져오는 함수 (by 위키피디아)
async function getPlaceDescription(placeName: string): Promise<string> {
  try {
    const url = `${WIKIPEDIA_URL}/api/rest_v1/page/summary/${encodeURIComponent(placeName)}`;
    const response = await axios.get(url);
    return response.data.extract; // 장소에 대한 요약 설명 반환
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response && error.response.status === 404) {
        console.error('장소에 대한 위키피디아 문서 없음: ', error);
        return '설명 없음';
      }
      console.error('getPlaceDescription() 함수 에러: ', error);
      return '설명 없음';
    } else {
      console.error('예상하지 못한 에러 발생:', error);
      return '설명 없음';
    }
  }
}

// 지역 사진 및 설명 가져오는 함수 (by 위키피디아)
export async function getLocationDetails(neighborhood: string, district: string, city: string) {
  const url = `${WIKIPEDIA_URL}/w/api.php`;

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

// 특정 지역(또는 대한민국 전체)에 대한 장소 목록 가져오는 함수
export async function getPlaces(location: string): Promise<SummaryOfPlaceInfo[]> {
  const query = `${location} 인기 명소`;
  const url = `${MAP_URL}/maps/api/place/textsearch/json?query=${encodeURIComponent(
    query
  )}&radius=50000&region=kr&key=${GOOGLE_MAP_API_KEY}`;

  try {
    const response = await fetch(url);
    const data: PlaceResponse = await response.json();
    const places: Place[] = data.results;

    // 장소의 사진 및 설명 가져오기
    const placesWithDetails = await Promise.all(
      places.map(async (place) => {
        const photos: string[] = place.place_id ? await getPlacePhotos(place.place_id) : [];
        const description: string = place.name ? await getPlaceDescription(place.name) : '설명 없음';

        return {
          name: place.name ?? '',
          formatted_address: place.formatted_address ?? '',
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
// 무한 스크롤 구현
export async function getPlacesMore(
  location: string,
  nextPageToken: string | null = null
): Promise<{ placesWithDetails: SummaryOfPlaceInfo[]; nextPageToken: string | null }> {
  const query = `${location} 인기 명소`;
  const baseUrl = `${MAP_URL}/maps/api/place/textsearch/json?query=${encodeURIComponent(
    query
  )}&radius=50000&region=kr&key=${GOOGLE_MAP_API_KEY}`;

  try {
    // nextPageToken이 있으면 그 다음 데이터가 있다는 의미이므로
    // pagetoken을 파라미터로 추가해서 응답에서 받은 next_page_token 값을 넣어줌
    const url = nextPageToken ? `${baseUrl}&pagetoken=${nextPageToken}` : baseUrl;

    const response = await fetch(url);
    const data: PlaceResponse = await response.json();
    const places: Place[] = data.results;
    const token = data.next_page_token!;

    // 장소의 사진 및 설명 가져오기
    const placesWithDetails = await Promise.all(
      places.map(async (place) => {
        const photos: string[] = place.place_id ? await getPlacePhotos(place.place_id) : [];
        const description: string = place.name ? await getPlaceDescription(place.name) : '설명 없음';

        return {
          name: place.name ?? '',
          formatted_address: place.formatted_address ?? '',
          photos,
          description,
        };
      })
    );
    return { placesWithDetails, nextPageToken: token };
  } catch (error) {
    console.error('getPlaces() 함수 에러:', error);
    return { placesWithDetails: [], nextPageToken: null };
  }
}

// 수정 버전
// export async function getPlaces(location: string, callback: (place: SummaryOfPlaceInfo) => void, signal?: AbortSignal) {
//   const query = `${location} 인기 명소`;
//   const url = `/maps/api/place/textsearch/json?query=${encodeURIComponent(
//     query
//   )}&radius=50000&region=kr&key=${GOOGLE_MAP_API_KEY}`;

//   try {
//     const response = await fetch(url);
//     const data: PlaceResponse = await response.json();
//     const places: Place[] = data.results;

//     // 데이터를 순차적으로 처리하며 콜백 호출
//     for (const place of places) {
//       if (signal?.aborted) break; // 요청이 중단되면 중단 처리
//       const photos: string[] = place.place_id ? await getPlacePhotos(place.place_id) : [];
//       const description: string = place.name ? await getPlaceDescription(place.name) : '설명 없음';

//       const placeInfo: SummaryOfPlaceInfo = {
//         name: place.name ?? '',
//         formatted_address: place.formatted_address ?? '',
//         photos,
//         description,
//       };

//       callback(placeInfo); // 개별 데이터를 렌더링하는 콜백 호출
//     }
//   } catch (error) {
//     console.error('getPlaces() 함수 에러:', error);
//   }
// }

// 특정 장소 타입에 맞는 장소들만 가져오는 함수
export async function getPlacesBasedOnTheme(
  korName: string,
  engName: string,
  lat: number,
  lng: number,
  nextPageToken: string | null = null
): Promise<{ placesWithDetails: SummaryOfPlaceInfo[]; nextPageToken: string | null }> {
  const baseUrl = `${MAP_URL}/maps/api/place/textsearch/json?query=${encodeURIComponent(
    korName
  )}&location=${lat},${lng}&radius=5000&type=${engName}&region=kr&key=${GOOGLE_MAP_API_KEY}`;

  try {
    // nextPageToken이 있으면 그 다음 데이터가 있다는 의미이므로
    // pagetoken을 파라미터로 추가해서 응답에서 받은 next_page_token 값을 넣어줌
    const url = nextPageToken ? `${baseUrl}&pagetoken=${nextPageToken}` : baseUrl;

    const response = await fetch(url);
    const data: PlaceResponse = await response.json();
    const places: Place[] = data.results;
    const token = data.next_page_token!;

    // 장소의 사진 및 설명 가져오기
    const placesWithDetails = await Promise.all(
      places.map(async (place) => {
        const photos: string[] = place.place_id ? await getPlacePhotos(place.place_id) : [];
        const description: string = place.name ? await getPlaceDescription(place.name) : '설명 없음';

        return {
          name: place.name ?? '',
          formatted_address: place.formatted_address ?? '',
          photos,
          description,
        };
      })
    );
    return { placesWithDetails, nextPageToken: token };
  } catch (error) {
    console.error('getPlacesBasedOnTheme() 함수 에러: ', error);
    return { placesWithDetails: [], nextPageToken: null };
  }
}

// 설문조사 후 추천 여행지 가져오는 함수
export async function getRecommendPlaces(
  lat: number,
  lng: number,
  theme: string | string[]
): Promise<SummaryOfPlaceInfo[]> {
  let url: string = '';
  let places: Place[] = [];

  try {
    if (typeof theme === 'string') {
      url = `${MAP_URL}/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=10000&type=${theme}&region=kr&key=${GOOGLE_MAP_API_KEY}`;
      const response = await fetch(url);
      const data: PlaceResponse = await response.json();
      places = data.results;
    } else {
      // 배열로 들어온 theme마다 요청을 보내고 그 결과를 처리
      const requests = theme.map((t) => {
        return fetch(
          `${MAP_URL}/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=10000&type=${t}&region=kr&key=${GOOGLE_MAP_API_KEY}`
        )
          .then((res) => res.json())
          .then((data) => data.results); // results만 추출해서 반환
      });

      // Promise.all을 사용하여 모든 요청의 결과를 기다리고 처리
      const responses = await Promise.all(requests);

      // 각 테마에 대해 받은 장소들을 합침
      places = responses.flat(); // 여러 배열을 하나로 합침
    }
    // 장소의 사진 및 설명 가져오기
    const placesWithDetails = await Promise.all(
      places
        .filter((place, index, self) => self.findIndex((value) => value.place_id === place.place_id) === index)
        .map(async (place) => {
          const photos: string[] = place.place_id ? await getPlacePhotos(place.place_id) : [];
          const description: string = place.name ? await getPlaceDescription(place.name) : '설명 없음';

          return {
            name: place.name ?? '',
            formatted_address: place.formatted_address ?? '',
            photos,
            description,
          };
        })
    );
    return placesWithDetails;
  } catch (error) {
    console.error('getRecommendPlaces() 함수 에러: ', error);
    return [];
  }
}
