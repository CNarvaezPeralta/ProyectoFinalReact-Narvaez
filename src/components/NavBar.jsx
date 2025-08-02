// src/components/NavBar.jsx
import CartWidget from './CartWidget';
import logo from '../assets/logo.png';


export default function NavBar() {
    return (
        <header className="navbar">
            <div className="navbar-inner">
                <div className="logo">
                    <img src={logo} alt="Logo" className='logo-img' />
                    <h1>LULE</h1>
                </div>
                <nav className="nav-menu">
                    <ul className="nav-links">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Productos</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                    <CartWidget />
                </nav>
            </div>
        </header>
    );
}