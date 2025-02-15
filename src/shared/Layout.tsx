import clsx from 'clsx';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import ScrollToTop from './ScrollToTop';
import TopButton from './TopButton';

export default function Layout() {
  const { pathname }: { pathname: string } = useLocation();

  const hideLayoutPatterns = ['/trip-plan', '/my', '/local-view', '/weather-view', '/custom-trip'];

  // 특정 경로를 확인하여 패딩을 결정
  const isPaddingZero = hideLayoutPatterns.some((pattern) => pathname.startsWith(pattern));
  const minHeightNone = location.pathname === '/trip-plan';

  return (
    <div>
      <Header />
      <main className={clsx(!minHeightNone && 'min-h-screen', isPaddingZero ? 'px-0' : 'px-[120px]', 'min-w-[900px]')}>
        <ScrollToTop />
        <Outlet />
        <div className="fixed inset-0 bg-black opacity-50 z-50 hidden" id="overlay"></div>
      </main>
      <TopButton />
      <Footer />
    </div>
  );
}
