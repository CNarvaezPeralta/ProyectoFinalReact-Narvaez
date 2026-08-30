import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ItemList from './ItemList';
import FeaturedProduct from './FeaturedProduct';
import '../styles/ItemList.css';
import '../styles/Home.css';

import { db } from '../services/firebase/firebaseconfig';
import { collection, getDocs } from 'firebase/firestore';

function Home({ greeting }) {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const heroRef = useRef(null);

    // Entrada animada del hero
    useLayoutEffect(() => {
        if (!heroRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ['.hero-eyebrow', '.hero h2', '.hero p', '.hero-cta'],
                { y: 26, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out', delay: 0.1 }
            );
        }, heroRef);

        return () => ctx.revert();
    }, []);

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

    const [destacado, ...resto] = productos;

    return (
        <>
            <section className="hero" ref={heroRef}>
                <div className="hero-content">
                    <span className="hero-eyebrow">Hecho a mano · Costa Brava</span>
                    <h2 className="font-display">{greeting || 'Bolsos de crochet con espíritu de costa'}</h2>
                    <p>
                        Cada bolso LULE se teje a mano, hilo a hilo, inspirado en los colores
                        del Mediterráneo: terracota de acantilado, verde profundo de cala y
                        dorado de tardes de agosto. Piezas únicas, en edición limitada.
                    </p>
                    <a href="#coleccion" className="hero-cta">Ver colección</a>
                </div>
            </section>

            <section id="coleccion" className="page-section home-preview">
                {loading && (
                    <div className="state-message">
                        <div className="spinner"></div>
                        <p>Cargando piezas...</p>
                    </div>
                )}

                {error && (
                    <div className="state-message">
                        <p className="state-message--error">{error}</p>
                    </div>
                )}

                {!loading && !error && productos.length === 0 && (
                    <div className="state-message">
                        <p>Muy pronto, nuevas piezas.</p>
                    </div>
                )}

                {!loading && !error && destacado && (
                    <>
                        <span className="eyebrow home-preview-eyebrow">Pieza del momento</span>
                        <FeaturedProduct producto={destacado} />
                    </>
                )}

                {resto.length > 0 && (
                    <div className="home-preview-more">
                        <h2 className="section-title">Más piezas</h2>
                        <ItemList productos={resto} />
                    </div>
                )}

                {productos.length > 0 && (
                    <div className="home-preview-cta">
                        <Link to="/coleccion" className="btn btn-outline">Ver colección completa</Link>
                    </div>
                )}
            </section>
        </>
    );
}

export default Home;
