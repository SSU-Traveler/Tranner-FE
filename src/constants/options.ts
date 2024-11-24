// 2차 필터(기초자치단체)
export const SEOUL_COUNTRY_OPTIONS: string[] = [
  '강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'
];
export const GYEONGGI_COUNTRY_OPTIONS: string[] = [
  '고양시', '과천시', '광명시', '광주시', '구리시', '군포시', '김포시', '남양주시', '동두천시', '부천시', '성남시', '수원시', '시흥시', '안산시', '안성시', '안양시', '양주시', '여주시', '오산시', '용인시', '의왕시', '의정부시', '이천시', '파주시', '평택시', '포천시', '하남시', '화성시'
];
export const INCHEON_COUNTRY_OPTIONS: string[] = [
  '강화군', '계양구', '남동구', '동구', '미추홀구', '부평구', '서구', '연수구', '옹진군', '중구'
];
export const GANGWON_COUNTRY_OPTIONS: string[] = [
  '강릉시', '고성군', '동해시', '삼척시', '속초시', '양구군', '양양군', '영월군', '원주시', '인제군', '정선군', '철원군', '춘천시', '태백시', '평창군', '홍천군', '화천군', '횡성군'
];
export const DAEJEON_COUNTRY_OPTIONS: string[] = [
  '대덕구', '동구', '서구', '유성구', '중구'
];
export const DAEGU_COUNTRY_OPTIONS: string[] = [
  '군위군', '남구', '달서구', '달성군', '동구', '북구', '서구', '수성구', '중구'
];
// 세종
export const SEJONG_COUNTRY_OPTIONS: string [] = ["세종특별자치시"];
export const CHUNGBUK_COUNTRY_OPTIONS: string[] = [
  '괴산군', '단양군', '보은군', '영동군', '옥천군', '음성군', '제천시', '증평군', '진천군', '청주시', '충주시',
];
export const CHUNGNAM_COUNTRY_OPTIONS: string[] = [
  '계룡시', '공주시', '금산군', '논산시', '당진시', '보령시', '부여군', '서산시', '서천군', '아산시', '예산군', '천안시', '청양군', '태안군', '홍성군',
];
export const GWANGJU_COUNTRY_OPTIONS: string[] = [
  '광산구', '남구', '동구', '북구', '서구',
];
export const JEONBUK_COUNTRY_OPTIONS: string[] = [
  '고창군', '군산시', '김제시', '남원시', '무주군', '부안군', '순창군', '완주군', '익산시', '임실군', '장수군', '전주시', '정읍시', '진안군',
];
export const JEONNAM_COUNTRY_OPTIONS: string[] = [
  '강진군', '고흥군', '곡성군', '광양시', '구례군', '나주시', '담양군', '목포시', '무안군', '보성군', '순천시', '신안군', '여수시', '영광군', '영암군', '완도군', '장성군', '장흥군', '진도군', '함평군', '해남군', '화순군',
];
export const BUSAN_COUNTRY_OPTIONS: string[] = [
  '강서구', '금정구', '기장군', '남구', '동구', '동래구', '부산진구', '북구', '사상구', '사하구', '서구', '수영구', '연제구', '영도구', '중구', '해운대구',
];
export const ULSAN_COUNTRY_OPTIONS: string[] = [
  '남구', '동구', '북구', '울주군', '중구',
];
export const GYEONGBUK_COUNTRY_OPTIONS: string[] = [
  '경산시', '경주시', '고령군', '구미시', '김천시', '문경시', '봉화군', '상주시', '성주군', '안동시', '영덕군', '영양군', '영주시', '영천시', '예천군', '울릉군', '울진군', '의성군', '청도군', '청송군', '칠곡군', '포항시',
];
export const GYEONGNAM_COUNTRY_OPTIONS: string[] = [
  '거제시', '거창군', '고성군', '김해시', '남해군', '밀양시', '사천시', '산청군', '양산시', '의령군', '진주시', '창녕군', '창원시', '통영시', '하동군', '함안군', '함양군', '합천군',
];
export const JEJU_COUNTRY_OPTIONS: string[] = [
  '서귀포시', '제주시',
];

export type CityOptionsType = { [key: string]: string[] };

// 키값: 1차 필터, 밸류값: 2차 필터(배열)
export const CITY_OPTIONS: CityOptionsType = {
  '서울': SEOUL_COUNTRY_OPTIONS,
  '경기': GYEONGGI_COUNTRY_OPTIONS,
  '인천': INCHEON_COUNTRY_OPTIONS,
  '강원': GANGWON_COUNTRY_OPTIONS,
  '대전': DAEJEON_COUNTRY_OPTIONS,
  '세종': SEJONG_COUNTRY_OPTIONS,
  '충북': CHUNGBUK_COUNTRY_OPTIONS,
  '충남': CHUNGNAM_COUNTRY_OPTIONS,
  '광주': GWANGJU_COUNTRY_OPTIONS,
  '전북': JEONBUK_COUNTRY_OPTIONS,
  '전남': JEONNAM_COUNTRY_OPTIONS,
  '대구': DAEGU_COUNTRY_OPTIONS,
  '부산': BUSAN_COUNTRY_OPTIONS,
  '울산': ULSAN_COUNTRY_OPTIONS,
  '경북': GYEONGBUK_COUNTRY_OPTIONS,
  '경남': GYEONGNAM_COUNTRY_OPTIONS,
  '제주': JEJU_COUNTRY_OPTIONS
}

