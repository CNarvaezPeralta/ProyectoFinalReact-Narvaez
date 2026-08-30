import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="page-section not-found">
            <span className="eyebrow">Error 404</span>
            <h2 className="font-display">Esta página se ha perdido en la costa</h2>
            <p>La página que buscas no existe o se ha movido de sitio.</p>
            <Link to="/" className="btn btn-outline">Volver al inicio</Link>
        </div>
    );
}
