import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { KAKAO_AUTH_URL } from '../api/ApiUrls';
import { LoginApi } from '../api/LoginApi';
import HorizonLine from '../components/common/HorizonLine';
import LoginForm from '../components/user/LoginForm';
import kakao_login_medium_wide from '/images/login/kakao_login_medium_wide.png';

export default function LoginPage() {
  const navigate = useNavigate();
  //로그인 정보
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  //******************* */
  //함수
  const handleChange = (field: string) => (value: string) => {
    setLoginData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const loginHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await LoginApi(loginData);
    console.log(response);
    if (response && response.status === 200) {
      //토큰 저장.
      //북마크 및 장바구니 불러와서 저장.
      //navigator로 전 페이지로 돌아가기
      navigate(-1);
      //accessToken 만료 1분 전에 refreshToken 사용하여 재발급.
    }
  };

  const kakaoLogin = async () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <div className="container w-full flex flex-col items-center justify-center">
      <Link to="/trip-plan">
        <p>여행 계획</p>
      </Link>
      <h2>로그인</h2>
      <LoginForm loginData={loginData} handleChange={handleChange} loginHandler={loginHandler} />

      <p className="text-xs m-5">
        아직 회원이 아니세요?{' '}
        <Link to="/sign-up" className="text-blue-300">
          이메일 회원가입
        </Link>
      </p>

      <HorizonLine text="or" />
      <p className="text-xs mb-6">SNS 간편 로그인</p>
      <img src={kakao_login_medium_wide} onClick={kakaoLogin} alt="Kakao Login" className="cursor-pointer" />
    </div>
  );
}
