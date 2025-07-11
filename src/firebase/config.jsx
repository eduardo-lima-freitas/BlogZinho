// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXMzFXbXxJ8l64vxEKsDiAWpLEYmtDf9s",
  authDomain: "blogzinho-197ca.firebaseapp.com",
  projectId: "blogzinho-197ca",
  storageBucket: "blogzinho-197ca.firebasestorage.app",
  messagingSenderId: "66897141977",
  appId: "1:66897141977:web:91ea6db986b793c7121ec8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };