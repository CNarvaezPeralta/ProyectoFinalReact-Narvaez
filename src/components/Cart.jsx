import { useLayoutEffect, useRef } from 'react';
import { useCart } from '../context/useCart'; // Hook personalizado para acceder al contexto del carrito
import CartItem from './CartItem';            // Componente que representa cada ítem en el carrito
import { useNavigate, Link } from 'react-router-dom'; // Hook para redireccionar entre rutas
import gsap from 'gsap';
import '../styles/Cart.css';

function Cart() {
    const { cart, removeItem, updateQuantity, cartTotal, clearCart } = useCart(); // Funciones y estado del carrito
    const navigate = useNavigate(); // Para navegar a otra ruta
    const tableRef = useRef(null);

    // Entrada suave de las filas de la cesta, en línea con el resto del sitio
    useLayoutEffect(() => {
        if (!tableRef.current) return;
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.cart-row',
                { y: 16, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.08, ease: 'power2.out' }
            );
        }, tableRef);
        return () => ctx.revert();
    }, [cart.length]);

    // Si el carrito está vacío, mostrar mensaje
    if (cart.length === 0) {
        return (
            <div className="cart-page">
                <div className="page-header">
                    <h2>Tu cesta</h2>
                    <div className="breadcrumb">
                        <Link to="/">Inicio</Link>
                        <span>/</span>
                        <span>Tu cesta</span>
                    </div>
                </div>
                <div className="cart-empty">
                    <p>Tu cesta está vacía.</p>
                    <Link to="/coleccion" className="btn btn-outline">Ver la colección</Link>
                </div>
            </div>
        );
    }

    // Si hay productos en el carrito, renderizarlos
    return (
        <div className="cart-page">
            <div className="page-header">
                <h2>Tu cesta</h2>
                <div className="breadcrumb">
                    <Link to="/">Inicio</Link>
                    <span>/</span>
                    <span>Tu cesta</span>
                </div>
            </div>

            <div className="cart-table" ref={tableRef}>
                <div className="cart-table-head">
                    <span>Producto</span>
                    <span>Precio</span>
                </div>

                {/* Listado de productos en el carrito */}
                {cart.map((item) => (
                    <CartItem key={item.id} item={item} onRemove={removeItem} onUpdateQuantity={updateQuantity} />
                ))}
            </div>

            {/* Total de la compra */}
            <div className="cart-total-row">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
            </div>
            <p className="cart-note">Envío calculado al finalizar la compra.</p>

            <button className="cart-checkout-btn" onClick={() => navigate('/checkout')}>
                Finalizar compra
            </button>
            <button className="btn-outline cart-clear-btn" onClick={clearCart}>
                Vaciar cesta
            </button>
        </div>
    );
}

export default Cart;
