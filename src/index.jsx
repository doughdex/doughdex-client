import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/reset.css';
import './assets/styles.sass';
import App from './App.jsx';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './lib/firebaseConfig';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
