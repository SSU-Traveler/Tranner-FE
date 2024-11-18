import getWeatherApi from '../api/weather.api';
import FilterButtonFormat from '../components/format/FilterButtonFormat';
import PlaceInput from '../components/input/PlaceInput';

export default function WeatherViewPage() {
  const WEATHER_AUTH_KEY = import.meta.env.VITE_WEATHER_AUTH_KEY;

  const apiUrl = `/weather-api/api/typ01/url/json?tm=202211300900&stn=0&help=1&authKey=${WEATHER_AUTH_KEY}`;
  // const savePath = "/path/to/save/file.json";
  getWeatherApi();

  return (
    <>
      <section
        style={{ backgroundImage: `url("images/weather/sunny-day.jpg")` }}
        className="absolute top-0 left-0 w-full h-[400px] bg-cover bg-center flex justify-center items-center"
      >
        <PlaceInput searchObj="날씨를" />
      </section>
      <section className="absolute mt-[420px] mr-[120px]">
        <div className="border border-[#B2B9C0] p-[20px] rounded-[8px] ">
          <FilterButtonFormat />
        </div>
      </section>
    </>
  );
}
