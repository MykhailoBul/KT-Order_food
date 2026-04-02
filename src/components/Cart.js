import { useContext } from 'react';
import CartContext from '../store/CartContext';
import Button from './UI/Button';

const Cart = ({ onClose }) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = cartCtx.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    return (
        <div className="cart">
            <h2>Your Cart</h2>

            <ul>
                {cartCtx.items.map(item => (
                    <li key={item.id} className="cart-item">
                        <p>
                            {item.name} - {item.quantity} x {item.price}€
                        </p>
                    </li>
                ))}
            </ul>

            <p className="cart-total">
                Total: {totalAmount.toFixed(2)}€
            </p>
            <div className="modal-actions">
                <Button textOnly onClick={onClose}>
                    Close
                </Button>
                <Button onClick={cartCtx.clearCart}>
                    Checkout
                </Button>
            </div>
        </div>
    );
};

export default Cart;