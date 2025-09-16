import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
    const { itemId } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        const productos = [
            { id: '1', nombre: 'Bolso Lila', precio: 40, descripcion: 'Bolso artesanal color lila' },
            { id: '2', nombre: 'Bolso Verde', precio: 45, descripcion: 'Bolso artesanal color verde' },
            { id: '3', nombre: 'Bolso Rosa', precio: 38, descripcion: 'Bolso artesanal color rosa' },
            { id: '4', nombre: 'Bolso Grande', precio: 50, descripcion: 'Bolso artesanal color rosa' },
            { id: '5', nombre: 'Bolso Pequeño', precio: 35, descripcion: 'Bolso artesanal color rosa' },
        ];

        const obtenerProducto = new Promise((resolve) => {
            setTimeout(() => {
                const resultado = productos.find((prod) => prod.id === itemId);
                resolve(resultado);
            }, 1000);
        });

        obtenerProducto.then((res) => setProducto(res));
    }, [itemId]);

    return (
        <>
            {producto ? <ItemDetail producto={producto} /> : <p style={{ padding: '2rem' }}>Cargando producto...</p>}
        </>
    );
}

export default ItemDetailContainer;