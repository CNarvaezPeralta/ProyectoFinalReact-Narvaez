import { useState } from 'react';
import { useCart } from '../context/useCart';
import { db } from '../firebase/firebaseconfig';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

function CheckoutForm() {
    const { cart, cartTotal, clearCart } = useCart();

    // Estados del formulario
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');

    // Estado para guardar el ID de la orden generada
    const [orderId, setOrderId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación básica
        if (!nombre || !email || !telefono) {
            alert("Por favor completa todos los campos.");
            return;
        }

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
            alert("Hubo un problema al procesar la compra. Intenta nuevamente.");
        }
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h2>Finalizar compra</h2>

            {orderId ? (
                <div>
                    <p> ¡Gracias por tu compra!</p>
                    <p> Tu número de orden es: <strong>{orderId}</strong></p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
                    <input
                        type="text"
                        placeholder="Nombre completo"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="tel"
                        placeholder="Teléfono"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                    />
                    <button type="submit">Confirmar compra</button>
                </form>
            )}
        </div>
    );
}

export default CheckoutForm;