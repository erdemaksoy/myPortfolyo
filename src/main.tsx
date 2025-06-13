import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// Import i18n
import './i18n';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi6v4FEIjyWgv_0M_7lOdBXClLD6xoG-0",
  authDomain: "erdemaksoy-2435f.firebaseapp.com",
  projectId: "erdemaksoy-2435f",
  storageBucket: "erdemaksoy-2435f.firebasestorage.app",
  messagingSenderId: "836019741212",
  appId: "1:836019741212:web:e752c21b0a1c85218375d9",
  measurementId: "G-VZ7F0Y4HE3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const useAnalytics = (analyticsInstance: typeof analytics) => {
  console.log("Analytics instance:", analyticsInstance);
};

useAnalytics(analytics);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
