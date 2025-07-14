

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuo035ln7WrLKg7RSYV67SsWqiBIh-axs",
  authDomain: "todoproject-328ec.firebaseapp.com",
  projectId: "todoproject-328ec",
  storageBucket: "todoproject-328ec.firebasestorage.app",
  messagingSenderId: "965524633343",
  appId: "1:965524633343:web:e5f4aaee29d773d07afeca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);