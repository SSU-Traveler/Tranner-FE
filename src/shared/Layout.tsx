import clsx from 'clsx';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import ScrollToTop from './ScrollToTop';
import TopButton from './TopButton';

export default function Layout() {
  const location = useLocation();
  // 특정 경로를 확인하여 패딩을 결정
  const isPaddingZero = location.pathname === '/trip-plan' || location.pathname === '/my'; // 특정 경로를 지정
  const minHeightNone = location.pathname === '/trip-plan';

  // useEffect(() => {
  //   const headerHeight = document.querySelector('header')?.offsetHeight || 0;
  //   const footerHeight = document.querySelector('footer')?.offsetHeight || 0;

  //   const observer = new ResizeObserver((entries) => {
  //     for (let entry of entries) {
  //       if (entry.target === divRef.current) {
  //         const mainHeight = entry.contentRect.height;
  //         setContentHeight(headerHeight + footerHeight + mainHeight);
  //       }
  //     }
  //   });

  //   if (divRef.current) observer.observe(divRef.current);
  //   return () => {
  //     if (divRef.current) observer.unobserve(divRef.current);
  //   };
  // }, [divRef]);

  return (
    <div>
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
