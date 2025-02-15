export type districtOptionsType = { [key: string]: string[] };

// 각 기초자치단체의 행정구역
// 서울
export const GANGNAM_LOCATION: string[] = [
  '개포동', '논현동', '도곡동', '대치동', '삼성동', '수서동', '세곡동', '신사동', '압구정동', '역삼동', '일원동', '청담동'
];
export const GANGDONG_LOCATION: string[] = [
  '강일동', '고덕동', '길동', '둔촌동', '명일동', '상일동', '성내동', '암사동', '천호동',
];
export const GANGBUK_LOCATION: string[] = [
  '번동', '미아동', '삼각산동', '삼양동', '송중동', '송천동', '수유동', '우이동', '인수동'
];
export const GANGSEO_LOCATION: string[] = [
  '가양동', '공항동', '등촌동', '발산동', '방화동', '염창동', '우장산동', '화곡동'
];
export const GWANAK_LOCATION: string[] = [
  '남현동', '봉천동', '신림동',
];
export const GWANGJIN_LOCATION: string[] = [
  '광장동', '구의동', '군자동', '능동', '자양동', '중곡동', '화양동',
];
export const GURO_LOCATION: string[] = [
  '가리봉동', '개봉동', '고척동', '구로동', '수궁동', '신도림동', '오류동', '항동'
];
export const GEUMCHEON_LOCATION: string[] = [
  '가산동', '독산동', '시흥동',
];
export const NOWON_LOCATION: string[] = [
  '공릉동', '상계동', '월계동', '중계동', '하계동',
];
export const DOBOG_LOCATION: string[] = [
  '도봉동', '방학동', '쌍문동', '창동',
];
export const DONGDAEMUN_LOCATION: string[] = [
  '답십리동', '용신동', '이문동', '장안동', '전농동', '제기동', '청량리동', '회기동', '휘경동',
];
export const DONGJAK_LOCATION: string[] = [
  '노량진동', '대방동', '사당동', '상도동', '신대방동', '흑석동',
];
export const MAPO_LOCATION: string[] = [
  '공덕동', '대흥동', '도화동', '망원동', '서강동', '서교동', '성산동', '신수동', '아현동', '연남동', '염리동', '용강동', '상암동', '합정동',
];
export const SEODAEMUN_LOCATION: string[] = [
  '남가좌동', '북가좌동', '북아현동', '신촌동', '연희동', '천연동', '청파동', '충현동', '홍은동',
];
export const SEOCHEO_LOCATION: string[] = [
  '잠원동', '반포동', '서초동', '방배동', '양재동', '내곡동'
];
export const SEONGDONG_LOCATION: string[] = [
  '왕십리도선동', '왕십리동', '마장동', '사근동', '행당동', '응봉동', '금호동', '옥수동', '성수동', '용답동', '송정동'
];
export const SEONGBUK_LOCATION: string[] = [
  '동선동', '돈암동', '안암동', '보문도', '정릉동', '종암동', '길음동', '월곡동', '장위동', '삼선동', '성북동', '석관동'
];
export const SONGPA_LOCATION: string[] = [
  '잠실동', '삼전동', '석촌동', '송파동', '오륜동', '풍납동', '오금동', '마천동', '가락동', '거여동', '방이동', '장지동', '위례동', '문정동',
];
export const YANGCHEON_LOCATION: string[] = [
  '목동', '신정동', '신월동',
];
export const YEONGDEUNGPO_LOCATION: string[] = [
  '여의동', '영등포동', '당산동', '문래동', '도림동', '신길동', '대림동', '양평동',
];
export const YONGSAN_LOCATION: string[] = [
  '후암동', '용산동', '남영동', '청파동', '효창동', '용문동', '이촌동', '이태원동', '한남동', '서빙고동', '보광동', '원효로동', '한강로동',
];
export const EUNPYEONG_LOCATION: string[] = [
  '녹번동', '불광동', '갈현동', '구산동', '대조동', '응암동', '진관동',  '역촌동',  '신사동', '증산동', '수색동',
];
export const JONGNO_LOCATION: string[] = [
  '청운효자동', '사직동', '삼청동', '부암동', '평창동', '무악동', '교남동', '종로동', '가회동', '이화동', '혜화동', '창신동', '숭인동',
];
export const JUNG_LOCATION: string[] = [
  '소공동', '명동', '회현동', '필동', '장충동', '을지로동', '광희동', '신당동', '다산동', '약수동', '청구동', '동화동', '황학동', '중림동',
];
export const JUNGRANG_LOCATION: string[] = [
  '망우동', '상봉동', '중화동', '면목동', '묵동', '신내동',
];
export const SEOUL_DISTRICT_OPTIONS: districtOptionsType = {
  "종로구": JONGNO_LOCATION,
  "중구": JUNG_LOCATION,
  "용산구": YONGSAN_LOCATION,
  "성동구": SEONGDONG_LOCATION,
  "광진구": GWANGJIN_LOCATION,
  "동대문구": DONGDAEMUN_LOCATION,
  "중랑구": JUNGRANG_LOCATION,
  "성북구": SEONGBUK_LOCATION,
  "강북구": GANGBUK_LOCATION,
  "도봉구": DOBOG_LOCATION,
  "노원구": NOWON_LOCATION,
  "은평구": EUNPYEONG_LOCATION,
  "서대문구": SEODAEMUN_LOCATION,
  "마포구": MAPO_LOCATION,
  "양천구": YANGCHEON_LOCATION,
  "강서구": GANGSEO_LOCATION,
  "구로구": GURO_LOCATION,
  "금천구": GEUMCHEON_LOCATION,
  "영등포구": YEONGDEUNGPO_LOCATION,
  "동작구": DONGJAK_LOCATION,
  "관악구": GWANAK_LOCATION,
  "서초구": SEOCHEO_LOCATION,
  "강남구": GANGNAM_LOCATION,
  "송파구": SONGPA_LOCATION,
  "강동구": GANGDONG_LOCATION,
}

// 경기
export const GAPYEONG_LOCATION: string[] = [
  '가평읍', '청평면', '설악면', '상면', '조종면', '북면'
];
export const GOYANG_LOCATION: string[] = [
  '덕양구', '일산동구', '일산서구'
];
export const GURI_LOCATION: string[] = [
  '갈매동', '교문동', '수택동', '인창동', '동구동'
];
export const GUNPO_LOCATION: string[] = [
  '군포동', '송부동', '광정동', '산본동', '오금동', '금정동', '대야동', '궁내동', '재궁동', '수리동'
];
export const GIMPO_LOCATION: string[] = [
  '고촌읍', '대곶면', '월곶면', '김포본동', '장기본동', '사우동', '마산동', '풍무동', '운양동', '장기동', '구래동', '통진읍', '양촌읍', '하성면'
];
export const NAMYANGJU_LOCATION: string[] = [
  '금곡동', '별내동', '호평동', '평내동', '퇴계원읍', '진건읍', '진전읍', '오남읍', '화도읍', '와부읍', '수동면', '조안면', '별내면', '다산동', '양정동',
];
export const DONGDUCHEON_LOCATION: string[] = [
  '중앙동', '송내동', '보산동', '불현동', '생연동', '소요동', '상패동',
];
export const BUCHEON_LOCATION: string[] = [
  '원미구', '소사구', '오정구',
];
export const SEONGNAM_LOCATION: string[] = [
  '수정구', '중원구', '분당구'
];
export const SUWON_LOCATION: string[] = [
  '장안구', '권선구', '팔달구', '영통구'
];
export const SIHEUNG_LOCATION: string[] = [
  '과림동', '군자동', '능곡동', '대야동', '매화동', '목감동', '신천동', '신현동', '연성동', '월곶동', '은행동', '장곡동', '정왕동', '거북섬동',  '배곧동',
];
export const ANSAN_LOCATION: string[] = [
  '단원구', '상록구'
];
export const ANSEONG_LOCATION: string[] = [
  '안성동', '공도읍', '보개면', '금광면', '서운면', '미양면', '대덕면', '양성면', '고삼면', '원곡면', '일죽면', '죽산면', '삼죽면'
];
export const YANGJU_LOCATION: string[] = [
  '회천동', '장흥면', '광적면', '백석읍', '은현면', '남면', '양주동', '옥정동',
];
export const YANGPYEONG_LOCATION: string[] = [
  '양평읍', '강상면', '강하면', '개군면', '옥천면', '서종면', '단월면', '청운면', '양동면', '양서면', '지평면', '용문면',
];
export const YEOJU_LOCATION: string[] = [
  '가남읍', '강천면', '금사면', '대신면', '북내면', '산북면', '세종대왕면', '흥천면', '점동면', '여흥동', '중앙동', '오학동',
];
export const YEONCHEON_LOCATION: string[] = [
  '연천읍', '전곡읍', '군남면', '청산면', '백학면', '미산면', '왕징면', '신서면', '중면', '장남면',
];
export const OSAN_LOCATION: string[] = [
  '중앙동', '신장동', '세마동', '초평동', '대원동', '남촌동'
];
export const YONGIN_LOCATION: string[] = [
  '처인구', '기흥구', '수지구'
];
export const UIWANG_LOCATION: string[] = [
  '고천동', '부곡동', '내손동', '청계동', '오전동'
];
export const UIJEONGBU_LOCATION: string[] = [
  '의정부동', '녹양동', '가능동', '흥선동', '호원동', '고산동', '장암동', '신곡동', '송산동', '자금동'
];
export const ICHEON_LOCATION: string[] = [
  '부발읍', '장호원읍', '대월면', '마장면', '모가면', '백사면', '설성면', '신둔면', '호법면', '율면', '중리동', '창전동', '증포동', '관고동',
];
export const PAJU_LOCATION: string[] = [
  '문산읍', '법원읍', '조리읍', '파주읍', '광탄면', '군내면', '월롱면', '적성면', '진동면', '탄현면', '파평면', '장단면', '진서면', '운정동', '교하동', '금촌동',
];
export const PYEONGTAEK_LOCATION: string[] = [
  '안중읍', '팽성읍', '포승읍', '청북읍', '진위면', '서탄면', '고덕면', '오성면', '현덕면', '고덕동', '동삭동', '비전동', '서정동', '세교동', '송북동', '송탄동', '신평동', '신장동', '용이동', '원평동', '중앙동', '지산동', '통북동',
];
export const HANAM_LOCATION: string[] = [
  '위례동', '감일동', '감북동', '초이동', '덕풍동', '신장동', '미사동', '춘궁동', '천현동'
];
export const HWASEONG_LOCATION: string[] = [
  '남양읍', '봉담읍', '우정읍', '향남읍', '마도면', '매송면', '비봉면', '서신면', '송산면', '양감면', '장안면', '팔탄면', '정남면', '반월동', '병점동', '기배동', '진안동', '동탄동', '새솔동', '화산동',
];
export const ANYANG_LOCATION: string[] = [
  "만안구", "동안구",
]
export const GWANGJU_LOCATION: string[] = [
  "초월읍", "곤지암읍", "도척면", "퇴촌면", "남종면", "남한산성면", "경안동", "송정동", "광남동", "쌍령동", "탄벌동", "능평동", "신현동", "오포동", 
];
export const GWANGMYEONG_LOCATION: string[] = [
  "광명동", "철산동", "하안동", "소하동", "일직동", "학온동",
];
export const POCHEON_LOCATION: string[] = [
  "소흘읍", "군내면", "가산면", "관인면", "내촌면",  "신북면", "영북면", "영중면", "이동면", "일동면", "창수면", "화현면", "포천동", "선단동",
];
export const GWACHEON_LOCATION: string[] = [
  "갈현동", "과천동", "문원동", "별양동", "부림동", "원문동", "중앙동",
]
export const GYEONGGI_DISTRICT_OPTIONS: districtOptionsType = {
  "수원시": SUWON_LOCATION,
  "용인시": YONGIN_LOCATION,
  "고양시": GOYANG_LOCATION,
  "화성시": HWASEONG_LOCATION,
  "성남시": SEONGNAM_LOCATION,
  "부천시": BUCHEON_LOCATION,
  "남양주시": NAMYANGJU_LOCATION,
  "안산시": ANSAN_LOCATION,
  "평택시": PYEONGTAEK_LOCATION,
  "안양시": ANYANG_LOCATION,
  "시흥시": SIHEUNG_LOCATION,
  "파주시": PAJU_LOCATION,
  "김포시": GIMPO_LOCATION,
  "의정부시": UIJEONGBU_LOCATION,
  "광주시": GWANGJU_LOCATION,
  "하남시": HANAM_LOCATION,
  "광명시": GWANGMYEONG_LOCATION,
  "군포시": GUNPO_LOCATION,
  "양주시": YANGJU_LOCATION,
  "오산시": OSAN_LOCATION,
  "이천시": ICHEON_LOCATION,
  "안성시": ANSEONG_LOCATION,
  "구리시": GURI_LOCATION,
  "의왕시": UIWANG_LOCATION,
  "포천시": POCHEON_LOCATION,
  "여주시": YEOJU_LOCATION,
  "동두천시": DONGDUCHEON_LOCATION,
  "과천시": GWACHEON_LOCATION,
  "양평군": YANGPYEONG_LOCATION,
  "가평군": GAPYEONG_LOCATION,
  "연천군": YEONCHEON_LOCATION,
}

// 인천
export const GANGHWA_LOCATION: string[] = [
  "강화읍", "길상면", "교동면", "내가면", "불은면", "삼산면", "서도면", "선원면", "송해면", "양도면", "양사면", "하점면", "화도면",
];
export const GYEYANG_LOCATION: string[] = [
  "계산동", "서운동", "작전동", "작전서운동", "효성동",
];
export const NAMDONG_LOCATION: string[] = [
  "간석동", "고잔동", "구월동", "남촌동", "논현동", "도림동", "만수동", "서창동", "수산동", "운연동", "장수동",
];
export const DONG_LOCATION: string[] = [
  "만석동", "송현동", "금창동", "화수동", "화수1화평동",
];
export const MICHUHOL_LOCATION: string[] = [
  "관교동", "도화동", "문학동", "숭의동", "용현동", "주안동", "학익동",
];
export const BUPYEONG_LOCATION: string[] = [
  "갈산동", "구산동", "부개동", "부평동", "산곡동", "삼산동", "십정동", "일신동", "청천동",
];
export const SEO_LOCATION: string[] = [
  "가정동", "가좌동", "검암경서동", "석남동", "신현원창동", "연희동", "청라동", "검단동", "당하동", "마전동", "불로대곡동", "아라동", "원당동", "오류왕길동",
];
export const YEONSU_LOCATION: string[] = [
  "동춘동", "선학동", "송도동", "연수동", "옥련동", "청학동",
];
export const ONGJIN_LOCATION: string[] = [
  "북도면", "백령면", "대청면", "덕적면", "연평면", "자월면", "영흥면",
];
export const INCHEON_JUNG_LOCATION: string[] = [
  "신포동", "연안동", "개항동", "신흥동", "도원동", "율목동", "동인천동", "영종동", "운서동", "용유동",
];
export const INCHEON_DISTRICT_OPTIONS: districtOptionsType = {
  "중구": INCHEON_JUNG_LOCATION,
  "동구": DONG_LOCATION,
  "미추홀구": MICHUHOL_LOCATION,
  "연수구": YEONSU_LOCATION,
  "남동구": NAMDONG_LOCATION,
  "부평구": BUPYEONG_LOCATION,
  "계양구": GYEYANG_LOCATION,
  "서구": SEO_LOCATION,
  "강화군": GANGHWA_LOCATION,
  "옹진군": ONGJIN_LOCATION,
};

// 강원
export const GANGNEUNG_LOCATION: string[] = [
  "주문진읍", "강동면", "구정면", "사천면", "성산면", "연곡면", "옥계면", "왕산면", "강남동", "경포동", "교동", "내곡동", "성덕동", "송정동", "옥천동", "중앙동", "초당동", "포남동", "홍제동",
];
export const GOSEONG_LOCATION: string[] = [
  "간성읍", "거진읍", "현내면", "죽왕면", "토성면", "수동면",
];
export const DONGHAE_LOCATION: string[] = [
  "천곡동", "송정동", "북삼동", "북평동", "삼화동", "부곡동", "발한동", "동호동", "망상동", "묵호동",
];
export const SAMCHEOK_LOCATION: string[] = [
  "도계읍", "원덕읍", "가곡면", "근덕면", "노곡면", "미로면", "신기면", "하장면", "교동", "남양동", "성내동", "정라동",
];
export const SOKCHO_LOCATION: string[] = [
  "교동", "금호동", "노학동", "대포동", "동명동", "영랑동", "조양동", "청호동",
];
export const YANGGU_LOCATION: string[] = [
  "양구읍", "동면", "방산면", "해안면", "국토정중앙면",
];
export const YANGYANG_LOCATION: string[] = [
  "강현면", "서면", "손양면", "양양읍", "현남면", "현북면",
];
export const YEONGWOL_LOCATION: string[] = [
  "영월읍", "김삿갓면", "남면", "북면", "상동읍", "산솔면", "주천면", "한반도면", "무릉도원면",
];
export const WONJU_LOCATION: string[] = [
  "문막읍", "귀래면",  "부론면", "소초면", "신림면", "지정면", "판부면", "호저면", "흥업면", "개운동", "단계동", "무실동", "단구동", "명륜동", "반곡관설동", "봉산동", "우산동", "원인동", "일산동", "중앙동", "학성동", "태장동", "행구동",
];
export const INJE_LOCATION: string[] = [
  "기린면", "남면", "북면", "서화면", "상남면", "인제읍",
];
export const JEONGSEON_LOCATION: string[] = [
  "정선읍", "고한읍", "남면", "신동읍", "북평면", "사북읍", "여량면", "임계면", "화암면",
];
export const CHEORWON_LOCATION: string[] = [
  "갈말읍", "김화읍", "동송읍", "철원읍", "근남면", "근북면", "서면", "근동면", "원동면", "원남면", "임남면",
];
export const CHUNCHEON_LOCATION: string[] = [
  "신북읍", "남면", "남산면", "동내면", "동면", "동산면", "북산면", "사북면", "서면", "신동면", "교동", "강남동", "근화동", "소양동", "석사동", "신사우동", "약사명동", "조운동", "퇴계동", "효자동", "후평동",
];
export const TAEBAEK_LOCATION: string[] = [
  "고문소동", "장성동", "문곡소도동", "삼수동", "상장동", "황지동", "황연동", "철암동",
];
export const PYEONGCHANG_LOCATION: string[] = [
  "평창읍", "대관령면", "대화면", "미탄면", "방림면", "봉평면", "용평면",  "진부면",
];
export const HONGCHEON_LOCATION: string[] = [
  "홍천읍", "화촌면", "두촌면", "내촌면", "서석면", "영귀미면", "남면", "서면", "북방면", "내면",
];
export const HWACHEON_LOCATION: string[] = [
  "간동면", "사내면", "상서면", "화천읍", "하남면",
];
export const HOENGSEONG_LOCATION: string[] = [
  "횡성읍", "강림면", "갑천면", "공근면", "둔내면", "서원면", "안흥면", "우천면", "청일면",
];
export const GANGWON_DISTRICT_OPTIONS: districtOptionsType = {
  "강릉시": GANGNEUNG_LOCATION,
  "동해시": DONGHAE_LOCATION,
  "삼척시": SAMCHEOK_LOCATION,
  "속초시": SOKCHO_LOCATION,
  "원주시": WONJU_LOCATION,
  "춘천시": CHUNCHEON_LOCATION,
  "태백시": TAEBAEK_LOCATION,
  "고성군": GOSEONG_LOCATION,
  "양구군": YANGGU_LOCATION,
  "양양군": YANGYANG_LOCATION,
  "영월군": YEONGWOL_LOCATION,
  "인제군": INJE_LOCATION,
  "정선군": JEONGSEON_LOCATION,
  "철원군": CHEORWON_LOCATION,
  "평창군": PYEONGCHANG_LOCATION,
  "홍천군": HONGCHEON_LOCATION,
  "화천군": HWACHEON_LOCATION,
  "횡성군": HOENGSEONG_LOCATION,
};

// 대구
export const JUNGGU_LOCATION: string[] = [
  "동인동", "삼덕동", "성내동", "대신동", "남산동", "대봉동",
];
export const DALSEOGU_LOCATION: string[] = [
  "감삼동", "도원동", "두류동", "본동", "본리동", "상인동", "성당동", "송현동", "신당동", "용산동", "월성동", "유천동", "이곡동", "장기동", "죽전동", "진천동",
];
export const DALSEONGGUN_LOCATION: string[] = [
  "가창면", "구지면", "다사읍", "논공읍", "옥포읍", "하빈면", "현풍읍", "유가읍", "화원읍",
];
export const DONGGU_LOCATION: string[] = [
  "공산동", "도평동", "등촌동", "방촌동", "불로봉무동", "신암동", "신천동", "안심동", "지저동", "해안동", "혁신동", "효목동",
];
export const BUKGU_LOCATION: string[] = [
  "검단동", "고성동", "노원동", "대현동", "무태조야동", "복현동", "산격동", "칠성동", "침산동", "관문동", "관음동", "구암동", "국우동", "동천동", "읍내동", "태전동",
];
export const SEOGU_LOCATION: string[] = [
  "내당동", "비산동", "상중이동", "원대동", "평리동",
];
export const SUSEONGGU_LOCATION: string[] = [
  "고산동", "두산동", "만촌동", "범물동", "범어동", "상동", "수성동", "중동", "지산동", "파동", "황금동",
];
export const NAMGU_LOCATION: string[] = [
  "대명동", "봉덕동", "이천동",
];
export const GUNWI_LOCATION: string[] = [
  "군위읍", "부계면", "산성면", "삼국유사면", "소보면", "우보면", "의흥면", "효령면",
]
export const DAEGU_DISTRICT_OPTIONS: districtOptionsType = {
  "중구": JUNGGU_LOCATION,
  "동구": DONGGU_LOCATION,
  "서구": SEOGU_LOCATION,
  "남구": NAMGU_LOCATION,
  "북구": BUKGU_LOCATION,
  "수성구": SUSEONGGU_LOCATION,
  "달서구": DALSEOGU_LOCATION,
  "달성군": DALSEONGGUN_LOCATION,
  "군위군": GUNWI_LOCATION,
};

