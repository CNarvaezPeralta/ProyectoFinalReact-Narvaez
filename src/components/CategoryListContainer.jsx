import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ItemListContainer({ greeting }) {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        // Simula la carga de productos con una promesa
        const productosSimulados = [
            { id: '1', nombre: 'Bolso Lila', precio: 40 },
            { id: '2', nombre: 'Bolso Verde', precio: 45 },
            { id: '3', nombre: 'Bolso Rosa', precio: 38 },
        ];

        const obtenerProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productosSimulados);
            }, 1000);
        });

        obtenerProductos.then((res) => setProductos(res));
    }, []);

    return (
        <div style={{ padding: '2rem' }}>
            <h2>{greeting}</h2>
            <ul>
                {productos.map((producto) => (
                    <li key={producto.id} style={{ margin: '10px 0' }}>
                        <Link to={`/item/${producto.id}`}>
                            {producto.nombre} - ${producto.precio}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ItemListContainer;