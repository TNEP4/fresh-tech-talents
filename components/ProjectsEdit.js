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

  useEffect(() => {//for populating the fields with existing data
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


  async function updateProject(e) {
    e.preventDefault();
    const uid = auth.currentUser.uid;
   
    const docRef = doc(db, "users", uid, "projects", projectId);
    const payload = {
      title,
      overview,
      description,
      imageUrl,
      stack,
      _updatedAt: serverTimestamp(),
    }
    await setDoc(docRef, payload);
    router.push("/user/profile")
  }

  function stackHandler(e) {
    e.preventDefault();
    const value = e.target.value;
    console.log("Bang!");
    if(stack){
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
  }else {
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
    
      <form className=" w-full mx-auto flex justify-center" action="#" method="POST">
        <div className="w-full  shadow sm:rounded-md sm:overflow-hidden">
          <div className=" px-4 py-5 bg-zinc-800 space-y-6 sm:p-6">
            <div className=" grid grid-cols-3 gap-6">
              <div className="  w-1/2 col-span-3 sm:col-span-2">
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
                    className=" w-full bg-zinc-700 text-zinc-200 p-1 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none text-zinc-200 rounded-r-md sm:text-sm border-gray-300"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className=" w-1/2 col-span-3 sm:col-span-2">
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
                <textarea
                    rows="3"
                    name="description"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="bg-zinc-700 text-zinc-200 p-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm text-zinc-200 border border-zinc-800 rounded-md"
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
                <div className="w-full">
                  <div className="flex justify-center">
                    <legend className="text-base font-medium text-zinc-200 mb-3 mt-5">
                      Add/Remove Stack
                    </legend>
                  </div>
                  <div>
                  <p className="mr-5 mb-3 text-zinc-200">Featured stack:</p>
                  </div>
                  <div className="space-x-2 flex justify-between w-full mb-6">

                    {
                    stack? 
                      stack.map((stackItem, index) => {
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
                      })
                      :null
                  }
                  </div>
                    <p className="text-zinc-200">Click to add stack</p>
                  <div className="flex justify-between w-full">
                    <div className="flex justify-between w-1/2">
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <button
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700"
                            onClick={stackHandler }
                            value="Python"
                            disabled={checked.Python}
                          >
                            Python
                          </button>
                        </div>
                        <div className="flex items-center">
                          <button
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700"
                            onClick={stackHandler }
                            value="NextJS"
                            disabled={checked.NextJS}
                          >
                            NextJS
                          </button>
                        </div>
                        <div className="flex items-center">
                          <button
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700"
                            onClick={stackHandler }
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
                            onClick={stackHandler }
                            value="Firebase"
                            disabled={checked.Firebase}
                          >
                            Firebase
                          </button>
                        </div>
                        <div className="flex items-center">
                          <button
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700"
                            onClick={stackHandler }
                            value="MERN"
                            disabled={checked.MERN}
                          >
                            MERN
                          </button>
                        </div>
                        <div className="flex items-center">
                          <button
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700"
                            onClick={stackHandler }
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
                            onClick={stackHandler }
                            value="TypeScript"
                            disabled={checked.TypeScript}
                          >
                            TypeScript
                          </button>
                        </div>
                        <div className="flex items-center">
                          <button
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700"
                            onClick={stackHandler }
                            value="Dart"
                            disabled={checked.Dart}
                          >
                            Dart
                          </button>
                        </div>
                        <div className="flex items-center">
                          <button
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700"
                            onClick={stackHandler }
                            value="Bootstrap"
                            disabled={checked.Bootstrap}
                          >
                            Bootstrap
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
                <div className="px-4 py-3 text-right sm:px-6 ">
                  <button
                    onClick={(e) => {
                      updateProject(e);
                    }}
                    type="submit"
                    className=" inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
          </div>
        </div>
      </form>
  );
}
