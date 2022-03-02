import { auth, firestore, serverTimestamp } from './firebase';
import { db } from './firebase';
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useContext } from 'react';
import { UserContext } from './context';

// Custom hook to read  auth record and user profile doc
export function useUserData() {
  const [user, setUser] = useAuthState(auth);
  const [username, setUsername] = useState(null);

  return { user, username };
}
