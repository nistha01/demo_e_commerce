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

        <div className="logo">
          <Link to="/"></Link>
        </div>

        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/store">Store</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        <div className="container-with-cart">
          <Button text="Cart" onClick={toggleCartStatus} />
        </div>
      </div>

      <div className="generics">The Generics</div>

      {cartIsShown && <CartItems closeCart={toggleCartStatus} />}

    
      <Outlet />
    </>
  );
};

export default Header;
