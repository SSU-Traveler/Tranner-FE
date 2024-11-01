const dateWithDays = (dateString: string) => {
  //0000-00-00~~를 0000.00.00(요일)로 출력
  // const dateParts = dateString.split('-');
  // const year = dateParts[0];
  // const month = dateParts[1];
  // const day = dateParts[2];

  const date = new Date(dateString);

  //const date = new Date(Number(year), Number(month) - 1, Number(day));

  // Date 객체가 유효한지 확인
  if (isNaN(date.getTime())) {
    return '0000.00.00(-)'; // 유효하지 않은 경우 처리
  }

  const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
  const dayOfWeek = date.toLocaleDateString('ko-KR', options);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 +1
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}.${month}.${day} (${dayOfWeek})`;
  //return `${year}.${month.padStart(2, '0')}.${day.padStart(2, '0')} (${dayOfWeek})`;
};

export default dateWithDays;
