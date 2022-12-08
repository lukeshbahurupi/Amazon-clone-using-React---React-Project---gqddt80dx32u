import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6aqNeZsBS-ptQurat9a6_3L2LC-HWgas",
  authDomain: "amzn-1-cln.firebaseapp.com",
  projectId: "amzn-1-cln",
  storageBucket: "amzn-1-cln.appspot.com",
  messagingSenderId: "1049388058159",
  appId: "1:1049388058159:web:7570a720d037ad6e6da8da",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
