export type locationOptionsType = { name: string; lat: number; lng: number };

// 각 광역자치단체의 위도, 경도
export const CITY_INDICATORS: locationOptionsType[] = [
  { name: '서울', lat: 37.5665, lng: 126.978 },
  { name: '경기', lat: 37.4138, lng: 127.5183 },
  { name: '인천', lat: 37.4563, lng: 126.7052 },
  { name: '강원', lat: 37.8228, lng: 128.1555 },
  { name: '대전', lat: 36.3504, lng: 127.3845 },
  { name: '대구', lat: 35.8714, lng: 128.6014 },
  { name: '세종', lat: 36.48, lng: 127.289 },
  { name: '충북', lat: 36.6357, lng: 127.4913 },
  { name: '충남', lat: 36.5184, lng: 126.8 },
  { name: '광주', lat: 35.1595, lng: 126.8526 },
  { name: '전북', lat: 35.7175, lng: 127.153 },
  { name: '전남', lat: 34.8679, lng: 126.991 },
  { name: '부산', lat: 35.1796, lng: 129.0756 },
  { name: '울산', lat: 35.5384, lng: 129.3114 },
  { name: '경북', lat: 36.576, lng: 128.5056 },
  { name: '경남', lat: 35.2598, lng: 128.6647 },
  { name: '제주', lat: 33.4996, lng: 126.5312 },
];

// 각 기초자치단체의 위도, 경도
// 서울
export const SEOUL_DISTRICT_INDICATORS: locationOptionsType[] = [
  { name: '강남구', lat: 37.4979, lng: 127.0276 },
  { name: '강동구', lat: 37.5304, lng: 127.1238 },
  { name: '강북구', lat: 37.6392, lng: 127.0252 },
  { name: '강서구', lat: 37.5507, lng: 126.8497 },
  { name: '관악구', lat: 37.4783, lng: 126.9514 },
  { name: '광진구', lat: 37.5382, lng: 127.0827 },
  { name: '구로구', lat: 37.4953, lng: 126.8671 },
  { name: '금천구', lat: 37.4554, lng: 126.9007 },
  { name: '노원구', lat: 37.6548, lng: 127.0752 },
  { name: '도봉구', lat: 37.6686, lng: 127.0437 },
  { name: '동대문구', lat: 37.5747, lng: 127.0398 },
  { name: '동작구', lat: 37.5122, lng: 126.94 },
  { name: '마포구', lat: 37.5668, lng: 126.9007 },
  { name: '서대문구', lat: 37.5795, lng: 126.9367 },
  { name: '서초구', lat: 37.4838, lng: 127.0328 },
  { name: '성동구', lat: 37.5636, lng: 127.0364 },
  { name: '성북구', lat: 37.6023, lng: 127.0175 },
  { name: '송파구', lat: 37.5147, lng: 127.1062 },
  { name: '양천구', lat: 37.5137, lng: 126.8585 },
  { name: '영등포구', lat: 37.5266, lng: 126.9028 },
  { name: '용산구', lat: 37.5326, lng: 126.9908 },
  { name: '은평구', lat: 37.6026, lng: 126.9295 },
  { name: '종로구', lat: 37.5728, lng: 126.9793 },
  { name: '중구', lat: 37.5636, lng: 126.9976 },
  { name: '중랑구', lat: 37.6063, lng: 127.0924 },
];

// 경기
export const GYEONGGI_DISTRICT_INDICATORS: locationOptionsType[] = [
  { name: '수원시', lat: 37.2636, lng: 127.0286 },
  { name: '성남시', lat: 37.4201, lng: 127.1265 },
  { name: '고양시', lat: 37.6584, lng: 126.832 },
  { name: '용인시', lat: 37.2411, lng: 127.177 },
  { name: '부천시', lat: 37.5036, lng: 126.766 },
  { name: '안산시', lat: 37.3219, lng: 126.8309 },
  { name: '남양주시', lat: 37.6359, lng: 127.2165 },
  { name: '화성시', lat: 37.1996, lng: 126.831 },
  { name: '평택시', lat: 36.9922, lng: 127.112 },
  { name: '시흥시', lat: 37.3803, lng: 126.802 },
  { name: '파주시', lat: 37.761, lng: 126.779 },
  { name: '의정부시', lat: 37.738, lng: 127.034 },
  { name: '김포시', lat: 37.6152, lng: 126.715 },
  { name: '광주시', lat: 37.4292, lng: 127.255 },
  { name: '광명시', lat: 37.4787, lng: 126.864 },
  { name: '양주시', lat: 37.785, lng: 127.045 },
  { name: '포천시', lat: 37.8946, lng: 127.2 },
  { name: '안성시', lat: 37.0088, lng: 127.279 },
  { name: '여주시', lat: 37.2983, lng: 127.637 },
  { name: '이천시', lat: 37.279, lng: 127.443 },
];

