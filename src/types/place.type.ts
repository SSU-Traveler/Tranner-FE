export type Photos = {
  height: number;
  html_attributions: string[];
  photo_reference: string;
  width: number;
};

export type PlaceInfo = {
  formatted_address?: string; // 주소, text search로 했을 때만 존재
  geometry?: {
    location: {
      lat: number;
      lng: number;
    };
    viewport: {
      northeast: {
        lat: number;
        lng: number;
      };
      southwest: {
        lat: number;
        lng: number;
      };
    };
  };
  name?: string; // 반환된 결과의 사람이 읽을 수 있는 이름
  rating?: number; // 집계된 사용자 리뷰를 기준으로 1.0에서 5.0까지 숙소의 평점
};

export type PlaceInfoWithPhotos = PlaceInfo & { photos: Photos[] };
export type NewPlaceInfoWithPhotos = PlaceInfo & { photos: string[] };
export type SummaryOfPlaceInfo = NewPlaceInfoWithPhotos & { description: string };

type AddressComponent = {
  long_name: string;
  short_name: string;
  types: string[];
};
type BusinessStatus = 'OPERATIONAL' | 'CLOSED_TEMPORARILY' | 'CLOSED_PERMANENTLY';
type OpeningHours = {
  open_now?: boolean;
  periods?: [];
  special_days?: [];
  type?: string;
  weekday_text?: string[];
};
type EditorialSummary = {
  language?: string;
  overview?: string;
};
type Review = {
  author_name: string;
  rating: number;
  relative_time_description: string;
  time: number;
  author_url?: string;
  language?: string;
  original_language?: string;
  profile_photo_url?: string;
  text?: string;
  translated?: boolean;
};

export type Place = PlaceInfo & {
  address_components?: AddressComponent[]; // 이 주소에 적용할 수 있는 개별 컴포넌트가 포함된 배열
  adr_address?: string; // 장소의 주소를 ADR 마이크로포맷으로 표현한 것
  business_status?: BusinessStatus; // (비즈니스인 경우) 해당 장소의 운영 상태
  curbside_pickup?: boolean; // 비즈니스에서 도로변 픽업을 지원하는지 여부
  current_opening_hours?: OpeningHours; // 오늘을 포함하여 향후 7일 동안의 운영 시간
  delivery?: boolean; // 비즈니스에서 배송을 지원하는지 여부
  dine_in?: boolean; // 비즈니스가 실내 또는 실외 좌석 옵션을 지원하는지 여부
  editorial_summary?: EditorialSummary; // 장소에 대한 요약
  formatted_phone_number?: string; // 장소의 전화번호를 현지 형식으로 포함

  icon?: string; // 지도에서 이 결과를 표시할 때 사용자에게 표시할 수 있는 추천 아이콘의 URL
  icon_background_color?: string; // 장소 카테고리의 기본 HEX 색상 코드
  icon_mask_base_uri?: string; // 추천 아이콘의 URL에서 .svg 또는 .png 파일 형식 확장자를 뺀 값
  international_phone_number?: string; // 장소의 전화번호를 국제 형식으로 포함

  opening_hours?: OpeningHours; // text search로 했을 때만 존재
  photos?: Photos[]; // 이미지에 대한 참조가 각각 포함된 사진 객체 배열
  place_id?: string; // 장소를 고유하게 식별하는 텍스트 식별자
  plus_code?: {
    compound_code?: string;
    global_code: string;
  }; // 위도 및 경도 좌표에서 파생된 인코딩된 위치 참조(면적)
  price_level?: number; // 0에서 4까지의 척도로 표시
  reference?: string;
  reservable?: boolean; // 숙소가 예약을 지원하는지 여부
  reviews?: Review[]; // 최대 5개의 리뷰로 구성된 JSON 배열
  scope?: string; // nearby search로 했을 때만 존재
  secondary_opening_hours?: OpeningHours[]; // 비즈니스의 보조 영업시간에 대한 정보를 포함하여 향후 7일 동안의 다양한 항목이 포함
  serves_beer?: boolean; // 맥주를 제공하는 장소인지 지정
  serves_breakfast?: boolean; // 숙소가 조식을 제공하는지 여부
  serves_dinner?: boolean; // 저녁 식사 제공 여부
  serves_lunch?: boolean; // 점심 식사 제공 여부
  serves_vegetarian_food?: boolean; // 채식 음식 제공 여부
  serves_wine?: boolean; // 와인 제공 여부
  takeout?: boolean; // 테이크아웃 지원 여부
  types?: string[]; // 주어진 결과를 설명하는 기능 유형 배열
  url?: string; // 이 장소의 공식 Google 페이지 URL
  user_ratings_total?: number; // 이 장소에 대한 텍스트 포함 또는 미포함 총 리뷰 수
  utc_offset?: number; // 이 장소의 현재 시간대가 UTC에서 오프셋된 시간(분)
  vicinity?: string; // nearby search로 했을 때만 존재
  website?: string; // 비즈니스 홈페이지와 같이 해당 장소에 대한 신뢰할 수 있는 웹사이트
  wheelchair_accessible_entrance?: boolean; // 휠체어로 접근할 수 있는 입구가 있는지 여부
};

export type PlaceResponse = {
  html_attributions: string[];
  next_page_token?: string;
  results: Place[];
  status: string;
  error_message?: string;
  info_message?: string[];
};
