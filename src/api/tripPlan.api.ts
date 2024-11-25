import axios from 'axios';
import { basketType } from '../types/basket.type';
import { tripDate, userPlaceType } from '../types/tripPlan.type';
import { apiPost } from '../zustand/tokenStore';

const GOOGLE_MAP_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

export const getLocation = async (spot: string) => {
  try {
    const response = await axios.post(
      `https://places.googleapis.com/v1/places:searchText?key=${GOOGLE_MAP_API_KEY}&fields=places.location`,
      {
        textQuery: spot,
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );
    const location = response.data.places[0].location;
    return location;
  } catch (error) {
    console.error('Error fetching places:', error);
  }
};

export const fetchPlacesText = async (
  searchKey: string,
  currSelectedSpot: basketType,
  pageSize: number,
  nextPageToken: string
): Promise<{ placesDetail: any[]; nextPageToken: string } | null> => {
  try {
    const response = await axios.post(
      `https://places.googleapis.com/v1/places:searchText?key=${GOOGLE_MAP_API_KEY}&fields=nextPageToken,places.id`,
      {
        textQuery: searchKey,
        pageSize: pageSize,
        pageToken: nextPageToken, // 페이지 토큰 전달
        locationBias: {
          circle: {
            center: currSelectedSpot.location,
            radius: 10000.0,
          },
        },
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );
    const places = response.data.places;
    const placesDetail = await Promise.all(places.map((result: any) => getPlacesInfo(result.id)));

    const filteredArray = placesDetail.filter((item) => item !== null);

    return { placesDetail: filteredArray, nextPageToken: response.data.nextPageToken };
  } catch (error) {
    console.error('Error fetching places:', error);
    return null;
  }
};

export const fetchPlacesNearby = async (
  currSelectedSpot: basketType,
  nextPageToken: string
): Promise<{ placesDetail: any[]; nextPageToken: string } | null> => {
  const radius = 10000;
  const nearbySearchUrl = `/maps/api/place/nearbysearch/json?key=${GOOGLE_MAP_API_KEY}&location=${
    currSelectedSpot.location.latitude
  },${currSelectedSpot.location.longitude}&radius=${radius}&rankby=prominence&${
    nextPageToken ? `&pagetoken=${nextPageToken}` : ''
  }`;

  try {
    const response = await axios.get(nearbySearchUrl);

    const places = response.data.results;
    const placesDetail = await Promise.all(places.map((result: any) => getPlacesInfo(result.place_id)));

    const filteredArray = placesDetail.filter((item) => item !== null);
    return { placesDetail: filteredArray, nextPageToken: response.data.next_page_token };
  } catch (error) {
    console.error('Error fetching places:', error);
    return null;
  }
};

export const getPlacesDetail = async (place_id: string) => {
  try {
    const url = `/maps/api/place/details/json?place_id=${place_id}&fields=rating,types,opening_hours,formatted_phone_number,url&key=${GOOGLE_MAP_API_KEY}`;
    const response = await axios.get(url);
    const details = response.data.result;
    return { ...details };
  } catch (error) {
    console.error('Error fetching place details: ', error);
    return null;
  }
};

export const getPlacesInfo = async (place_id: string) => {
  try {
    const url = `/maps/api/place/details/json?place_id=${place_id}&fields=name,formatted_address,photo,geometry&key=${GOOGLE_MAP_API_KEY}`;
    const response = await axios.get(url);
    const details = response.data.result;

    // 사진 URL 생성
    const photoUrl = details.photos
      ? `/maps/api/place/photo?maxwidth=400&photoreference=${details.photos[0].photo_reference}&key=${GOOGLE_MAP_API_KEY}`
      : '';

    return { ...details, placeId: place_id, photoUrl: photoUrl };
  } catch (error) {
    console.error('Error fetching place details: ', error);
    return null;
  }
};

export const getPhotoUrl = async (place_id: string) => {
  try {
    const url = `/maps/api/place/details/json?place_id=${place_id}&fields=photo&key=${GOOGLE_MAP_API_KEY}`;
    const response = await axios.get(url);
    const details = response.data.result;

    // 사진 URL 생성
    const photoUrl = details.photos
      ? `/maps/api/place/photo?maxwidth=400&photoreference=${details.photos[0].photo_reference}&key=${GOOGLE_MAP_API_KEY}`
      : '';

    return { photoUrl };
  } catch (error) {
    console.error('Error fetching place details: ', error);
    return null;
  }
};

export const getBmkInfoById = async (place_id: string) => {
  try {
    const url = `/maps/api/place/details/json?place_id=${place_id}&fields=name,formatted_address&key=${GOOGLE_MAP_API_KEY}`;
    const response = await axios.get(url);
    const details = response.data.result;

    return { name: details.name, addr: details.formatted_address, placeId: place_id };
  } catch (error) {
    console.error('Error fetching place details: ', error);
    return null;
  }
};

export const makePlanApi = async (
  planName: string,
  numberOfPeople: number,
  tripDate: tripDate,
  elementObj: userPlaceType[],
  navigate: any
) => {
  try {
    const filteredElementObj = elementObj.map(({ daySequence, locationSequence, placeId }) => ({
      daySequence: daySequence,
      locationSequence: locationSequence,
      locationName: placeId,
    }));
    const url = '/api/schedule/add';
    const data = {
      name: planName,
      howManyPeople: numberOfPeople,
      startDate: tripDate.tripStartDate,
      endDate: tripDate.tripEndDate,
      detailSchedules: filteredElementObj,
    };
    const response = await apiPost(url, data, navigate);
    console.log(response);
    return response;
  } catch (error) {
    console.error('schedule add error(server): ', error);
    return null;
  }
};
