import { Link } from "react-router";
import { FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
interface CartItem {
  id: number;
  title: string;
  price: number;
  qty: number;
  src: string;
}
const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  useEffect(() => {
    const stored: CartItem[] = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const prepared: CartItem[] = stored.map((item) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      qty: 1,
      src: item.src,
    }));

    setCartItems(prepared);
  }, []);

  const handleQtyChange = (id: number, qty: number) => {
    const quantity = qty < 1 ? 1 : qty;
    const updated = cartItems.map((item) => (item.id === id ? { ...item, qty: quantity } : item));
    setCartItems(updated);
  };

  const handleRemoveItem = (id: number) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="p-6 lg:p-16 bg-white text-black min-h-screen">
      <p className="text-sm text-gray-500 mb-4">
        <Link to="/">Home</Link>
      </p>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg mt-20">Your cart is empty.</p>
      ) : (
        <>
          <div className="hidden md:block w-full overflow-x-auto">
            <table className="w-full border text-sm text-left">
              <thead className="bg-gray-100">
                <tr className="uppercase text-gray-500">
                  <th className="p-4">Product</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Quantity</th>
                  <th className="p-4">Total</th>
                  <th className="p-4">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-4 flex items-center gap-4">
                      <img src={item.src} alt={item.title} className="w-16 h-16 object-contain" />
                      <span>{item.title}</span>
                    </td>
                    <td className="p-4">${item.price}</td>
                    <td className="p-4">
                      <input type="number" value={item.qty} min={1} onChange={(e) => handleQtyChange(item.id, +e.target.value)} className="border rounded px-2 w-16" />
                    </td>
                    <td className="p-4">${item.price * item.qty}</td>
                    <td className="p-4 text-center">
                      <button onClick={() => handleRemoveItem(item.id)} className="text-red-600 hover:text-red-800" title="Remove item">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:hidden gap-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between border p-4 rounded-lg shadow-sm">
                <div className="flex items-center gap-4">
                  <img src={item.src} alt={item.title} className="w-16 h-16 object-contain" />
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-gray-500">${item.price}</p>
                    <input type="number" value={item.qty} min={1} onChange={(e) => handleQtyChange(item.id, +e.target.value)} className="mt-2 border rounded px-2 w-16" />
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">${item.price * item.qty}</p>
                  <button onClick={() => handleRemoveItem(item.id)} className="text-red-600 hover:text-red-800 mt-2" title="Remove item">
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-right">
            <p className="text-xl font-bold">Subtotal: ${subtotal}</p>
            <button className="mt-4 bg-black text-white px-6 py-2 rounded hover:bg-gray-800">Update Cart</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
