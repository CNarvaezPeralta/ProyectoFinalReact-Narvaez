
// import CartWidget from './CartWidget';
// import logo from '../assets/logo.png';
// import { Link } from 'react-router-dom';


// export default function NavBar() {
//     return (
//         <header className="navbar">
//             <div className="navbar-inner">
//                 <div className="logo">
//                     <img src={logo} alt="Logo" className='logo-img' />
//                     <h1>LULE</h1>
//                 </div>
//                 <nav className="nav-menu">
//                     <ul className="nav-links">
//                         <li><a href="#">Inicio</a></li>
//                         <li><a href="#">Productos</a></li>
//                         <li><a href="#">Contacto</a></li>
//                     </ul>
//                     <CartWidget />
//                 </nav>
//             </div>
//         </header >
//     );
// }

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
                    <CartWidget cantidad={3} />
                </nav>
            </div>
        </header>
    );
}