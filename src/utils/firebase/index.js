import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVNiBNLr-A6A6jqNQTuRRPmmJrBN7veMk",
  authDomain: "e-commerce-proj-db-7f747.firebaseapp.com",
  projectId: "e-commerce-proj-db-7f747",
  storageBucket: "e-commerce-proj-db-7f747.appspot.com",
  messagingSenderId: "499834987117",
  appId: "1:499834987117:web:d7621d41b97874c0e99564",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserFromAuth = async (
  userAuth,
  additionalInformation = {}
  ) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    console.error(userAuth.uid);

    const userSnapShot = await getDoc(userDocRef);
    console.error(userSnapShot.exists());

    // if data dont exist
    if (!userSnapShot.exists()) {
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
            console.log('error', error.message);
        }
    }

    return userDocRef;
    // if data exist

}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}
