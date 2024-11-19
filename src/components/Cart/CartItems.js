import React, { useContext } from 'react';
import CartContext from './CartContext';
import Button from '../UI/Button';
import './CartItems.css';

const CartItems = ({ closeCart }) => {
   
    const { cartItems, removeFromCart } = useContext(CartContext);

   
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <div className="cart-container">
            <header className="cart-header">
                <h1>Cart</h1>
                <Button text="X" className="close-button" onClick={closeCart} />
            </header>

            <div className="cart-items">
                <div className="cart-header-row">
                    <h2>Item</h2>
                    <h2>Price</h2>
                    <h2>Quantity</h2>
                </div>
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-row">
                        <div className="cart-item">
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="cart-image"
                            />
                            <span className="item-title">{item.title}</span>
                        </div>
                        <div className="cart-price">
                            <span>${item.price}</span>
                        </div>
                        <div className="cart-quantity">
                            <span>{item.quantity}</span>
                        </div>
                        <div className="cart-actions">
                            <Button
                                text="Remove"
                                className="remove-button"
                                onClick={() => removeFromCart(item.id)}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="cart-total">
                <h2>Total: ${totalPrice}</h2>
                <Button text="Purchase" className="purchase-button" />
            </div>
        </div>
    );
};

export default CartItems;
