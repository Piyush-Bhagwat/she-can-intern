import { getApp, getApps, initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyC3CgZV8chu4Inu6l9UqV3X-fOL9EnYuC8",
  authDomain: "she-can-d3ffe.firebaseapp.com",
  projectId: "she-can-d3ffe",
  storageBucket: "she-can-d3ffe.firebasestorage.app",
  messagingSenderId: "654136427419",
  appId: "1:654136427419:web:2cb3622954a14ff0d1173e"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();


export {app};


