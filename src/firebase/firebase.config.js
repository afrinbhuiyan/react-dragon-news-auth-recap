// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrQkTX3CP19JJYzWTWpTPzAJpQwybg5VE",
  authDomain: "react-dragon-news-auth-b9210.firebaseapp.com",
  projectId: "react-dragon-news-auth-b9210",
  storageBucket: "react-dragon-news-auth-b9210.firebasestorage.app",
  messagingSenderId: "139654005319",
  appId: "1:139654005319:web:87dcb85843d5082d60e762"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;