// 대전
export const DAEJEON_DONGGU_LOCATION: string[] = [
  "중앙동", "신인동", "효동", "판암동", "대동", "용운동", "자양동", "가양동", "용전동", "송남동", "홍도동", "삼성동", "대청동", "산내동",
];
export const DAEJEON_JUNGGU_LOCATION: string[] = [
  "은행선화동", "목동", "중촌동", "대흥동", "문창동", "석교동", "대사동", "부사동", "용두동", "오류동", "태평동", "유천동", "문화동", "사정동",
];
export const SEOOGU_LOCATION: string[] = [
  "도마동", "복수동", "변동", "정림동", "가수원동", "용문동", "탄방동", "만년동", "괴정동", "기성동", "가장동", "내동", "갈마동", "도안동", "관저동", "둔산동", "월평동",
];
export const YUSEONGGU_LOCATION: string[] = [
  "진잠동", "학하동", "상대동", "원신흥동", "온천동", "노은동", "신성동", "전민동", "관평동", "구즉동",
];
export const DAEDEOKGU_LOCATION: string[] = [
  "오정동", "대화동", "회덕동", "비래동", "송촌동", "법동", "중리동", "신탄진동", "석복동", "덕암동", "목상동",
];
export const DAEJEON_DISTRICT_OPTIONS: districtOptionsType = {
  "동구": DAEJEON_DONGGU_LOCATION,
  "중구": DAEJEON_JUNGGU_LOCATION,
  "서구": SEOOGU_LOCATION,
  "유성구": YUSEONGGU_LOCATION,
  "대덕구": DAEDEOKGU_LOCATION,
};

// 충북
export const CHEONGJU_LOCATION: string[] = [
  "상당구", "서원구", "흥덕구", "청원구",
];
export const CHUNGJU_LOCATION: string[] = [
  "주덕읍", "금가면", "노은면", "대소원면", "동량면", "산척면", "살미면", "소태면", "수안보면", "신니면", "앙성면", "엄정면", "중앙탑면", "교현안림동", "교현동", "달천동", "목행용탄동", "문화동", "봉방동", "성내충인동", "연수동", "용산동", "지현동", "칠금금릉동", "호암직동",
];
export const JECHON_LOCATION: string[] = [
  "봉양읍", "금성면", "덕산면", "백운면", "송학면", "수산면", "청풍면", "한수면", "교동", "남현동", "신백동", "영서동", "용두동", "의림지동", "중앙동", "청전동", "화산동",
];
export const BOEUN_LOCATION: string[] = [
  "보은읍", "내북면", "마로면", "산외면", "삼승면", "속리산면", "수한면", "장안면", "탄부면", "회남면", "회인면",
];
export const OKCHEON_LOCATION: string[] = [
  "옥천읍", "군북면", "군서면", "동이면", "안남면", "안내면", "이원면", "청산면", "청성면",
];
export const YEONGDONG_LOCATION: string[] = [
  "영동읍", "매곡면", "상촌면", "심천면", "양강면", "양산면", "용산면", "용화면", "추풍령면", "황간면", "학산면", 
];
export const JINCHEON_LOCATION: string[] = [
  "진천읍", "덕산읍", "광혜원면", "문백면", "백곡면", "이월면", "초평면",
];
export const GOESAN_LOCATION: string[] = [
  "괴산읍", "감물면", "문광면", "불정면", "사리면", "소수면", "연풍면", 
  "장연면", "청안면", "청천면", "칠성면",
];
export const EUMSEONG_LOCATION: string[] = [
  "음성읍", "금왕읍", "감곡면", "대소면", "맹동면", "삼성면", "생극면", "소이면", "원남면",
];
export const DANYANG_LOCATION: string[] = [
  "단양읍", "매포읍", "가곡면", "단성면", "대강면", "영춘면", "어상천면", "적성면",
];
export const JEUNGPYEONG_LOCATION: string[] = [
  "증평읍", "도안면",
]
export const CHUNGBUK_DISTRICT_OPTIONS: districtOptionsType = {
  "제천시": JECHON_LOCATION,
  "청주시": CHEONGJU_LOCATION,
  "충주시": CHUNGJU_LOCATION,
  "괴산군": GOESAN_LOCATION,
  "단양군": DANYANG_LOCATION,
  "보은군": BOEUN_LOCATION,
  "영동군": YEONGDONG_LOCATION,
  "옥천군": OKCHEON_LOCATION,
  "음성군": EUMSEONG_LOCATION,
  "증평군": JEUNGPYEONG_LOCATION,
  "진천군": JINCHEON_LOCATION,
};

// 충남
export const CHEONAN_LOCATION: string[] = [
  "동남구", "서북구",
];
export const ASAN_LOCATION: string[] = [
  "온양동", "배방읍", "염치읍", "도고면", "둔포면", "선장면", "송악면", "신창면", "영인면", "음봉면", "탕정면", "인주면",
];
export const GONGJU_LOCATION: string[] = [
  "유구읍", "반포면", "계룡면", "사곡면", "신풍면", "우성면", "정안면", 
  "의당면", "이인면", "탄천면", "금학동", "신관동", "옥룡동", "웅진동", "월송동", "중학동",
];
export const BORYEONG_LOCATION: string[] = [
  "웅천읍", "남포면", "미산면", "성주면", "오천면", "주교면", "주산면", "주포면", "천북면", "청소면", "청라면", "대천동",
];
export const SEOSAN_LOCATION: string[] = [
  "대산읍", "고북면", "부석면", "성연면", "운산면", "음암면", "인지면", "지곡면", "팔봉면", "해미면", "동문동", "부춘동", "석남동", "수석동",
];
export const NONSAN_LOCATION: string[] = [
  "강경읍", "연무읍", "가야곡면", "광석면", "노성면", "벌곡면", "부적면", "상월면", "성동면", "연산면", "양촌면", "연산면", "은진면", "채운면", "부창동", "취암동",
];
export const DANGJIN_LOCATION: string[] = [
  "합덕읍", "송악읍", "고대면", "대호지면", "면천면", "석문면", "당진동", "정미면", "순성면", "우강면", "신평면", "송산면",
];
export const HONGSEONG_LOCATION: string[] = [
  "홍성읍", "광천읍", "홍북읍", "갈산면", "결성면", "구항면", "금마면", "은하면", "서부면", "장곡면", "홍동면",
];
export const YESAN_LOCATION: string[] = [
  "예산읍", "삽교읍", "대술면", "신양면", "광시면", "대흥면", "응봉면", "덕산면", "봉산면", "고덕면", "신암면", "오가면",
];
export const CHEONGYANG_LOCATION: string[] = [
  "청양읍", "남양면", "대치면", "목면", "비봉면", "운곡면", "장평면", "정산면", "청남면",  "화성면", 
];
export const TAEAN_LOCATION: string[] = [
  "태안읍", "안면읍", "고남면", "남면", "근흥면", "소원면", "원북면", "이원면",
];
export const SEOCHEON_LOCATION: string[] = [
  "서천읍", "장항읍", "기산면", "마산면", "마서면", "문산면", "비인면", "서면", "시초면", "종천면", "판교면", "한산면", "화양면",
];
export const GYERYONG_LOCATION: string[] = [
  "두마면", "신도안면", "엄사면", "금암동",
];
export const GEUMSAN_LOCATION: string[] = [
  "금산읍", "금성면", "군북면", "남이면", "남일면", "복수면", "제원면", "부리면", "진산면", "추부면",
];
export const BUYEO_LOCATION: string[] = [
  "부여읍", "구룡면", "규암면", "남면", "내산면", "석성면", "세도면", "양화면", "옥산면", "은산면", "외산면", "임천면", "장암면", "초촌면", "홍산면", "충화면", 
];
export const CHUNGNAM_DISTRICT_OPTIONS: districtOptionsType = {
  "계룡시": GYERYONG_LOCATION,
  "공주시": GONGJU_LOCATION,
  "논산시": NONSAN_LOCATION,
  "당진시": DANGJIN_LOCATION,
  "보령시": BORYEONG_LOCATION,
  "서산시": SEOSAN_LOCATION,
  "아산시": ASAN_LOCATION,
  "천안시": CHEONAN_LOCATION,
  "금산군": GEUMSAN_LOCATION,
  "부여군": BUYEO_LOCATION,
  "서천군": SEOCHEON_LOCATION,
  "예산군": YESAN_LOCATION,
  "청양군": CHEONGYANG_LOCATION,
  "태안군": TAEAN_LOCATION,
  "홍성군": HONGSEONG_LOCATION,
};

