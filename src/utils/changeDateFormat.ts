// Date 형식의 날짜(2024-10-07)를 2024.10.07 형식으로 바꿔주는 함수

export default function changeDateFormat(date: Date) {
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  const formattedDate = `${year}.${month}.${day}`;

  return formattedDate;
}
