import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyADxAbCD14cVMGwHV073xLmwiIS378RQgA",
  authDomain: "ecell-uvce-ecc2d.firebaseapp.com",
  projectId: "ecell-uvce-ecc2d",
  storageBucket: "ecell-uvce-ecc2d.firebasestorage.app",
  messagingSenderId: "386919032346",
  appId: "1:386919032346:web:4c7e34200faed58ab793a3",
  measurementId: "G-E6WT5T6D48"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
