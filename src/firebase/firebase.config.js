// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9UJQrCoYkp94iEtJAhpY9_o8lJX9pN78",
  authDomain: "teeth-wizard-react-project.firebaseapp.com",
  projectId: "teeth-wizard-react-project",
  storageBucket: "teeth-wizard-react-project.firebasestorage.app",
  messagingSenderId: "697032184432",
  appId: "1:697032184432:web:7a2b53b98e411bfe855ab5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;