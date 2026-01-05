import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

import { db } from '../services/firebase/firebaseconfig';
import { doc, getDoc } from 'firebase/firestore';

function ItemDetailContainer() {
    const { itemId } = useParams();
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const docRef = doc(db, 'productos', itemId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setProducto({ id: docSnap.id, ...docSnap.data() });
                } else {
                    setError("Producto no encontrado.");
                }
            } catch (err) {
                console.error("Error al obtener el producto:", err);
                setError("Hubo un error al cargar el producto.");
            } finally {
                setLoading(false);
            }
        };

        fetchProducto();
    }, [itemId]);

    if (loading) return <p style={{ padding: '2rem' }}>Cargando producto...</p>;
    if (error) return <p style={{ padding: '2rem', color: 'red' }}>{error}</p>;

    return <ItemDetail producto={producto} />;
}

export default ItemDetailContainer;