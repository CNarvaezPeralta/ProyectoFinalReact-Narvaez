import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function ItemListContainer({ greeting }) {
    const { categoriaId } = useParams(); // ← Captura el ID de la categoría
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true); // ← Estado para saber si está cargando

    useEffect(() => {
        setLoading(true); // Inicia el loading en true

        const productosSimulados = [
            { id: '1', nombre: 'Bolso Lila', precio: 40, categoria: 'colores' },
            { id: '2', nombre: 'Bolso Verde', precio: 45, categoria: 'colores' },
            { id: '3', nombre: 'Bolso Rosa', precio: 38, categoria: 'colores' },
            { id: '4', nombre: 'Bolso Grande', precio: 50, categoria: 'tamaño' },
            { id: '5', nombre: 'Bolso Pequeño', precio: 35, categoria: 'tamaño' },
        ];

        const obtenerProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productosSimulados);
            }, 1000);
        });

        obtenerProductos.then((res) => {
            if (categoriaId) {
                const filtrados = res.filter(prod => prod.categoria === categoriaId);
                setProductos(filtrados);
            } else {
                setProductos(res);
            }

            setLoading(false); // Finaliza la carga
        });
    }, [categoriaId]);

    return (
        <div style={{ padding: '2rem' }}>
            <h2>{greeting || "Catálogo de productos"}</h2>

            {loading ? (
                <p>Cargando productos...</p>
            ) : productos.length === 0 ? (
                <p>No se encontraron productos en esta categoría.</p>
            ) : (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {productos.map((producto) => (
                        <li key={producto.id} style={{ margin: '10px 0' }}>
                            <Link to={`/item/${producto.id}`}>
                                {producto.nombre} - ${producto.precio}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ItemListContainer;