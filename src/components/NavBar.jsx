import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import logo from '../assets/logo.png';

export default function NavBar() {
    return (
        <header className="navbar">
            <div className="navbar-inner">
                {/* Logo + Nombre */}
                <div className="logo">
                    <img src={logo} alt="Logo" className="logo-img" />
                    <h1>LULE</h1>
                </div>

                {/* Navegación */}
                <nav className="nav-menu">
                    <ul className="nav-links">
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/categoria/colores">Bolsos por color</Link></li>
                        <li><Link to="/categoria/tamaño">Bolsos por tamaño</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                    </ul>

                    {/* Ícono de carrito */}
                    <CartWidget />
                </nav>
            </div>
        </header>
    );
}