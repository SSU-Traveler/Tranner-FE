const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const SEARCH_ENGINE_ID = import.meta.env.VITE_GOOGLE_SEARCH_ENGINE_ID;

export async function getPlaceSearchResult() {
  const query = '단원구'; // 후에 매개변수로 받을 것임!
  // searchEngineID 생성해야 함
  try {
    const url = `/customsearch/v1?q=${query}&cx=${SEARCH_ENGINE_ID}&key=${GOOGLE_API_KEY}&searchType=image`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data.items); // 검색 결과
  } catch (error) {
    console.error('getPlaceSearchResult() 함수 에러: ', error);
  }
}
