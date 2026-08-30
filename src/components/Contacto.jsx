import { Link } from 'react-router-dom';

export default function Contacto() {
    return (
        <div className="page-section--narrow">
            <div className="page-header page-header--compact">
                <h2>Contacto</h2>
                <div className="breadcrumb">
                    <Link to="/">Inicio</Link>
                    <span>/</span>
                    <span>Contacto</span>
                </div>
            </div>
            <p className="contacto-text">
                Estamos trabajando en esta sección. ¡Gracias por tu paciencia!
            </p>
        </div>
    );
}
