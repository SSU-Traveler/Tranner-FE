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

// 테마 옵션(맞춤 여행지 페이지)
export const THEME_OPTIONS: string[] = [
  '힐링, 휴식', '역사 공부, 문화 탐방', '자연/경치 관람', '액티비티, 모험', '미식 여행, 맛집 탐방', '사진 촬영, 인생샷 명소', '쇼핑, 도심 탐방', '호캉스',
];

// 지역 옵션(맞춤 여행지 페이지)
export const COUNTRY_OPTIONS: string[] = [
  '서울', '경기, 인천', '강원도', '대전', '대구', '충청도', '전라도', '부산', '경상도', '제주도',
];
