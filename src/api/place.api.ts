import axios from 'axios';
import { LOCATION_OPTIONS } from '../constants/options';
import { Place } from '../types/place.type';

const GOOGLE_MAP_API_KEY = import.meta.env.VITE_GOOGLE_PLACE_API;

// 장소 사진 가져오는 함수
async function getPlacePhotos(placeId: string) {
  try {
    const url = `/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,formatted_address,photo,geometry&key=${GOOGLE_MAP_API_KEY}`;
    const response = await axios.get(url);
    const details = response.data.result;

    console.log('details: ', details);

    // 사진 URL 생성
    const photos = details.photos
      ? details.photos.map(
          (photo) =>
            `/maps/api/place/photo?maxwidth=400&photoreference=${photo.photo_reference}&key=${GOOGLE_MAP_API_KEY}`
        )
      : [];

    return { ...details, photos };
  } catch (error) {
    console.error('장소 사진 가져오는 함수 에러: ', error);
    return null;
  }
}

// 장소 설명 가져오는 함수 (by 위키피디아)
async function getPlaceDescription(placeName: string) {
  const url = `/wikipedia-api/api/rest_v1/page/summary/${encodeURIComponent(placeName)}`;

  try {
    const response = await axios.get(url);
    return response.data.extract; // 장소에 대한 요약 설명 반환
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.error(`${placeName}에 대한 위키피디아 설명 없음`);
      return '설명 없음';
    }
    console.error('장소 설명 가져오는 함수 에러: ', error);
    return null;
  }
}

// 특정 지역에 대한 장소 목록 가져오는 함수
export async function getPlaces(location: string) {
  const textSearchQuery = `${location} 인기 명소`;
  const textSearchUrl = `/maps/api/place/textsearch/json?query=${encodeURIComponent(
    textSearchQuery
  )}&key=${GOOGLE_MAP_API_KEY}`;

  try {
    const textResponse = await fetch(textSearchUrl);
    const textData = await textResponse.json();
    const places: Place[] = textData.results;
    console.log(`${location} 인기 명소: `, places);

    // const placesWithDetails = await Promise.all(
    //   places
    //     .filter((place) => place.formatted_address.includes('서울 강남구'))
    //     .map((place) => getPlaceDetails(place.place_id))
    // );
    // 장소의 사진 및 설명 가져오기
    const placesWithDetails = await Promise.all(
      places.map(async (place) => {
        const photos = await getPlacePhotos(place.place_id);
        const description = await getPlaceDescription(place.name);
        return {
          ...photos, // 사진 및 기본 정보
          description, // 장소 설명
        };
      })
    );

    return placesWithDetails;
  } catch (error) {
    console.error('Error fetching places:', error);
    return [];
  }
}

export async function getPopularPlaces() {
  const textSearchQuery = '부산 인기 명소';
  const textSearchUrl = `/maps/api/place/textsearch/json?query=${encodeURIComponent(
    textSearchQuery
  )}&key=${GOOGLE_MAP_API_KEY}`;

  try {
    const textResponse = await fetch(textSearchUrl);
    const textData = await textResponse.json();
    const places: Place[] = textData.results;
    console.log(`슬라이더 인기 명소: `, places);

    // 장소의 사진 및 설명 가져오기
    const placesWithDetails = await Promise.all(
      places.map(async (place) => {
        const photos = await getPlacePhotos(place.place_id);
        const description = await getPlaceDescription(place.name);
        return {
          ...photos, // 사진 및 기본 정보
          description, // 장소 설명
        };
      })
    );

    return placesWithDetails;
  } catch (error) {
    console.error('Error fetching places:', error);
    return [];
  }
}

export async function getHealingPlaces() {
  // 매개변수 받기
  // 위도, 경도 배열로 만들기
  // 데이터 전체 불러오기
  // 무한 스크롤
  const placeTheme = 'park';
  const radius = 50000;

  let allPlaces = [];

  // for (const location of LOCATION_OPTIONS) {
  let nextPageToken = null;

  do {
    try {
      const url = `/maps/api/place/nearbysearch/json?location=${LOCATION_OPTIONS[0].lat},${LOCATION_OPTIONS[0].lng}&radius=${radius}&type=${placeTheme}&region=kr&key=${GOOGLE_MAP_API_KEY}`;

      const response = await axios.get(nextPageToken ? `${url}&pagetoken=${nextPageToken}` : url);

      console.log(response.data);

      const places = response.data.results;
      allPlaces = allPlaces.concat(places);

      nextPageToken = response.data.next_page_token;

      if (nextPageToken) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
    } catch (error) {
      console.error('Error fetching places: ', error);
      break;
    }
  } while (nextPageToken);
  // }
  console.log('All Places: ', allPlaces);
  const placesWithDetails = await Promise.all(allPlaces.map((place) => getPlacePhotos(place.place_id)));

  console.log('Healing Places: ', placesWithDetails);
  return placesWithDetails;
}
