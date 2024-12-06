import { CurrentWeather, FutureWeather } from '../types/weather.type';

const WEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export async function getCurrentWeather(lat: number, lon: number): Promise<CurrentWeather | undefined> {
  try {
    const response = await fetch(
      `/openweather-api/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Current Weather API 오류: ', error);
  }
}

export async function getFutureWeather(lat: number, lon: number): Promise<FutureWeather | undefined> {
  try {
    const response = await fetch(
      `/openweather-api/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`
    );
    const data: FutureWeather = await response.json();
    return data;
  } catch (error) {
    console.error('Future Weather API 오류: ', error);
  }
}
