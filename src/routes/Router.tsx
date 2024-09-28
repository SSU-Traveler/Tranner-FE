import { createBrowserRouter } from 'react-router-dom';
import CustomTripPage from '../pages/CustomTripPage';
import FindIdPage from '../pages/FindIdPage';
import FindPwPage from '../pages/FindPwPage';
import LocalViewPage from '../pages/LocalViewPage';
import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';
import MyPage from '../pages/MyPage';
import SignUpPage from '../pages/SignUpPage';
import TripPlanPage from '../pages/TripPlanPage';
import WeatherViewPage from '../pages/WeatherViewPage';
import WelcomePage from '../pages/WelcomePage';
import Layout from '../shared/Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      // 메인 페이지
      {
        path: '/',
        element: <MainPage />,
      },
      // Auth 관련 페이지
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/sign-up',
        element: <SignUpPage />,
      },
      {
        path: '/find-id',
        element: <FindIdPage />,
      },
      {
        path: '/find-pw',
        element: <FindPwPage />,
      },
      // 주요 서비스 페이지
      {
        path: '/local-view',
        element: <LocalViewPage />,
      },
      {
        path: '/weather-view',
        element: <WeatherViewPage />,
      },
      {
        path: '/custom-trip',
        element: <CustomTripPage />,
      },
      {
        path: '/trip-plan',
        element: <TripPlanPage />,
      },
      // 소개 페이지
      {
        path: '/welcome',
        element: <WelcomePage />,
      },
      // 마이페이지
      {
        path: '/my/:memberId',
        element: <MyPage />,
      },
    ],
  },
]);

export default router;
