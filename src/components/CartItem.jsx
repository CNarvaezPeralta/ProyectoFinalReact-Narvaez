// src/components/CartItem.jsx
import { useCart } from '../context/useCart';

function CartItem({ item }) {
    const { removeItem } = useCart();

    return (
        <div style={{ border: '1px solid #ddd', padding: '1rem', marginBottom: '1rem' }}>
            <h3>{item.nombre}</h3>
            <p>Precio: ${item.precio}</p>
            <p>Cantidad: {item.cantidad}</p>
            <p>Total: ${item.precio * item.cantidad}</p>
            <button onClick={() => removeItem(item.id)}>Eliminar</button>
        </div>
    );
}

export default CartItem;