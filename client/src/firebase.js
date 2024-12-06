// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-4bcf1.firebaseapp.com",
  projectId: "mern-blog-4bcf1",
  storageBucket: "mern-blog-4bcf1.firebasestorage.app",
  messagingSenderId: "912570618547",
  appId: "1:912570618547:web:cbc164a1d625f007bf96c6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);