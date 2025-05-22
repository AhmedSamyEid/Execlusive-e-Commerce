import { useEffect, useState } from "react";
import { useNavigate } from "react-router";


interface CartItem {
  id: number;
  title: string;
  price: number;
  oldPrice?: number;
  rating?: number;
  reviews?: number;
  discount?: number;
  src: string;
  alt: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setCartItems(stored);

    const initialQuantities: { [key: number]: number } = {};
    stored.forEach((item: CartItem, index: number) => {
      initialQuantities[index] = 1;
    });
    setQuantities(initialQuantities);
  }, []);

  const handleQuantityChange = (index: number, value: string) => {
    const newQuantities = { ...quantities, [index]: parseInt(value) };
    setQuantities(newQuantities);
  };

  const calculateSubtotal = (price: number, quantity: number) => price * quantity;

  const total = cartItems.reduce((sum, item, index) => {
    const quantity = quantities[index] || 1;
    return sum + item.price * quantity;
  }, 0);

  const handleReturnToShop = () => {
    navigate("/"); 
  };

  const handleUpdateCart = () => {

    const updatedItems = cartItems.map((item, index) => ({
      ...item,
      quantity: quantities[index] || 1,
    }));
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    alert("Cart updated successfully!");
  };

  return (
    <div className="p-8 bg-white min-h-screen">
      <nav className="text-sm mb-6">
        <span className="text-gray-500">Home /</span>{" "}
        <span className="text-black font-medium">Cart</span>
      </nav>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200 mb-6">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left p-3">Product</th>
              <th className="text-left p-3">Price</th>
              <th className="text-left p-3">Quantity</th>
              <th className="text-left p-3">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={item.id} className="border-t">
                <td className="p-3 flex items-center gap-2">
                  <img src={item.src} alt={item.alt} className="w-10 h-10" />
                  {item.title}
                </td>
                <td className="p-3">${item.price}</td>
                <td className="p-3">
                  <select
                    value={quantities[index] || 1}
                    onChange={(e) => handleQuantityChange(index, e.target.value)}
                    className="border rounded px-2 py-1"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1 < 10 ? `0${i + 1}` : i + 1}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="p-3">
                  ${calculateSubtotal(item.price, quantities[index] || 1)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between mb-6">
        <button onClick={handleReturnToShop} className="border px-4 py-2 rounded">
          Return To Shop
        </button>
        <button onClick={handleUpdateCart} className="border px-4 py-2 rounded">
          Update Cart
        </button>
      </div>


      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex gap-2 h-10">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border px-4 py-2 flex-1 rounded"
          />
          <button className="bg-red-500 text-white px-4 py-2  rounded">Apply Coupon</button>
        </div>

        <div className="border p-4 rounded shadow-sm w-full max-w-sm ml-auto">
          <h2 className="font-semibold text-lg mb-4">Cart Total</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>${total}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping:</span>
            <span className="text-green-500">Free</span>
          </div>
          <div className="flex justify-between font-semibold border-t pt-2 mt-2">
            <span>Total:</span>
            <span>${total}</span>
          </div>
          <button className="w-full mt-4 bg-red-500 text-white py-2 rounded">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
}
