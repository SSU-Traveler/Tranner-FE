import { FutureWeather } from '../types/weather.type';

const WEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export async function getFutureWeather(lat: number, lon: number): Promise<FutureWeather | undefined> {
  try {
    const response = await fetch(
      `/openweather-api/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`
    );
    const data: FutureWeather = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('OpenWeather API 오류: ', error);
  }
}

const WEATHER_AUTH_KEY = import.meta.env.VITE_WEATHER_AUTH_KEY;

export async function getWeatherApi() {
  try {
    const textResponse = await fetch(
      `/weather-api/api/typ01/url/kma_sfctm2.php?tm=202211300900&stn=0&authKey=${WEATHER_AUTH_KEY}`
    );
    const textData = await textResponse.text();
    console.log(textData);
    const parsedData = parseWeatherData(textData);
    console.log(parsedData);
  } catch (error) {
    console.error('날씨 API 오류:', error);
  }
}

function parseWeatherData(rawData: string) {
  const lines = rawData.trim().split('\n'); // 줄 단위로 분리
  const weatherData: { [key: string]: string | number }[] = [];
  // 세세하게 타입을 써야 할 듯

  lines.forEach((line) => {
    // 각 라인을 공백 기준으로 나눔
    const fields = line.trim().split(/\s+/);

    // 데이터를 JSON 객체로 변환
    weatherData.push({
      date: fields[0], // TM(YYMMDDHHMI): 관측시각(KST) (날짜와 시간)
      stationNum: fields[1], // STN: 국내 지점번호
      windDirection: fields[2], // WD: 풍향(16방위)
      windSpeed: parseFloat(fields[3]), // WS: 풍속(m/s)
      gustOfWindDirection: parseFloat(fields[4]), // GST_WD: 돌풍향(16방위)
      gustOfWindSpeed: parseFloat(fields[5]), // GST_WS: 돌풍속(m/s)
      gustOfTime: parseFloat(fields[6]), // GST_TM: 돌풍속이 관측된 시각(시분)
      airPressure: parseFloat(fields[7]), // PA: 현지기압(hPa)
      seaPressure: parseFloat(fields[8]), // PS: 해면기압(hPa)
      temperature: parseFloat(fields[11]), // TA: 기온(C)
      humidity: parseFloat(fields[13]), // HM: 상대습도(%)
    });
  });

  return weatherData;
}
