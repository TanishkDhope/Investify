// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmBs7AwB7JPq-FqnLc7FoMWguyHfMa9Mo",
  authDomain: "enigma30-dce65.firebaseapp.com",
  projectId: "enigma30-dce65",
  storageBucket: "enigma30-dce65.firebasestorage.app",
  messagingSenderId: "862900851494",
  appId: "1:862900851494:web:1804c410cacb1d258d27e7",
  measurementId: "G-47LH3EJ3MN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {
  auth,
  provider,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  db,
  doc,
  setDoc,
};
