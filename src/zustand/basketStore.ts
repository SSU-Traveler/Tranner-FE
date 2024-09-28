import { create, StoreApi, UseBoundStore } from 'zustand';

interface BasketState {
  basket: string[];
  addSpot: (spot: string) => void;
  removeSpot: (spot: string) => void;
}

const useBasketStore: UseBoundStore<StoreApi<BasketState>> = create((set) => ({
  basket: [],
  addSpot: (spot) => set((state) => ({ basket: [...state.basket, spot] })),
  removeSpot: (spot) =>
    set((state) => ({
      basket: state.basket.filter((s) => s !== spot),
    })),
}));

export default useBasketStore;
