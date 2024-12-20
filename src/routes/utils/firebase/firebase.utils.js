import { initializeApp } from 'firebase/app';

import {
   getAuth, 
   signInWithPopup, 
   GoogleAuthProvider, 
  createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged
  } from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyuGrHD8PxGRqou1NTPwVNmLl5t-_T-BM",
  authDomain: "crown-clothing-db-55296.firebaseapp.com",
  databaseURL: "https://crown-clothing-db-55296-default-rtdb.firebaseio.com",
  projectId: "crown-clothing-db-55296",
  storageBucket: "crown-clothing-db-55296.firebasestorage.app",
  messagingSenderId: "127131443058",
  appId: "1:127131443058:web:6bf3f779e6a6168abb47eb"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => 
  signInWithGoogleRedirect(auth, googleProvider);


export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth, 
  additionalInformation = {}
) => { if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
      console.log('error creating the user', error.message);

    }
  }
  return userDocRef;

};
export const createAuthUserWithEmailAndPassword = async (email, password) => { 
  if(!email || !password) return; 

  return await createUserWithEmailAndPassword (auth , email , password); 
}; 


export const signInAuthUserWithEmailAndPassword = async (email, password) => { 
  if(!email || !password) return; 

  return await signInWithEmailAndPassword (auth , email , password); 
};

export const signoutUser = async () => await  signOut(auth); 

 export const onAuthStateChangedListener = (callback ) =>
   onAuthStateChanged(auth, callback);

 /**
  * {
  * next: callback
  * error: errorCallback
  * complete: completeCallback
  * }
  */