// 여기부터
export type SecondaryThemeType = { korName: string; engName: string; };

// 2차 필터(구체적인 테마 주제)
export const HEALING_AND_REST: SecondaryThemeType[] = [
  { "korName": '스파', "engName": 'spa' },
  { "korName": '공원', "engName": 'park' },
  { "korName": '사원', "engName": 'mosque' },
  { "korName": '자연 환경', "engName": 'natural_feature' },
];
export const HISTORY_STUDY_AND_NATURAL_TOUR: SecondaryThemeType[] = [
  { "korName": '미술관', "engName": 'art_gallery' },
  { "korName": '박물관', "engName": 'museum' },
  { "korName": '영화관', "engName": 'movie_theater' },
  { "korName": '공연 예술 극장', "engName": 'performing_arts_theater' },
  { "korName": '역사적 명소', "engName": 'historical_landmark' }
];
export const NATURAL_VIEWING: SecondaryThemeType[] = [
  { "korName": '자연 환경', "engName": 'natural_feature' },
  { "korName": '공원', "engName": 'park' },
  { "korName": '국립 공원', "engName": 'national_park' },
];
export const ACTIVITY_AND_ADVENTURE: SecondaryThemeType[] = [
  { "korName": '캠핑장', "engName": 'campground' },
  { "korName": '놀이공원', "engName": 'amusement_park' },
  { "korName": '오락 센터', "engName": 'amusement_center' },
  { "korName": '볼링장', "engName": 'bowling_alley' },
  { "korName": '스키장', "engName": 'ski_resort' },
  { "korName": '골프장', "engName": 'golf_course' },
  { "korName": '수영장', "engName": 'swimming_pool' },
  { "korName": '하이킹', "engName": 'hiking_area' },
];
export const RESTAURANT_TOUR: SecondaryThemeType[] = [
  { "korName": '레스토랑', "engName": 'restaurant' },
  { "korName": '카페', "engName": 'cafe' },
  { "korName": '커피숍', "engName": 'coffee_shop' },
  { "korName": '샌드위치 가게', "engName": 'sandwich_shop' },
  { "korName": '베이커리', "engName": 'bakery' },
  { "korName": '바', "engName": 'bar' },
];
export const PHOTO_SPOT: SecondaryThemeType[] = [
  { "korName": '동물원', "engName": 'zoo' },
  { "korName": '아쿠아리움', "engName": 'aquarium' },
  { "korName": '공원', "engName": 'park' },
  { "korName": '관광 명소', "engName": 'tourist_attraction' },
];
export const SHOPPING_AND_CITY_TOUR: SecondaryThemeType[] = [
  { "korName": '쇼핑몰', "engName": 'shopping_mall' },
  { "korName": '백화점', "engName": 'department_store' },
  { "korName": '옷 가게', "engName": 'clothing_store' },
  { "korName": '주얼리 가게', "engName": 'jewelry_store' },
  { "korName": '신발 가게', "engName": 'shoe_store' },
  { "korName": '주류 가게', "engName": 'liquor_store' },
  { "korName": '선물 가게', "engName": 'gift_shop' },
  { "korName": '상점', "engName": 'store' },
  { "korName": '관광 명소', "engName": 'tourist_attraction' },
];
export const STAYCATION: SecondaryThemeType[] = [
  { "korName": '호텔', "engName": 'hotel' },
  { "korName": '리조트', "engName": 'resort_hotel' },
];
export const HEALING_AND_REST_QUESTION: {[key: string]: string | string[]} = {
  "question": "어떤 형태로 휴식을 취하고 싶나요?",
  "조용한 자연 속에서 산책이나 명상": "natural_feature",
  "스파/온천에서의 휴식": "spa",
  "사원에서의 여유로운 시간": "mosque",
  "숲 속 캠핑이나 글램핑": "campground",
  "공원에서 혼자 산책": ["park", "national_park"],
};
export const HISTORY_STUDY_AND_NATURAL_TOUR_QUESTION: {[key: string]: string | string[]} = {
  "question": "역사와 문화를 배우는 데 어떤 방식이 좋나요?",
  "전시물을 보며 조용히 탐구하기": ["art_gallery", "museum"],
  "영화나 연극을 보면서 문화 즐기기": ["movie_theater", "performing_arts_theater"],
  "역사적인 장소에서 체험 활동 참여하기": ["historical_landmark"],
};
export const NATURAL_VIEWING_QUESTION: {[key: string]: string | string[]} = {
  "question": "특별히 방문하고 싶은 자연 경관이 무엇인가요?",
  "국립공원이나 보호구역": "national_park",
  "도심 속 작은 공원": "park",
  "지역에서 유명한 자연 명소": "natural_feature",
};
export const ACTIVITY_AND_ADVENTURE_QUESTION: {[key: string]: string | string[]} = {
  "question": "액티비티 중 어떤 장소를 선호하시나요?",
  "자연 속에서 캠핑이나 하이킹할 수 있는 곳": ["campground", "hiking_area"],
  "테마파크, 놀이공원 등 대규모 시설이 있는 곳": "amusement_park",
  "실내 스포츠를 즐길 수 있는 곳": ["bowling_alley", "golf_course", "swimming_pool"],
  "실내에서 활동적인 게임을 할 수 있는 곳": "amusement_center",
  "스키장, 스노보드 파크 등 겨울 스포츠 지역": "ski_resort",
};
export const RESTAURANT_TOUR_QUESTION: {[key: string]: string | string[]} = {
  "question": "어떤 종류의 맛집을 원하시나요?",
  "고급스러운 분위기에서 편안하게 식사할 수 있는 곳": "restaurant",
  "분위기 좋은 카페": "cafe",
  "이야기를 나누기 좋은 커피숍": "coffee_shop",
  "맛있는 디저트류를 다양하게 즐길 수 있는 곳": "sandwich_shop, bakery",
  "활기찬 분위기의 펍, 바": "bar",
};
export const PHOTO_SPOT_QUESTION: {[key: string]: string | string[]} = {
  "question": "어떤 유형의 촬영 장소를 원하시나요?",
  "유명한 관광지에서의 사진 촬영": "tourist_attraction",
  "전통적인 한국의 느낌을 담은 장소": "mosque",
  "자연 속에서의 촬영": ["park", "national_park", "natural_feature"],
  "동물과 해양 생물이 있는 장소": ["zoo", "aquarium"],
};
export const SHOPPING_AND_CITY_TOUR_QUESTION: {[key: string]: string | string[]} = {
  "question": "어떤 종류의 쇼핑 및 도심 탐방을 선호하시나요?",
  "대형 쇼핑몰에서 최신 패션과 다양한 브랜드 탐방": ["shopping_mall", "department_store"],
  "지역 특산물이나 독특한 수공예품을 찾는 여행": ["gift_shop", "store"],
  "백화점 및 고급 브랜드 쇼핑": "department_store",
  "다양한 스타일의 상점에서의 쇼핑": ["clothing_store", "jewelry_store", "shoe_store", "liquor_store"],
  "도시의 대표적인 랜드마크나 주요 관광지 체험": "tourist_attraction",
};
export const STAYCATION_QUESTION: {[key: string]: string | string[]} = {
  "question": "어떤 종류의 호캉스를 원하시나요?",
  "럭셔리 호텔에서의 고급스러운 서비스": "hotel",
  "자연 속에서의 리조트 휴식": "resort_hotel",
};

