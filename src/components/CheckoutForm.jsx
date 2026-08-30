import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/useCart';
import { db } from '../services/firebase/firebaseconfig';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import gsap from 'gsap';
import '../styles/CheckoutForm.css';


function CheckoutForm() {
    const { cart, cartTotal, clearCart } = useCart();

    // Estados del formulario
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');

    // Estado para guardar el ID de la orden generada
    const [orderId, setOrderId] = useState('');
    const [formError, setFormError] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const successRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormError(null);
        setSubmitting(true);

        // Armamos la orden
        const orden = {
            cliente: { nombre, email, telefono },
            items: cart.map(item => ({
                id: item.id,
                nombre: item.nombre,
                cantidad: item.cantidad,
                precio: item.precio
            })),
            total: cartTotal,
            fecha: Timestamp.fromDate(new Date())
        };

        try {
            // Guardamos en Firestore
            const docRef = await addDoc(collection(db, 'ordenes'), orden);
            setOrderId(docRef.id);
            clearCart(); // Limpiamos el carrito
        } catch (error) {
            console.error("Error al guardar la orden:", error);
            setFormError("Hubo un problema al procesar la compra. Inténtalo de nuevo.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="checkout-page">
            <div className="page-header">
                <h2>Finalizar compra</h2>
                <div className="breadcrumb">
                    <Link to="/">Inicio</Link>
                    <span>/</span>
                    <Link to="/cart">Tu cesta</Link>
                    <span>/</span>
                    <span>Finalizar compra</span>
                </div>
            </div>

            {orderId ? (
                <div
                    className="order-success"
                    ref={(el) => {
                        if (el && el !== successRef.current) {
                            successRef.current = el;
                            gsap.fromTo(
                                el,
                                { y: 16, autoAlpha: 0 },
                                { y: 0, autoAlpha: 1, duration: 0.55, ease: 'power2.out' }
                            );
                        }
                    }}
                >
                    <h3 className="font-display">¡Gracias por tu compra!</h3>
                    <p>Tu número de orden es:</p>
                    <p className="order-id">{orderId}</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="checkout-form">
                    <div className="form-field">
                        <label htmlFor="nombre">Nombre completo</label>
                        <input
                            id="nombre"
                            name="nombre"
                            type="text"
                            autoComplete="name"
                            required
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="email">Correo electrónico</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="telefono">Teléfono</label>
                        <input
                            id="telefono"
                            name="telefono"
                            type="tel"
                            autoComplete="tel"
                            required
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                        />
                    </div>

                    {formError && <p className="form-error">{formError}</p>}

                    <button type="submit" disabled={submitting}>
                        {submitting ? 'Procesando...' : 'Confirmar compra'}
                    </button>
                </form>
            )}
        </div>
    );
}

export default CheckoutForm;