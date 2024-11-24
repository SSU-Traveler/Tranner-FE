import { FutureWeatherList } from '../../types/weather.type';
import getDateAndDay from '../../utils/getDateAndDay';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

interface TableProps {
  weather: FutureWeatherList[];
  index?: number;
  isToday: boolean;
}

export default function Table({ weather, index, isToday }: TableProps) {
  return (
    <>
      {!isToday && <div className="text-[20px] text-center">{getDateAndDay(index! + 1)}</div>}
      <div className="mb-[30px] flex justify-center p-[10px]">
        <table className="w-[85%] border border-gray-300 p-[10px] text-center">
          <TableHeader />
          <TableBody weathers={weather} isToday={isToday} />
        </table>
      </div>
    </>
  );
}
