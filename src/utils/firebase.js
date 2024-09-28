// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjsZsEQ7WtwG6rFAJm8WrbRaGSYqtEmSk",
  authDomain: "moviesflix-gpt-ac0df.firebaseapp.com",
  projectId: "moviesflix-gpt-ac0df",
  storageBucket: "moviesflix-gpt-ac0df.appspot.com",
  messagingSenderId: "347825241113",
  appId: "1:347825241113:web:5886bd521a5e106a933e88",
  measurementId: "G-YS84CL8T16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();