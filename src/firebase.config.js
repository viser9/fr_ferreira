// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu8OSnOSEk6-hVdsGg8puP7sGlrCj6M4M",
  authDomain: "ferrera-99389.firebaseapp.com",
  projectId: "ferrera-99389",
  storageBucket: "ferrera-99389.appspot.com",
  messagingSenderId: "266395950332",
  appId: "1:266395950332:web:63ee090c9a3e6f4d614b79",
  measurementId: "G-Z7D0H4PXT4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export  const db = getFirestore (app);