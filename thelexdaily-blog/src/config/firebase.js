import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCpkoyGWi6cMuU2swmLTDotj40e5xksseQ",
      authDomain: "my-blog-app-d0d14.firebaseapp.com",
        projectId: "my-blog-app-d0d14", 
          storageBucket: "my-blog-app-d0d14.firebasestorage.app",
            messagingSenderId: "861925208825",
              appId: "1:861925208825:web:5c2de62970aad81e436828",
                measurementId: "G-5CCJ6SY0FV"
                };


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);