import { useState } from 'react';
import LoginForm from '../components/user/LoginForm';
import { LoginApi } from '../api/LoginApi';
import { Link, useNavigate } from 'react-router-dom';
import HorizonLine from '../components/common/HorizonLine';
import { KAKAO_AUTH_URL } from '../api/ApiUrls';
import kakao_login_medium_wide from '/images/login/kakao_login_medium_wide.png';
import { AxiosResponse } from 'axios';
import useLoginStore from '../zustand/loginStore';
import useTokenStore from '../zustand/tokenStore';
import { saveUserData } from '../zustand/userDataStore';
import { bookmarkType } from '../types/bookmark.type';
import useBasketStore from '../zustand/basketStore';
import { getBmkInfoById } from '../api/tripPlan.api';
import useBookmarkStore from '../zustand/bookmarkStore';

export default function LoginPage() {
  const navigate = useNavigate();
  //로그인 정보
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const { login } = useLoginStore();
  const { saveToken } = useTokenStore();
  const addSpot = useBasketStore((state) => state.addSpot);
  const addBookmarks = useBookmarkStore((state) => state.addBookmarks);

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
      //로그인 여부 저장
      login();
      //토큰 저장.
      localStorage.setItem('expireTime', response.data.accessTokenExpiration);
      saveToken(response.data.accessToken);
      //장바구니 불러와서 저장.
      const basketList = response.data.candidateLocation;
      basketList.map((spot: string) => {
        addSpot(spot);
      });

      //북마크 불러와서 저장.
      const bmkObjList = response.data.bookmark;
      bmkObjList.map(async (placeId: string) => {
        //placeId로 장소 정보(name, addr) 불러오기.
        const bmkObj = await getBmkInfoById(placeId);
        if (bmkObj) addBookmarks(bmkObj);
      });

      //사용자 정보 저장
      saveUserData(response.data.username, response.data.nickname);
      //navigator로 전 페이지로 돌아가기
      navigate(-1);
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
