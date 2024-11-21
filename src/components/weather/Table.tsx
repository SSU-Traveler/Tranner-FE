import { FutureWeatherList } from '../../types/weather.type';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

const tableStyle = 'w-[85%] border border-gray-300 p-[10px] text-center';
const divStyle = 'mb-[30px] flex justify-center p-[10px]';
const textStyle = 'text-[20px] text-center';

export default function Table({ weather }: { weather: FutureWeatherList[] }) {
  return (
    <>
      <div className={textStyle}>11.21.(목) 수정 필요!</div>
      <div className={divStyle}>
        <table className={tableStyle}>
          <TableHeader />
          <TableBody weathers={weather} />
        </table>
      </div>
    </>
  );
}
