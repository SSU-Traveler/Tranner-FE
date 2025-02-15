const days = ['일', '월', '화', '수', '목', '금', '토'];

export default function getDateAndDay(addNum: number): string {
  const today = new Date();
  const nextDay = new Date(today);
  nextDay.setDate(today.getDate() + addNum);

  const month = nextDay.getMonth() + 1;
  const date = nextDay.getDate();
  const day = days[nextDay.getDay()];

  return `${month}.${date}.(${day})`;
}
