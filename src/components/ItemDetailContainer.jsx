import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

// 🔽 importa Firestore
import { db } from '../firebase/firebaseconfig';
import { doc, getDoc } from 'firebase/firestore';

function ItemDetailContainer() {
    const { itemId } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const docRef = doc(db, 'productos', itemId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setProducto({ id: docSnap.id, ...docSnap.data() });
                } else {
                    console.log('No se encontró el producto');
                }
            } catch (error) {
                console.error('Error al obtener el producto:', error);
            }
        };

        fetchProducto();
    }, [itemId]);

    return (
        <>
            {producto ? (
                <ItemDetail producto={producto} />
            ) : (
                <p style={{ padding: '2rem' }}>Cargando producto...</p>
            )}
        </>
    );
}

export default ItemDetailContainer;