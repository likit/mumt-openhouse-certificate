// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtYQjtOFq8R0zYtEH__8ku3rZ3wAalYpg",
  authDomain: "mumt-openhouse-certificate.firebaseapp.com",
  projectId: "mumt-openhouse-certificate",
  storageBucket: "mumt-openhouse-certificate.appspot.com",
  messagingSenderId: "396135923488",
  appId: "1:396135923488:web:d003f7f0b232d8902ca145",
  measurementId: "G-TEN600KM36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }