// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// import {
//   getAuth,
//   GoogleAuthProvider,
//   signInWithRedirect,
//   getRedirectResult,
// } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBluPAuVnNrIZG_71xG80CypC1poHdC1Eo",
//   authDomain: "my-goggle-io.firebaseapp.com",
//   projectId: "my-goggle-io",
//   storageBucket: "my-goggle-io.appspot.com",
//   messagingSenderId: "284648265588",
//   appId: "1:284648265588:web:0ab93d767c2256688fbe21",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// auth.languageCode = "en";
// const provider = new GoogleAuthProvider();

// const loginBtn = document.getElementById("google-signin-btn");
// loginBtn.addEventListener("click", function () {
//   signInWithRedirect(auth, provider);
// });

// getRedirectResult(auth)
//   .then((result) => {
//     if (result !== null) {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const user = result.user;
//       console.log(user);
//       window.location.href = "../testapp.html";
//     }
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
