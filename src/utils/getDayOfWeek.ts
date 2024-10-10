// Date 형식의 날짜에 맞는 요일을 반환하는 함수

import { DAYS } from '../constants/days';

export default function getDayOfWeek(date: Date) {
  return DAYS[date.getDay()];
}
