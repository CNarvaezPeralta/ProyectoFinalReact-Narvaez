// import { Link } from 'react-router-dom';

// // Componente presentacional de un solo producto
// export default function Item({ producto }) {
//     return (
//         <li style={{ margin: '10px 0' }}>
//             <Link to={`/item/${producto.id}`}>
//                 {producto.nombre} - ${producto.precio?.toFixed(2) || 'N/A'}
//             </Link>
//         </li>
//     );
// }

import { Link } from "react-router-dom";
import "../styles/Item.css"; // lo crearemos si hace falta

const Item = ({ id, nombre, precio, imagen }) => {
    return (
        <div className="item-card">
            <img src={imagen} alt={nombre} className="item-image" />
            <h3>{nombre}</h3>
            <p>${precio.toFixed(2)}</p>
            <Link to={`/item/${id}`} className="ver-mas">
                Ver más
            </Link>
        </div>
    );
};

export default Item;