import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

export default function Layout() {
  return (
    <>
      <Header />
      <main className="min-h-[900px] px-[120px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
