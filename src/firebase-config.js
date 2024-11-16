// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0IKsJOicXoTHSwbW45yWZzU8sQwKnGzo",
  authDomain: "bookblogproject-fdf3c.firebaseapp.com",
  projectId: "bookblogproject-fdf3c",
  storageBucket: "bookblogproject-fdf3c.firebasestorage.app",
  messagingSenderId: "594072594443",
  appId: "1:594072594443:web:5161a492d2df344d957f0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();