// 인천
export const INCHEON_DISTRICT_INDICATORS: locationOptionsType[] = [
  { name: '중구', lat: 37.4738, lng: 126.621 },
  { name: '동구', lat: 37.4717, lng: 126.639 },
  { name: '미추홀구', lat: 37.463, lng: 126.65 },
  { name: '연수구', lat: 37.4101, lng: 126.678 },
  { name: '남동구', lat: 37.4467, lng: 126.731 },
  { name: '부평구', lat: 37.4983, lng: 126.724 },
  { name: '계양구', lat: 37.538, lng: 126.737 },
  { name: '서구', lat: 37.545, lng: 126.675 },
  { name: '강화군', lat: 37.7464, lng: 126.485 },
  { name: '옹진군', lat: 37.4464, lng: 126.628 },
];

// 강원
export const GANGWON_DISTRICT_INDICATORS: locationOptionsType[] = [
  { name: '춘천시', lat: 37.8813, lng: 127.7298 },
  { name: '원주시', lat: 37.3422, lng: 127.9202 },
  { name: '강릉시', lat: 37.7519, lng: 128.8761 },
  { name: '동해시', lat: 37.5248, lng: 129.1144 },
  { name: '태백시', lat: 37.1645, lng: 128.9854 },
  { name: '속초시', lat: 38.207, lng: 128.591 },
  { name: '삼척시', lat: 37.4492, lng: 129.165 },
  { name: '홍천군', lat: 37.6972, lng: 127.882 },
  { name: '횡성군', lat: 37.4914, lng: 127.985 },
  { name: '영월군', lat: 37.1838, lng: 128.461 },
  { name: '평창군', lat: 37.3707, lng: 128.39 },
  { name: '정선군', lat: 37.3803, lng: 128.66 },
  { name: '철원군', lat: 38.1468, lng: 127.313 },
  { name: '화천군', lat: 38.1057, lng: 127.708 },
  { name: '양구군', lat: 38.1101, lng: 127.99 },
  { name: '인제군', lat: 38.0697, lng: 128.174 },
  { name: '고성군', lat: 38.3787, lng: 128.467 },
  { name: '양양군', lat: 38.0766, lng: 128.619 },
];

// 대전
export const DAEJEON_DISTRICT_INDICATORS: locationOptionsType[] = [
  { name: '동구', lat: 36.343, lng: 127.454 },
  { name: '중구', lat: 36.3259, lng: 127.423 },
  { name: '서구', lat: 36.353, lng: 127.386 },
  { name: '유성구', lat: 36.3626, lng: 127.356 },
  { name: '대덕구', lat: 36.3636, lng: 127.424 },
];

// 대구
export const DAEGU_DISTRICT_INDICATORS: locationOptionsType[] = [
  { name: '중구', lat: 35.8679, lng: 128.593 },
  { name: '동구', lat: 35.8867, lng: 128.635 },
  { name: '서구', lat: 35.872, lng: 128.559 },
  { name: '남구', lat: 35.8451, lng: 128.593 },
  { name: '북구', lat: 35.8964, lng: 128.582 },
  { name: '수성구', lat: 35.8586, lng: 128.631 },
  { name: '달서구', lat: 35.8297, lng: 128.532 },
  { name: '달성군', lat: 35.774, lng: 128.431 },
];

// 세종
export const SEJONG_DISTRICT_INDICATORS: locationOptionsType[] = [
  { name: '조치원읍', lat: 36.6016, lng: 127.296 },
  { name: '반곡동', lat: 36.4802, lng: 127.259 },
  { name: '어진동', lat: 36.4801, lng: 127.287 },
];

// 충북
export const CHUNGBUK_DISTRICT_INDICATORS: locationOptionsType[] = [
  { name: '청주시', lat: 36.642, lng: 127.489 },
  { name: '충주시', lat: 36.971, lng: 127.932 },
  { name: '제천시', lat: 37.132, lng: 128.204 },
  { name: '보은군', lat: 36.489, lng: 127.731 },
  { name: '옥천군', lat: 36.301, lng: 127.571 },
  { name: '영동군', lat: 36.175, lng: 127.782 },
  { name: '진천군', lat: 36.857, lng: 127.435 },
  { name: '괴산군', lat: 36.815, lng: 127.786 },
  { name: '음성군', lat: 36.94, lng: 127.69 },
  { name: '단양군', lat: 36.985, lng: 128.366 },
];

