import { useNavigate } from "react-router";
import { CartItem, ProductTypes } from "../types/ProductTypes";

export function useCart() {
  const navigate = useNavigate();
  const handleAddToCart = (item: ProductTypes) => {
    const stored: CartItem[] = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const existingIndex = stored.findIndex((i) => i.id === item.id);
    let updatedCart: CartItem[];
    if (existingIndex !== -1) {
      updatedCart = stored.map((cartItem, index) => (index === existingIndex ? { ...cartItem, qty: cartItem.qty + 1 } : cartItem));
    } else {
      updatedCart = [
        ...stored,
        {
          ...item,
          qty: 1,
          priceNumber: Number(item.price),
        },
      ];
    }
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    navigate("/cart");
  };
  return { handleAddToCart };
}
