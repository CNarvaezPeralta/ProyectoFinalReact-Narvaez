import { createContext, useState } from 'react';

// 1. Creamos el contexto y lo exportamos
export const CartContext = createContext();

// 2. Componente proveedor
export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

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

    const clearCart = () => {
        setCart([]);
    };

    const cartQuantity = cart.reduce((acc, item) => acc + item.cantidad, 0);
    const cartTotal = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                addItem,
                removeItem,
                clearCart,
                cartQuantity,
                cartTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}