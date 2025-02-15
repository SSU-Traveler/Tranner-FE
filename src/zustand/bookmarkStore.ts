import { create, StoreApi, UseBoundStore } from 'zustand';
import { bookmarkType } from '../types/bookmark.type';

interface BookmarkState {
  bookmarks: bookmarkType[];
  addBookmarks: (bmiObj: bookmarkType) => void;
  removeBookmarks: (bmiObj: bookmarkType) => void;
}

// 로컬 스토리지에서 초기 상태 불러오기
const loadBookmarksFromLocalStorage = (): bookmarkType[] => {
  const storedBookmark = localStorage.getItem('bookmarks');
  return storedBookmark ? JSON.parse(storedBookmark) : [];
};

const useBookmarkStore: UseBoundStore<StoreApi<BookmarkState>> = create((set) => ({
  bookmarks: loadBookmarksFromLocalStorage(),
  addBookmarks: (bmkObj: bookmarkType) => {
    set((state) => {
      const newBookmarks = [...state.bookmarks, bmkObj];
      localStorage.setItem('bookmarks', JSON.stringify(newBookmarks)); // 상태 저장
      return { bookmarks: newBookmarks };
    });
  },
  removeBookmarks: (bmkObj: bookmarkType) =>
    set((state) => {
      const newBookmarks = state.bookmarks.filter((s) => s.placeId !== bmkObj.placeId);
      localStorage.setItem('bookmarks', JSON.stringify(newBookmarks)); // 상태 저장
      return { bookmarks: newBookmarks };
    }),
}));

export default useBookmarkStore;
