import { useCart } from '../context/useCart'; // Hook personalizado para acceder al contexto del carrito
import CartItem from './CartItem';            // Componente que representa cada ítem en el carrito
import { useNavigate } from 'react-router-dom'; // Hook para redireccionar entre rutas

function Cart() {
    const { cart, removeItem, cartTotal, clearCart } = useCart(); // Funciones y estado del carrito
    const navigate = useNavigate(); // Para navegar a otra ruta

    // Si el carrito está vacío, mostrar mensaje
    if (cart.length === 0) {
        return (
            <div style={{ padding: '2rem' }}>
                <h2>Tu carrito está vacío 🛒</h2>
            </div>
        );
    }

    // Si hay productos en el carrito, renderizarlos
    return (
        <div style={{ padding: '2rem' }}>
            <h2>Carrito de compras</h2>

            {/* Listado de productos en el carrito */}
            {cart.map((item) => (
                <CartItem key={item.id} item={item} onRemove={removeItem} />
            ))}

            {/* Total de la compra */}
            <h3>Total: ${cartTotal.toFixed(2)}</h3>

            {/* Botón para ir al checkout */}
            <button
                onClick={() => navigate('/checkout')}
                style={{ marginTop: '1rem', marginRight: '1rem' }}
            >
                Finalizar compra
            </button>

            {/* Botón para vaciar el carrito */}
            <button onClick={clearCart} style={{ marginTop: '1rem' }}>
                Vaciar carrito
            </button>
        </div>
    );
}

export default Cart;