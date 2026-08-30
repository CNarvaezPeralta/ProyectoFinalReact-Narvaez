import { Link } from 'react-router-dom';

export default function FeaturedProduct({ producto }) {
    const imagen = producto.imagenPrincipal || producto.imagen;

    return (
        <Link to={`/item/${producto.id}`} className="featured-product">
            <div className="featured-product-image-wrap">
                <img src={imagen} alt={producto.nombre} className="featured-product-image" loading="lazy" />
            </div>
            <div className="featured-product-info">
                <h3 className="font-display">{producto.nombre}</h3>
                <p className="featured-product-price">${producto.precio.toFixed(2)}</p>
                {producto.descripcion && (
                    <p className="featured-product-desc">{producto.descripcion}</p>
                )}
                <span className="btn featured-product-cta">Descubrir la pieza</span>
            </div>
        </Link>
    );
}
