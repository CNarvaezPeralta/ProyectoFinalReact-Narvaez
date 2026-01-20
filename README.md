# 👜 E-commerce – React + Firebase

Este proyecto es una aplicación de comercio electrónico (SPA) centrada en la venta de bolsos artesanales. Fue desarrollado como **proyecto final** para el curso de React en Coderhouse.

> ⚠️ **Nota**: Este es un proyecto demostrativo desarrollado con fines educativos para mi portfolio profesional.

---

## 🚀 Funcionalidades Clave

- **Catálogo Dinámico**: Listado de productos consumidos en tiempo real desde **Firestore**.
- **Filtrado por Categorías**: Navegación fluida entre tipos de productos mediante rutas dinámicas.
- **Gestión de Carrito**: Implementación de un **Context API** para manejar el estado global de la compra (añadir, quitar y calcular totales).
- **Checkout y Pedidos**: Formulario de compra con validación y generación automática de órdenes en la base de datos.
- **Experiencia de Usuario (UX)**: Manejo de estados de carga (*loaders*) y renderizado condicional.

---

## 🛠️ Stack Tecnológico

- **React.js** (Hooks, Context API)
- **React Router DOM** (Navegación SPA)
- **Firebase / Firestore** (Base de datos NoSQL)
- **CSS3** (Diseño responsive)
- **Vite** (Build tool)

---

## 📦 Estructura del Proyecto

```text
src/
├── assets/          # Imágenes y recursos estáticos
├── components/      # Componentes de UI (Navbar, ItemList, Cart, etc.)
├── context/         # Lógica del estado global del carrito
├── services/        # Configuración y llamadas a Firebase
├── styles/          # Archivos de estilos CSS
├── App.jsx          # Enrutador y proveedores de contexto
└── main.jsx         # Punto de entrada de la aplicación
```

## ⚙️ Instalación y Configuración

1. **Clonar el repositorio:**

```Bash

git clone [https://github.com/CNarvaezPeralta/react-ecommerce.git](https://github.com/CNarvaezPeralta/react-ecommerce.git)
```

2. **Instalar dependencias:**

```Bash

npm install
```

3. **Variables de Entorno:** 
Crea un archivo .env en la raíz del proyecto y añade tus credenciales de Firebase:

```
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_domain
VITE_FIREBASE_PROJECT_ID=tu_project_id
VITE_FIREBASE_STORAGE_BUCKET=tu_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_id
VITE_FIREBASE_APP_ID=tu_app_id
```

4. **Ejecutar en local:**

```Bash

npm run dev
```

## 🧠 Desafíos y Aprendizajes
Este proyecto me permitió consolidar conceptos avanzados de React:

Flujo de datos: Entender cómo fluye la información mediante el contexto global.

Persistencia: Trabajar con una base de datos real (Firestore) para guardar órdenes.

Arquitectura: Separar la lógica de Firebase de los componentes visuales para un código más limpio.

👤 Autor
Carlos Narváez - Frontend Developer Junior