// 충남
export const CHUNGNAM_DISTRICT_INDICATORS: locationOptionsType[] = [
  { name: '천안시', lat: 36.815, lng: 127.113 },
  { name: '공주시', lat: 36.446, lng: 127.119 },
  { name: '보령시', lat: 36.352, lng: 126.593 },
  { name: '아산시', lat: 36.789, lng: 127.004 },
  { name: '서산시', lat: 36.784, lng: 126.45 },
  { name: '논산시', lat: 36.203, lng: 127.084 },
  { name: '계룡시', lat: 36.275, lng: 127.248 },
  { name: '당진시', lat: 36.889, lng: 126.645 },
  { name: '금산군', lat: 36.104, lng: 127.488 },
  { name: '부여군', lat: 36.275, lng: 126.912 },
  { name: '서천군', lat: 36.08, lng: 126.687 },
  { name: '청양군', lat: 36.459, lng: 126.803 },
  { name: '홍성군', lat: 36.601, lng: 126.661 },
  { name: '예산군', lat: 36.679, lng: 126.85 },
  { name: '태안군', lat: 36.745, lng: 126.297 },
];

// 광주
export const GWANGJU_DISTRICT_INDICATORS: locationOptionsType[] = [
  { name: '동구', lat: 35.146, lng: 126.923 },
  { name: '서구', lat: 35.151, lng: 126.89 },
  { name: '남구', lat: 35.133, lng: 126.902 },
  { name: '북구', lat: 35.166, lng: 126.912 },
  { name: '광산구', lat: 35.139, lng: 126.794 },
];

// 전북
export const JEONBUK_DISTRICT_INDICATORS: locationOptionsType[] = [
  { name: '전주시', lat: 35.824, lng: 127.148 },
  { name: '군산시', lat: 35.967, lng: 126.736 },
  { name: '익산시', lat: 35.948, lng: 126.957 },
  { name: '정읍시', lat: 35.568, lng: 126.857 },
  { name: '남원시', lat: 35.416, lng: 127.385 },
  { name: '김제시', lat: 35.803, lng: 126.889 },
  { name: '완주군', lat: 35.907, lng: 127.162 },
  { name: '진안군', lat: 35.791, lng: 127.427 },
  { name: '무주군', lat: 35.908, lng: 127.66 },
  { name: '장수군', lat: 35.647, lng: 127.521 },
  { name: '임실군', lat: 35.617, lng: 127.29 },
  { name: '순창군', lat: 35.374, lng: 127.137 },
  { name: '고창군', lat: 35.435, lng: 126.702 },
  { name: '부안군', lat: 35.731, lng: 126.733 },
];

// 전남
export const JEONNAM_DISTRICT_INDICATORS: locationOptionsType[] = [
  { name: '목포시', lat: 34.8124, lng: 126.3925 },
  { name: '여수시', lat: 34.7608, lng: 127.6625 },
  { name: '순천시', lat: 34.9507, lng: 127.5016 },
  { name: '광양시', lat: 34.9507, lng: 127.7002 },
  { name: '나주시', lat: 35.0217, lng: 126.7142 },
  { name: '담양군', lat: 35.3199, lng: 126.9827 },
  { name: '곡성군', lat: 35.3133, lng: 127.2869 },
  { name: '구례군', lat: 35.1848, lng: 127.4292 },
  { name: '고흥군', lat: 34.5805, lng: 127.2483 },
  { name: '보성군', lat: 34.7679, lng: 127.1073 },
  { name: '화순군', lat: 35.0218, lng: 126.9772 },
  { name: '장흥군', lat: 34.6383, lng: 126.9375 },
  { name: '강진군', lat: 34.5304, lng: 126.7254 },
  { name: '해남군', lat: 34.5678, lng: 126.6164 },
  { name: '영암군', lat: 34.8056, lng: 126.7123 },
  { name: '무안군', lat: 34.9929, lng: 126.4244 },
  { name: '함평군', lat: 34.8526, lng: 126.5725 },
  { name: '영광군', lat: 35.2763, lng: 126.5573 },
  { name: '완도군', lat: 34.2927, lng: 126.7497 },
  { name: '진도군', lat: 34.4807, lng: 126.1884 },
  { name: '신안군', lat: 34.7222, lng: 125.8287 },
];

