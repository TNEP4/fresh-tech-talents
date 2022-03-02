import { getApp as _getApp, getApps, initializeApp } from "firebase/app";
import { getAuth as _getAuth } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import 'firebase/firestore';
import { GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD9txFZ5-bnjr02jRsjwX5glp5HcRZPXnI",
    authDomain: "fresh-tech-talents.firebaseapp.com",
    projectId: "fresh-tech-talents",
    storageBucket: "fresh-tech-talents.appspot.com",
    messagingSenderId: "986885216755",
    appId: "1:986885216755:web:e7c1822720e6831c995a86",
    measurementId: "G-JVNY3T467W"
  };
// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps();
const auth = getAuth();
const db = getFirestore();
const provider = new GoogleAuthProvider();

const storage = getStorage(initializeApp(firebaseConfig));

export { db, auth, provider, storage};
// export const firebase = !fb.apps.length ? fb.initializeApp(firebaseConfig) : fb.app()




/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
 export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data?.createdAt.toMillis() || 0,
    updatedAt: data?.updatedAt.toMillis() || 0,
  };
}