// Importación de estilos globales
import './App.css';

// Importación de componentes de React Router
import { Routes, Route } from 'react-router-dom';

// Importación de componentes propios
import NavBar from './components/NavBar';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import Coleccion from './components/Coleccion';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CheckoutForm from './components/CheckoutForm';
import Contacto from './components/Contacto';
import NuestraHistoria from './components/NuestraHistoria';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

// Importación del Provider del carrito (context API)
import { CartProvider } from './context/CartContext';

function App() {
  return (
    // Envolvemos toda la app con el CartProvider para acceder al contexto del carrito en todos los componentes
    <CartProvider>
      {/* Lleva la página al inicio en cada cambio de ruta */}
      <ScrollToTop />

      {/* Barra de navegación visible en todas las rutas */}
      <NavBar />

      {/* Definición de rutas de la aplicación */}
      <Routes>
        {/* Inicio: hero de marca + pieza destacada + adelanto de colección */}
        <Route
          path="/"
          element={<Home greeting="Bolsos de crochet con espíritu de Costa Brava" />}
        />

        {/* Colección completa, sin división por color/tamaño */}
        <Route path="/coleccion" element={<Coleccion />} />

        {/* Ruta para mostrar el detalle de un producto individual */}
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />

        {/* Ruta del carrito de compras */}
        <Route path="/cart" element={<Cart />} />

        {/* Ruta del formulario de checkout */}
        <Route path="/checkout" element={<CheckoutForm />} />

        {/* Storytelling de marca */}
        <Route path="/nuestra-historia" element={<NuestraHistoria />} />

        {/* Ruta contacto */}
        <Route path="/contacto" element={<Contacto />} />

        {/* Ruta para páginas no encontradas (404) */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </CartProvider>
  );
}

export default App;

