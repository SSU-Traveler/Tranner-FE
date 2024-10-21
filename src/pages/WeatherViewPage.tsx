import getWeatherApi from '../api/weather.api';
import FilterButton from '../components/common/FilterButton';
import PlaceInput from '../components/input/PlaceInput';

export default function WeatherViewPage() {
  const WEATHER_AUTH_KEY = import.meta.env.VITE_WEATHER_AUTH_KEY;

  const apiUrl = `https://apihub.kma.go.kr/api/json?authKey=${WEATHER_AUTH_KEY}`;
  // const apiUrl =
  //   'https://apihub.kma.go.kr/api/typ01/url/kma_sfctm2.php?tm=202211300900&stn=0&help=1&authKey=npCE1PlXSUCQhNT5VylA7w';
  // const savePath = "/path/to/save/file.json";
  getWeatherApi(apiUrl);

  return (
    <>
      <section
        style={{ backgroundImage: `url("images/weather/sunny-day.jpg")` }}
        className="absolute top-0 left-0 w-[100vw] h-[400px] bg-cover bg-center flex justify-center items-center"
      >
        <PlaceInput searchObj="날씨" />
      </section>
      <section className="absolute mt-[420px]">
        <div className="border border-[#B2B9C0] p-[20px] rounded-[8px] ">
          <nav className="flex flex-wrap gap-[8px] mb-[20px]">
            <FilterButton buttonName="서울" />
            <FilterButton buttonName="경기" />
            <FilterButton buttonName="인천" />
            <FilterButton buttonName="서대문구" />
          </nav>
        </div>
      </section>
    </>
  );
}
