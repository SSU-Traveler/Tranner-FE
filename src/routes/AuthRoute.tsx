import { Navigate, Outlet } from 'react-router-dom';

// PrivateRoute: 로그인한 사용자만 접근 가능
export const PrivateRoute = ({ isLogin }: { isLogin: boolean }) => {
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

// PublicRoute: 로그인하지 않은 사용자만 접근 가능
export const PublicRoute = ({ isLogin }: { isLogin: boolean }) => {
  return !isLogin ? <Outlet /> : <Navigate to="/" />;
};
