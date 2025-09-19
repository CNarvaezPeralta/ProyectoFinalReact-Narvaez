import CartItem from './CartItem';

function Cart() {
    // 🧪 Productos simulados (más adelante se reemplazan por el context)
    const productosEnCarrito = [
        { id: 1, nombre: 'Bolso Lila', precio: 40, cantidad: 2 },
        { id: 2, nombre: 'Bolso Azul', precio: 35, cantidad: 1 },
    ];

    // 🧪 Simulamos función para eliminar producto
    const eliminarProducto = (id) => {
        alert(`Eliminar producto con id: ${id}`);
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h2>Carrito de compras</h2>
            {productosEnCarrito.map((item) => (
                <CartItem key={item.id} item={item} onRemove={eliminarProducto} />
            ))}
        </div>
    );
}

export default Cart;