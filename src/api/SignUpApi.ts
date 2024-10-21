import axios from 'axios';
import { UserInfoElement } from '../types/signup.type';
const SIGNUP_API_BASE_URL = '/api/member';
//const SIGNUP_API_BASE_URL = 'http://localhost:8080/member';

//회원 가입
export const SignUpApi = async (data: UserInfoElement) => {
  try {
    const response = await axios.post(SIGNUP_API_BASE_URL + '/register', data);
    console.log(response);
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
    const response = await axios.post(SIGNUP_API_BASE_URL + '/emails/verification-requests', data, {
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
export const ConfirmVerificationCodeApi = async (email: string, verificationCode: string) => {
  try {
    const response = await axios.post(
      `${SIGNUP_API_BASE_URL}/emails/verifications`,
      {
        email: email,
        verificationCode: verificationCode,
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
export const IdDuplicatedCheckApi = async (memberId: string) => {
  try {
    const response = await axios.get(`${SIGNUP_API_BASE_URL}/idDuplicatedCheck?memberId=${memberId}`);
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error fetching boards:', error);
    return; // 에러 발생 시 빈 배열 반환
  }
};

// get 사용법
// export const SignUpApi = async () => {
//   try {
//     const response = await axios.get(SIGNUP_API_BASE_URL);
//     console.log(response);
//     console.log(response.data);
//     const data = response.data;
//     return data;
//   } catch (error) {
//     console.error('Error fetching boards:', error);
//     return []; // 에러 발생 시 빈 배열 반환
//   }
// };
