import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyByWdeOn4QuQU6vSFXjG39L5cF28ZFqQ20",
  authDomain: "von-db.firebaseapp.com",
  projectId: "von-db",
  storageBucket: "von-db.appspot.com",
  messagingSenderId: "296542648171",
  appId: "1:296542648171:web:d6c919c84a52a5855c7e2e",
  measurementId: "G-5LEVPFGBKE",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
