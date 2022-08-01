import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "your api key",
    authDomain: "your auth domain",
    databaseURL: "your firevase database url",
    projectId: "your project id",
    storageBucket: "your firebase storage bucket",
    messagingSenderId: "firebase message sender id",
    appId: "firebase app id"
  };
  

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const fireStore = getFirestore(app);
const storage = getStorage(app);

export {app, fireStore, storage};
