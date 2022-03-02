import {
  doc,
  setDoc,
  addDoc,
  serverTimestamp,
  docRef,
  collection,
  getFirestore,
  getDoc
} from "firebase/firestore";
import { db } from "../utils/firebase";
import { auth } from "../utils/firebase";
import { useContext } from "react";
import { UserContext } from "../utils/context";
import React, { useState } from "react";
import { app } from "firebase/app";
import { storage } from "../utils/firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useRouter } from "next/router";

export default function AddProject() {
  const { user, username } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [overview, setOverview] = useState("");
  const router = useRouter();
  const [stack, setStack] = useState([]);
  const [firstName, setFirstName] = useState("Loading");
  const [lastName, setLastName] = useState("Loading");
  const [checked, setChecked] = useState({
    Python: false,
    NextJS: false,
    Tailwind: false,
    Firebase: false,
    MERN: false,
    Java: false,
    TypeScript: false,
    Dart: false,
    Bootstrap: false,
  });

  function createProject(e) {
    e.preventDefault();
    const uid = auth.currentUser.uid;

    const docRef = doc(db, "users", uid);
      const docSnap = getDoc(docRef).then((doc) => {
        docSnap = doc.data();
        console.log("docSnap", docSnap);
        setFirstName(docSnap.firstName);
        setLastName(docSnap.lastName);
      });
    const storage = getStorage();
    let imgId = Math.floor(Math.random() * 1000000);
    const storageRef = ref(storage, `images${imgId}`);
    uploadBytes(storageRef, image).then((snapshot) => {
      console.log("Uploaded a blob or file!");
      const storageRef = ref(storage, `images${imgId}`);
      getDownloadURL(storageRef, image).then((url) => {
        console.log("image URL", url);
        // setImageUrl(url);
        let collectionRef = collection(db, "users", uid, "projects");
        let docRef = doc(collectionRef);
        setDoc(docRef, {
          title,
          overview,
          description,
          imageUrl: url,
          stack,
          firstName: docSnap.firstName,
          lastName:docSnap.lastName, 
          _createdAt: serverTimestamp(),
          _updatedAt: serverTimestamp(),
        });
      });
    });
    router.push(`/user/profile`);
    return false; // Prevent page refresh
  }

  function stackHandler(value) {
    console.log("Bang!");
    for (let i = 0; i <= stack.length; i++) {
      if (stack.includes(value)) {
        console.log("Problem!");
        setChecked(() => {
          return {
            [value]: true,
          };
        });
      } else {
        setStack([...stack, value]);
        console.log("Stack content", stack);
        setChecked(() => {
          return {
            [value]: true,
          };
        });
      }
    }
  }
  const deleteStack = (stackFromBelow) => {
    setStack(stack.filter((stackItem, index) => stackItem !== stackFromBelow));
    setChecked(() => {
      return {
        [stackFromBelow]: false,
      };
    });
  };

  const [image, setImage] = useState(null);
  const changeHandler = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  // console.log("Image? ", image);
  return (
    <div className="w-3/4 mx-auto">
      <form action="#" method="POST">
        <div className=" shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-zinc-800 space-y-6 sm:p-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-2">
                <label
                  htmlFor="company-website"
                  className="block text-sm font-medium text-zinc-200"
                >
                  {" "}
                  Title{" "}
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    name="userName"
                    id="userName"
                    className="bg-zinc-700 text-zinc-200 p-1 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none text-zinc-200 rounded-r-md sm:text-sm border-gray-300"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-2">
                <label
                  htmlFor="company-website"
                  className="block text-sm font-medium text-zinc-200"
                >
                  {" "}
                  Overview{" "}
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    name="overview"
                    id="overview"
                    className="bg-zinc-700 text-zinc-200 p-1 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none text-zinc-200 rounded-r-md sm:text-sm border-gray-300"
                    value={overview}
                    onChange={(e) => setOverview(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-2">
                <label
                  htmlFor="company-website"
                  className="block text-sm font-medium text-zinc-200"
                >
                  {" "}
                  Description{" "}
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    name="displayName"
                    id="displayName"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="bg-zinc-700 text-zinc-200 p-1 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm text-zinc-200  border-gray-300"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-2">
                <label
                  htmlFor="company-website"
                  className="block text-sm font-medium text-zinc-200"
                >
                  {" "}
                  Upload Screenshot{" "}
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="file"
                    name="imageUrl"
                    onChange={changeHandler}
                    className="bg-zinc-700 text-zinc-200 p-1 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm text-zinc-200  border-gray-300"
                  />
                </div>

              </div>
            </div>
                <fieldset className="w-full mb-4">
                  <div>
                  <div>
                    <legend className="text-base font-medium text-white-900 mb-3 mt-5">
                      Add/Remove Stack
                    </legend>
                  </div> 
                  <p className="mr-5 mb-5">Featured stack:</p>
                  <div className="space-x-2 flex justify-between w-1/2 mb-6">
                   
                    {stack.map((stackItem, index) => {
                      return (
                        <span
                          key={index}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700"
                        >
                          {stackItem}
                          <span
                            onClick={(e) => deleteStack(stackItem)}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700"
                          >
                            X
                          </span>
                          {console.log("Stack ITEM ______:", stackItem)}
                        </span>
                      );
                    })}
                  </div>
                  </div>
                  <div>
                  <p>Click to add stack</p>
                    <div className="flex justify-around ">
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <button
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700"
                            onClick={(e) => stackHandler(e.target.value)}
                            value="Python"
                            disabled={checked.Python}
                          >
                            Python
                          </button>
                        </div>
                        <div className="flex items-center">
                          <button
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700"
                            onClick={(e) => stackHandler(e.target.value)}
                            value="NextJS"
                            disabled={checked.NextJS}
                          >
                            NextJS
                          </button>
                        </div>
                        <div className="flex items-center">
                          <button
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700"
                            onClick={(e) => stackHandler(e.target.value)}
                            value="Tailwind"
                            disabled={checked.Tailwind}
                          >
                            Tailwind
                          </button>
                        </div>
                      </div>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <button
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700"
                            onClick={(e) => stackHandler(e.target.value)}
                            value="Firebase"
                            disabled={checked.Firebase}
                          >
                            Firebase
                          </button>
                        </div>
                        <div className="flex items-center">
                          <button
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700"
                            onClick={(e) => stackHandler(e.target.value)}
                            value="MERN"
                            disabled={checked.MERN}
                          >
                            MERN
                          </button>
                        </div>
                        <div className="flex items-center">
                          <button
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700"
                            onClick={(e) => stackHandler(e.target.value)}
                            value="Java"
                            disabled={checked.Java}
                          >
                            Java
                          </button>
                        </div>
                      </div>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <button
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700"
                            onClick={(e) => stackHandler(e.target.value)}
                            value="TypeScript"
                            disabled={checked.TypeScript}
                          >
                            TypeScript
                          </button>
                        </div>
                        <div className="flex items-center">
                          <button
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700"
                            onClick={(e) => stackHandler(e.target.value)}
                            value="Dart"
                            disabled={checked.Dart}
                          >
                            Dart
                          </button>
                        </div>
                        <div className="flex items-center">
                          <button
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700"
                            onClick={(e) => stackHandler(e.target.value)}
                            value="Bootstrap"
                            disabled={checked.Bootstrap}
                          >
                            Bootstrap
                          </button>
                        </div>
                      </div>
                    
                  </div>
                  </div>
                </fieldset>
                <div className="px-4 py-3 text-right sm:px-6  flex justify-center ">
                  <button
                    onClick={(e) => {
                      createProject(e);
                    }}
                    type="submit"
                    className="inline-flex  py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
          </div>
        </div>
      </form>
    </div>
  );
}
