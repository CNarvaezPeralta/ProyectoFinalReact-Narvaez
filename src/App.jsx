// Importación de estilos globales
import './App.css';

// Importación de componentes de React Router
import { Routes, Route } from 'react-router-dom';

// Importación de componentes propios
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CheckoutForm from './components/CheckoutForm';
import Contacto from './components/Contacto';

// Importación del Provider del carrito (context API)
import { CartProvider } from './context/CartContext';

function App() {
  return (
    // Envolvemos toda la app con el CartProvider para acceder al contexto del carrito en todos los componentes
    <CartProvider>
      {/* Barra de navegación visible en todas las rutas */}
      <NavBar />

      {/* Definición de rutas de la aplicación */}
      <Routes>
        {/* Ruta principal: muestra todos los productos con un saludo */}
        <Route
          path="/"
          element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda online!" />}
        />

        {/* Ruta para mostrar productos por categoría */}
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />

        {/* Ruta para mostrar el detalle de un producto individual */}
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />

        {/* Ruta del carrito de compras */}
        <Route path="/cart" element={<Cart />} />

        {/* Ruta del formulario de checkout */}
        <Route path="/checkout" element={<CheckoutForm />} />

        {/* Ruta contacto */}
        <Route path="/contacto" element={<Contacto />} />

        {/* Ruta para páginas no encontradas (404) */}
        <Route
          path="*"
          element={<h2 style={{ padding: '2rem' }}>404 - Página no encontrada</h2>}
        />
      </Routes>
    </CartProvider>
  );
}

export default App;

