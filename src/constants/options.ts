// 2차 필터(기초자치단체)
export const SEOUL_COUNTRY_OPTIONS: string[] = [
  '강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구',
];

export const GYEONGGI_COUNTRY_OPTIONS: string[] = [
  '가평군', '고양시', '구리시', '군포시', '김포시', '남양주시', '동두천시', '부천시', '성남시', '수원시', '시흥시', '안산시', '안성시', '양주시', '양평군', '여주군', '연천군', '오산시', '용인시', '의왕시', '의정부시', '이천시', '파주시', '평택시', '하남시', '화성시',
];

export const INCHEON_COUNTRY_OPTIONS: string[] = [
  '강화군', '계양구', '남동구', '미추홀구', '부평구', '서구', '연수구', '옹진군', '중구',
];

export const GANGWON_COUNTRY_OPTIONS: string[] = [
  '강릉시', '고성군', '동해시', '삼척시', '속초시', '양구군', '양양군', '원주시', '춘천시', '태백시', '평창군', '홍천군', '횡성군',
];

export const DAEGU_COUNTRY_OPTIONS: string[] = [
  '남구', '달서구', '동구', '북구', '서구', '수성구', '중구',
];

export const DAEJEON_COUNTRY_OPTIONS: string[] = [
  '대덕구', '동구', '서구', '유성구', '중구',
];

export const CHUNGBUK_COUNTRY_OPTIONS: string[] = [
  '괴산군', '단양군', '보은군', '영동군', '옥천군', '증평군', '진천군', '청주시', '충주시',
];

export const CHUNGNAM_COUNTRY_OPTIONS: string[] = [
  '공주시', '보령시', '서산시', '아산시', '천안시', '홍성군', '계룡시', '당진시', '예산군', '서천군', '태안군',
];

export const JEONBUK_COUNTRY_OPTIONS: string[] = [
  '군산시', '김제시', '남원시', '무주군', '부안군', '순창군', '익산시', '전주시', '정읍시',
];

export const JEONNAM_COUNTRY_OPTIONS: string[] = [
  '광양시', '목포시', '순천시', '여수시', '고흥군', '남해군', '담양군', '보성군', '신안군', '영광군', '완도군', '장성군', '장흥군', '진도군', '해남군', '화순군',
];

export const BUSAN_COUNTRY_OPTIONS: string[] = [
  '강서구', '금정구', '기장군', '남구', '동구', '부산진구', '북구', '사하구', '서구', '수영구', '연제구', '영도구', '중구', '해운대구',
];

export const GYEONGBUK_COUNTRY_OPTIONS: string[] = [
  '경산시', '구미시', '김천시', '문경시', '상주군', '안동시', '영덕군', '영양군', '예천군', '울진군', '포항시',
];

export const GYEONGNAM_COUNTRY_OPTIONS: string[] = [
  '거제시', '김해시', '마산합포구', '마산회원구', '밀양시', '사천시', '양산시', '진주시', '창녕군', '통영시', '하동군', '함안군', '함양군', '합천군',
];

export const JEJU_COUNTRY_OPTIONS: string[] = [
  '서귀포시', '제주시',
];

export type cityOptionsType = { [key: string]: string[] };

// 키값: 1차 필터, 밸류값: 2차 필터(배열)
export const CITY_OPTIONS: cityOptionsType = {
  '서울': SEOUL_COUNTRY_OPTIONS,
  '경기': GYEONGGI_COUNTRY_OPTIONS,
  '인천': INCHEON_COUNTRY_OPTIONS,
  '강원': GANGWON_COUNTRY_OPTIONS,
  '대구': DAEGU_COUNTRY_OPTIONS,
  '대전': DAEJEON_COUNTRY_OPTIONS,
  '충북': CHUNGBUK_COUNTRY_OPTIONS,
  '충남': CHUNGNAM_COUNTRY_OPTIONS,
  '전북': JEONBUK_COUNTRY_OPTIONS,
  '전남': JEONNAM_COUNTRY_OPTIONS,
  '부산': BUSAN_COUNTRY_OPTIONS,
  '경북': GYEONGBUK_COUNTRY_OPTIONS,
  '경남': GYEONGNAM_COUNTRY_OPTIONS,
  '제주': JEJU_COUNTRY_OPTIONS
}

export type locationOptionsType = { name: string; lat: number; lng: number; };

