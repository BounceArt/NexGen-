
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBZRpyil-fJpr4zh3KG9G-UtHX7x_oqFjk",
  authDomain: "nexgen-ada36.firebaseapp.com",
  projectId: "nexgen-ada36",
  storageBucket: "nexgen-ada36.appspot.com",
  messagingSenderId: "276029476721",
  appId: "1:276029476721:web:8358369763c0b4ca9230d0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
