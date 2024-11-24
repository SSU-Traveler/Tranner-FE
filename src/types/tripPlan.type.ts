export type userPlaceType = {
  daySequence: number;
  locationSequence: number;
  placeId: string;
  placeName: string; //name 장소 이름
  addr: string; //formattedAddress  주소
  photoUrl: string;
  location: {
    latitude: number;
    longitude: number;
  };
};

export type filteredUserPlaceType = {
  daySequence: number;
  locationSequence: number;
  placeId: string;
};

export type placeObjType = {
  isInPlanList: boolean;
  isBookmarked: boolean;
  placeId: string;
  placeName: string; //name 장소 이름
  addr: string; //formattedAddress  주소
  photoUrl: string;
  location: {
    latitude: number;
    longitude: number;
  };
};

export type placeDetailType = placeObjType & {
  rating: number;
  type: string;
  openingHours: string[] | null; //regularOpeningHours 영업시간
  phoneNumber: string; //nationalPhoneNumber  전화번호
  googleMapsUrl: string; //googleMapsUri  구글맵 url
};

export type tripDate = {
  tripStartDate: string; // YYYY-MM-DD 형식으로 가정
  tripEndDate: string; // YYYY-MM-DD 형식으로 가정
};
