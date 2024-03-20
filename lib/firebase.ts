import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "process.env.NEXT_PUBLIC_FIREBASE_API_KEY",
    authDomain: "drive-7cc9d.firebaseapp.com",
    projectId: "drive-7cc9d",
    storageBucket: "drive-7cc9d.appspot.com",
    messagingSenderId: "581795436519",
    appId: "1:581795436519:web:0346bff474c9d05d2ccf42"
};

!getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export { db,storage}