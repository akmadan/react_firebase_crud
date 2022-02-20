import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyDojj1AASZSxC6Ur40QXnC4rxAlZP9Sblo",
    authDomain: "reactfirebase-6d309.firebaseapp.com",
    projectId: "reactfirebase-6d309",
    storageBucket: "reactfirebase-6d309.appspot.com",
    messagingSenderId: "888725275235",
    appId: "1:888725275235:web:110062fac6a688b570ae56",
    measurementId: "G-46Q6LHLPC9"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);