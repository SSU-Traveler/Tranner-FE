import { create, StoreApi, UseBoundStore } from 'zustand';
import { getLocation } from '../api/tripPlan.api';
import { basketType } from '../types/basket.type';

interface BasketState {
  basket: basketType[];
  addSpot: (spot: string) => void;
  removeSpot: (spot: string) => void;
}

// 로컬 스토리지에서 초기 상태 불러오기
const loadBasketFromLocalStorage = () => {
  const storedBasket = localStorage.getItem('basket');
  return storedBasket ? JSON.parse(storedBasket) : [];
};

const useBasketStore: UseBoundStore<StoreApi<BasketState>> = create((set) => ({
  basket: loadBasketFromLocalStorage(),
  addSpot: async (spot) => {
    const location = await getLocation(spot);
    if (location) {
      // location이 유효한 경우에만 추가
      set((state) => {
        const newBasket = [...state.basket, { spot: spot, location: location }];
        localStorage.setItem('basket', JSON.stringify(newBasket)); // 상태 저장
        return { basket: newBasket };
      });
    } else {
      console.error('Location not found for spot:', spot);
    }
  },
  removeSpot: (spot) =>
    set((state) => {
      const newBasket = state.basket.filter((s) => s.spot !== spot);
      localStorage.setItem('basket', JSON.stringify(newBasket)); // 상태 저장
      return { basket: newBasket };
    }),
}));

export default useBasketStore;
