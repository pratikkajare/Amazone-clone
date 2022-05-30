import { initializeApp } from "firebase/app";

import { useEffect, useState } from "react";

import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
// import "@firebase/firestore";  before

const firebaseConfig = {
  apiKey: "AIzaSyBTyeCrbqNRQl-jI6PjUYpxLOe0JLiEsPw",
  authDomain: "estore-data.firebaseapp.com",
  projectId: "estore-data",
  storageBucket: "estore-data.appspot.com",
  messagingSenderId: "563588164838",
  appId: "1:563588164838:web:28271e5ba4f7d260965f27",
  measurementId: "G-7016QJ8CMX",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
export function logout() {
  return signOut(auth);
}
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);
  return currentUser;
}

// const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = app.Firestore;
export { db };
