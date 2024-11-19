import React, {useState,useContext} from "react";
import Button from "../UI/Button";
import "./Store.css";
import CartContext from "../Cart/CartContext";

const Store = () => {
    const [store, setStore] = useState(true);
    const { addToCart } = useContext(CartContext);

    const products = [
        {
            id: 1,
            title: 'Colors',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
        {
            id: 2,
            title: 'Black and white Colors',
            price: 50,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
        {
            id: 3,
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        },
        {
            id: 4,
            title: 'Blue Colors',
            price: 80,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        },
    ];

    
    const toggleStore = () => {
        setStore((prevStore) => !prevStore);
    };

    return store ? (
        <div className="store-container">
            <h1>Our Products</h1>
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img
                            src={product.imageUrl}
                            alt={product.title}
                            className="product-image"
                        />
                        <h2 className="product-title">{product.title}</h2>
                        <p className="product-price">${product.price}</p>
                        <button className="add-to-cart-button" onClick={()=>addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
            <Button text="Hide Store" onClick={toggleStore} />
        </div>
    ) : (
        <div className="store-closed">
            <h2>The Store is Closed</h2>
            <Button text="Open Store" onClick={toggleStore} />
        </div>
    );
};

export default Store;
