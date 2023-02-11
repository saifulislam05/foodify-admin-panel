
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDyouyw6JP1PFMIwCMTq6idHCpyGz3AxnE",
//   authDomain: "foodify-dd4b5.firebaseapp.com",
//   projectId: "foodify-dd4b5",
//   storageBucket: "foodify-dd4b5.appspot.com",
//   messagingSenderId: "563634046121",
//   appId: "1:563634046121:web:12803ecee8e63c3e0115b8",
// };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage=getStorage(app)


export {db,storage}