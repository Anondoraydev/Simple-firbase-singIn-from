// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB0sYNUEj2RjQBzxRUG0NAMYct4H7DCMLE",
    authDomain: "simple-firbase-f0eb5.firebaseapp.com",
    projectId: "simple-firbase-f0eb5",
    storageBucket: "simple-firbase-f0eb5.firebasestorage.app",
    messagingSenderId: "1085321759611",
    appId: "1:1085321759611:web:9e2801f44271d4f8770bde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app