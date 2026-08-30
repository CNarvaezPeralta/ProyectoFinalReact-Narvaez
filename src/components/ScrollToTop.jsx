import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Lleva la ventana al inicio cada vez que cambia de ruta,
// evitando que la nueva página herede el scroll de la anterior.
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
