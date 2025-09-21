import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "tu-dominio.firebaseapp.com",
    projectId: "lule-e-commerce",
    storageBucket: "lule-e-commerce.appspot.com",
    messagingSenderId: "XXXXXXXXXXXX",
    appId: "XXXXXXXXXXXXXXXXXXXXXXXXXXX",
};

// Inicializamos la app de Firebase
const app = initializeApp(firebaseConfig);

// Exportamos la base de datos Firestore
export const db = getFirestore(app);
