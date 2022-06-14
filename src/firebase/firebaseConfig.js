// Import the functions you need from the SDKs you need
import 'firebase/firestore';
import 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBBArU2Glrfw2vVCbBKfxdD1k5z57TZps",
    authDomain: "react-app-curso-xd.firebaseapp.com",
    projectId: "react-app-curso-xd",
    storageBucket: "react-app-curso-xd.appspot.com",
    messagingSenderId: "487503492383",
    appId: "1:487503492383:web:9660263c09a46fa8706c2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();

export{
    db, 
    googleAuthProvider,
    facebookAuthProvider
}