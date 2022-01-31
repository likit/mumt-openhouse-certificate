// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6QUOpffbLmAuZBQD3dNlfUreIJij6A-s",
  authDomain: "stop-smoking-certificates.firebaseapp.com",
  projectId: "stop-smoking-certificates",
  storageBucket: "stop-smoking-certificates.appspot.com",
  messagingSenderId: "733447564078",
  appId: "1:733447564078:web:015d6ce725cb7c5e2368bf",
  measurementId: "G-BHSMCD4CT5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }