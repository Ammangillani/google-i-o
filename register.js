// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBluPAuVnNrIZG_71xG80CypC1poHdC1Eo",
  authDomain: "my-goggle-io.firebaseapp.com",
  projectId: "my-goggle-io",
  storageBucket: "my-goggle-io.appspot.com",
  messagingSenderId: "284648265588",
  appId: "1:284648265588:web:0ab93d767c2256688fbe21",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "en";
// To apply the default browser preference instead of explicitly setting it.
// auth.useDeviceLanguage();
const provider = new GoogleAuthProvider();

const loginBtn = document.getElementById("google-signin-btn");
loginBtn.addEventListener("click", function () {
  alert(5);
});
