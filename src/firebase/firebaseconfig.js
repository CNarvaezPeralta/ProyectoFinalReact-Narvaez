import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCy1QhqhkZXAiWmw8RFHbJ9cz2pG4Xr2wk",
    authDomain: "lule-e-commerce.firebaseapp.com",
    projectId: "lule-e-commerce",
    storageBucket: "lule-e-commerce.appspot.com",
    messagingSenderId: "48235746458",
    appId: "1:48235746458:web:c5c60ef5662d0cdc6efb23",
};

// Inicializamos la app de Firebase
const app = initializeApp(firebaseConfig);

// Exportamos la base de datos Firestore
export const db = getFirestore(app);
