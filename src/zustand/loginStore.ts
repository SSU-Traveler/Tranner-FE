import { create, StoreApi, UseBoundStore } from 'zustand';

interface LoginState {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const useLoginStore: UseBoundStore<StoreApi<LoginState>> = create((set) => ({
  isLoggedIn: false,
  login: () => set(() => ({ isLoggedIn: true })),
  logout: () => set(() => ({ isLoggedIn: false })),
}));

export default useLoginStore;
