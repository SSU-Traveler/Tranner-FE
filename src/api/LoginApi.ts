import axios, { AxiosResponse } from 'axios';
import { UserInfoElement } from '../types/signup.type';
//const SIGNUP_API_BASE_URL = import.meta.env.VITE_SERVER_URL;
//const SIGNUP_API_BASE_URL = 'https://api.tranner.com';
const SIGNUP_API_BASE_URL = 'http://localhost:8080';

//로그인
export const LoginApi = async (data: Omit<UserInfoElement, 'email' | 'nickname'>): Promise<AxiosResponse | null> => {
  try {
    const response = await axios.post(SIGNUP_API_BASE_URL + '/login', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  } catch (error) {
    console.error('Error fetching boards:', error);
    alert('로그인 문제');
    return null; // 에러 발생 시 빈 배열 반환
  }
};

//서버에 인가코드 넘겨주고 로그인.
export const KakaoLogin = async (CODE: string): Promise<AxiosResponse | null> => {
  try {
    const response = await axios.post(
      `${SIGNUP_API_BASE_URL}/kakaoLogin`,
      { code: CODE },
      { headers: { 'Content-Type': 'application/json;charset=utf-8' } }
    );
    console.log(response);
    const data = response.data;
    console.log(data);

    return data;
  } catch (error) {
    console.error('Error fetching boards:', error);
    return null; // 에러 발생 시 빈 배열 반환
  }
};
