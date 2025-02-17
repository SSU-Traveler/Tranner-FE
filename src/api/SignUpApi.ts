import axios from 'axios';
import { UserInfoElement } from '../types/signup.type';
//const SIGNUP_API_BASE_URL = '/api/member';
const SIGNUP_API_BASE_URL = 'http://localhost:8080/member';

//회원 가입
export const SignUpApi = async (prop: UserInfoElement) => {
  try {
    const data = {
      username: prop.username,
      password: prop.password,
      memberEmail: prop.email,
      nickname: prop.nickname,
    };
    const response = await axios.post(SIGNUP_API_BASE_URL + '/register', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error fetching boards:', error);
    alert('회원가입 문제');
    return []; // 에러 발생 시 빈 배열 반환
  }
};

//이메일 전송
export const SendEmailApi = async (email: string) => {
  try {
    const data = { email: email };
    const url = `${SIGNUP_API_BASE_URL}/emails/register-requests`;
    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('response', response);
    return response.data;
    //console.log(response);
  } catch (error) {
    console.error('Error fetching boards:', error);
    alert('이메일 전송 문제');
    return; // 에러 발생 시 빈 배열 반환
  }
};

//인증번호 검증
export const ConfirmVerificationCodeApi = async (email: string, authCode: string) => {
  try {
    const response = await axios.post(
      `${SIGNUP_API_BASE_URL}/emails/verifications`,
      {
        email: email,
        authCode: authCode,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching boards:', error);
    return;
  }
};

//아이디 중복 체크
export const IdDuplicatedCheckApi = async (username: string) => {
  try {
    const response = await axios.get(`${SIGNUP_API_BASE_URL}/idDuplicatedCheck?id=${username}`);
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error fetching boards:', error);
    return; // 에러 발생 시 빈 배열 반환
  }
};
