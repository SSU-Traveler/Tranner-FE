export type Weather = {
  description: string; // 그룹 내 날씨 상태
  icon: string; // 날씨 아이콘 아이디
  id: number; // 기상 조건 ID
  main: string; // 날씨 매개변수 그룹(비, 눈, 구름 등)
};

export type Main = {
  feels_like: number; // 체감 온도 (℃)
  grnd_level: number; // 지상의 대기압 (hPa)
  humidity: number; // 습도 (%)
  pressure: number; // 기본적으로 해수면의 대기압 (hPa)
  sea_level: number; // 기본적으로 해수면의 대기압 (hPa)
  temp: number; // 온도 (℃)
  temp_kf?: number;
  temp_max?: number; // 최고 기온, 최대 예측 온도(대도시 및 도시 지역 내) (℃)
  temp_min?: number; // 최저 기온, 최소 예측 온도(대도시 및 도시 지역 내) (℃)
};

export type FutureWeatherList = {
  clouds: {
    all: number; // 흐림 정도 (%)
  };
  dt: number; // 데이터 예측 시간 (Unix, UTC) *한국 시간으로 변환 필요!
  dt_txt: string; // 데이터 예측 시간 (ISO, UTC) *한국 시간으로 변환 필요!
  main: Main;
  pop: number; // 강수 확률 (0에서 1사이, 0은 0%, 1은 100%)
  sys: {
    pod: string; // 하루 중 일부 (n은 밤, d는 낮)
  };
  visibility: number; // 평균 가시거리 (meter, 가시거리의 최대값은 10km)
  weather: Weather[];
  wind: {
    speed: number; // 풍속 (m/s)
    deg: number; // 풍향, 각도(기상)
    gust: number; // 돌풍 (m/s)
  };
};

export type FutureWeather = {
  city: {
    coord: {
      lat: number; // 위도
      lon: number; // 경도
    };
    country: string; // 국가 코드 (내장된 지오코딩 기능은 더 이상 사용되지 않음)
    id: number; // 도시 ID (내장된 지오코딩 기능은 더 이상 사용되지 않음)
    name: string; // 도시 이름 (내장된 지오코딩 기능은 더 이상 사용되지 않음)
    population: number; // 도시 인구
    sunrise: number; // 일출 시간 (Unix, UTC)
    sunset: number; // 일몰 시간 (Unix, UTC)
    timezone: number; // UTC에서 초 단위로 이동
  };
  cnt: number; // API 응답에 반환된 타임스탬프 수
  cod: string;
  list: FutureWeatherList[];
  message: number;
};

export type CurrentWeather = {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lat: number;
    lon: number;
  };
  dt: number;
  id: number;
  main: Main;
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: Weather[];
  wind: {
    deg: number;
    speed: number;
    gust?: number;
  };
  rain?: {
    '1h': number; // (사용 가능한 경우)강수량 (mm/h)
  };
  snow?: {
    '1h': number; // (사용 가능한 경우)강설량 (mm/h)
  };
};
