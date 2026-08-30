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
        <div className="item-count">
            <div className="item-count-controls">
                <button onClick={decrementar} disabled={cantidad <= 1} aria-label="Restar unidad">-</button>
                <span>{cantidad}</span>
                <button onClick={incrementar} disabled={cantidad >= stock} aria-label="Sumar unidad">+</button>
            </div>

            <button
                onClick={() => onAdd(cantidad)}
                className="add-to-cart-btn"
            >
                Agregar a la cesta
            </button>
        </div>
    );
}

export default ItemCount;