// 전북
export const JEONJU_LOCATION: string[] = [
  "완산구", "덕진구",
];
export const IKSAN_LOCATION: string[] = [
  "함열읍", "금마면", "낭산면", "망성면", "성당면", "삼기면", "여산면", "오산면", "왕궁면", "용동면", "웅포면", "용안면", "춘포면", "함라면", "황등면", "남중동", "마동", "모현동", "삼성동", "송학동", "신동", "어양동", "영등동", "인화동", "중앙동", "팔봉동", "평화동", 
];
export const GUNSAN_LOCATION: string[] = [
  "옥구읍", "개정면", "나포면", "대야면", "서수면", "성산면", "옥도면", "옥산면", "옥서면", "회현면", "임피면", "개정동", "경암동", "구암동", "나운동", "미성동", "삼학동", "소룡동", "수송동", "신풍동", "월명동", "조촌동", "중앙동", "해신동", "흥남동",
];
export const NAMWON_LOCATION: string[] = [
  "운봉읍", "금지면", "대강면", "대산면", "덕과면", "보절면", "사매면", "산내면", "산동면", "송동면", "수지면", "이백면", "아영면", "인월면", "주생면", "주천면", "금동", "노암동", "도통동", "왕정동", "동충동", "왕정동", "죽항동", "향교동", 
];
export const JEONGEUP_LOCATION: string[] = [
  "신태인읍", "감곡면", "고부면", "덕천면", "북면", "산내면", "산외면", "소성면", "영원면", "옹동면", "이평면", "입암면", "칠보면", "정우면", "칠보면", "태인면", "내장상동", "장명동", "농소동", "상교동", "수성동", "시기동", "초산동", "연지동",
];
export const GIMJE_LOCATION: string[] = [
  "만경읍", "공덕면", "광활면", "금구면", "금산면", "백구면", "봉남면", "부량면", "성덕면", "용지면", "죽산면", "진봉면", "청하면", "황산면", "교월동", "검산동", "신풍동", "요촌동",
];
export const BUAN_LOCATION: string[] = [
  "부안읍", "계화면", "동진면", "변산면", "상서면", "주산면", "하서면", "행앙면", "보안면", "줄포면", "진서면", "백산면", "위도면",
];
export const IMSIL_LOCATION: string[] = [
  "임실읍", "강진면", "관촌면", "덕치면", "삼계면", "성수면", "신덕면", "신평면", "운암면", "오수면", "운암면", "청웅면", "지사면",
];
export const JANGSU_LOCATION: string[] = [
  "장수읍", "번암면", "장계면", "산서면", "천천면", "계남면", "계북면",
];
export const MUJU_LOCATION: string[] = [
  "무주읍", "무풍면", "설천면", "적상면", "안성면", "부남면",
];
export const GOCHANG_LOCATION: string[] = [
  "고창읍", "고수면", "공음면", "대산면", "부안면", "무장면", "상하면", "성내면", "성송면", "신림면", "아산면", "심원면", "흥덕면", "해리면", 
];
export const SOONCHANG_LOCATION: string[] = [
  "순창읍", "구림면", "금과면", "동계면", "복흥면", "쌍치면", "유등면", "인계면", "풍산면", "적성면", "팔덕면",
];
export const WANJU_LOCATION: string[] = [
  "삼례읍", "봉동읍", "용진읍", "경천면", "구이면", "고산면", "동상면", "비봉면", "상관면", "이서면", "소양면", "운주면", "화산면",
];
export const JINAN_LOCATION: string[] = [
  "진안읍", "동향면", "마령면", "백운면", "부귀면", "용담면", "안천면", "상전면", "성수면", "정천면", "주천면",
];
export const JEONBUK_DISTRICT_OPTIONS: districtOptionsType = {
  "군산시": GUNSAN_LOCATION,
  "김제시": GIMJE_LOCATION,
  "남원시": NAMWON_LOCATION,
  "익산시": IKSAN_LOCATION,
  "전주시": JEONJU_LOCATION,
  "정읍시": JEONGEUP_LOCATION,
  "고창군": GOCHANG_LOCATION,
  "무주군": MUJU_LOCATION,
  "부안군": BUAN_LOCATION,
  "순창군": SOONCHANG_LOCATION,
  "완주군": WANJU_LOCATION,
  "임실군": IMSIL_LOCATION,
  "장수군": JANGSU_LOCATION,
  "진안군": JINAN_LOCATION,
};

