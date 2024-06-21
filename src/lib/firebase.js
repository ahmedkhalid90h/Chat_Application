import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCqFHaJBFz1yJiMqNEJ1YWjwUlYDvJxd6I",
    authDomain: "chatapp-5e153.firebaseapp.com",
    projectId: "chatapp-5e153",
    storageBucket: "chatapp-5e153.appspot.com",
    messagingSenderId: "849949440066",
    appId: "1:849949440066:web:f2d801b0f5198fbbc955db"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app); 
export const db = getFirestore(app);
export const storage = getStorage(app); 