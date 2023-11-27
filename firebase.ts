import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDldhyjyOqvEJzxDLuMI32RdfvvdmdULJg",
    authDomain: "saas-translator-app-pj.firebaseapp.com",
    projectId: "saas-translator-app-pj",
    storageBucket: "saas-translator-app-pj.appspot.com",
    messagingSenderId: "241721246526",
    appId: "1:241721246526:web:b8f4be859f3072342da26f"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const functions = getFunctions(app)

export { db, auth, functions}