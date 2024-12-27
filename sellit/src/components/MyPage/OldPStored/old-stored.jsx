import { create } from "zustand";

export const useOldStoredProduct = create((set) => ({
  oldStoredProduct: [],
  newOldStoredProduct: [],
  newOldProduct: {},
  productStatus: "",
  productStatusChange: (statuscode) =>
    set((state) => ({
      newOldProduct: { ...state.newOldProduct, productStatus: statuscode },
    })),
  addToOldProducts: (newProduct) =>
    set((state) => ({
      newOldStoredProduct: [
        ...state.newOldStoredProduct.filter(
          (prod) => prod.id !== newProduct.id
        ),
        { ...newProduct, productStatus: state.newOldProduct.productStatus },
      ],
    })),

  addOldStoredProduct: (product) =>
    set((state) => ({
      oldStoredProduct: [...state.oldStoredProduct.filter((prod)=>prod.id !==product.id), product],
    })),
  removeProduct: (productId) =>
    set((state) => ({
      oldStoredProduct: state.oldStoredProduct.filter(
        (product) => product.id !== productId
      ),
    })),
    removeOldProduct: (productId) =>set((state) => ({
      newOldStoredProduct: state.newOldStoredProduct.filter(
        (product) => product.id!== productId
      ),

    }))
}));
