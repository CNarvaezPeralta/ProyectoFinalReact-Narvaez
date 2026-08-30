import { createContext, useEffect, useState } from 'react';

// 1. Creamos el contexto y lo exportamos
export const CartContext = createContext();

const STORAGE_KEY = 'lule-cart';

function loadCart() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
    } catch {
        return [];
    }
}

// 2. Componente proveedor
export function CartProvider({ children }) {
    const [cart, setCart] = useState(loadCart);

    // Persistimos la cesta para que sobreviva a un refresco de página
    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
        } catch {
            // almacenamiento no disponible (modo privado, cuota llena, etc.)
        }
    }, [cart]);

    const addItem = (item, cantidad) => {
        const itemExistente = cart.find(prod => prod.id === item.id);

        if (itemExistente) {
            const cartActualizado = cart.map(prod =>
                prod.id === item.id
                    ? { ...prod, cantidad: prod.cantidad + cantidad }
                    : prod
            );
            setCart(cartActualizado);
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const updateQuantity = (id, cantidad) => {
        if (cantidad < 1) return;
        setCart(cart.map(item => item.id === id ? { ...item, cantidad } : item));
    };

    const clearCart = () => {
        setCart([]);
    };

    const cartQuantity = cart.reduce((acc, item) => acc + item.cantidad, 0);
    const cartTotal = parseFloat(
        cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0).toFixed(2)
    );

    return (
        <CartContext.Provider
            value={{
                cart,
                addItem,
                removeItem,
                updateQuantity,
                clearCart,
                cartQuantity,
                cartTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}