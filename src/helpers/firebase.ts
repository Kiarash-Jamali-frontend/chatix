import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAIzRMoHQd2AvRue0IMRHxpcobBKNdAwYE",
    authDomain: "chatix-ae753.firebaseapp.com",
    projectId: "chatix-ae753",
    storageBucket: "chatix-ae753.appspot.com",
    messagingSenderId: "74443794250",
    appId: "1:74443794250:web:ea68747b5832c50026c3b3",
    measurementId: "G-SFG8LZYZZS",
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);