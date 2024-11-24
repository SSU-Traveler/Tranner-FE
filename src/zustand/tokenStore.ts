import { create, StoreApi, UseBoundStore } from 'zustand';
import axios from 'axios';

interface TokenState {
  accessToken: string;
  saveToken: (accessToken: string) => void;
  reloadAccesToken: () => Promise<void>;
  isTokenExpired: () => boolean;
}

const saveToken = (accessToken: string) => {
  const expireTime = localStorage.getItem('expireTime');
  if (expireTime) {
    const expiresAt = Date.now() + Number(expireTime); //로딩 시간 고려??
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('expiresAt', expiresAt.toString());
  } else {
    console.log('access token의 만료 시간 알 수 없음');
  }
};

const reloadAccesToken = async () => {
  const store = useTokenStore.getState();
  try {
    const response = await axios.post('/api/auth/refresh', null, {
      headers: {
        'Content-Type': 'application/json',
      },
      // 필요한 데이터 (예: refresh token)
    });
    //1. response에 새로운 access Token이 넘어왔을 때
    const newToken = response.data.accessToken;
    saveToken(newToken); // 새로운 토큰과 만료 시간 저장

    //refresh token만 만료됐을 경우에는 백에서 cookie에 자동으로 업데이트.
  } catch (error: any) {
    //2. response.status == 401 &&
    // 에러 메세지가 acces token 및 refresh token 만료일 경우.
    if (error.response && error.response.status === 401) {
      //if(error instanceOf Error)? 이건 뭐지
      //logout 시키고 login창으로 이동.
    } else {
      //그게 아닐 경우
      console.error('토큰 재발급 실패:', error);
      //로그아웃
    }
  }
};

const isTokenExpired = () => {
  const expiresAt = localStorage.getItem('expiresAt');
  return Date.now() > Number(expiresAt); // 현재 시간이 만료 시간보다 크면 true
};

const useTokenStore: UseBoundStore<StoreApi<TokenState>> = create(() => ({
  accessToken: localStorage.getItem('accessToken') || '',
  saveToken,
  reloadAccesToken,
  isTokenExpired,
}));

// 토큰 검사 및 재발급 함수
const ensureAccessToken = async () => {
  const store = useTokenStore.getState();
  if (isTokenExpired()) {
    await store.reloadAccesToken(); // 토큰 재발급
  }
  return store.accessToken; // 최신 토큰 반환
};

// API 호출 래퍼 함수
const apiGet = async (url: string) => {
  try {
    const accessToken = await ensureAccessToken(); // 토큰 확인 및 재발급
    const store = useTokenStore.getState();
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log('서버와의 통신(get)중 문제.');
  }
};

// API 호출 래퍼 함수
const apiPost = async (url: string, data: any) => {
  try {
    const accessToken = await ensureAccessToken(); // 토큰 확인 및 재발급
    const store = useTokenStore.getState();
    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log('서버와의 통신(post) 중 문제.');
  }
  console.log('aa');
};

export default useTokenStore;
export { apiGet, apiPost };
