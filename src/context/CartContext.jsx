import { createContext, useState } from 'react';

// 1. Creamos el contexto
const CartContext = createContext();



// 3. Componente proveedor
export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    // Agregar producto
    const addItem = (item, cantidad) => {
        const itemExistente = cart.find(prod => prod.id === item.id);

        if (itemExistente) {
            const cartActualizado = cart.map(prod =>
                prod.id === item.id ? { ...prod, cantidad: prod.cantidad + cantidad } : prod
            );
            setCart(cartActualizado);
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    // Eliminar producto
    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    // Vaciar carrito
    const clearCart = () => {
        setCart([]);
    };

    // Total de productos
    const cartQuantity = cart.reduce((acc, item) => acc + item.cantidad, 0);

    // Total a pagar
    const cartTotal = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                addItem,
                removeItem,
                clearCart,
                cartQuantity,
                cartTotal
            }}
        >
            {children}
        </CartContext.Provider>
    );
}