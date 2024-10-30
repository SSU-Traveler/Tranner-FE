import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import ScrollToTop from './ScrollToTop';
import TopButton from './TopButton';

export default function Layout() {
  return (
    <>
      <Header />
      <main className="min-h-[900px] px-[120px] relative">
        <ScrollToTop />
        <Outlet />
        <div className="fixed inset-0 bg-black opacity-50 z-50 hidden" id="overlay"></div>
      </main>
      <TopButton />
      <Footer />
    </>
  );
}
