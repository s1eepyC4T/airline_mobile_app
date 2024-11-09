// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAX_-x9PgYcPfyWnok_ESNDpptWdmZcm_I",
    authDomain: "airline-app-428c8.firebaseapp.com",
    databaseURL: "https://airline-app-428c8-default-rtdb.firebaseio.com",
    projectId: "airline-app-428c8",
    storageBucket: "airline-app-428c8.firebasestorage.app",
    messagingSenderId: "496589543179",
    appId: "1:496589543179:web:7d614951fbe6d656caf40e"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


