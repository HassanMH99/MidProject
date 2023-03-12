
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
 const firebaseConfig = {
  apiKey: "AIzaSyAAH8ZQ_Xu9OfJa_CAeWS3tk2bShn0eD_8",
  authDomain: "midproject-e23b3.firebaseapp.com",
  projectId: "midproject-e23b3",
  storageBucket: "midproject-e23b3.appspot.com",
  messagingSenderId: "435676995917",
  appId: "1:435676995917:web:748e561399076c0bd7d704",
  measurementId: "G-2NBFK3CE6J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);
export {db,auth};