export const LOCATION_OPTIONS: locationOptionsType[] = [
  { "name": '서울', "lat": 37.5665, "lng": 126.9780 },
  { "name": '경기', "lat": 37.4138, "lng": 127.5183 },
  { "name": '인천', "lat": 37.4563, "lng": 126.7052 },
  { "name": '강원', "lat": 37.8228, "lng": 128.1555 },
  { "name": '대전', "lat": 36.3504, "lng": 127.3845 },
  { "name": '대구', "lat": 35.8714, "lng": 128.6014 },
  { "name": '충북', "lat": 36.6357, "lng": 127.4913 },
  { "name": '충남', "lat": 36.5184, "lng": 126.8000 },
  { "name": '전북', "lat": 35.7175, "lng": 127.1530 },
  { "name": '전남', "lat": 34.8679, "lng": 126.9910 },
  { "name": '부산', "lat": 35.1796, "lng": 129.0756 },
  { "name": '경북', "lat": 36.5760, "lng": 128.5056 },
  { "name": '경남', "lat": 35.2598, "lng": 128.6647 },
  { "name": '제주', "lat": 33.4996, "lng": 126.5312 },
];


// 테마 옵션(맞춤 여행지 페이지) -> 키값: 1차 필터, 밸류값: 2차 필터(배열)
export type themeOptionsType = { [key: string]: secondaryThemeType[] };

export const PRIMARY_THEME_OPTIONS: string[] = [
  '힐링, 휴식', '역사 공부, 문화 탐방', '자연/경치 관람', '액티비티, 모험', '미식 여행, 맛집 탐방', '사진 촬영, 인생샷 명소', '쇼핑, 도심 탐방', '호캉스',
];

export type secondaryThemeType = { korName: string; engName: string; };

export const HEALING_AND_REST: secondaryThemeType[] = [
  { "korName": '스파', "engName": 'spa' },
  { "korName": '공원', "engName": 'park' },
  { "korName": '사원', "engName": 'mosque' },
];

export const HISTORY_STUDY_AND_NATURAL_TOUR: secondaryThemeType[] = [
  { "korName": '아쿠아리움', "engName": 'aquarium' },
  { "korName": '미술관', "engName": 'art_gallery' },
  { "korName": '사원', "engName": 'mosque' },
  { "korName": '박물관', "engName": 'museum' },
  { "korName": '영화관', "engName": 'movie_theater' },
  { "korName": '공연 예술 극장', "engName": 'performing_arts_theater' },
];

export const NATURAL_VIEWING: secondaryThemeType[] = [
  { "korName": '자연 환경', "engName": 'natural_feature' },
  { "korName": '공원', "engName": 'park' },
];

export const ACTIVITY_AND_ADVENTURE: secondaryThemeType[] = [
  { "korName": '캠핑장', "engName": 'campground' },
  { "korName": '놀이공원', "engName": 'amusement_park' },
];

export const RESTAURANT_TOUR: secondaryThemeType[] = [
  { "korName": '레스토랑', "engName": 'restaurant' },
  { "korName": '카페', "engName": 'cafe' },
  { "korName": '바', "engName": 'bar' },
];

export const PHOTO_SHOOT: secondaryThemeType[] = [
  { "korName": '동물원', "engName": 'zoo' },
  { "korName": '아쿠아리움', "engName": 'aquarium' },
  { "korName": '공원', "engName": 'park' },
];

export const SHOPPING_AND_CITY_TOUR: secondaryThemeType[] = [
  { "korName": '쇼핑몰', "engName": 'shopping_mall' },
  { "korName": '백화점', "engName": 'department_store' },
  { "korName": '옷 가게', "engName": 'clothing_store' },
  { "korName": '주얼리 가게', "engName": 'jewelry_store' },
  { "korName": '신발 가게', "engName": 'shoe_store' },
  { "korName": '상점', "engName": 'store' },
];

export const STAYCATION: secondaryThemeType[] = [
  { "korName": '호텔', "engName": 'hotel' },
  { "korName": '리조트', "engName": 'resort_hotel' },
];

// 지역 옵션(맞춤 여행지 페이지)
export const COUNTRY_OPTIONS: string[] = [
  '서울', '경기, 인천', '강원도', '대전', '대구', '충청도', '전라도', '부산', '경상도', '제주도',
];
