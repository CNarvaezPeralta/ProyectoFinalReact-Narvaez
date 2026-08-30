import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import CartWidget from './CartWidget';
import logo from '../assets/logo.png';

const NAV_LINKS = [
    { to: '/', label: 'Inicio' },
    { to: '/coleccion', label: 'Colección' },
    { to: '/nuestra-historia', label: 'Nuestra historia' },
    { to: '/contacto', label: 'Contacto' },
];

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const overlayRef = useRef(null);
    const overlayLinksRef = useRef([]);
    const location = useLocation();

    // Cierra el menú al cambiar de ruta
    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    // Cierra el menú si la ventana pasa a tamaño escritorio
    useEffect(() => {
        const query = window.matchMedia('(min-width: 880px)');
        const handleChange = (e) => e.matches && setOpen(false);
        query.addEventListener('change', handleChange);
        return () => query.removeEventListener('change', handleChange);
    }, []);

    // Anima el overlay del menú mobile con GSAP
    useEffect(() => {
        const overlay = overlayRef.current;
        if (!overlay) return;

        const items = overlayLinksRef.current.filter(Boolean);
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        if (open) {
            document.body.style.overflow = 'hidden';
            tl.to(overlay, { autoAlpha: 1, duration: 0.3 })
              .fromTo(items, { y: 22, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.45, stagger: 0.06 }, '-=0.1');
        } else {
            document.body.style.overflow = '';
            tl.to(overlay, { autoAlpha: 0, duration: 0.25 });
        }

        return () => tl.kill();
    }, [open]);

    return (
        <header className="navbar">
            <div className="navbar-inner">
                {/* Logo */}
                <Link to="/" className="logo">
                    <img src={logo} alt="LULE" className="logo-img" />
                </Link>

                {/* Navegación de escritorio */}
                <nav className="nav-links" aria-label="Navegación principal">
                    <ul>
                        {NAV_LINKS.map((link) => (
                            <li key={link.to}>
                                <NavLink
                                    to={link.to}
                                    end={link.to === '/'}
                                    className={({ isActive }) => (isActive ? 'is-active' : undefined)}
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="navbar-actions">
                    <CartWidget />

                    {/* Botón hamburguesa (solo mobile) */}
                    <button
                        className={`hamburger ${open ? 'is-open' : ''}`}
                        onClick={() => setOpen((o) => !o)}
                        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
                        aria-expanded={open}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>

            {/* Overlay de navegación mobile */}
            <div className="nav-overlay" ref={overlayRef}>
                <ul className="nav-overlay-links">
                    {NAV_LINKS.map((link, i) => (
                        <li key={link.to} ref={(el) => (overlayLinksRef.current[i] = el)}>
                            <NavLink
                                to={link.to}
                                end={link.to === '/'}
                                className={({ isActive }) => (isActive ? 'is-active' : undefined)}
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
