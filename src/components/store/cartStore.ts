// // store/cartStore.ts
// import { create } from 'zustand';

// type Product = {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
// };

// type CartState = {
//   cart: Product[];
//   addToCart: (product: Product) => void;
// };

// export const useCartStore = create<CartState>((set) => ({
//   cart: [],
//   addToCart: (product) =>
//     set((state) => ({
//       cart: [...state.cart, product],
//     })),
// }));
