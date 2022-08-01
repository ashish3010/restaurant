import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBDJ3SjmZB8ws9hgdJb0VbnBesp5pxZLZA",
    authDomain: "restaurantapp-d5d28.firebaseapp.com",
    databaseURL: "https://restaurantapp-d5d28-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-d5d28",
    storageBucket: "restaurantapp-d5d28.appspot.com",
    messagingSenderId: "743875317876",
    appId: "1:743875317876:web:91da0506a6246aca024121"
  };
  

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const fireStore = getFirestore(app);
const storage = getStorage(app);

export {app, fireStore, storage};