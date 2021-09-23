// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyn0ApgVUjvCj2aNob7sBCgLY4fBikWGo",
  authDomain: "easymln.firebaseapp.com",
  projectId: "easymln",
  storageBucket: "easymln.appspot.com",
  messagingSenderId: "423588357867",
  appId: "1:423588357867:web:2dc01c1fd256bbeb3c80ae",
  measurementId: "G-N9NFRL8TMB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const db = getFirestore(app);