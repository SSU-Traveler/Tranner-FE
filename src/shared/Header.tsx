import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';

const tabStyle = 'hover:font-bold hover:text-button-hover';
const selectedTabStyle = 'font-bold text-button-selected';
const buttonStyle =
  'lg:w-[144px] w-[100px] h-[40px] bg-button-basic rounded-[8px] text-white flex justify-center items-center font-bold hover:bg-button-hover';

export default function Header() {
  const { pathname }: { pathname: string } = useLocation();

  return (
    <header className="min-w-[900px] h-[70px] border border-b-[#495057] px-[120px] flex justify-between">
      <div className="flex justify-center items-center lg:gap-[50px] md:gap-[40px]">
        <Link to="/" className="text-[32px] font-extrabold hover:text-button-hover whitespace-nowrap">
          🚄Tranner🏕️
        </Link>
        <nav className="flex gap-[20px]">
          <Link
            to="/local-view"
            className={clsx(pathname === '/local-view' ? selectedTabStyle : tabStyle, 'whitespace-nowrap')}
          >
            일정 짜기
          </Link>
          <Link
            to="/weather-view"
            className={clsx(pathname === '/weather-view' ? selectedTabStyle : tabStyle, 'whitespace-nowrap')}
          >
            날씨 보기
          </Link>
          <Link
            to="/custom-trip"
            className={clsx(pathname === '/custom-trip' ? selectedTabStyle : tabStyle, 'whitespace-nowrap')}
          >
            맞춤 여행지
          </Link>
        </nav>
      </div>
      <div className="flex justify-center items-center">
        {/* 비로그인 상태에서의 UI */}
        <nav className="flex gap-[16px]">
          <Link to="/login" className={buttonStyle}>
            로그인
          </Link>
          <Link to="/sign-up" className={buttonStyle}>
            회원가입
          </Link>
        </nav>
        {/* 로그인 상태에서 UI */}
        {/* <nav className="flex gap-[16px]">
          <Link to={'/my/1'}>마이페이지</Link>
          <button className={buttonStyle}>로그아웃</button>
        </nav> */}
      </div>
    </header>
  );
}
