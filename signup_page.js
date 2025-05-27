import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCvrloeHNgPGJRQ37XREd4H1f__nOhw2JU",
  authDomain: "pethaven-24b33.firebaseapp.com",
  projectId: "pethaven-24b33",
  storageBucket: "pethaven-24b33.firebasestorage.app",
  messagingSenderId: "641776738291",
  appId: "1:641776738291:web:51cff6b2472644932b7c86",
  measurementId: "G-8L4L9RC12C",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      alert("Account has been created, click ok to proceed thanks!");
        window.location.href = "landing_page.html";

      console.log("User signed up:", user);
    })
    .catch((error) => {
      console.error("Error signing up:", error.code, error.message);
    });
});