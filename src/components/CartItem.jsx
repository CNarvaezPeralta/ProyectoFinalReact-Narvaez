function CartItem({ item, onRemove, onUpdateQuantity }) {
    return (
        <div className="cart-row">
            <div className="cart-row-main">
                {item.imagen && (
                    <img src={item.imagen} alt={item.nombre} className="cart-item-image" />
                )}
                <div className="cart-row-details">
                    <h3>{item.nombre}</h3>
                    <button className="cart-remove-link" onClick={() => onRemove(item.id)}>
                        Eliminar
                    </button>

                    <div className="item-count-controls cart-row-qty">
                        <button
                            onClick={() => onUpdateQuantity(item.id, item.cantidad - 1)}
                            disabled={item.cantidad <= 1}
                            aria-label="Restar unidad"
                        >
                            -
                        </button>
                        <span>{item.cantidad}</span>
                        <button
                            onClick={() => onUpdateQuantity(item.id, item.cantidad + 1)}
                            aria-label="Sumar unidad"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
            <span className="cart-row-price">${(item.precio * item.cantidad).toFixed(2)}</span>
        </div>
    );
}

export default CartItem;
