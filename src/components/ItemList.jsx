import Item from './Item';

// Lista de productos usando el componente Item
export default function ItemList({ productos }) {
    return (
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {productos.map((producto) => (
                <Item
                    key={producto.id}
                    id={producto.id}
                    nombre={producto.nombre}
                    precio={producto.precio}
                />
            ))}
        </ul>
    );
}