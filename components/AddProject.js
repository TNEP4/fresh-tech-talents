import {
  doc,
  setDoc,
  addDoc,
  serverTimestamp,
  docRef,
  collection,
  getFirestore,
   
} from "firebase/firestore";
import { db } from "../utils/firebase";
import { auth } from "../utils/firebase";
import { useContext } from "react";
import { UserContext } from "../utils/context";
import React, { useState } from "react";
import {app} from 'firebase/app';
//

export default function AddProject() {
  const { user, username } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [overview, setOverview] = useState("");
   
  const [stack, setStack] = useState([]);
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
   
    let collectionRef = collection(db, "users", uid, "projects");
    let docRef = doc(collectionRef);
    setDoc(docRef, {
      title,
      overview,
      description,
      imageUrl,
      stack,
      _createdAt: serverTimestamp(),
      _updatedAt: serverTimestamp(),
    });
    console.log("Document written with ID: ", docRef.id);

    return false; // Prevent page refresh
  }

  

  function stackHandler(value) {
    console.log("Bang!");
    for (let i = 0; i <= stack.length; i++) {
      if (stack.includes(value)) {
        console.log("Problem!");
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

  return (
    <div className= "w-1/2 mx-auto">
      <form action="#" method="POST">
        <div className="shadow sm:rounded-md sm:overflow-hidden">
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
                    type="text"
                    name="imageUrl"
                    value={imageUrl}
                    onChange={(e)=>setImageUrl(e.target.value)}
                    className="bg-zinc-700 text-zinc-200 p-1 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm text-zinc-200  border-gray-300"
                  />
                </div>
                <fieldset>
                  <div>
                    <legend className="text-base font-medium text-white-900 mb-3 mt-5">
                      Add/Remove Stack
                    </legend>
                  </div>
                  <div className="space-x-2 flex justify-between w-1/2 mb-6">
                    <p className="mr-5">Featured stack:</p>
                    {stack.map((stackItem, index) => {
                      return (
                        <span key= {index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700">
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
                  <div className="flex justify-between w-1/2">
                    <p>Click to add stack</p>
                    <div className="flex justify-between w-1/2">
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

                <div className="px-4 py-3 text-right sm:px-6 ">
                  <button
                    onClick={(e) => {
                      createProject(e);
                    }}
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
