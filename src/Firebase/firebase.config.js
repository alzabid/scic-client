// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1PikEab2tDr9sn25LOjyCFBo294x2E-4",
  authDomain: "scic-porject.firebaseapp.com",
  projectId: "scic-porject",
  storageBucket: "scic-porject.appspot.com",
  messagingSenderId: "1021069907557",
  appId: "1:1021069907557:web:790e4fb1b86e571c8a588c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;