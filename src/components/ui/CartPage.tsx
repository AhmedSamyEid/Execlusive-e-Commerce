import { useState, useEffect } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "LCD Monitor",
      price: 650,
      qty: 1,
      image: "/images/screen.png",
    },
    {
      id: 2,
      name: "H1 Gamepad",
      price: 550,
      qty: 2,
      image: "/images/PlayStation_arm.png",
    },
  ]);

  const [updateTrigger, setUpdateTrigger] = useState(0);

  const handleQtyChange = (id: number, qty: number) => {
    const quantity = qty < 1 ? 1 : qty;
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, qty: quantity } : item
    );
    setCartItems(updated);
  };

  const handleUpdateCart = () => {
    setUpdateTrigger((prev) => prev + 1);
  };

  useEffect(() => {
    console.log("Cart updated", cartItems);
  }, [updateTrigger, cartItems]);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="p-6 lg:p-16 bg-white text-black min-h-screen">
      <p className="text-sm text-gray-500 mb-4">
        Home / <span className="font-medium text-black">Cart</span>
      </p>

      <div className="w-full overflow-x-auto">
        <table className="w-full border text-sm text-left">
          <thead className="bg-gray-100">
            <tr className="uppercase text-gray-500">
              <th className="p-4">Product</th>
              <th className="p-4">Price</th>
              <th className="p-4">Quantity</th>
              <th className="p-4">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-4 flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-contain"
                  />
                  <span>{item.name}</span>
                </td>
                <td className="p-4">${item.price}</td>
                <td className="p-4">
                  <select
                    className="border p-1"
                    value={item.qty}
                    onChange={(e) => handleQtyChange(item.id, +e.target.value)}
                  >
                    {[1, 2, 3, 4, 5].map((q) => (
                      <option key={q} value={q}>
                        {q.toString().padStart(2, "0")}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="p-4">${item.price * item.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col lg:flex-row justify-between mt-6 gap-4">
        <button
          className="border px-4 py-2 text-sm"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Return To Shop
        </button>
        <button className="border px-4 py-2 text-sm" onClick={handleUpdateCart}>
          Update Cart
        </button>
      </div>

      <div className="flex flex-col lg:flex-row justify-between mt-10 gap-8">
        <div className="flex gap-4 h-10">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border px-4 py-2 text-sm"
          />
          <button className="bg-red-500 text-white px-4 py-2 text-sm">
            Apply Coupon
          </button>
        </div>

        <div className="border p-6 w-full lg:w-1/3">
          <h3 className="font-semibold text-lg mb-4">Cart Total</h3>
          <div className="flex justify-between mb-2 text-sm">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between mb-2 text-sm">
            <span>Shipping:</span>
            <span className="text-green-600">Free</span>
          </div>
          <div className="flex justify-between font-semibold text-base border-t pt-2">
            <span>Total:</span>
            <span>${subtotal}</span>
          </div>
          <button className="w-full bg-red-500 text-white py-2 mt-4">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
