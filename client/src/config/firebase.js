// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7NUyuwZ7v6zzGtw9pn0pUnY-FGY5lyHM",
  authDomain: "portfolio-site-8e4f6.firebaseapp.com",
  databaseURL: "https://portfolio-site-8e4f6.firebaseio.com",
  projectId: "portfolio-site-8e4f6",
  storageBucket: "portfolio-site-8e4f6.appspot.com",
  messagingSenderId: "193406269464",
  appId: "1:193406269464:web:b694f1dbe16c06adbaab6d",
  measurementId: "G-7R2ZQ3GZWM",
};

// Initialize Firebase
const fbApp = initializeApp(firebaseConfig);
const fbAuth = auth(fbApp);
