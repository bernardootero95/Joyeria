// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6uwimtYmJbbhDQuQHZusAqgkcti5ESa8",
  authDomain: "joyeria-a6369.firebaseapp.com",
  databaseURL: "https://joyeria-a6369-default-rtdb.firebaseio.com",
  projectId: "joyeria-a6369",
  storageBucket: "joyeria-a6369.appspot.com",
  messagingSenderId: "611110427935",
  appId: "1:611110427935:web:f5d56125392d1f3f50a42a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);
export {db};