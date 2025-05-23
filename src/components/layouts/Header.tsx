import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink, useNavigate } from "react-router";
import { FaBars, FaTimes, FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
    { name: "Sign Up", path: "/signup" },
    { name: "Login", path: "/login" },
  ];

  function handleLogout() {
    localStorage.removeItem("LoggedInUser");
    navigate("/login");
  }

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const stored = JSON.parse((localStorage.getItem("cartItems") ?? "[]") as string);
    setCartCount(stored.length);
  }, []);

  const handleCartUpdate = () => {
    const updated = JSON.parse((localStorage.getItem("cartItems") ?? "[]") as string);
    setCartCount(updated.length);
  };

  return (
    <header className="border-b border-gray-200 bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link className="font-bold text-2xl" to="/">
          {t("Exclusive")}
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

        <div className="hidden lg:flex items-center gap-4 relative">
          <div className="bg-gray-100 px-3 py-2 rounded-md flex items-center w-64">
            <input
              type="text"
              placeholder={t("search.placeholder")}
              className="bg-transparent outline-none text-sm flex-grow"
            />
            <FaSearch className="text-gray-600" />
          </div>

          <FaHeart className="text-xl text-gray-700 hover:text-red-500 cursor-pointer" />

          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-xl text-gray-700 hover:text-blue-500 cursor-pointer" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          <div className="relative">
            <FaUser
              className="text-xl text-gray-700 hover:text-purple-500 cursor-pointer"
              onClick={() => setShowUserMenu(!showUserMenu)}
            />

            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md py-2 z-50">
                <ul className="text-sm text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Manage My Account</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">My Order</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">My Cancellations</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">My Reviews</li>
                  <li onClick={handleLogout} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <button
          className="lg:hidden text-3xl text-gray-700 z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white px-6 pb-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className="block text-gray-700 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {t(link.name)}
                </NavLink>
              </li>
            ))}

            <div className="bg-gray-100 px-3 py-2 rounded-md flex items-center mt-2">
              <input
                type="text"
                placeholder={t("search.placeholder")}
                className="bg-transparent outline-none text-sm flex-grow"
              />
              <FaSearch className="text-gray-600" />
            </div>

            <div>
              <nav className="p-4 flex justify-end">
                <Link to="/cart" className="relative">
                  <FaShoppingCart className="text-2xl text-gray-700 hover:text-blue-500" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                      {cartCount}
                    </span>
                  )}
                </Link>
              </nav>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}