// 테마 옵션(맞춤 여행지 페이지) -> 키값: 1차 필터, 밸류값: 2차 필터(배열)
export type ThemeOptionsType = { [key: string]: SecondaryThemeType[] };

export const THEME_OPTIONS: ThemeOptionsType = {
  '힐링, 휴식': HEALING_AND_REST,
  '역사 공부, 문화 탐방': HISTORY_STUDY_AND_NATURAL_TOUR,
  '자연/경치 관람': NATURAL_VIEWING,
  '액티비티, 모험': ACTIVITY_AND_ADVENTURE,
  '미식 여행, 맛집 탐방': RESTAURANT_TOUR,
  '사진 촬영, 인생샷 명소': PHOTO_SPOT,
  '쇼핑, 도심 탐방': SHOPPING_AND_CITY_TOUR,
  '호캉스': STAYCATION,
};

export type questionOptionsType = {[key: string]: {[key: string]: string | string[]}}

export const QUESTION_BASED_ON_OPTIONS: questionOptionsType = {
  '힐링, 휴식': HEALING_AND_REST_QUESTION,
  '역사 공부, 문화 탐방': HISTORY_STUDY_AND_NATURAL_TOUR_QUESTION,
  '자연/경치 관람': NATURAL_VIEWING_QUESTION,
  '액티비티, 모험': ACTIVITY_AND_ADVENTURE_QUESTION,
  '미식 여행, 맛집 탐방': RESTAURANT_TOUR_QUESTION,
  '사진 촬영, 인생샷 명소': PHOTO_SPOT_QUESTION,
  '쇼핑, 도심 탐방': SHOPPING_AND_CITY_TOUR_QUESTION,
  '호캉스': STAYCATION_QUESTION,
}

// 지역 옵션(맞춤 여행지 페이지)
export const COUNTRY_OPTIONS: string[] = [
  '서울', '경기, 인천', '강원도', '대전',  '충청도', '전라도', '대구', '부산', '경상도', '제주도',
];
