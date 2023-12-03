// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr_7ztiPIXNskmfYt3_ap7B7uBvK9kBGA",
  authDomain: "xtjkt2-b5029.firebaseapp.com",
  projectId: "xtjkt2-b5029",
  storageBucket: "xtjkt2-b5029.appspot.com",
  messagingSenderId: "2426731744",
  appId: "1:2426731744:web:481d598a9f987317002485",
  measurementId: "G-VW6H6M1MT4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();