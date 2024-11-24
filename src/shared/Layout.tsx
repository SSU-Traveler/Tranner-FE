import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import ScrollToTop from './ScrollToTop';
import TopButton from './TopButton';

export default function Layout() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [contentHeight, setContentHeight] = useState<number>(0);

  const location = useLocation();
  // 특정 경로를 확인하여 패딩을 결정
  const isPaddingZero = location.pathname === '/trip-plan' || location.pathname === '/my'; // 특정 경로를 지정
  const minHeightNone = location.pathname === '/trip-plan';

  useEffect(() => {
    // 비동기 처리가 2초 후에 끝난다고 가정하고, 2초가 지나면 isLoading을 false로 설정함
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
    const footerHeight = document.querySelector('footer')?.offsetHeight || 0;
    setContentHeight(window.innerHeight - headerHeight - footerHeight);
  }, []);

  return (
    <div className="">
      <Header />
      <main
        className={clsx(
          !minHeightNone && 'min-h-screen',
          isPaddingZero ? 'px-0' : 'px-[120px]',
          'relative min-w-[900px]'
        )}
      >
        <ScrollToTop />
        <Outlet />
        <div className="fixed inset-0 bg-black opacity-50 z-50 hidden" id="overlay"></div>
      </main>
      <TopButton />
      <Footer />
    </div>
  );
}
