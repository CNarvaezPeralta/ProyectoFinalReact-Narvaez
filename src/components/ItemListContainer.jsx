import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import '../styles/ItemList.css'

import { db } from '../firebase/firebaseconfig';
import { collection, getDocs, query, where } from 'firebase/firestore';

function ItemListContainer() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true); // 👈 loader
    const [error, setError] = useState(null);     // 👈 manejo de error

    const { categoriaId } = useParams();

    useEffect(() => {
        setLoading(true);
        setError(null);

        const productosRef = categoriaId
            ? query(collection(db, 'productos'), where('categoria', '==', categoriaId))
            : collection(db, 'productos');

        getDocs(productosRef)
            .then((snapshot) => {
                if (snapshot.empty) {
                    setProductos([]); // No hay productos
                } else {
                    const items = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    setProductos(items);
                }
            })
            .catch((err) => {
                console.error("Error al obtener productos:", err);
                setError("Error al cargar los productos.");
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoriaId]);

    if (loading) return (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <div className="spinner"></div>
            <p>Cargando productos...</p>
        </div>
    );
    if (error) return <p style={{ padding: '2rem', color: 'red' }}>{error}</p>;
    if (productos.length === 0) return <p style={{ padding: '2rem' }}>No se encontraron productos.</p>;

    return (
        <>
            <h2 style={{ textAlign: 'center' }}>Productos</h2>
            <ItemList productos={productos} />
        </>
    );
}

export default ItemListContainer;