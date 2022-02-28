import { useRouter } from 'next/router';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { firebase } from '../utils/firebase';

import { doc, setDoc, serverTimestamp, addDoc, query, getDocs, collection } from "firebase/firestore"; 
import { db } from '../utils/firebase';

import { useContext } from 'react';
import { UserContext } from '../utils/context';


import Head from 'next/head'
import { LockClosedIcon } from '@heroicons/react/solid'
import { RiWindyFill } from "react-icons/ri";
import { RiGithubFill } from "react-icons/ri";
import { FirebaseError } from 'firebase/app';




export default function TalentSignIn() {

  const router = useRouter()

  const CreateAccount = async (user) => {
    const auth = getAuth();
    console.log(auth);
    console.log(user);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        const refUser = doc(db, "users", uid);
        setDoc(refUser, {
          uid: user.uid,
          email: user.email,
          photoURL: user.photoURL,
          displayName: user.displayName,
          githubId : user.reloadUserInfo.screenName,
          openToWork : true,
          portfolioUrl : "",
          bio : "",
          location : "",
          interests: [],
          prefers: [],
          languages: [],
          stack: [],
          socialGithub: "",
          socialLinkedin: "",
          socialTwitter: "",
          _createdAt: serverTimestamp(),
          _updatedAt: serverTimestamp()
          }, { merge: true }).then(function() {
            console.log("everything worked");
            router.push('/user/profile');
          }).then(function() {
            console.log( user.displayName + " created");
          }).catch(function(error) {
            console.log("error: " + error);
          });
        }
        else {
        // User is signed out
        // ...
        console.log('User is signed out');
      }
    }); 
  }

  const signInWithGithub = async () => {
    const provider = new GithubAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Print result:___", result)
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        console.log("Print credential:___", credential)
        const token = credential.accessToken;
        console.log("Print token:___", token)
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        const auth = getAuth();
        CreateAccount(user);
          
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
  }


  return (
    <>
      <Head>
        <title>Sign up | Fresh-tech-talents</title>
        <meta name="description" content="Find rising tech talents open to work, browse their best projects and profile for free." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <div className="min-h-screen flex items-center -mt-10 sm:mt-0 justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800">
        <div className="max-w-md w-full space-y-10">
          <div>
            <RiWindyFill className='mx-auto h-16 w-auto text-green-400'/>
            <h2 className="mt-4 text-center text-3xl font-extrabold text-white">Create your talent account</h2>
            <p className="mt-2 text-center text-md text-zinc-50">
              Let&apos;s launch your career in tech.
            </p>
          </div>
          <div className='w-full inline-block '>
            <div className='w-60 text-center items-center flex cursor-pointer flex-row justify-center align-middle mx-auto py-2 rounded-full font-bold text-white bg-black/50 hover:bg-black shadow-lg shadow-green-400/50 hover:shadow-green-400/90'
            onClick={signInWithGithub}
            >
              <span className='mr-2 self-center'><RiGithubFill className='h-8 w-8' /></span>
              Sign up with Github 
            </div>
          </div>
        </div>
      </div>
    </>
  )
}