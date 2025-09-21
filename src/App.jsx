import './App.css';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CheckoutForm from './components/CheckoutForm';


import { CartProvider } from './context/CartContext';

function App() {
  return (
    // 👇 Envolvemos toda la app con el Provider
    <CartProvider>
      <NavBar />
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda online!" />} />

        {/* Ruta por categoría */}
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />

        {/* Ruta de detalle */}
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />

        {/* Ruta 404 */}
        <Route path="*" element={<h2 style={{ padding: '2rem' }}>404 - Página no encontrada</h2>} />
        
        {/* Ruta al carrito de compra */}
        <Route path="/cart" element={<Cart />} />

        {/* Ruta al formulario */}
        <Route path="/checkout" element={<CheckoutForm />} />
        
      </Routes>
    </CartProvider>
  );
}

export default App;

