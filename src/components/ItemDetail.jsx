import { useState } from 'react';
import ItemCount from './ItemCount';

function ItemDetail({ producto }) {
    const [agregado, setAgregado] = useState(false); // Estado para ocultar ItemCount luego de agregar

    // Esta función se ejecuta al hacer clic en "Agregar al carrito"
    const handleAdd = (cantidad) => {
        console.log(`Agregado al carrito: ${cantidad} unidades`);
        setAgregado(true); // Oculta ItemCount
        // Más adelante: aquí se llamará al context del carrito
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