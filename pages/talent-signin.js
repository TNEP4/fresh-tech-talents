import { useRouter } from "next/router";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { firebase } from "../utils/firebase";

import Head from "next/head";
import { LockClosedIcon } from "@heroicons/react/solid";
import { RiWindyFill } from "react-icons/ri";
import { RiGithubFill } from "react-icons/ri";
import { FirebaseError } from "firebase/app";

export default function TalentSignIn(props) {
  const router = useRouter();
  const { loggedIn, setLoggedIn } = props;
  const signInWithGithub = async () => {
    const provider = new GithubAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        router.push("/user/profile");
        console.log(user);
        setLoggedIn(true);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
  };
  // const signInWithGoogle = async () => {
  //   const provider = new GoogleAuthProvider();
  //   const auth = getAuth();
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const token = credential.accessToken;
  //       // The signed-in user info.
  //       const user = result.user;
  //       // ...
  //       router.push('/app');
  //     }).catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       const email = error.email;
  //       // The AuthCredential type that was used.
  //       const credential = GoogleAuthProvider.credentialFromError(error);
  //       console.log(error + " " + errorCode + " " + errorMessage + " " + email + " " + credential);
  //       // ...
  //       router.push('/problem');
  //     });

  // };

  return (
    <>
      <Head>
        <title>Sign in | Fresh-tech-talents</title>
        <meta
          name="description"
          content="Find rising tech talents open to work, browse their best projects and profile for free."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex items-center -mt-10 sm:mt-0 justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800">
        <div className="max-w-md w-full space-y-10">
          <div>
            <RiWindyFill className="mx-auto h-16 w-auto text-green-400" />
            <h2 className="mt-4 text-center text-3xl font-extrabold text-white">
              Sign in to your talent account
            </h2>
            <p className="mt-2 text-center text-md text-zinc-50">
              Let&apos;s launch your career in tech.
            </p>
          </div>
          <div className="w-full inline-block ">
            <div
              className="w-60 text-center items-center flex cursor-pointer flex-row justify-center align-middle mx-auto py-2 rounded-full font-bold text-white bg-black/50 hover:bg-black shadow-lg shadow-green-400/50 hover:shadow-green-400/90"
              onClick={signInWithGithub}
            >
              <span className="mr-2 self-center">
                <RiGithubFill className="h-8 w-8" />
              </span>
              Sign In with Github
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
