// ------------------------------ firebase Configration process
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updatePassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  query,
  orderBy,
  where,
  serverTimestamp, Timestamp,
  updateDoc,
  deleteDoc 
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB7bnF8cMZjWnL4NtlfzSIlyGbpPcCuaYk",
  authDomain: "acshr-501bb.firebaseapp.com",
  projectId: "acshr-501bb",
  storageBucket: "acshr-501bb.firebasestorage.app",
  messagingSenderId: "234497955840",
  appId: "1:234497955840:web:82dc377bfe840f611020e5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export {
  //firebase authentication
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updatePassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  //firebase firestore
  db,
  doc,
  setDoc,
  getDoc,
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  query,
  orderBy,
  where,
  serverTimestamp, Timestamp,
  updateDoc,
  deleteDoc 
};
