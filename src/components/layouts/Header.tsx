import { useState } from "react";
import { Link, NavLink } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
    { name: "Sign Up", path: "/signup" },
  ];

  return (
    <header className="border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link className="font-bold text-2xl" to="/">
          Exclusive
        </Link>

        <button
          className="lg:hidden text-3xl focus:outline-none z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } lg:block absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-md lg:shadow-none transition-all duration-300 z-40`}
        >
          <ul className="flex flex-col lg:flex-row items-center gap-5 p-4 lg:p-0">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 font-medium"
                      : "text-gray-700 hover:text-blue-500"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
