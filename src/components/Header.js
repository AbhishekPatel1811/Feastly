import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="header">
      <div className="left">
        <img className="logo" src={Logo} alt="logo"></img>
      </div>
      <div className="right">
        <ul className="nav-links">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <Link to="/instamart">
            <li>Instamart</li>
          </Link>
          <Link to="/cart">
            <li>Cart</li>
          </Link>
        </ul>

        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
      </div>
    </header>
  );
};

export default HeaderComponent;
