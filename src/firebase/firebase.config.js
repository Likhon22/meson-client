// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCidmLVkwk302emBycRtXXKgpt27ZMsulc",
  authDomain: "meson-65567.firebaseapp.com",
  projectId: "meson-65567",
  storageBucket: "meson-65567.appspot.com",
  messagingSenderId: "628923420622",
  appId: "1:628923420622:web:dfa2e660c16f76eb2ba59f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
