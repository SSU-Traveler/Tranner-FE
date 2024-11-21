import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import ScrollToTop from './ScrollToTop';
import TopButton from './TopButton';

export default function Layout() {
  const location = useLocation();
  // 특정 경로를 확인하여 패딩을 결정
  const isPaddingZero = location.pathname === '/trip-plan'; // 특정 경로를 지정
  const minHeightNone = location.pathname === '/trip-plan';

  return (
    <>
      <Header />
      <main
        className={`${!minHeightNone && 'min-h-[1500px]'} ${
          isPaddingZero ? 'px-0' : 'px-[120px]'
        } relative min-w-[900px]`}
      >
        <ScrollToTop />
        <Outlet />
        <div className="fixed inset-0 bg-black opacity-50 z-50 hidden" id="overlay"></div>
      </main>
      <TopButton />
      <Footer />
    </>
  );
}
