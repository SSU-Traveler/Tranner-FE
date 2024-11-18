import { redirect, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { KakaoLogin } from '../../api/LoginApi';
import Loading from '../common/Loading';

const KakaoAuth = () => {
  const navigate = useNavigate();
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
      const data = KakaoLogin(CODE);
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
      console.log(data);
      //data는 json 형식? 그러면 그걸 처리해서 localStorage에 넣어야되나,,,
    } catch (error) {
      console.error('로그인 중 오류 발생:', error);
      alert('로그인 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  // Strict Mode 를 유지하면서 백으로 로그인 인가 코드를 한번만 보내게 하기 위해
  useEffect(() => {
    if(!hasFetched.current){
      getKakaoToken();
      hasFetched.current=true;
    }
  }, []);
  
  return <Loading />;
};

export default KakaoAuth;
