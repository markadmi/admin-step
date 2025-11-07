import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAeavLCdQBcScLYiijuOVKacjgDA5A1s7s",
    authDomain: "cobe2-9656a.firebaseapp.com",
    projectId: "cobe2-9656a",
    storageBucket: "cobe2-9656a.firebasestorage.app",
    messagingSenderId: "184272249999",
    appId: "1:184272249999:android:6e55edaa56769e2da43cfa"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };