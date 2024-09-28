import { create, StoreApi, UseBoundStore } from 'zustand';

interface UserDataState {
  userId: string | null;
  nickname: string | null;
  email: string | null;
}

const useUserDataStore: UseBoundStore<StoreApi<UserDataState>> = create(() => ({
  userId: null,
  nickname: null,
  email: null,
}));

export default useUserDataStore;
