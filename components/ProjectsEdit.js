import { RiLinkedinBoxFill, RiTwitterFill, RiGithubFill } from "react-icons/ri";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  orderBy,
  where,
  doc,
  getDoc,
  deleteDoc,
  updateDoc,
  setDoc,
  docSnap,
} from "@firebase/firestore";
import { db, auth } from "../utils/firebase";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../utils/context";
import { useRouter } from "next/router";




export default function ProjectEdit() {
  const { user, username } = useContext(UserContext);
  console.log(user);

  // Set page data
  
  const [displayName, setDisplayName] = useState("Loading...");
  
  

  const [userId, setUserId] = useState();

  

  useEffect(() => {
    if (user) {
      const uid = auth.currentUser.uid;
      
      setUserId(uid);
      const docRef = doc(db, "users", uid, "projects");
      const docSnap = getDoc(docRef).then((doc) => {
        docSnap = doc.data();
        console.log("docSnap", docSnap);
        
        setDisplayName(docSnap.displayName);
       
         
      });
    }
  }, [user]);


  async function saveHandle(e) {
    e.preventDefault();
    console.log("UID", userId);
    const docRef = doc(db, "users", userId);
    const payload = {
      displayName,
      bio,
      interests,
      languages,
      prefers,
      stack,
      portfolioUrl,
      location,
      socialGithub,
      socialLinkedin,
      socialTwitter,
      openToWork,
      githubId,
      firstName,
      lastName,
      email,
      photoURL,
      userName,
    };
    await setDoc(docRef, payload);
    router.push("/user/profile")
  }

  
 

 


  return (
    <div className="mx-1 rounded-sm flex flex-row shadow-lg shadow-zinc-400/10 border border-zinc-800/20">
      <div className="p-3 sm:p-6 text-zinc-100 w-full space-y-6">
        <p className=" flex w-full text-2xl justify-center m-6">Edit Projects</p>
        
       

        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200"></div>
          </div>
        </div>
        



        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200"></div>
          </div>
        </div>

        

      </div>
    </div>
  );
}
