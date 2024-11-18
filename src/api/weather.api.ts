// export default function getWeatherApi(url: string) {
//   // Text API 호출 함수
//   fetch(url) // fetch를 통해 API 호출
//     .then((response) => response.json()) // 응답을 JSON으로 변환
//     .then((data) => {
//       console.log(data); // 데이터 출력
//       // saveFilePath를 사용하여 데이터를 저장하거나 추가적인 처리를 수행할 수 있습니다.
//     })
//     .catch((error) => {
//       console.error('API 호출 중 오류가 발생했습니다:', error);
//       // 오류 처리를 수행할 수 있습니다.
//     });
// }
const WEATHER_AUTH_KEY = import.meta.env.VITE_WEATHER_AUTH_KEY;

export default function getWeatherApi() {
  fetch(`/weather-api/api/typ01/url/kma_sfctm2.php?tm=202211300900&stn=0&authKey=${WEATHER_AUTH_KEY}`)
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((error) => console.error('날씨 API 오류', error));
}
