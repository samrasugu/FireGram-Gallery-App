import { initializeApp } from "firebase/app";
import {getStorage } from 'firebase/storage';
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "############",
  authDomain: "###########",
  projectId: "#########",
  storageBucket: "#########",
  messagingSenderId: "#########",
  appId: "###########"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const timestamp = app.firestore.FieldValue.serverTimestamp();
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;