// 전남
export const MOKPO_LOCATION: string[] = [
  "용당동", "연동", "산정동", "연산동", "원산동", "대성동", "목원동", "동명동", "삼학동", "만호동", "유달동", "죽교동", "북항동", "용해동", "이로동", "상동", "하당동", "신흥동", "삼항동", "옥암동", "부흥동", "부주동",
];
export const YEOSU_LOCATION: string[] = [
  "돌산읍", "삼산면", "남면", "화양면", "화정면", "소라면", "율촌면", "광림동", "국동", "대교동", "동문동", "둔덕동", "만덕동", "묘도동", "문수동", "미평동", "삼일동", "서강동", "시전동", "쌍봉동", "여서동", "여천동", "월호동", "주삼동", "중앙동", "충무동", "한려동",
];
export const SUNCHEON_LOCATION: string[] = [
  "승주읍", "해룡면", "서면", "황전면", "월등면", "주암면", "송광면", "외서면", "낙안면", "별량면", "상사면", "향동", "매곡동", "조곡동", "풍덕동", "저전동", "장천동", "삼산동", "덕연동", "남제동", "중앙동", "도사동", "왕조동",
];
export const GWANGYANG_LOCATION: string[] = [
  "광양읍", "다압면", "봉강면", "옥곡면", "옥룡면", "진상면", "진월면", "중마동", "골약동", "광영동", "태인동", "금호동",
];
export const NAJU_LOCATION: string[] = [
  "남평읍", "공산면", "금천면", "노안면", "다도면", "다시면", "동강면", "문평면", "반남면", "봉황면", "산포면", "세지면", "왕곡면", "금남동", "송월동", "성북동", "영강동", "영산동", "이창동", "빛가람동",
];
export const DAMYANG_LOCATION: string[] = [
  "담양읍", "고서면", "금성면", "가사문학면", "대덕면", "대전면", "무정면", "봉산면", "수북면", "용면", "창평면", "월산면",
];
export const GOHEUNG_LOCATION: string[] = [
  "고흥읍", "도양읍", "금산면", "과역면", "남양면", "대서면", "도덕면", "도화면", "동강면", "동일면", "두원면", "봉래면", "영남면", "점암면", "포두면", "풍양면",
];
export const BOSEONG_LOCATION: string[] = [
  "보성읍", "벌교읍", "겸백면", "노동면", "득량면", "문덕면", "미력면", "조성면", "회천면", "율어면", "복내면", "웅치면",
];
export const HWA_SUN_LOCATION: string[] = [
  "화순읍", "사평면", "능주면", "도곡면", "도암면", "동면", "동북면", "백아면", "이서면", "이양면", "청풍면", "한천면", "춘양면",
];
export const JANGHEUNG_LOCATION: string[] = [
  "장흥읍", "관산읍", "대덕읍", "부산면", "안양면", "용산면", "유치면", "장동면", "회진면", "장평면",
];
export const GANGJIN_LOCATION: string[] = [
  "강진읍", "도암면", "군동면", "대구면", "마량면", "병영면", "성전면", "작천면", "신전면", "옴천면", "칠량면",
];
export const WANDO_LOCATION: string[] = [
  "완도읍", "금일읍", "노화읍", "고금면", "군외면", "금당면", "신지면", "약산면", "청산면", "소안면", "보길면", "생일면",
];
export const JINDO_LOCATION: string[] = [
  "진도읍", "고군면", "군내면", "의신면", "임회면", "지산면", "조도면", 
];
export const HAENAM_LOCATION: string[] = [
  "해남읍", "계곡면", "마산면", "문내면", "북일면", "북평면", "산이면", "삼산면", "송지면", "옥천면", "현산면", "화산면", "화원면", "황산면",
];
export const MUAN_LOCATION: string[] = [
  "무안읍", "삼향읍", "일로읍", "망운면", "몽탄면", "청계면", "해제면", "운남면", "현경면",
];
export const SINAN_LOCATION: string[] = [
  "지도읍", "압해읍", "비금면", "도초면", "신의면", "안좌면", "암태면", "임자면", "자은면", "장산면", "증도면", "팔금면", "흑산면", "하의면", 
];
export const GOKSEONG_LOCATION: string[] = [
  "곡성읍", "겸면", "고달면", "목사동면", "삼기면", "석곡면", "오곡면", "옥과면", "오산면", "죽곡면", "입면", 
];
export const GURYE_LOCATION: string[] = [
  "구례읍", "간전면", "마산면", "광의면", "문척면", "토지면", "용방면", "산동면",
];
export const YEONGAM_LOCATION: string[] = [
  "영암읍", "삼호읍", "군서면", "덕진면", "금정면", "도포면", "미암면", "신북면", "시종면", "서호면", "학산면", 
];
export const HAMPYEONG_LOCATION: string[] = [
  "함평읍", "대동면", "나산면", "손불면", "신광면", "학교면", "엄다면", "해보면", "월야면",
];
export const YEONGGWANG_LOCATION: string[] = [
  "영광읍", "백수읍", "홍농읍", "군서면", "군남면", "낙월면", "대마면", "묘량면", "불갑면", "염산면", "법성면",
];
export const JANGSEONG_LOCATION: string[] = [
  "장성읍", "남면", "동화면", "북일면", "북이면", "북하면", "삼서면", "삼계면", "진원면", "황룡면", "서삼면",
];
export const JEONNAM_DISTRICT_OPTIONS: districtOptionsType = {
  "목포시": MOKPO_LOCATION,
  "여수시": YEOSU_LOCATION,
  "순천시": SUNCHEON_LOCATION,
  "나주시": NAJU_LOCATION,
  "광양시": GWANGYANG_LOCATION,
  "담양군": DAMYANG_LOCATION,
  "곡성군": GOKSEONG_LOCATION,
  "구례군": GURYE_LOCATION,
  "고흥군": GOHEUNG_LOCATION,
  "보성군": BOSEONG_LOCATION,
  "화순군": HWA_SUN_LOCATION,
  "장흥군": JANGHEUNG_LOCATION,
  "강진군": GANGJIN_LOCATION,
  "해남군": HAENAM_LOCATION,
  "영암군": YEONGAM_LOCATION,
  "무안군": MUAN_LOCATION,
  "함평군": HAMPYEONG_LOCATION,
  "영왕군": YEONGGWANG_LOCATION,
  "장성군": JANGSEONG_LOCATION,
  "완도군": WANDO_LOCATION,
  "진도군": JINDO_LOCATION,
  "신안군": SINAN_LOCATION,
};

// 세종
export const SEJONG_LOCATION: string[] = [
  "고운동", "나성동", "다정동", "대평동", "도담동", "반곡동", "보람동", "새롬동", "소담동", "아름동", "어진동", "종촌동", "한솔동", "해밀동",
];
export const SEJONG_DISTRICT_OPTIONS: districtOptionsType = {
  "세종특별자치시": SEJONG_LOCATION,
};

// 여기부터
// 광주
export const GWANGJU_DONGGU_LOCATION: string[] = [
  "광산동", "금남로", "궁동", "동명동", "산수동", "불로동", "충장로", "학동", "계림동", "운림동",
];
export const GWANGJU_SEOGU_LOCATION: string[] = [
  "농성동", "양동", "치평동", "화정동", "유덕동", "동천동", "서창동", "풍암동", "내방동", "상무동",
];
export const GWANGJU_NAMGU_LOCATION: string[] = [
  "방림동", "백운동", "봉선동", "월산동", "임암동", "진월동", "노대동", "대촌동", "효천동", "양림동",
];
export const GWANGJU_BUKGU_LOCATION: string[] = [
  "문흥동", "두암동", "삼각동", "문화동", "운암동", "용봉동", "일곡동", "매곡동", "중흥동", "오치동",
];
export const GWANGSAN_LOCATION: string[] = [
  "송정동", "월곡동", "운남동", "첨단동", "비아동", "도산동", "수완동", "임곡동", "평동",
];
export const GWANGJU_DISTRICT_OPTIONS: districtOptionsType = {
  "동구": GWANGJU_DONGGU_LOCATION,
  "서구": GWANGJU_SEOGU_LOCATION,
  "남구": GWANGJU_NAMGU_LOCATION,
  "북구": GWANGJU_BUKGU_LOCATION,
  "광산구": GWANGSAN_LOCATION,
};

// 울산
export const ULSAN_JUNGGU_LOCATION: string[] = [
  "다운동", "태화동", "우정동", "성안동", "중앙동", "복산동", "학성동", "반구동", "약사동", "병영동",
];
export const ULSAN_NAMGU_LOCATION: string[] = [
  "달동", "삼산동", "신정동", "옥동", "대현동", "수암동", "야음장생포동", "선암동", "무거동", "삼호동",
];
export const ULSAN_DONGGU_LOCATION: string[] = [
  "남목동", "화정동", "전하동", "화정동", "대송동", "일산동", "방어동",
];
export const ULSAN_BUKGU_LOCATION: string[] = [
  "농소동", "송정동", "효문동", "양정동", "염포동", "강동동",
];
export const ULJU_LOCATION: string[] = [
  "범서읍", "언양읍", "온산읍", "온양읍", "청량읍", "삼남읍", "두동면", "두서면", "삼동면", "상북면", "서생면", "웅촌면",
];
export const ULSAN_DISTRICT_OPTIONS: districtOptionsType = {
  "중구": ULSAN_JUNGGU_LOCATION,
  "남구": ULSAN_NAMGU_LOCATION,
  "동구": ULSAN_DONGGU_LOCATION,
  "북구": ULSAN_BUKGU_LOCATION,
  "울주군": ULJU_LOCATION,
};

