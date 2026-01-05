# E-commerce React

Aplicación e-commerce desarrollada con **React** como proyecto individual, realizada en el contexto del curso de Desarrollo Web Frontend con React en Coderhouse.

Este repositorio corresponde a **un proyecto que forma parte de mi portfolio**, no a mi portfolio personal.

---

## 👜 Descripción del proyecto

La aplicación simula una tienda online de bolsos hechos a mano, con productos obtenidos desde una base de datos en la nube y la posibilidad de completar un proceso de compra real, desde el listado hasta la generación de una orden.

---

## 🌐 Demo
- Live: *(pendiente de deploy en Vercel)*
- Repo: este repositorio

---

## 🚀 Funcionalidades
- Listado dinámico de productos desde **Firebase / Firestore**
- Filtrado por categorías
- Vista de detalle del producto
- Selección de cantidad con validación de stock
- Carrito de compras con estado global mediante **Context API**
- Formulario de checkout
- Generación de orden y guardado en Firestore
- Visualización del ID de la orden al finalizar la compra
- Navegación SPA con **React Router**
- Renderizado condicional y manejo de estados de carga

---

## 🛠️ Tecnologías utilizadas
- React
- React Router DOM
- Firebase / Firestore
- JavaScript (ES6+)
- Context API
- CSS
- Vite

---

## 📦 Estructura del proyecto
```text
src/
├── assets/            # Recursos gráficos
├── components/        # Componentes de UI
├── context/           # Estado global (carrito)
├── services/          # Servicios y configuración de Firebase
├── styles/            # Estilos
├── App.jsx
└── main.jsx

## 📦 Instalación y uso

1. Clonar el repositorio:
   ```
   git clone https://github.com/CNarvaezPeralta/react-ecommerce.git
   
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


## 🧠 Lo que aprendí

Organización de un proyecto React de tamaño medio

Separación de responsabilidades entre componentes, contexto y servicios

Uso de rutas dinámicas con React Router

Manejo de estado global con Context API

Integración real con Firestore para productos y órdenes

Manejo de renderizado condicional y estados de carga

## 👤 Autor

Carlos Narváez
Frontend Developer Junior