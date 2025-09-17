import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

function ItemListContainer({ greeting }) {
    const { categoriaId } = useParams();
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

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

            setLoading(false);
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
                <ItemList productos={productos} />
            )}
        </div>
    );
}

export default ItemListContainer;