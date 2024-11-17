import React from 'react';
import Button from './Button'; // Assuming Button component exists
import './Header.css';
import CartItems from '../Cart/CartItems';

const Header = () => {
  return (
    <>
      <div className="horizontal-strip">
        {/* Left-aligned content (optional, e.g., logo) */}
        <div></div>

        {/* Middle-aligned navigation links */}
        <ul className="nav-links">
          <li>Home</li>
          <li>Store</li>
          <li>About</li>
        </ul>

        {/* Right-aligned Cart Button */}
        <div className="container-with-cart">
          <Button text="Cart" />
        </div>
      </div>
      <div className="generics">The Generics</div>
      <CartItems/>
      
    </>
  );
};

export default Header;
