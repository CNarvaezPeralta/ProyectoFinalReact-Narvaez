import { useState } from 'react';
import { useCart } from '../context/useCart'; // ✅ Usamos el context para acceder al carrito

function CheckoutForm() {
    const { cart, cartTotal, clearCart } = useCart();

    // Estados locales para el formulario
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación básica
        if (!nombre || !email || !telefono) {
            alert("Por favor completa todos los campos.");
            return;
        }

        // Simulación de orden
        const orden = {
            cliente: { nombre, email, telefono },
            items: cart,
            total: cartTotal,
            fecha: new Date().toLocaleString()
        };

        console.log("Orden generada:", orden);
        alert("¡Gracias por tu compra!");

        clearCart();
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h2>Finalizar compra</h2>
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
        </div>
    );
}

export default CheckoutForm;