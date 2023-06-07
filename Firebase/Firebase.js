import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2fg0yExqPl7m2x8qxSKacPmI8yF00Fks",
  authDomain: "fitness-app-9e8d4.firebaseapp.com",
  projectId: "fitness-app-9e8d4",
  storageBucket: "fitness-app-9e8d4.appspot.com",
  messagingSenderId: "991055793260",
  appId: "1:991055793260:web:5670e53c1734b86012dc49",
  measurementId: "G-24CXZZ874L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
