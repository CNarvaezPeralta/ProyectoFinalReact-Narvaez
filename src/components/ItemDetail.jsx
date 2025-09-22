import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate
import ItemCount from './ItemCount';
import { useCart } from '../context/useCart'; // Importamos el contexto

function ItemDetail({ producto }) {
    const [agregado, setAgregado] = useState(false);
    const { addItem } = useCart(); // Usamos la función del contexto
    const navigate = useNavigate(); // Hook para redireccionar

    const handleAdd = (cantidad) => {
        addItem(producto, cantidad); // Agregamos al carrito
        setAgregado(true);
    };

    return (
        <div style={{ padding: '2rem' }}>
            <img src={producto.imagen} alt={producto.nombre} style={{ maxWidth: '300px', marginBottom: '1rem' }} />
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p><strong>Precio:</strong> ${producto.precio}</p>

            {!agregado ? (
                <ItemCount stock={10} initial={1} onAdd={handleAdd} />
            ) : (
                <div>
                    <p style={{ color: 'green' }}>Producto agregado al carrito ✔️</p>
                    <button onClick={() => navigate('/')} style={{ marginRight: '1rem' }}>
                        Seguir comprando
                    </button>
                    <button onClick={() => navigate('/cart')}>
                        Ir al carrito
                    </button>
                </div>
            )}
        </div>
    );
}

export default ItemDetail;