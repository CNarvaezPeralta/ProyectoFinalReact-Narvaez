// src/components/Cart.jsx
import { useCart } from '../context/useCart';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

function Cart() {
    const { cart, cartQuantity, cartTotal, clearCart } = useCart();

    if (cart.length === 0) {
        return (
            <div style={{ padding: '2rem' }}>
                <h2>Carrito de compras</h2>
                <p>Tu carrito está vacío 🛒</p>
                <Link to="/">Volver a la tienda</Link>
            </div>
        );
    }

    return (
        <div style={{ padding: '2rem' }}>
            <h2>Carrito de compras</h2>

            {cart.map((producto) => (
                <CartItem key={producto.id} item={producto} />
            ))}

            <hr />

            <p><strong>Total de productos:</strong> {cartQuantity}</p>
            <p><strong>Total a pagar:</strong> ${cartTotal}</p>

            <div style={{ marginTop: '1rem' }}>
                <button onClick={clearCart}>Vaciar carrito 🗑</button>
                <Link to="/checkout">
                    <button style={{ marginLeft: '1rem' }}>Finalizar compra 🛍</button>
                </Link>
            </div>
        </div>
    );
}

export default Cart;