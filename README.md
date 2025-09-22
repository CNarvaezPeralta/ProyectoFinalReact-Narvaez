# Proyecto Final React - Narváez

Este proyecto es una Single Page Application (SPA) de un e-commerce desarrollada con **React** como parte del curso de **Desarrollo Web Frontend con React** de Coderhouse.

## 👜 Temática

La tienda online simula un e-commerce de bolsos hechos a mano, con productos cargados desde una base de datos en la nube y la posibilidad de realizar una compra completa desde la web.

## 🚀 Tecnologías utilizadas

- React
- React Router DOM
- Firebase / Firestore
- JavaScript
- Context API
- CSS

## 🧩 Estructura de componentes

```
App
├── NavBar
│   └── CartWidget
├── ItemListContainer
│   └── ItemList
│       └── Item
├── ItemDetailContainer
│   └── ItemDetail
│       └── ItemCount
├── Cart
│   └── CartItem
└── CheckoutForm
```

## 🔗 Funcionalidades

- Listado dinámico de productos desde Firebase.
- Filtrado por categorías.
- Vista en detalle de cada producto.
- Selección de cantidad con validación de stock.
- Carrito de compras con gestión global (Context).
- Formulario de compra con generación de orden en Firestore.
- Mensaje con ID de la orden al finalizar compra.
- Navegación SPA con React Router.
- Renderizado condicional y UX amigable.

## 📦 Instalación y uso

1. Clonar el repositorio:
   ```
   git clone https://github.com/tuUsuario/ProyectoFinalNarvaez.git
   cd ProyectoFinalNarvaez
   ```

2. Instalar dependencias:
   ```
   npm install
   ```

3. Crear un archivo `.env` en la raíz con tus claves de Firebase:
   ```
   VITE_FIREBASE_API_KEY=xxxxxxxxxxxxxxxx
   VITE_FIREBASE_AUTH_DOMAIN=xxxxxxxxxxxxxxxx
   VITE_FIREBASE_PROJECT_ID=xxxxxxxxxxxx
   VITE_FIREBASE_STORAGE_BUCKET=xxxxxxxxxxxx
   VITE_FIREBASE_MESSAGING_SENDER_ID=xxxxxxxx
   VITE_FIREBASE_APP_ID=xxxxxxxxxxxxxxxx
   ```

4. Iniciar el servidor de desarrollo:
   ```
   npm run dev
   ```


## ✨ Autor

Desarrollado por **Carlos Narváez** como entrega final del curso de React en Coderhouse.