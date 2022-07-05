import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCL5K9iKESmznAVjLUarsfjXJP9OuctVvE",
  authDomain: "disneyplus-clone-eb959.firebaseapp.com",
  projectId: "disneyplus-clone-eb959",
  storageBucket: "disneyplus-clone-eb959.appspot.com",
  messagingSenderId: "1066280934752",
  appId: "1:1066280934752:web:11257224535f707c8d5205",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, googleProvider, storage, db };
export default db;
