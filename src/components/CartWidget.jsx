
// src/components/CartWidget.jsx
import { Link } from 'react-router-dom';
import { useCart } from '../context/useCart';

function CartWidget() {
    const { cartQuantity } = useCart();

    return (
        <Link to="/cart" style={{ textDecoration: 'none', color: 'black' }}>
            🛒 {cartQuantity > 0 && <span>({cartQuantity})</span>}
        </Link>
    );
}

export default CartWidget;