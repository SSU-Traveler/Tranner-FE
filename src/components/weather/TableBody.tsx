import { FutureWeatherList } from '../../types/weather.type';
import getWeatherDescription from '../../utils/getWeatherDescription';
import getWindDirection from '../../utils/getWindDirection';

const tableStyle = 'border border-gray-300 p-[10px] text-center text-[18px]';
const TimeInterval = ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'];

interface TableBodyProps {
  weathers: FutureWeatherList[];
  isToday: boolean;
}

export default function TableBody({ weathers, isToday }: TableBodyProps) {
  let length: number = 0;
  let newTimeInterval: string[] = [];
  if (isToday && weathers) {
    length = weathers.length;
    newTimeInterval = [...TimeInterval].reverse().slice(0, length).reverse();
  }

  return (
    <tbody>
      {weathers?.map((weather, index) => (
        <tr key={index}>
          <td className={tableStyle}>{isToday ? newTimeInterval[index] : TimeInterval[index]}</td>
          <td className={tableStyle}>{weather.main.temp}℃</td>
          <td className={tableStyle}>{weather.main.feels_like}℃</td>
          <td className={tableStyle}>{weather.main.humidity}%</td>
          <td className={tableStyle}>{getWeatherDescription(weather.weather[0].description)}</td>
          <td className={tableStyle}>{weather.clouds.all}%</td>
          <td className={tableStyle}>
            {weather.pop >= 0.3 && weather.pop < 0.5 && '☂️ '}
            {weather.pop >= 0.5 && '☔ '}
            {Math.round(weather.pop * 100)}%
          </td>
          <td className={tableStyle}>
            {weather.wind.speed >= 11 && '🌀 '}
            {weather.wind.speed}m/s
          </td>
          <td className={tableStyle}>{getWindDirection(weather.wind.deg)}</td>
        </tr>
      ))}
    </tbody>
  );
}
