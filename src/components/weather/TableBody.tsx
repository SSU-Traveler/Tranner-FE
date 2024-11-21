import { FutureWeatherList } from '../../types/weather.type';
import getWeatherDescription from '../../utils/getWeatherDescription';
import getWindDirection from '../../utils/getWindDirection';

const tableStyle = 'border border-gray-300 p-[10px] text-center text-[18px]';
const TimeInterval = ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'];

export default function TableBody({ weathers }: { weathers: FutureWeatherList[] }) {
  return (
    <tbody>
      {weathers.map((weather, index) => (
        <tr>
          <td className={tableStyle}>{TimeInterval[index]}</td>
          <td className={tableStyle}>{weather.main.temp}℃</td>
          <td className={tableStyle}>{weather.main.feels_like}℃</td>
          <td className={tableStyle}>{weather.main.humidity}%</td>
          <td className={tableStyle}>{getWeatherDescription(weather.weather[0].description)}</td>
          <td className={tableStyle}>{weather.clouds.all}%</td>
          <td className={tableStyle}>
            {weather.pop >= 0.3 && weather.pop < 0.5 && '☂️ '}
            {weather.pop >= 0.5 && '☔ '}
            {weather.pop * 100}%
          </td>
          <td className={tableStyle}>
            {weather.wind.speed >= 6 && weather.wind.speed < 11 && '💨 '}
            {weather.wind.speed >= 11 && '🌀 '}
            {weather.wind.speed}m/s
          </td>
          <td className={tableStyle}>{getWindDirection(weather.wind.deg)}</td>
        </tr>
      ))}
    </tbody>
  );
}
