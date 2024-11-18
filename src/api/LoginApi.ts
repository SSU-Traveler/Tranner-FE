import axios from 'axios';
import { UserInfoElement } from '../types/signup.type';
const SIGNUP_API_BASE_URL = '/api';

//로그인
export const LoginApi = async (data: Omit<UserInfoElement, 'email' | 'nickName'>) => {
  try {
    const response = await axios.post(SIGNUP_API_BASE_URL + '/login', data);
    console.log(response);
  } catch (error) {
    console.error('Error fetching boards:', error);
    alert('로그인 문제');
    return []; // 에러 발생 시 빈 배열 반환
  }
};

//서버에 인가코드 넘겨주고 로그인.
export const KakaoLogin = async (CODE: string) => {
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
    return []; // 에러 발생 시 빈 배열 반환
  }
};