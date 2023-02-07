
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { getStorage} from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyDyouyw6JP1PFMIwCMTq6idHCpyGz3AxnE",
  authDomain: "foodify-dd4b5.firebaseapp.com",
  projectId: "foodify-dd4b5",
  storageBucket: "foodify-dd4b5.appspot.com",
  messagingSenderId: "563634046121",
  appId: "1:563634046121:web:12803ecee8e63c3e0115b8",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage=getStorage(app)


export {db,storage}