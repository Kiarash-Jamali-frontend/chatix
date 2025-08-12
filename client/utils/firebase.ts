import { getAnalytics } from "firebase/analytics";
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA-ZVvpX59JoXz0YCzLeJDYJ0pfqMbUAR8",
    authDomain: "chatix-7cbc9.firebaseapp.com",
    projectId: "chatix-7cbc9",
    storageBucket: "chatix-7cbc9.appspot.com",
    messagingSenderId: "464320428421",
    appId: "1:464320428421:web:27071bcca88824e4deecec"
};

export const app = initializeApp(firebaseConfig);
export let db = initializeFirestore(app, {
    localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() }),
});
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);

export const getNewFirestore = (app: FirebaseApp) => {
    db = getFirestore(app);
}