// 부산
export const JUNG_GU_LOCATION: string[] = [
  "중앙동", "대청동", "동광동", "대창동", "보수동", "광복동", "부평동", "신창동", "창선동", "남포동", "영주동",
];
export const SEO_GU_LOCATION: string[] = [
  "동대신동", "서대신동", "부민동", "아미동", "초장동", "충무동", "남부민동", "암남동",
];
export const DONG_GU_LOCATION: string[] = [
  "초량동", "수정동", "좌천동", "범일동",
];
export const YEONGDO_GU_LOCATION: string[] = [
  "남항동", "봉래동", "신선동", "영선동", "청학동", "동삼동",
];
export const BUSAN_JIN_GU_LOCATION: string[] = [
  "가야동", "개금동", "당감동", "범전동", "범천동", "부암동", "부전동", "양정동", "연지동", "전포동", "초읍동",
];
export const DONGRAE_GU_LOCATION: string[] = [
  "낙민동", "명륜동", "명장동", "복천동", "온천동", "안락동", "수안동", "사직동", "칠산동",
];
export const NAM_GU_LOCATION: string[] = [
  "대연동", "문현동", "용호동", "용당동", "우암동", "감만동",
];
export const BUK_GU_LOCATION: string[] = [
  "구포동", "금곡동", "덕천동", "만덕동", "화명동",
];
export const HAEUNDAE_GU_LOCATION: string[] = [
  "반송동", "반여동", "석대동", "중동", "좌동", "송정동", "우동", "재송동",
];
export const SASANG_GU_LOCATION: string[] = [
  "감전동", "괘법동", "덕포동", "모라동", "삼락동", "엄궁동", "주례동", "학장동",
];
export const SAHA_GU_LOCATION: string[] = [
  "감천동", "괴정동", "구평동", "다대동", "당리동", "장림동", "신평동", "하단동",
];
export const GEUMJEONG_GU_LOCATION: string[] = [
  "구서동", "금사회동동", "금성동", "남산동", "청룡노포동", "선두구동", "부곡동", "오륜동", "서동", "장전동",
];
export const GANGSEO_GU_LOCATION: string[] = [
  "대저동", "강동동", "명지동", "죽림동", "식만동", "죽동동", "봉림동", "송정동", "화전동", "녹산동", "생곡동", "구랑동", "지사동", "미음동", "범방동", "신호동", "동선동", "성북동", "눌차동", "천성동", "대항동",
];
export const YEONJE_GU_LOCATION: string[] = [
  "거제동", "연산동",
];
export const SUYEONG_GU_LOCATION: string[] = [
  "광안동", "남천동", "망미동", "민락동", "수영동",
];
export const GIJANG_GUN_LOCATION: string[] = [
  "기장읍", "장안읍", "정관읍", "일광읍", "철마면",
]
export const BUSAN_DISTRICT_OPTIONS: districtOptionsType = {
  "중구": JUNG_GU_LOCATION,
  "서구": SEO_GU_LOCATION,
  "동구": DONG_GU_LOCATION,
  "영도구": YEONGDO_GU_LOCATION,
  "부산진구": BUSAN_JIN_GU_LOCATION,
  "동래구": DONGRAE_GU_LOCATION,
  "남구": NAM_GU_LOCATION,
  "북구": BUK_GU_LOCATION,
  "해운대구": HAEUNDAE_GU_LOCATION,
  "사하구": SAHA_GU_LOCATION,
  "금정구": GEUMJEONG_GU_LOCATION,
  "강서구": GANGSEO_GU_LOCATION,
  "연제구": YEONJE_GU_LOCATION,
  "수영구": SUYEONG_GU_LOCATION,
  "사상구": SASANG_GU_LOCATION,
  "기장군": GIJANG_GUN_LOCATION,
};

// 경북
export const ANDONG_LOCATION: string[] = [
  "강남동", "명륜동", "서구동", "송하동", "안기동", "옥동", "용상동", "중구동", "태화동", "평화동",
];
export const GYEONGJU_LOCATION: string[] = [
  "동천동", "보덕동", "불국동", "선도동", "성건동", "용강동", "월성동", "중부동", "황남동", "황성동", "황오동",
];
export const KIMCHEON_LOCATION: string[] = [
  "자산동", "평화남산동", "양금동", "대신동", "대곡동", "지좌동", "율곡동",
];
export const GUMI_LOCATION: string[] = [
  "송정동", "원평동", "지산동", "양포동", "선주원남동", "형곡동", "공단동", "신평동", "비산동", "도량동", "광평동", "상모사곡동", "임오동", "인동동", "진미동",
];
export const YEONGCHEON_LOCATION: string[] = [
  "남부동", "동부동", "서부동", "완산동", "중앙동",
];
export const BONGHWA_LOCATION: string[] = [
  "봉화읍", "명호면", "물야면", "법전면", "봉성면", "상운면", "석포면", "소천면", "재산면", "춘양면",
];
export const GYEONGSAN_LOCATION: string[] = [
  "남부동", "동부동", "북부동", "서부동", "중방동", "중앙동",
];
export const MUNGYEONG_LOCATION: string[] = [
  "점촌동", "문경읍", "가은읍", "농암면", "동로면", "마성면", "호계면", "영순면", "산북면", "산양면",
];
export const SANGJU_LOCATION: string[] = [
  "계림동", "남원동", "동문동", "동성동", "북문동", "신흥동",
];
export const YEONGJU_LOCATION: string[] = [
  "가흥동", "상망동", "하망동", "영주동", "휴천동",
];
export const POHANG_LOCATION: string[] = [
  "남구", "북구",
];
export const GORYEONG_LOCATION: string[] = [
  "대가야읍", "개진면", "다산면", "덕곡면", "성산면", "쌍림면", "운수면", "우곡면", 
];
export const SEONGJU_LOCATION: string[] = [
  "성주읍", "가천면", "금수강산면", "선남면", "대가면", "벽진면", "수륜면", "초전면", "월항면", "용암면",
];
export const YEONGDEOK_LOCATION: string[] = [
  "영덕읍", "강구면", "남정면", "달산면", "병곡면", "창수면", "지품면", "영해면", "축산면",
];
export const YEONGYANG_LOCATION: string[] = [
  "영양읍", "입암면", "석보면", "일월면", "수비면", "청기면",
];
export const YECHEON_LOCATION: string[] = [
  "예천읍", "호명읍", "감천면", "개포면", "보문면", "용문면", "유천면", "용궁면", "지보면", "풍양면", "효자면", "은풍면",
];
export const ULLEUNG_LOCATION: string[] = [
  "울릉읍", "서면", "북면",
];
export const ULJIN_LOCATION: string[] = [
  "울진읍", "평해읍", "근남면", "기성면", "금강송면", "매화면", "북면", "죽변면", "후포면", "온정면", 
];
export const UISEONG_LOCATION: string[] = [
  "의성읍", "가음면", "구천면", "금성면", "다인면", "단밀면", "단북면", "단촌면", "비안면", "봉양면", "사곡면", "신평면", "안계면", "안사면", "안평면", "점곡면", "옥산면", "춘산면", 
];
export const CHEONGDO_LOCATION: string[] = [
  "청도읍", "화양읍", "각남면", "각북면", "풍각면", "이서면", "운문면", "금천면", "매전면", 
];
export const CHEONGSONG_LOCATION: string[] = [
  "청송읍", "부남면", "안덕면", "현서면", "현동면", "파천면", "진보면", "주왕산면",
];
export const CHILGOK_LOCATION: string[] = [
  "북삼읍", "석적읍", "왜관읍", "가산면", "기산면", "약목면", "지천면", "동명면",
];
export const GYEONGBUK_DISTRICT_OPTIONS: districtOptionsType = {
  "경산시": GYEONGSAN_LOCATION,
  "경주시": GYEONGJU_LOCATION,
  "구미시": GUMI_LOCATION,
  "김천시": KIMCHEON_LOCATION,
  "문경시": MUNGYEONG_LOCATION,
  "상주시": SANGJU_LOCATION,
  "안동시": ANDONG_LOCATION,
  "영주시": YEONGJU_LOCATION,
  "영천시": YEONGCHEON_LOCATION,
  "포항시": POHANG_LOCATION,
  "고령군": GORYEONG_LOCATION,
  "봉화군": BONGHWA_LOCATION,
  "성주군": SEONGJU_LOCATION,
  "영덕군": YEONGDEOK_LOCATION,
  "영양군": YEONGYANG_LOCATION,
  "예천군": YECHEON_LOCATION,
  "울릉군": ULLEUNG_LOCATION,
  "울진군": ULJIN_LOCATION,
  "의성군": UISEONG_LOCATION,
  "청도군": CHEONGDO_LOCATION,
  "청송군": CHEONGSONG_LOCATION,
  "칠곡군": CHILGOK_LOCATION,
};

