// Importamos React y ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importamos el enrutador de React Router para navegación
import { BrowserRouter } from 'react-router-dom';

// Importamos el componente principal de la aplicación
import App from './App.jsx';

// Estilos base globales
import './index.css';

// Punto de entrada principal: renderiza toda la aplicación en el div con id="root"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Habilitamos el enrutamiento en toda la app */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);