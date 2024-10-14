import { useState } from 'react';
import LoginForm from '../components/user/LoginForm';
import { LoginApi } from '../api/LoginApi';
import { Link } from 'react-router-dom';
import HorizonLine from '../components/common/HorizonLine';
import { KAKAO_AUTH_URL } from '../api/ApiUrls';
import kakao_login_medium_wide from '../../public/images/login/kakao_login_medium_wide.png';

export default function LoginPage() {
  //로그인 정보
  const [loginData, setLoginData] = useState({
    memberId: '',
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

  const loginHandler = async () => {
    const response = await LoginApi(loginData);
    console.log(response);
  };

  const kakaoLogin = async () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <div className="container w-full flex flex-col items-center justify-center">
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
