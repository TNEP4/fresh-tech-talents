import { useRouter } from 'next/router';
import React, {useEffect, useState, useContext} from 'react';
import { UserContext} from '../../utils/context';
import Head from 'next/head'
import { LockClosedIcon } from '@heroicons/react/solid'
import { RiWindyFill } from "react-icons/ri";
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
  import { db, auth } from "../../utils/firebase";
import Footer from '../../components/Footer';
import Profile from '../../components/Profile';
import ProjectList from '../../components/ProjectList';


export default function ProfilePage(props) {
    
const { user, username } = useContext(UserContext);

 const[userData, setUserData] = useState("");
 console.log("userdata", userData)
 console.log("first name",userData.firstName )
 

    useEffect(() => {
        if (user) {
          const uid = auth.currentUser.uid;
          console.log(uid);
          const docRef = doc(db, "users", uid);
          const docSnap = getDoc(docRef).then((doc) => {
            docSnap = doc.data();
            console.log("docSnap", docSnap);
           
                setUserData( docSnap
                    // displayName: docSnap.displayName,
                    // bio: docSnap.bio,
                    // interests: docSnap.interests,
                    // languages: docSnap.languages,
                    // prefers: docSnap.prefers,
                    // stack: docSnap.stack,
                    // portfolioUrl: docSnap.portfolioUrl,
                    // location: docSnap.location,
                    // openToWork: docSnap.openToWork,
                    // userName: docSnap.userName,
                    // email: docSnap.email,
                    // githubId: docSnap.githubId,
                    // firstName: docSnap.firstName,
                    // lastName: docSnap.lastName
                      )
        })
        }
      }, [user]);


      




    return (
        <>
        <Head>
            <title>Profile | Fresh-tech-talents</title>
            <meta name="description" content="Launch your career in tech, share your profile and best projects for free to hundreds of recruiters" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800' >
            <main className="pt-8 sm:pt-12 mx-auto max-w-6xl px-4 sm:px-8 pb-12 h-full">
                <Profile />
                <ProjectList 
                firstName = {userData.firstName} 
                lastName = {userData.lastName}
                location = {userData.location}
                />
            </main>
        </div>
        </>
    )
}