import axios from 'axios';

const GOGGLE_MAP_API_KEY = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

export async function getPopularPlaces() {
  const lat = 37.5665; // 서울 위도
  const lng = 126.978; // 서울 경도
  const radius = 50000; // 반경 50km

  const nearbySearchUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&rankby=prominence&type=tourist_attraction&key=${GOGGLE_MAP_API_KEY}`;

  // Text Search
  const textSearchQuery = '대한민국 인기 명소';
  const textSearchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(
    textSearchQuery
  )}&key=${GOGGLE_MAP_API_KEY}`;

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
  const placeTheme = 'park';

  const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?type=${placeTheme}&region=kr&key=${GOGGLE_MAP_API_KEY}`;

  try {
    const response = await axios.get(url);
    const places = response.data.results;
    return places;
  } catch (error) {
    console.error('Error fetching places: ', error);
  }
}

// async function findPlaces() {
//   const { Place } = await google.maps.importLibrary("places") as google.maps.PlacesLibrary;

//   const request = {
//       fields: ['displayName', 'location', 'businessStatus'],
//       includedType: 'park', // 필요한 장소 유형으로 수정
//       language: 'ko',
//       maxResultCount: 7,
//       minRating: 3.2,
//       region: 'kr',
//       useStrictTypeFiltering: false,
//   };

//   const { places } = await Place.searchByText(request);

//   if (places.length) {
//       console.log("Found places:", places);
//   } else {
//       console.log('No results found');
//   }
// }
