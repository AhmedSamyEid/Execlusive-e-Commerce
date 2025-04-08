import { useState } from "react";
import { Link, NavLink } from "react-router";
import { FaBars, FaTimes, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
const {t} =useTranslation();
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
    { name: "Sign Up", path: "/signup" },
  ];

  return (
    <header className="border-b border-gray-200 bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
  
        <Link className="font-bold text-2xl" to="/">
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
              placeholder="What are you looking for?"
              className="bg-transparent outline-none text-sm flex-grow"
            />
            <FaSearch className="text-gray-600" />
          </div>

    
          <FaHeart className="text-xl text-gray-700 hover:text-red-500 cursor-pointer" />
          <FaShoppingCart className="text-xl text-gray-700 hover:text-blue-500 cursor-pointer" />
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
                  {link.name}
                </NavLink>
              </li>
            ))}
      
            <div className="bg-gray-100 px-3 py-2 rounded-md flex items-center mt-2">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-transparent outline-none text-sm flex-grow"
              />
              <FaSearch className="text-gray-600" />
            </div>


            <div className="flex items-center gap-5 mt-3">
              <FaHeart className="text-xl text-gray-700 hover:text-red-500 cursor-pointer" />
              <FaShoppingCart className="text-xl text-gray-700 hover:text-blue-500 cursor-pointer" />
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}
