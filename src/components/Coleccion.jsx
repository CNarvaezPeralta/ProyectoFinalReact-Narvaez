import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemList from './ItemList';
import '../styles/ItemList.css';

import { db } from '../services/firebase/firebaseconfig';
import { collection, getDocs } from 'firebase/firestore';

function Coleccion() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        getDocs(collection(db, 'productos'))
            .then((snapshot) => {
                const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setProductos(items);
            })
            .catch((err) => {
                console.error('Error al obtener productos:', err);
                setError('Error al cargar los productos.');
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            <div className="page-header">
                <h2>Colección</h2>
                <div className="breadcrumb">
                    <Link to="/">Inicio</Link>
                    <span>/</span>
                    <span>Colección</span>
                </div>
            </div>

            {loading && (
                <div className="page-section state-message">
                    <div className="spinner"></div>
                    <p>Cargando productos...</p>
                </div>
            )}

            {!loading && error && (
                <div className="page-section state-message">
                    <p className="state-message--error">{error}</p>
                </div>
            )}

            {!loading && !error && productos.length === 0 && (
                <div className="page-section state-message">
                    <p>Muy pronto, nuevas piezas.</p>
                </div>
            )}

            {!loading && !error && productos.length > 0 && (
                <section className="page-section">
                    <ItemList productos={productos} />
                </section>
            )}
        </>
    );
}

export default Coleccion;
