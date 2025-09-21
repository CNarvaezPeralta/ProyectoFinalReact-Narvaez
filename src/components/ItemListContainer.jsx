import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebaseconfig';
import { collection, getDocs } from 'firebase/firestore';
import ItemList from './ItemList';

function ItemListContainer() {
    const [productos, setProductos] = useState([]);
    const { idCategoria } = useParams();

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'productos'));
                const productosFirestore = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                console.log("Productos desde Firebase:", productosFirestore);

                if (idCategoria) {
                    const filtrados = productosFirestore.filter(prod => prod.categoria === idCategoria);
                    setProductos(filtrados);
                } else {
                    setProductos(productosFirestore);
                }
            } catch (error) {
                console.error("Error al obtener productos: ", error);
            }
        };

        obtenerProductos();
    }, [idCategoria]);

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Productos</h2>
            <ItemList productos={productos} />
        </div>
    );
}

export default ItemListContainer;