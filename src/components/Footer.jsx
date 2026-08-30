import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="site-footer-inner">
                <div>
                    <h3>LULE</h3>
                    <p>
                        Bolsos de crochet tejidos a mano, uno a uno, con los colores
                        y la calma de la Costa Brava.
                    </p>
                </div>

                <div>
                    <h4>Explorar</h4>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/coleccion">Colección</Link></li>
                        <li><Link to="/nuestra-historia">Nuestra historia</Link></li>
                    </ul>
                </div>

                <div>
                    <h4>Ayuda</h4>
                    <ul>
                        <li><Link to="/contacto">Contacto</Link></li>
                        <li><Link to="/cart">Tu cesta</Link></li>
                    </ul>
                </div>
            </div>

            <div className="site-footer-bottom">
                © {new Date().getFullYear()} LULE — Hecho a mano en la Costa Brava
            </div>
        </footer>
    );
}
