import { FutureWeatherList } from '../types/weather.type';
import convertUnixToKST from './convertUnixToKST';

export default function groupWeatherData(list: FutureWeatherList[]): Array<FutureWeatherList[]> {
  const groupedData: Array<FutureWeatherList[]> = []; // 최종 결과 데이터를 저장할 배열
  let tempGroup: FutureWeatherList[] = []; // 임시로 데이터를 저장할 배열
  let nextDayMidnightFound = false; // 다음날 0시를 찾았는지 여부

  for (const item of list) {
    const kstTime: string = convertUnixToKST(item.dt); // Unix 시간을 한국 시간으로 변환
    const [, time] = kstTime.split('T'); // ISO 형식에서 날짜와 시간 분리
    const hour = time.split(':')[0]; // 시(hour)만 추출

    // 다음날 0시를 아직 찾지 못했으며, 시간이 0시인 경우
    if (!nextDayMidnightFound && hour === '00') {
      nextDayMidnightFound = true; // 다음날 0시 발견
      groupedData.push([...tempGroup]); // 임시 배열에 저장된 요소들 모두 복사해서 최종 배열의 요소로 저장
      tempGroup = []; // 임시 배열 초기화
    }

    tempGroup.push(item); // 현재 데이터를 임시 배열에 저장

    // 다음날 0시를 찾았으며, 임시 배열의 길이가 8인 경우
    if (nextDayMidnightFound && tempGroup.length === 8) {
      groupedData.push([...tempGroup]); // 임시 배열에 저장된 요소들 모두 복사해서 최종 배열의 요소로 저장
      tempGroup = []; // 임시 배열 초기화
    }
  }

  // 임시 배열이 아직 남아 있는 경우
  if (tempGroup.length > 0) {
    groupedData.push(tempGroup); // 임시 배열을 최종 배열의 요소로 저장(마지막이니까 복사할 필요 없음)
  }

  return groupedData;
}
