import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCA9uMPRjznIPacgZrgsaEsGrIWfxzsvXk",
  authDomain: "spirulina-214a9.firebaseapp.com",
  databaseURL: "https://spirulina-214a9-default-rtdb.firebaseio.com",
  projectId: "spirulina-214a9",
  storageBucket: "spirulina-214a9.firebasestorage.app",
  messagingSenderId: "908586166968",
  appId: "1:908586166968:web:a3256b90037cd9976f624d"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
