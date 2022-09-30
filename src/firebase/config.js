// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1ZMYJJxO3lHUOYkuecgZ3k5IxRoYw4rA",
    authDomain: "mitiendareact.firebaseapp.com",
    projectId: "mitiendareact",
    storageBucket: "mitiendareact.appspot.com",
    messagingSenderId: "159232602882",
    appId: "1:159232602882:web:9d60802640fc9a5a34881b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);