import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { FaArrowRight } from "react-icons/fa6";

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="sticky z-[100] inset-x-0 top-0 bg-white/75 backdrop-blur-lg transition-all h-14 w-full flex items-center justify-between border-b border-slate-200 px-4">
      <div className="flex items-center">
        <Link to="/">
          <img
            className="w-[7vw] h-auto ml-2 cursor-pointer"
            src={Logo}
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <ul className="flex items-center gap-8 text-gray-800 text-md">
          <Link to="/">
            <li className="hover:text-zinc-500">Home</li>
          </Link>
          <Link to="/about">
            <li className="hover:text-zinc-500">About Us</li>
          </Link>
          <Link to="/instamart">
            <li className="hover:text-zinc-500">Instamart</li>
          </Link>
          <Link to="/cart">
            <li className="hover:text-zinc-500">Cart</li>
          </Link>
        </ul>

        <div className="h-8 w-px bg-zinc-200 hidden sm:block"></div>

        {isLoggedIn ? (
          <div className=" bg-zinc-100 py-1.5 px-3 rounded-lg ml-1">
            <button
              className="text-sm text-gray-900"
              onClick={() => setIsLoggedIn(false)}>
              Logout
            </button>
          </div>
        ) : (
          <div className="flex justify-center items-center gap-2 bg-zinc-100 py-1.5 px-3 rounded-lg ml-1 ">
            <button
              className="text-sm text-gray-900"
              onClick={() => setIsLoggedIn(true)}>
              Login
            </button>
            <FaArrowRight className="h-4 w-4" />
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderComponent;
