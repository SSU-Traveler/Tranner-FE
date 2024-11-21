// prettier-ignore
const weatherDescription: {[key: string]: string} = {
  // Clear
  'clear sky': '☀️ 맑음',
  // Clouds
  'few clouds': '🌤️ 구름 조금',
  'scattered clouds': '🌥️ 구름 많음',
  'broken clouds': '☁️ 흐림',
  'overcast clouds': '☁️☁️ 매우 흐림',
  // Rain
  'light rain': '🌧️ 비 조금',
  'moderate rain': '🌧️ 비',
  'heavy intensity rain': '🌧️ 비 많음',
  'very heavy rain': '🌧️🌧️ 폭우',
  'extreme rain': '🌧️🌧️ 폭우',
  'freezing rain': '🌨️ 눈비',
  'light intensity shower rain': '💧 가벼운 소나기',
  'shower rain': '💧 소나기',
  'heavy intensity shower rain': '💧💧 거친 소나기',
  'ragged shower rain': '💧💧 거친 소나기',
  // Thunderstorm
  'light thunderstorm': '⚡ 가벼운 천둥번개',
  'thunderstorm': '⚡ 천둥번개',
  'heavy thunderstorm': '🌀⚡ 폭풍우',
  'ragged thunderstorm': '🌀⚡ 거친 뇌우',
  'thunderstorm with light rain': '⛈️ 약한 비+천둥번개',
  'thunderstorm with rain': '⛈️ 비+천둥번개',
  'thunderstorm with heavy rain': '⛈️ 강한 비+천둥번개',
  'thunderstorm with light drizzle': '💧⚡ 약한 이슬비+천둥번개',
  'thunderstorm with drizzle': '💧⚡ 이슬비+천둥번개',
  'thunderstorm with heavy drizzle': '💧⚡ 강한 이슬비+천둥번개',
  // Drizzle
  'light intensity drizzle': '💧 약한 이슬비',
  'drizzle': '💧 이슬비',
  'heavy intensity drizzle': '💧 강한 이슬비',
  'light intensity drizzle rain': '💧 약한 이슬비',
  'drizzle rain': '💧 이슬비',
  'heavy intensity drizzle rain': '💧 강한 이슬비',
  'shower rain and drizzle': '💧 소나기+이슬비',
  'heavy shower rain and drizzle': '💧 강한 소나기+이슬비',
  'shower drizzle': '💧 소나기 이슬비',
  // Snow
  'light snow': '❄️ 눈 조금',
  'snow': '❄️ 눈',
  'heavy snow': '❄️❄️ 눈 많음',
  'sleet': '🌨️ 진눈깨비',
  'light shower sleet': '💧🌨️ 가벼운 소나기+진눈깨비',
  'shower sleet': '💧🌨️ 소나기+진눈깨비',
  'light rain and snow': '💧❄️ 가벼운 비+눈',
  'rain and snow': '🌧️❄️ 비+눈',
  'light shower snow': '💧❄️ 가벼운 소나기+눈',
  'shower snow': '💧❄️ 소나기+눈',
  'heavy shower snow': '💧💧❄️ 거친 소나기+눈',
  // Atmosphere
  'mist': '🌫️ 안개',
  'smoke': '🌫️ 안개',
  'haze': '🌫️ 안개',
  'sand/dust whirls': '🌫️ 모래+먼지',
  'fog': '🌫️ 안개',
  'sand': '🌫️ 모래',
  'dust': '🌫️ 먼지',
  'volcanic ash': '🌋 화산재',
  'squalls': '🌀 돌풍',
  'tornado': '🌀 폭풍'
};

export default function getWeatherDescription(engDescription: string): string {
  return weatherDescription[engDescription];
}
