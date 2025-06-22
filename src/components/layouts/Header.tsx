import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Signup", path: "/signup" },
  { name: "Login", path: "/login" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const updateCartCount = () => {
      const stored = JSON.parse(localStorage.getItem("cartItems") || "[]");
      setCartCount(stored.length);
    };

    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  return (
    <header className="border-b border-gray-200 bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-bold text-2xl">
          Exclusive
        </Link>

        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-black font-semibold"
                    : "text-gray-600 hover:text-black"
                }
              >
                {t(link.name)}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <div className="bg-gray-100 px-3 py-2 rounded-md flex items-center w-64">
            <input
              type="text"
              placeholder={t("What are you looking for?")}
              className="bg-transparent outline-none text-sm flex-grow"
            />
            <FaSearch className="text-gray-600" />
          </div>
          <FaHeart className="text-xl text-gray-700 hover:text-red-500 cursor-pointer" />

          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-xl text-gray-700 hover:text-blue-500 cursor-pointer" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        <button
          className="lg:hidden text-3xl text-gray-700 z-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <nav className="lg:hidden bg-white shadow-md px-6 py-4">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 font-medium block"
                      : "text-gray-700 hover:text-blue-500 block"
                  }
                >
                  {t(link.name)}
                </NavLink>
              </li>
            ))}

            <li>
              <div className="bg-gray-100 px-3 py-2 rounded-md flex items-center w-full">
                <input
                  type="text"
                  placeholder={t("What are you looking for?")}
                  className="bg-transparent outline-none text-sm flex-grow"
                />
                <FaSearch className="text-gray-600" />
              </div>
            </li>

            <li className="flex items-center gap-5">
              <FaHeart className="text-xl text-gray-700 hover:text-red-500 cursor-pointer" />

              <Link to="/cart" className="relative">
                <FaShoppingCart className="text-xl text-gray-700 hover:text-blue-500 cursor-pointer" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
