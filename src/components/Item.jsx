import { Link } from 'react-router-dom';

// Componente presentacional de un solo producto
export default function Item({ producto }) {
    return (
        <li style={{ margin: '10px 0' }}>
            <Link to={`/item/${producto.id}`}>
                {producto.nombre} - ${producto.precio?.toFixed(2) || 'N/A'}
            </Link>
        </li>
    );
}