// 부산
export const BUSAN_DISTRICT_INDICATORS: locationOptionsType[] = [
  { name: '중구', lat: 35.1028, lng: 129.0394 },
  { name: '서구', lat: 35.0788, lng: 129.0191 },
  { name: '동구', lat: 35.0765, lng: 129.0398 },
  { name: '영도구', lat: 35.097, lng: 129.0586 },
  { name: '부산진구', lat: 35.1608, lng: 129.059 },
  { name: '동래구', lat: 35.2342, lng: 129.0756 },
  { name: '남구', lat: 35.1389, lng: 129.0783 },
  { name: '북구', lat: 35.1797, lng: 129.0357 },
  { name: '해운대구', lat: 35.1652, lng: 129.1638 },
  { name: '사하구', lat: 35.096, lng: 128.9986 },
  { name: '금정구', lat: 35.2322, lng: 129.0781 },
  { name: '강서구', lat: 35.1852, lng: 128.9717 },
  { name: '연제구', lat: 35.1875, lng: 129.0635 },
  { name: '수영구', lat: 35.1375, lng: 129.1134 },
  { name: '사상구', lat: 35.1458, lng: 128.9884 },
  { name: '기장군', lat: 35.2356, lng: 129.2156 },
];

// 울산
export const ULSAN_DISTRICT_INDICATORS: locationOptionsType[] = [
  { name: '남구', lat: 35.5382, lng: 129.3117 },
  { name: '동구', lat: 35.2211, lng: 129.3983 },
  { name: '북구', lat: 35.5751, lng: 129.3229 },
  { name: '울주군', lat: 35.5071, lng: 129.2361 },
];

// 경북
export const GYEONGBUK_DISTRICT_INDICATORS: locationOptionsType[] = [
  { name: '경산시', lat: 35.8282, lng: 128.7453 },
  { name: '구미시', lat: 36.1164, lng: 128.3437 },
  { name: '김천시', lat: 35.7797, lng: 128.1126 },
  { name: '안동시', lat: 36.5665, lng: 128.7331 },
  { name: '포항시', lat: 36.0206, lng: 129.3413 },
  { name: '영천시', lat: 35.9942, lng: 128.9296 },
  { name: '경주시', lat: 35.8573, lng: 129.2258 },
  { name: '문경시', lat: 36.5967, lng: 128.1925 },
  { name: '상주시', lat: 36.4576, lng: 128.1548 },
  { name: '고령군', lat: 35.3198, lng: 128.5537 },
  { name: '성주군', lat: 35.8662, lng: 128.2376 },
  { name: '칠곡군', lat: 35.9848, lng: 128.6895 },
  { name: '예천군', lat: 36.6543, lng: 128.3088 },
  { name: '봉화군', lat: 36.8985, lng: 128.9239 },
  { name: '울진군', lat: 36.9985, lng: 129.3997 },
];

// 경남
export const GYEONGNAM_DISTRICT_INDICATORS: locationOptionsType[] = [
  { name: '창원시', lat: 35.2281, lng: 128.6815 },
  { name: '진주시', lat: 35.1818, lng: 128.1133 },
  { name: '통영시', lat: 34.849, lng: 128.4353 },
  { name: '사천시', lat: 35.0733, lng: 128.0003 },
  { name: '김해시', lat: 35.2325, lng: 128.8882 },
  { name: '밀양시', lat: 35.4872, lng: 128.7416 },
  { name: '거제시', lat: 34.884, lng: 128.6081 },
  { name: '양산시', lat: 35.3372, lng: 129.0407 },
  { name: '의령군', lat: 35.3249, lng: 128.4405 },
  { name: '함안군', lat: 35.1743, lng: 128.4732 },
  { name: '창녕군', lat: 35.2897, lng: 128.4715 },
  { name: '고성군', lat: 34.9647, lng: 128.3765 },
  { name: '하동군', lat: 35.1075, lng: 127.7215 },
  { name: '산청군', lat: 35.484, lng: 127.9837 },
  { name: '함양군', lat: 35.5007, lng: 127.8096 },
  { name: '거창군', lat: 35.6904, lng: 128.2988 },
  { name: '합천군', lat: 35.561, lng: 128.1984 },
];

// 제주
export const JEJU_DISTRICT_INDICATORS: locationOptionsType[] = [
  { name: '제주시', lat: 33.4996, lng: 126.5312 },
  { name: '서귀포시', lat: 33.2543, lng: 126.5609 },
];
