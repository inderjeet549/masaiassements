// Import the necessary functions from Firebase SDK v9+
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';

// Your Firebase configuration
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

// Get a reference to the database service
const database = getDatabase(app);

export { database, ref, get };
