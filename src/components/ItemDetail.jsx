import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate
import gsap from 'gsap';
import ItemCount from './ItemCount';
import { useCart } from '../context/useCart'; // Importamos el contexto
import '../styles/ItemDetail.css';

function ItemDetail({ producto }) {
    const [agregado, setAgregado] = useState(false);
    const { addItem } = useCart(); // Usamos la función del contexto
    const navigate = useNavigate(); // Hook para redireccionar
    const addedRef = useRef(null);
    const stock = typeof producto.stock === 'number' ? producto.stock : 10;

    // Hasta dos fotos por producto: la principal y la de contexto (modelo).
    const images = [producto.imagenPrincipal || producto.imagen, producto.imagenHover].filter(Boolean);
    const [activeImage, setActiveImage] = useState(0);

    const handleAdd = (cantidad) => {
        addItem(producto, cantidad); // Agregamos al carrito
        setAgregado(true);
    };

    return (
        <div className="item-detail">
            <div className="item-detail-gallery">
                <div className="item-detail-image-wrap">
                    <img src={images[activeImage]} alt={producto.nombre} className="item-detail-image" />
                </div>
                {images.length > 1 && (
                    <div className="item-detail-thumbs">
                        {images.map((src, i) => (
                            <button
                                key={src}
                                type="button"
                                className={`item-detail-thumb ${i === activeImage ? 'is-active' : ''}`}
                                onClick={() => setActiveImage(i)}
                                aria-label={`Ver foto ${i + 1} de ${producto.nombre}`}
                            >
                                <img src={src} alt="" aria-hidden="true" />
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <div className="item-detail-info">
                <span className="item-detail-eyebrow">Hecho a mano · Edición limitada</span>
                <h2 className="font-display">{producto.nombre}</h2>
                <p className="item-detail-price">${producto.precio}</p>
                {typeof producto.stock === 'number' && stock <= 5 && (
                    <p className={`item-detail-stock ${stock === 0 ? 'item-detail-stock--out' : ''}`}>
                        {stock > 0 ? `Quedan ${stock} unidades` : 'Sin stock'}
                    </p>
                )}
                <p className="item-detail-description">{producto.descripcion}</p>

                {agregado ? (
                    <div
                        className="item-added"
                        ref={(el) => {
                            if (el && el !== addedRef.current) {
                                addedRef.current = el;
                                gsap.fromTo(
                                    el,
                                    { y: 16, autoAlpha: 0 },
                                    { y: 0, autoAlpha: 1, duration: 0.5, ease: 'power2.out' }
                                );
                            }
                        }}
                    >
                        <p>Producto agregado a la cesta ✔️</p>
                        <button className="add-to-cart-btn" onClick={() => navigate('/cart')}>
                            Ir a la cesta
                        </button>
                        <button className="item-added-link" onClick={() => navigate('/')}>
                            Seguir comprando
                        </button>
                    </div>
                ) : stock > 0 ? (
                    <ItemCount stock={stock} initial={1} onAdd={handleAdd} />
                ) : (
                    <button className="add-to-cart-btn" disabled>
                        Sin stock
                    </button>
                )}
            </div>
        </div>
    );
}

export default ItemDetail;