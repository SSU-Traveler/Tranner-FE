import axios from 'axios';
import { LOCATION_OPTIONS } from '../constants/options';

const GOOGLE_MAP_API_KEY = import.meta.env.VITE_GOOGLE_PLACE_API;

export async function getPopularPlaces() {
  const lat = 37.5665; // 서울 위도
  const lng = 126.978; // 서울 경도
  const radius = 50000; // 반경 50km

  const nearbySearchUrl = `/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&rankby=prominence&type=tourist_attraction&key=${GOOGLE_MAP_API_KEY}`;

  // Text Search
  const textSearchQuery = '대한민국 인기 명소';
  const textSearchUrl = `/maps/api/place/textsearch/json?query=${encodeURIComponent(
    textSearchQuery
  )}&key=${GOOGLE_MAP_API_KEY}`;

  try {
    const nearbyResponse = await fetch(nearbySearchUrl);
    const nearbyData = await nearbyResponse.json();
    console.log('Nearby Popular Places:', nearbyData.results);

    const textResponse = await fetch(textSearchUrl);
    const textData = await textResponse.json();
    console.log('Text Search Popular Places:', textData.results);
  } catch (error) {
    console.error('Error fetching places:', error);
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
  const placesWithDetails = await Promise.all(allPlaces.map((place) => getPlaceDetails(place.place_id)));

  console.log('Healing Places: ', placesWithDetails);
  return placesWithDetails;
}

// 장소 상세 정보, 장소 사진 가져오는 함수
async function getPlaceDetails(placeId) {
  try {
    const url = `/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,formatted_address,photo,geometry&key=${GOOGLE_MAP_API_KEY}`;
    const response = await axios.get(url);
    const details = response.data.result;

    // 사진 URL 생성
    const photos = details.photos
      ? details.photos.map(
          (photo) =>
            `/maps/api/place/photo?maxwidth=400&photoreference=${photo.photo_reference}&key=${GOOGLE_MAP_API_KEY}`
        )
      : [];

    return { ...details, photos };
  } catch (error) {
    console.error('Error fetching place details: ', error);
    return null;
  }
}
