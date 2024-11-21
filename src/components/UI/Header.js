import React, { useState } from "react";
import Button from "./Button";
import "./Header.css";
import CartItems from "../Cart/CartItems";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const toggleCartStatus = () => {
    setCartIsShown((prevStatus) => !prevStatus);
  };

  return (
    <>
      <div className="horizontal-strip">
        {/* Left-aligned content (e.g., logo) */}
        <div className="logo">
          <Link to="/"></Link>
        </div>

        {/* Middle-aligned navigation links */}
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/store">Store</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        {/* Right-aligned Cart Button */}
        <div className="container-with-cart">
          <Button text="Cart" onClick={toggleCartStatus} />
        </div>
      </div>

      <div className="generics">The Generics</div>

      {/* Conditionally render CartItems */}
      {cartIsShown && <CartItems closeCart={toggleCartStatus} />}

      {/* Render child routes here */}
      <Outlet />
    </>
  );
};

export default Header;
