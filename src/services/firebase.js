import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClVomwCrkZTe1xrSOk_9Gr_3eMacWFANA",
  authDomain: "college-club-portal-pro.firebaseapp.com",
  projectId: "college-club-portal-pro",
  storageBucket: "college-club-portal-pro.firebasestorage.app",
  messagingSenderId: "847386720814",
  appId: "1:847386720814:web:5d329b01ff24be941a7dbf"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);