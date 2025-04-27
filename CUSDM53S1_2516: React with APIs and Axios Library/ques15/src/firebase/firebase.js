// firebase.js

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get, remove, update } from 'firebase/database';

// Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyBc0dK8i10rHktJ2Oq7uHhBOw-z-5BiGGQ",
  authDomain: "massi-assessment.firebaseapp.com",
  databaseURL: "https://massi-assessment-default-rtdb.firebaseio.com",
  projectId: "massi-assessment",
  storageBucket: "massi-assessment.firebasestorage.app",
  messagingSenderId: "276722086538",
  appId: "1:276722086538:web:ada7102c941aaedfd5f373",
  measurementId: "G-HZEH0VX5M5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Export Firebase methods
export { database, ref, set, get, remove, update };
