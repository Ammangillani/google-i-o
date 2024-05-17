// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANg8sFbgQaDoYbiWa6Da1XWp7gWl1558k",
  authDomain: "io-goggle.firebaseapp.com",
  projectId: "io-goggle",
  storageBucket: "io-goggle.appspot.com",
  messagingSenderId: "50870650879",
  appId: "1:50870650879:web:dde5eaae2278dada6d09ca",
  measurementId: "G-J2M661M5M5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
