/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernrealestate-5c0e8.firebaseapp.com",
  projectId: "mernrealestate-5c0e8",
  storageBucket: "mernrealestate-5c0e8.appspot.com",
  messagingSenderId: "1032455926052",
  appId: "1:1032455926052:web:e99422121f5df28a3003b1",
  measurementId: "G-LHPYPZXG0P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);