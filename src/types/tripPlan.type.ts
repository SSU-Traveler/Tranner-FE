export type userPlaceType = {
  daySequence: number;
  locationSequence: number;
  placeName: string; //name 장소 이름
  addr: string; //formattedAddress  주소
};

export type placeDetailType = {
  placeName: string; //name 장소 이름
  addr: string; //formattedAddress  주소
  openingHours: string; //regularOpeningHours 영업시간
  placeDetail: string; //editorialSummary 장소 세부정보
  phoneNumber: string; //nationalPhoneNumber  전화번호
  googleMapsUri: string; //googleMapsUri  구글맵 url
};

// export type userPlaceType = {
//   daySequence: number;
//   locations: {
//     locationSequence: number;
//     placeName: string; // 장소 이름
//     addr: string; // 주소
//   }[];
// };