// 경남
export const CHANGWON_LOCATION: string[] = [
  "의창구", "성산구", "진해구", "마산합포구", "마산회원구",
];
export const GIMHAE_LOCATION: string[] = [
  "내외동", "동상동", "부원동", "북부동", "불암동", "삼안동", "장유동", "칠산서부동", "활천동", "회현동",
];
export const JINJU_LOCATION: string[] = [
  "가호동", "상대동", "상봉동", "상평동", "성북동", "신안동", "이현동", "중앙동", "천전동", "초장동", "충무공동", "판문동", "평거동", "하대동",
];
export const CHANGYEONG_LOCATION: string[] = [
  "창녕읍", "남지읍", "계성면", "고암면", "길곡면", "대지면", "대합면", "도천면", "부곡면", "성산면", "영산면", "유어면", "이방면", "장마면",
];
export const YANGSAN_LOCATION: string[] = [
  "중앙동", "양주동", "삼성동", "강서동", "서창동", "소주동", "평산동", "덕계동",
];
export const GEOJE_LOCATION: string[] = [
  "고현동", "상문동", "수양동", "장평동", "능포동", "장승포동", "아주동", "옥포동",
];
export const MIRYANG_LOCATION: string[] = [
  "삼문동", "내일동", "가곡동", "내이동", "교동",
];
export const SACHEON_LOCATION: string[] = [
  "남양동", "동서동", "동서금동", "벌용동", "선구동", "향촌동",
];
export const TONGYEONG_LOCATION: string[] = [
  "도천동", "명정동", "무전동", "미수동", "봉평동", "북신동", "정량동", "중앙동",
];
export const GEOCHANG_LOCATION: string[] = [
  "거창읍", "가조면", "가북면", "고제면", "남상면", "남하면", "마리면", "북상면", "신원면", "웅양면", "위천면", "주상면",
];
export const GYEONGNAM_GOSEONG_LOCATION: string[] = [
  "고성읍", "개천면", "거류면", "구만면", "대가면", "동해면", "마암면", "삼산면", "상리면", "하이면", "하일면", "영오면", "영현면", "회화면",
];
export const NAMHAE_LOCATION: string[] = [
  "남해읍", "고현면", "남면", "미조면", "삼동면", "상주면", "서면", "설천면", "창선면", "이동면",
];
export const SANCHEONG_LOCATION: string[] = [
  "산청읍", "차황면", "오부면", "생초면", "금서면", "삼장면", "시천면", "단성면", "신안면", "생비량면", "신등면",
];
export const UIREONG_LOCATION: string[] = [
  "의령읍", "가례면", "칠곡면", "대의면", "화정면", "용덕면", "정곡면", "지정면", "낙서면", "부림면", "봉수면", "궁류면", "유곡면",
];
export const HADONG_LOCATION: string[] = [
  "하동읍", "고전면", "금남면", "금성면", "북천면", "악양면", "양보면", "옥종면", "적량면", "진교면", "횡천면", "청암면", "화개면", 
];
export const HAMAN_LOCATION: string[] = [
  "가야읍", "칠원읍", "군북면", "대산면", "산인면", "법수면", "여항면", "칠서면", "칠북면", "함안면",
];
export const HAMYANG_LOCATION: string[] = [
  "함양읍", "마천면", "백전면", "서상면", "서하면", "수동면", "안의면", "휴천면", "유림면", "지곡면", "병곡면",
];
export const HAPCHEON_LOCATION: string[] = [
  "합천읍", "가야면", "가회면", "대병면", "대양면", "덕곡면", "묘산면", "봉산면", "쌍백면", "쌍책면", "야로면", "용주면", "율곡면", "적중면", "초계면", "청덕면", "삼가면",
];
export const GYEONGNAM_DISTRICT_OPTIONS: districtOptionsType = {
  "창원시": CHANGWON_LOCATION,
  "거제시": GEOJE_LOCATION,
  "김해시": GIMHAE_LOCATION,
  "밀양시": MIRYANG_LOCATION,
  "사천시": SACHEON_LOCATION,
  "양산시": YANGSAN_LOCATION,
  "진주시": JINJU_LOCATION,
  "통영시": TONGYEONG_LOCATION,
  "거창군": GEOCHANG_LOCATION,
  "고성군": GOSEONG_LOCATION,
  "남해군": NAMHAE_LOCATION,
  "산청군": SANCHEONG_LOCATION,
  "의령군": UIREONG_LOCATION,
  "창녕군": CHANGYEONG_LOCATION,
  "하동군": HADONG_LOCATION,
  "함안군": HAMAN_LOCATION,
  "함양군": HAMYANG_LOCATION,
  "합천군": HAPCHEON_LOCATION,
};

// 제주
export const SEOGWIPO_LOCATION: string[] = [
  "송산동", "정방동", "중앙동", "천지동", "효돈동", "영천동", "동홍동", "서홍동", "대륜동", "대천동", "중문동", "예래동",
];
export const JEJU_LOCATION: string[] = [
  "건입동", "노형동", "도두동", "봉개동", "삼도동", "삼양동", "아라동", "연동", "외도동", "오라동", "용담동", "이도동", "이호동", "일도동", "화북동",
];
export const JEJU_DISTRICT_OPTIONS: districtOptionsType = {
  "서귀포시": SEOGWIPO_LOCATION,
  "제주시": JEJU_LOCATION,
};

export type localType = {[key: string]: districtOptionsType}

// 전국
// 키값: 1차 필터, 밸류값: 2차 필터(배열)
export const LOCAL_CITY_OPTIONS: localType = {
  '서울': SEOUL_DISTRICT_OPTIONS,
  '경기': GYEONGGI_DISTRICT_OPTIONS,
  '인천': INCHEON_DISTRICT_OPTIONS,
  '강원': GANGWON_DISTRICT_OPTIONS,
  '대전': DAEJEON_DISTRICT_OPTIONS,
  '대구': DAEGU_DISTRICT_OPTIONS,
  '세종': SEJONG_DISTRICT_OPTIONS,
  '충북': CHUNGBUK_DISTRICT_OPTIONS,
  '충남': CHUNGNAM_DISTRICT_OPTIONS,
  '광주': GWANGJU_DISTRICT_OPTIONS,
  '전북': JEONBUK_DISTRICT_OPTIONS,
  '전남': JEONNAM_DISTRICT_OPTIONS,
  '부산': BUSAN_DISTRICT_OPTIONS,
  '울산': ULSAN_DISTRICT_OPTIONS,
  '경북': GYEONGBUK_DISTRICT_OPTIONS,
  '경남': GYEONGNAM_DISTRICT_OPTIONS,
  '제주': JEJU_DISTRICT_OPTIONS
}