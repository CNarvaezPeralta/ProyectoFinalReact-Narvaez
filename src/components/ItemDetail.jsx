function ItemDetail({ producto }) {
    return (
        <div style={{ padding: '2rem' }}>
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p><strong>Precio:</strong> ${producto.precio}</p>
        </div>
    );
}

export default ItemDetail;