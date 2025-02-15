import { create, StoreApi, UseBoundStore } from 'zustand';

interface LoginState {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const loadIsLoggedInFromLocalStorage = () => {
  const storedLoggedIn = localStorage.getItem('isLoggedIn');
  return storedLoggedIn ? true : false;
};

const useLoginStore: UseBoundStore<StoreApi<LoginState>> = create((set) => ({
  isLoggedIn: loadIsLoggedInFromLocalStorage(),
  login: () =>
    set(() => {
      localStorage.setItem('isLoggedIn', 'true');
      return { isLoggedIn: true };
    }),
  logout: () =>
    set(() => {
      //서버에 logout() 요청
      localStorage.clear();
      return { isLoggedIn: false };
    }),
}));

export default useLoginStore;
