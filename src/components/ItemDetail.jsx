import { useState } from 'react';
import ItemCount from './ItemCount';
import { useCart } from '../context/useCart'; // ✅ Importamos el contexto

function ItemDetail({ producto }) {
    const [agregado, setAgregado] = useState(false);
    const { addItem } = useCart(); // ✅ Usamos la función del contexto

    const handleAdd = (cantidad) => {
        addItem(producto, cantidad); // ✅ Agregamos al carrito
        setAgregado(true);
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p><strong>Precio:</strong> ${producto.precio}</p>

            {!agregado ? (
                <ItemCount stock={10} initial={1} onAdd={handleAdd} />
            ) : (
                <p style={{ color: 'green' }}>Producto agregado al carrito ✔️</p>
            )}
        </div>
    );
}

export default ItemDetail;