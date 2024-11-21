import { useEffect, useState } from 'react';
import { getFutureWeather } from '../api/weather.api';
import DataLoading from '../components/common/DataLoading';
import FilterButton from '../components/common/FilterButton';
import PlaceInput from '../components/input/PlaceInput';
import Table from '../components/weather/Table';
import { CITY_OPTIONS } from '../constants/options';
import { useChainOption } from '../hooks/useChainOption';
import { FutureWeather, FutureWeatherList } from '../types/weather.type';
import groupWeatherData from '../utils/groupWeatherData';

export default function WeatherViewPage() {
  const [todayFutureWeather, setTodayFutureWeather] = useState<FutureWeatherList[][]>([]);
  const [futureWeathers, setFutureWeathers] = useState<FutureWeatherList[][]>([]);
  const { primaryOption, secondaryOptions, selectedOption, handleChangeOption, handleChangeSecondaryButton } =
    useChainOption();

  useEffect(() => {
    async function fetchFutureWeather() {
      const result: FutureWeather | undefined = await getFutureWeather(37.5665, 126.978);
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
  }, []);

  console.log(todayFutureWeather);

  return (
    <>
      <section
        style={{ backgroundImage: `url("images/weather/sunny-day.jpg")` }}
        className="absolute top-0 left-0 w-full h-[400px] bg-cover bg-center flex justify-center items-center"
      >
        <PlaceInput searchObj="날씨를" />
      </section>
      <section className="absolute mt-[420px] mr-[120px] lg:w-[1448px]">
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
            <summary className="pb-[5px] pl-[5px]">현재 날씨</summary>
          </details>
          <details open>
            <summary className="pb-[5px] pl-[5px]">미래 날씨</summary>
            {futureWeathers.length > 0 ? (
              <div className="py-[10px] px-[15px] mx-[20px] my-[5px] border border-[#B2B9C0] rounded-[8px]">
                {/* <div className={textStyle}>11.20.(수)</div>
                <div className={divStyle}>
                  <table className={tableStyle}>
                    <TableHeader />
                    <TableBody weathers={todayFutureWeather[0]} />
                  </table>
                </div> */}
                {futureWeathers.map((futureWeather) => (
                  <Table weather={futureWeather} />
                ))}
              </div>
            ) : (
              <DataLoading />
            )}
          </details>
        </div>
      </section>
    </>
  );
}
