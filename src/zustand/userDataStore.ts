import { create, StoreApi, UseBoundStore } from 'zustand';

interface UserDataState {
  username: string | null;
  nickname: string | null;
}

const loadNickNameFromLocalStorage = () => {
  const storedNickname = localStorage.getItem('nickname');
  return storedNickname ? storedNickname : '';
};

const loadUserNameFromLocalStorage = () => {
  const storedUsername = localStorage.getItem('username');
  return storedUsername ? storedUsername : '';
};

const useUserDataStore: UseBoundStore<StoreApi<UserDataState>> = create(() => ({
  username: loadUserNameFromLocalStorage(),
  nickname: loadNickNameFromLocalStorage(),
}));

const saveUserData = (username: string, nickname: string) => {
  localStorage.setItem('username', username);
  localStorage.setItem('nickname', nickname);
};

export default useUserDataStore;
export { saveUserData };
