import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCP9H4kkPmUOrFm962ulgophV5-FtG5ihw",
    authDomain: "crwn-clothing-db-14b38.firebaseapp.com",
    projectId: "crwn-clothing-db-14b38",
    storageBucket: "crwn-clothing-db-14b38.appspot.com",
    messagingSenderId: "776850120914",
    appId: "1:776850120914:web:40aa4ef91220ed90a7cd0b"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  
  provider.setCustomParameters({
    prompt: 'select_account',
  });
  
  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  
  export const db = getFirestore(firebaseApp);
  
  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
  
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
  
    console.log(userSnapshot);
    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
  
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
        });
      } catch (error) {
        console.log('error creating the user', error.message);
      }
    }
  
    return userDocRef;
  };