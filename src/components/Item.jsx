import { Link } from "react-router-dom";
import "../styles/Item.css"; // lo crearemos si hace falta

const Item = ({ id, nombre, precio, imagen, imagenPrincipal, imagenHover }) => {
    const principal = imagenPrincipal || imagen;
    return (
        <Link to={`/item/${id}`} className="item-card">
            <div className="item-image-wrap">
                <img src={principal} alt={nombre} className="item-image item-image--main" loading="lazy" />
                {imagenHover && (
                    <img
                        src={imagenHover}
                        alt=""
                        aria-hidden="true"
                        className="item-image item-image--hover"
                        loading="lazy"
                    />
                )}
            </div>
            <div className="item-info">
                <h3 className="item-name">{nombre}</h3>
                <p className="item-price">${precio.toFixed(2)}</p>
            </div>
        </Link>
    );
};

export default Item;