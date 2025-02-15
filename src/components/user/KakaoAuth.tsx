import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { KakaoLogin } from '../../api/LoginApi';
import Loading from '../common/Loading';
import useLoginStore from '../../zustand/loginStore';
import useTokenStore from '../../zustand/tokenStore';
import useBasketStore from '../../zustand/basketStore';
import useBookmarkStore from '../../zustand/bookmarkStore';
import { getBmkInfoById } from '../../api/tripPlan.api';
import { saveUserData } from '../../zustand/userDataStore';

const KakaoAuth = () => {
  const navigate = useNavigate();
  const { login } = useLoginStore();
  const { saveToken } = useTokenStore();
  const addSpot = useBasketStore((state) => state.addSpot);
  const addBookmarks = useBookmarkStore((state) => state.addBookmarks);
  //const location = useLocation();
  //const CODE = location.search.split('=')[1];
  const CODE = new URL(window.location.href).searchParams.get('code');

  // Strict Mode 를 유지하면서 백으로 로그인 인가 코드를 한번만 보내게 하기 위해
  const hasFetched = useRef(false);

  const getKakaoToken = async () => {
    if (!CODE) {
      alert('로그인 코드가 없습니다.');
      navigate('/login');
      return;
    }
    try {
      const response = await KakaoLogin(CODE);
      //   const data = await getKakaoCode(CODE);
      //   if (data.access_token) {
      //     const backData = await KakaoLogin(data);
      //     if (backData.token) {
      //       localStorage.setItem('TOKEN', backData.token);
      //       localStorage.setItem('username', backData.usernamev);
      //       alert('로그인 성공했어요!');
      //       navigate('/');
      //     }
      //   } else {
      //     alert('다시 로그인해주세요!');
      //     navigate('/login');
      //   }
      console.log(response);
      //data는 json 형식? 그러면 그걸 처리해서 localStorage에 넣어야되나,,,
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
        navigate('/');
      }
    } catch (error) {
      console.error('로그인 중 오류 발생:', error);
      alert('로그인 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  // Strict Mode 를 유지하면서 백으로 로그인 인가 코드를 한번만 보내게 하기 위해
  useEffect(() => {
    if (!hasFetched.current) {
      getKakaoToken();
      hasFetched.current = true;
    }
  }, []);

  return <Loading />;
};

export default KakaoAuth;
