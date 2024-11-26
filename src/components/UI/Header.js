import React, { useState, useContext } from "react";
import Button from "./Button";
import "./Header.css";
import CartItems from "../Cart/CartItems";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthContext";

const Header = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [generics, setGenericsStatus] = useState(false);

  const { loggedIn, setLoggedIn } = useContext(AuthContext);

  const toggleCartStatus = () => {
    setCartIsShown((prevStatus) => !prevStatus);
  };
  const genericsHandler = () => {
    setGenericsStatus(true);
  }
  const genericsFalseMaker = () => {
    setGenericsStatus(false);
  }
  const logoutHandler = () => {
    setLoggedIn(false);
  }


  return (
    <>
      <div className="horizontal-strip">

        <div className="logo">
          <Link to="/"></Link>
        </div>

        <ul className="nav-links">
          <li><Link to="/home" onClick={genericsFalseMaker}>Home</Link></li>
          <li><Link to="/store" onClick={genericsHandler}>Store</Link></li>
          <li><Link to="/movies" onClick={genericsFalseMaker}>Movies</Link></li>
          <li><Link to="/about" onClick={genericsFalseMaker}>About</Link></li>
          {!loggedIn && <li><Link to="/login" onClick={genericsFalseMaker}>Login</Link></li>}
        </ul>

        {loggedIn && (
          <div className="right-buttons">
            <Button text="Cart" onClick={toggleCartStatus} />
            <Button text="Logout" onClick={logoutHandler} />
          </div>)}
      </div>

      {generics && <div className="generics">The Generics</div>}

      {cartIsShown && <CartItems closeCart={toggleCartStatus} />}


      <Outlet />
    </>
  );
};

export default Header;
