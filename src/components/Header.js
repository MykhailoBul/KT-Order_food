import logo from '../assets/logo.jpg'
import Button from './UI/Button'
import { useContext, useEffect } from "react";
import CartContext from "../store/CartContext";

const Header = ({ onOpenCart }) => {
    const cartCtx = useContext(CartContext);

    useEffect(() => {
        console.log('cart items', cartCtx);
    }, [cartCtx]);
    const totalItems = cartCtx.items.reduce(
        (sum, item) => sum + item.quantity,
        0
    );
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo}/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
                <Button textOnly onClick={onOpenCart}>
                    Cart ({totalItems})
                </Button>
            </nav>
        </header>
    )
}

export default Header
