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
  serverTimestamp,
} from "@firebase/firestore";
import { db, auth } from "../utils/firebase";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../utils/context";
import { useRouter } from "next/router";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

export default function ProjectEdit() {
  const { user, username } = useContext(UserContext);
  console.log(user);
  const router = useRouter();
  const projectId = router.query.projectId; //getting project idex from URL
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [overview, setOverview] = useState("");
  const [stack, setStack] = useState([]);
  const [userId, setUserId] = useState();
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

  useEffect(() => {
    //for populating the fields with existing data
    if (user) {
      const uid = auth.currentUser.uid;
      setUserId(uid);
      const docRef = doc(db, "users", uid, "projects", projectId);
      const docSnap = getDoc(docRef).then((doc) => {
        docSnap = doc.data();
        console.log("docSnap", docSnap);
        setTitle(docSnap.title);
        setOverview(docSnap.overview);
        setDescription(docSnap.description);
        setImageUrl(docSnap.imageUrl);
        setStack(docSnap.stack);
      });
    }
  }, [user]);

  function updateProject(e) {
    e.preventDefault();
    const uid = auth.currentUser.uid;

    const docRef = doc(db, "users", uid);
    const docSnap = getDoc(docRef).then((doc) => {
      docSnap = doc.data();
      console.log("docSnap", docSnap);
    });
    const storage = getStorage();
    let imgId = Math.floor(Math.random() * 1000000);
    const storageRef = ref(storage, `images${imgId}`);
    uploadBytes(storageRef, image).then((snapshot) => {
      console.log("Uploaded a blob or file!");
      const storageRef = ref(storage, `images${imgId}`);
      getDownloadURL(storageRef, image).then((url) => {
        console.log("image URL", url);
        setImageUrl(url);
        const docRef = doc(db, "users", uid, "projects", projectId);
        const payload = {
          title,
          overview,
          description,
          imageUrl: url,
          stack,
          _updatedAt: serverTimestamp(),
        };
        setDoc(docRef, payload);
        router.push("/user/profile");
      });
    });
  }

  const [image, setImage] = useState(null);
  const changeHandler = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  function stackHandler(e) {
    e.preventDefault();
    const value = e.target.value;
    console.log("Bang!");
    if (stack) {
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
    } else {
      setStack([value]);
      console.log("Stack content", stack);
      setChecked(() => {
        return {
          [value]: true,
        };
      });
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
    <div className="h-full">
      <form
        className=" w-full h-full mx-auto flex justify-center pb-20"
        action="#"
        method="POST"
      >
        <div className="w-full shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 bg-zinc-800 space-y-8 sm:p-6">
            <div className="w-80">
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
                  className=" w-full bg-zinc-700 text-zinc-200 p-1 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block  rounded-none rounded-r-md sm:text-sm border-gray-300"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>
            <div className="w-80">
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
                  className="bg-zinc-700 text-zinc-200 p-1 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                  value={overview}
                  onChange={(e) => setOverview(e.target.value)}
                />
              </div>
            </div>
            <div className="w-80">
              <label
                htmlFor="company-website"
                className="block text-sm font-medium text-zinc-200"
              >
                {" "}
                Description{" "}
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <textarea
                  rows="3"
                  name="description"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="bg-zinc-700 text-zinc-200 p-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-zinc-800 rounded-md"
                />
              </div>
            </div>
            <div className="w-80">
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
                  className="bg-zinc-700 text-zinc-200 p-1 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm  border-gray-300"
                />
              </div>
            </div>
            <div className="w-full mt-2">
              <div className="flex justify-center w-full">
                <p className="text-base font-medium text-zinc-200 mb-3 mt-5 w-full">
                  Featured stack
                </p>
              </div>
              <div className="space-x-2 flex w-full mb-4">
                {stack
                  ? stack.map((stackItem, index) => {
                      return (
                        <span
                          key={index}
                          className="inline-flex items-center pl-2.5 pr-2 py-1 rounded-full text-xs font-bold text-zinc-50 bg-gradient-to-br from-green-700 to-green-500 cursor-default"
                        >
                          {stackItem}
                          <span
                            onClick={(e) => deleteStack(stackItem)}
                            className="inline-flex items-center pl-1  rounded-full text-xs font-medium text-zinc-50 cursor-pointer"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          {console.log("Stack ITEM ______:", stackItem)}
                        </span>
                      );
                    })
                  : null}
              </div>
              <p className="text-zinc-400 text-xs pt-1 pb-0.5">
                Click to add stack
              </p>
              <div className="w-full space-x-3 space-y-2">
                <button
                  className="items-center px-2.5 py-1 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700"
                  onClick={stackHandler}
                  value="Python"
                  disabled={checked.Python}
                >
                  Python
                </button>
                <button
                  className="items-center px-2.5 py-1 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700"
                  onClick={stackHandler}
                  value="NextJS"
                  disabled={checked.NextJS}
                >
                  NextJS
                </button>
                <button
                  className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700"
                  onClick={stackHandler}
                  value="Tailwind"
                  disabled={checked.Tailwind}
                >
                  Tailwind
                </button>
                <button
                  className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700"
                  onClick={stackHandler}
                  value="Firebase"
                  disabled={checked.Firebase}
                >
                  Firebase
                </button>
                <button
                  className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700"
                  onClick={stackHandler}
                  value="MERN"
                  disabled={checked.MERN}
                >
                  MERN
                </button>
                <button
                  className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700"
                  onClick={stackHandler}
                  value="Java"
                  disabled={checked.Java}
                >
                  Java
                </button>
                <button
                  className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700"
                  onClick={stackHandler}
                  value="TypeScript"
                  disabled={checked.TypeScript}
                >
                  TypeScript
                </button>
                <button
                  className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700"
                  onClick={stackHandler}
                  value="Dart"
                  disabled={checked.Dart}
                >
                  Dart
                </button>
                <button
                  className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700"
                  onClick={stackHandler}
                  value="Bootstrap"
                  disabled={checked.Bootstrap}
                >
                  Bootstrap
                </button>
              </div>
            </div>
            <div className="text-left pt-6">
              <button
                onClick={(e) => {
                  updateProject(e);
                }}
                type="submit"
                className=" inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-zinc-900 bg-zinc-50 hover:bg-green-500 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
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
