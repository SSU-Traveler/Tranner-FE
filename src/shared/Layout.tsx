import { Outlet } from 'react-router-dom';
import LocalCard from './../components/card/LocalCard';
import Footer from './Footer';
import Header from './Header';

export default function Layout() {
  return (
    <>
      <Header />
      <main className="min-h-[900px] px-[120px] bg-slate-200">
        <Outlet />
        <LocalCard />
      </main>
      <Footer />
    </>
  );
}
