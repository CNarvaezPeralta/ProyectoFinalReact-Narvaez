import { Link } from 'react-router-dom';

// Componente presentacional de un solo producto
export default function Item({ id, nombre, precio }) {
    return (
        <li style={{ margin: '10px 0' }}>
            <Link to={`/item/${id}`}>
                {nombre} - ${precio}
            </Link>
        </li>
    );
}