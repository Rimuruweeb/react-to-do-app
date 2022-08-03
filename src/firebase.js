// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHNeuWjolLMSwlZvwofjk5jHkgLL-EQdk",
  authDomain: "todo-app-react-firebase-1a748.firebaseapp.com",
  projectId: "todo-app-react-firebase-1a748",
  storageBucket: "todo-app-react-firebase-1a748.appspot.com",
  messagingSenderId: "377402366250",
  appId: "1:377402366250:web:b53bbdd05ed4c4a9dd6653"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)