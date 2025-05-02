
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOt9q4E63b1Y_xnvW9aOcCC95-mdqdKzg",
  authDomain: "dragon-news-2e1a6.firebaseapp.com",
  projectId: "dragon-news-2e1a6",
  storageBucket: "dragon-news-2e1a6.firebasestorage.app",
  messagingSenderId: "335220373102",
  appId: "1:335220373102:web:a1f7cf28a2447fdf17187f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);