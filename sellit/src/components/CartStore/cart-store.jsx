import { create } from "zustand";
import { devtools } from "zustand/middleware";


export const useCartStore = create(
  devtools((set) => ({
    cart: [],
    popup: false,
    popupProduct: {},
    setClosePopup: (state)=> set({popup: false}),
    buyNow: (product) =>
      set((state) => ({
        popup: true,
        popupProduct: product,
      })),
    addToCart: (product) =>
      set((state) => ({
        cart: [...state.cart.filter((prod) => prod.id !== product.id), product],
      })),
    removeFromCart: (productId) =>
      set((state) => ({
        cart: state.cart.filter((product) => product.id !== productId),
      })),
    clearCart: () => set({ cart: [] }),
  }))
);
