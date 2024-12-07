import { useEffect, useState } from 'react';
import { getCurrentWeather, getFutureWeather } from '../api/weather.api';
import DataLoading from '../components/common/DataLoading';
import FilterButton from '../components/common/FilterButton';
import PlaceInput from '../components/input/PlaceInput';
import Table from '../components/weather/Table';
import { WEATHER_BACKGROUNDS } from '../constants/backgrounds';
import { KOREA_DISTRICT_INDICATORS, SEOUL_DISTRICT_INDICATORS } from '../constants/indicators';
import { CITY_OPTIONS } from '../constants/options';
import { useChainOption } from '../hooks/useChainOption';
import { CurrentWeather, FutureWeather, FutureWeatherList } from '../types/weather.type';
import convertUnixToKST from '../utils/convertUnixToKST';
import getWeatherDescription from '../utils/getWeatherDescription';
import getWindDirection from '../utils/getWindDirection';
import groupWeatherData from '../utils/groupWeatherData';

export default function WeatherViewPage() {
  const [lat, setLat] = useState<number>(SEOUL_DISTRICT_INDICATORS[0].lat);
  const [lng, setLng] = useState<number>(SEOUL_DISTRICT_INDICATORS[0].lng);
  const [todayWeather, setTodayWeather] = useState<CurrentWeather | null>(null);
  const [todayFutureWeather, setTodayFutureWeather] = useState<FutureWeatherList[][]>([]);
  const [futureWeathers, setFutureWeathers] = useState<FutureWeatherList[][]>([]);
  const { primaryOption, secondaryOptions, selectedOption, handleChangeOption, handleChangeSecondaryButton } =
    useChainOption();

  const backgroundImg =
    (todayWeather && WEATHER_BACKGROUNDS[todayWeather.weather[0].main]) || '/images/weather/sunny-day.jpg';

  const description = todayWeather?.weather[0]?.description;
  const weatherDescription = description ? getWeatherDescription(description) : null;

  const [weatherEmoji, ...weatherContent] = weatherDescription ? weatherDescription.split(' ') : [];
  const weatherStr = weatherContent.join(' ');

  const currentTime = new Date().getTime();

  useEffect(() => {
    const selectedEle = KOREA_DISTRICT_INDICATORS[primaryOption].filter((e) => e.name === selectedOption);
    const lat = selectedEle[0].lat;
    const lng = selectedEle[0].lng;
    setLat(lat);
    setLng(lng);
  }, [primaryOption, selectedOption]);

  useEffect(() => {
    async function fetchCurrentWeather() {
      const result: CurrentWeather | undefined = await getCurrentWeather(lat, lng);
      if (result) {
        setTodayWeather(result);
      }
    }
    fetchCurrentWeather();
  }, [lat, lng]);

  useEffect(() => {
    async function fetchFutureWeather() {
      const result: FutureWeather | undefined = await getFutureWeather(lat, lng);
      if (result) {
        const weatherList: FutureWeatherList[] = result.list;
        const groupedWeatherList: FutureWeatherList[][] = groupWeatherData(weatherList);
        const today = [groupedWeatherList[0]];
        const notToday = groupedWeatherList.slice(1);
        setTodayFutureWeather(today);
        setFutureWeathers(notToday);
      }
    }
    fetchFutureWeather();
  }, [lat, lng]);

  return (
    <div>
      <section
        style={{ backgroundImage: `url(${backgroundImg})` }}
        className="top-0 left-0 w-full h-[400px] bg-cover bg-center flex justify-center items-center"
      >
        <PlaceInput
          searchObj="날씨를"
          handleChangeRegion={handleChangeSecondaryButton}
          handleChangeCountry={handleChangeOption}
        />
      </section>
      <section className="my-[20px] px-[120px]">
        <div className="border border-[#B2B9C0] p-[20px] rounded-[8px] bg-white">
          {/* <FilterButtonFormat /> */}
          <nav className="flex flex-col gap-y-[20px] mb-[30px]">
            <div className="flex flex-wrap gap-[8px]">
              {Object.keys(CITY_OPTIONS).map((option) => (
                <FilterButton
                  key={option}
                  buttonName={option}
                  selectedOption={primaryOption}
                  onClick={() => handleChangeSecondaryButton(option)}
                />
              ))}
            </div>
            <div className="flex flex-wrap gap-[8px]">
              {secondaryOptions.map((option) => (
                <FilterButton
                  key={option}
                  buttonName={option}
                  selectedOption={selectedOption}
                  onClick={handleChangeOption}
                />
              ))}
            </div>
          </nav>
          <details open>
            <summary className="pb-[5px] pl-[5px]">오늘 날씨</summary>
            <div className="pt-[10px] mx-[20px] my-[5px] border border-[#B2B9C0] rounded-[8px] flex flex-col items-center">
              {todayWeather && todayFutureWeather ? (
                <div className="w-full">
                  <div className="flex justify-center text-[75px] font-bold">
                    <p>{weatherEmoji}</p>
                    <p>{todayWeather?.main.temp}℃</p>
                  </div>
                  <p className="text-[22px] text-center font-bold mt-[-10px] mb-[10px]">{weatherStr}</p>
                  <div className="flex justify-center gap-[15px] text-[18px] mb-[10px]">
                    <p>
                      <span className="text-gray-500">체감</span>{' '}
                      <span className="font-bold">{todayWeather?.main.feels_like}℃</span>
                    </p>
                    <p>
                      <span className="text-gray-500">습도 </span>
                      <span className="font-bold">{todayWeather.main.humidity}%</span>
                    </p>
                    <p>
                      <span className="text-gray-500">{getWindDirection(todayWeather.wind.deg)}</span>{' '}
                      <span className="font-bold">{todayWeather.wind.speed}m/s</span>
                    </p>{' '}
                    {currentTime < todayWeather.sys.sunrise * 1000 && (
                      <p>
                        <span className="text-gray-500">일출</span>{' '}
                        <span className="font-bold">
                          {convertUnixToKST(todayWeather.sys.sunrise).split('T')[1].slice(0, 5)}
                        </span>
                      </p>
                    )}
                    {currentTime > todayWeather.sys.sunrise * 1000 && currentTime < todayWeather.sys.sunset * 1000 && (
                      <p>
                        <span className="text-gray-500">일몰</span>{' '}
                        <span className="font-bold">
                          {convertUnixToKST(todayWeather.sys.sunset).split('T')[1].slice(0, 5)}
                        </span>
                      </p>
                    )}
                    <p>
                      <span className="text-gray-500">흐림 정도</span>{' '}
                      <span className="font-bold">{todayWeather.clouds.all}%</span>
                    </p>
                    {todayWeather.rain && (
                      <p>
                        <span className="text-blue-400">강수</span>{' '}
                        <span className="font-bold">{todayWeather.rain['1h']}mm</span>
                      </p>
                    )}
                    {todayWeather.snow && (
                      <p>
                        <span className="text-blue-400">강설</span>{' '}
                        <span className="font-bold">{todayWeather.snow['1h']}mm</span>
                      </p>
                    )}
                  </div>
                  <div className="flex justify-center items-center gap-[10px] text-[18px] mb-[20px]">
                    <div className="flex flex-col items-center rounded-[10px] bg-blue-300 p-[7px] w-[100px]">
                      <p className="text-white">최저</p>
                      <p className="font-bold">{todayWeather.main.temp_min}℃</p>
                    </div>
                    <div className="flex flex-col items-center rounded-[10px] bg-red-300 p-[7px] w-[100px]">
                      <p className="text-white">최고</p>
                      <p className="font-bold">{todayWeather.main.temp_max}℃</p>
                    </div>
                  </div>
                  <div className="px-[15px]">
                    <Table weather={todayFutureWeather[0]} isToday={true} />
                  </div>
                </div>
              ) : (
                <DataLoading />
              )}
            </div>
          </details>
          <details open>
            <summary className="pb-[5px] pl-[5px]">미래 날씨</summary>
            <div className="pt-[20px] px-[15px] mx-[20px] my-[5px] border border-[#B2B9C0] rounded-[8px]">
              {futureWeathers.length > 0 ? (
                futureWeathers.map((futureWeather, index) => (
                  <Table key={index} weather={futureWeather} index={index} isToday={false} />
                ))
              ) : (
                <DataLoading />
              )}
            </div>
          </details>
        </div>
      </section>
    </div>
  );
}
