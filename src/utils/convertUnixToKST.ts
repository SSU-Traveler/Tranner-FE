export default function convertUnixToKST(unixTime: number): string {
  const utcDate: Date = new Date(unixTime * 1000); // 밀리초로 변환
  const kstDate: Date = new Date(utcDate.getTime() + 9 * 60 * 60 * 1000); // 9시간 추가
  return kstDate.toISOString(); // ISO 형식으로 출력
}
