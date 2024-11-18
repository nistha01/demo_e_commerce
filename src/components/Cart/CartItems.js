import Button from '../UI/Button';
import './CartItems.css';

const CartItems = (props) => {
    const cartElements = [
        {
            title: 'Colors',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
            quantity: 2,
        },
        {
            title: 'Black and white Colors',
            price: 50,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
            quantity: 3,
        },
        {
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
            quantity: 1,
        },
    ];

    const totalPrice = cartElements.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const handleClick = () => {
        props.closeCart();
    };

    return (
        <div className="cart-container">
            <header className="cart-header">
                <h1>Cart</h1>
                <Button text="X" className="close-button" onClick={handleClick} />
            </header>

            <div className="cart-items">
                <div className="cart-header-row">
                    <h2>Item</h2>
                    <h2>Price</h2>
                    <h2>Quantity</h2>
                </div>
                {cartElements.map((item, index) => (
                    <div key={index} className="cart-row">
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
