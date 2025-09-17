import './App.css';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <>
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

      </Routes>
    </>
  );
}

export default App;

