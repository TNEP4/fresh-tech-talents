import { createContext } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const UserContext = createContext({ user: null, username: null });