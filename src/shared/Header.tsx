import { Link, useLocation } from 'react-router-dom';
import useLoginStore from '../zustand/loginStore';

const tabStyle = 'hover:font-bold hover:text-button-selected';
const clickedTabStyle = 'font-bold text-button-selected';
const buttonStyle =
  'w-[144px] h-[40px] bg-button-basic rounded-[8px] text-white flex justify-center items-center font-bold hover:bg-button-hover';

export default function Header() {
  const { pathname }: { pathname: string } = useLocation();
  const { isLoggedIn, logout } = useLoginStore();

  const logoutHandler = () => {
    logout();
  };

  return (
    <header className="h-[70px] border border-b-[#495057] px-[120px] flex justify-between">
      <div className="flex justify-center items-center gap-[50px]">
        <Link to="/" className="text-[32px] font-extrabold">
          Tranner
        </Link>
        <nav className="flex gap-[20px]">
          <Link to="/local-view" className={pathname === '/local-view' ? clickedTabStyle : tabStyle}>
            일정 짜기
          </Link>
          <Link to="/weather-view" className={pathname === '/weather-view' ? clickedTabStyle : tabStyle}>
            날씨 보기
          </Link>
          <Link to="/custom-trip" className={pathname === '/custom-trip' ? clickedTabStyle : tabStyle}>
            맞춤 여행지
          </Link>
        </nav>
      </div>
      <div className="flex justify-center items-center">
        {!isLoggedIn ? (
          //* 비로그인 상태에서의 UI */
          <nav className="flex gap-[16px]">
            <Link to="/login" className={buttonStyle}>
              로그인
            </Link>
            <Link to="/sign-up" className={buttonStyle}>
              회원가입
            </Link>
          </nav>
        ) : (
          // 로그인 상태에서 UI
          <nav className="flex gap-[16px] items-center">
            <button className={buttonStyle} onClick={logoutHandler}>
              로그아웃
            </button>
            <Link to={'/my'}>
              <i className="xi-profile xi-3x"></i>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
