import { create } from "zustand";
import { cardReducer } from "../reducer/cart";
import { initialState } from "../state/state";

export const useCartStore = create((set) => ({
   ...initialState,
   dispatch:(action)=> set((state) => cardReducer(state, action))
}));