import { useState } from 'react';

function ItemCount({ stock = 10, initial = 1, onAdd }) {
    const [cantidad, setCantidad] = useState(initial);

    // Aumentar cantidad
    const incrementar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    };

    // Disminuir cantidad
    const decrementar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    return (
        <div style={{ marginTop: '1rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <button onClick={decrementar}>-</button>
                <span>{cantidad}</span>
                <button onClick={incrementar}>+</button>
            </div>

            <button 
                onClick={() => onAdd(cantidad)} 
                style={{ marginTop: '1rem' }}
            >
                Agregar al carrito
            </button>
        </div>
    );
}

export default ItemCount;
