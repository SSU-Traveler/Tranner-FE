import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import TopButton from './TopButton';

export default function Layout() {
  const location = useLocation();
  // 특정 경로를 확인하여 패딩을 결정
  const isPaddingZero = location.pathname === '/trip-plan'; // 특정 경로를 지정

  return (
    <>
      <Header />
      <main className={`min-h-[900px] ${isPaddingZero ? 'px-0' : 'px-[120px]'} relative`}>
        <Outlet />
        <div className="fixed inset-0 bg-black opacity-50 z-20 hidden" id="overlay"></div>
      </main>
      <TopButton />
      <Footer />
    </>
  );
}
