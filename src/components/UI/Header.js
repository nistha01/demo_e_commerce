import About from "../About/About";
import Cart from "../Cart/Cart";
import Home from "../Home/Home";
import Store from "../Store/Store";
import './Header.css';

const Header = () => {
    return (
        <>
        <div className="header">
            <div className="container">
                <nav className="nav">
                    <a href="#" className="nav-link"><Home /></a>
                    <a href="#" className="nav-link"><Store /></a>
                    <a href="#" className="nav-link"><About /></a>
                </nav>
                <a href="#" className="cart-button">
                    <Cart />
                    <span className="cart-count">3</span> {/* Example cart count */}
                </a>
            </div>
        </div>
        <div className="generics">Generics</div>
        </>
        

    );
}

export default Header;
