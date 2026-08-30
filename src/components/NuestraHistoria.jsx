import { Link } from 'react-router-dom';
import '../styles/NuestraHistoria.css';

export default function NuestraHistoria() {
    return (
        <div className="historia-page">
            <div className="page-header">
                <span className="eyebrow historia-eyebrow">Hecho a mano · Edición limitada</span>
                <h2 className="font-display">La historia de LULE</h2>
                <div className="breadcrumb">
                    <Link to="/">Inicio</Link>
                    <span>/</span>
                    <span>Nuestra historia</span>
                </div>
            </div>

            <div className="historia-body">
                <p className="historia-lead font-display">
                    LULE nace de una aguja de crochet y de las tardes de verano
                    en la Costa Brava.
                </p>

                <p>
                    Cada bolso se teje a mano, hilo a hilo, sin moldes ni producción
                    en serie. Lo que ves es exactamente lo que se ha tejido con las manos,
                    punto a punto — con el tiempo que hace falta, no con el que marca una fábrica.
                </p>

                <p>
                    No hacemos grandes tiradas. Cada modelo se produce en cantidades
                    limitadas, así que cuando un color se agota, no vuelve. Es una forma
                    de tejer con calma, y de que cada bolso se sienta como una pieza,
                    no como un producto más.
                </p>

                <p>
                    Los colores de LULE son los de la costa: terracota de los acantilados,
                    verde profundo del mar en calma, dorado de las tardes de agosto.
                    Bolsos pensados para llevarse puestos, no guardados.
                </p>
            </div>

            <div className="historia-values">
                <div className="historia-value">
                    <span className="historia-value-title font-display">Hecho a mano</span>
                    <p>Cada pieza se teje punto a punto, sin atajos ni producción en serie.</p>
                </div>
                <div className="historia-value">
                    <span className="historia-value-title font-display">Edición limitada</span>
                    <p>Cantidades pequeñas. Cuando un color se agota, no se repone.</p>
                </div>
                <div className="historia-value">
                    <span className="historia-value-title font-display">Costa Brava</span>
                    <p>Colores e inspiración que vienen directamente del Mediterráneo.</p>
                </div>
            </div>

            <div className="historia-cta">
                <Link to="/coleccion" className="btn">Ver la colección</Link>
            </div>
        </div>
    );
}
