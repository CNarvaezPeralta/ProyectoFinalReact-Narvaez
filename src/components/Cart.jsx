import { useCart } from '../context/useCart';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const { cart, removeItem, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();

    if (cart.length === 0) {
        return (
            <div style={{ padding: '2rem' }}>
                <h2>Tu carrito está vacío 🛒</h2>
            </div>
        );
    }

    return (
        <div style={{ padding: '2rem' }}>
            <h2>Carrito de compras</h2>
            {cart.map((item) => (
                <CartItem key={item.id} item={item} onRemove={removeItem} />
            ))}
            <h3>Total: ${cartTotal}</h3>

            <button onClick={() => navigate('/checkout')} style={{ marginTop: '1rem', marginRight: '1rem' }}>
                Finalizar compra
            </button>
            <button onClick={clearCart} style={{ marginTop: '1rem' }}>
                Vaciar carrito
            </button>
        </div>
    );
}

export default Cart;