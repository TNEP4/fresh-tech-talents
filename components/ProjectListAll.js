import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { RiWindyFill } from "react-icons/ri";
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
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

export default function ProjectListAll(props) {
  const tabs = [
    { name: "Projects", href: "#", count: "52", current: true },
    { name: "Talent Profiles", href: "#", count: "38", current: false },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const router = useRouter();
  const { user, username } = useContext(UserContext);
  const [projects, setProjects] = useState([]);
  const [userId, setUserId] = useState();
  const [images, setImages] = useState();
  const [talent, setTalent] = useState([]);

  const allUsers = [];
  const allProjects = [];

  useEffect(() => {
    getDocs(collection(db, "users")).then((querySnapshot) => {
      const talentDataArray = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTalent(talentDataArray);
      console.log("talent array", talentDataArray);
      talentDataArray.map((item) => {
        allUsers.push(item.id);
        // console.log("user id", item.id)
        // console.log(allUsers)
      });
      console.log(allUsers.length);
      for (let i = 0; i < allUsers.length; i++) {
        const uid = allUsers[i];
        console.log("each user", allUsers[i]);
        const collectionRef = collection(db, "users", uid, "projects");
        const q = query(collectionRef, orderBy("_updatedAt", "desc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const projects = [];
          querySnapshot.forEach((doc) => {
            console.log("doc id?", doc.id);
            projects.push({ id: doc.id, ...doc.data() });
          });
          allProjects.push(projects);
          const flatArray = allProjects.flat();
          console.log("AllProjects", allProjects);
          console.log("flat array", flatArray);
          setProjects(flatArray);
        });
      }
    });
  }, []);

  return (
    <div className="mt-5 mx-4 ">
      <div className="flex flex-col space-y-10 mb-10">
        {projects.map((project, index) => {
          const stacks = project.stack;
          console.log("Stacks from map", stacks);
          console.log("project id", project.id);
          return (
            <div
              key={index}
              className="rounded-sm flex flex-row shadow-xl hover:shadow-lg hover:shadow-green-400/60 cursor-pointer border border-zinc-800/20"
            >
              <div className="">
                {}
                <img
                  className="p-2 object-cover object-center h-40 w-80 rounded-tl-sm rounded-bl-sm"
                  src={project.imageUrl}
                />
              </div>
              <div className="flex flex-col py-2 px-6 text-zinc-50 w-full">
                <div className="flex justify-between flex-row w-full items-center">
                  <div className="float-left">
                    <h1 className="text-xl font-medium">{project.title}</h1>
                  </div>
                  <div className="float-right space-x-4 flex flex-row text-sm">
                    {stacks
                      ? stacks.map((stackItem, index) => {
                          return (
                            <span
                              key={index}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700"
                            >
                              {stackItem}
                            </span>
                          );
                        })
                      : null}
                  </div>
                </div>
                <div className="w-full mt-3 text-zinc-200 space-y-2">
                  <p className="text-sm">{project.overview}</p>
                  <p className="text-sm">{project.description}</p>
                </div>
                <div className="w-full mt-3">
                  <div className="flex flex-row space-x-4 text-sm font-medium">
                    <p>
                      {project.firstName} {project.lastName}
                    </p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-green-400 bg-gradient-to-br from-zinc-800 to-zinc-700">
                      <svg
                        className="-ml-0.5 mr-1 h-3 w-3 text-green-400 animate-pulse"
                        fill="currentColor"
                        viewBox="0 0 8 8"
                      >
                        <circle cx={4} cy={4} r={3} />
                      </svg>
                      OPEN TO WORK
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
