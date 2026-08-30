import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useCart } from '../context/useCart';

function CartWidget() {
    const { cartQuantity } = useCart();
    const badgeRef = useRef(null);
    const isFirstRender = useRef(true);

    // "Pop" del badge cada vez que cambia la cantidad de productos
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        if (badgeRef.current) {
            gsap.fromTo(
                badgeRef.current,
                { scale: 0.3 },
                { scale: 1, duration: 0.45, ease: 'back.out(3)' }
            );
        }
    }, [cartQuantity]);

    return (
        <Link
            to="/cart"
            className="cart-widget"
            aria-label={
                cartQuantity > 0
                    ? `Cesta, ${cartQuantity} ${cartQuantity === 1 ? 'producto' : 'productos'}`
                    : 'Cesta, vacía'
            }
        >
            <svg
                className="cart-widget-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <path d="M6.5 8h11l1 13h-13l1-13Z" />
                <path d="M9 8V6a3 3 0 0 1 6 0v2" />
            </svg>
            {cartQuantity > 0 && (
                <span className="cart-widget-badge" ref={badgeRef}>{cartQuantity}</span>
            )}
        </Link>
    );
}

export default CartWidget;