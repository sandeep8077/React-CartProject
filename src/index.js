import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_Gq_IaEtHkkayT01XgmD_-BZrVVMTcQk",
  authDomain: "cart-87f72.firebaseapp.com",
  projectId: "cart-87f72",
  storageBucket: "cart-87f72.appspot.com",
  messagingSenderId: "80060500034",
  appId: "1:80060500034:web:742ff3468c3b6bc16405db"
};
// Initialize Firebase
const firebaseApp= firebase.initializeApp(firebaseConfig);
// Use these for db & auth
const db = firebaseApp.firestore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
export {db}

