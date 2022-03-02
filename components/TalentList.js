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
import { map } from "@firebase/util";

export default function TalentList(props) {
  const router = useRouter();
  const { user, username } = useContext(UserContext);
  console.log("User", user);

  const [talent, setTalent] = useState([]);
  const [userId, setUserId] = useState();
  const tabs = [
    { name: "Talents", href: "#", count: "52", current: true },
    { name: "Talent Profiles", href: "#", count: "38", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  useEffect(() => {
    getDocs(collection(db, "users"))
      .then((querySnapshot) => {
        const talentDataArray = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setTalent(talentDataArray);
        console.log(talentDataArray);
      })
      .catch((err) => {
        console.error("Failed to retrieve data", err);
      });
  }, []);

  return (
    <div>
      <div className="flex flex-col space-y-10 mb-10">
        {talent.map((tal, index) => {
          const stacks = tal.stack;
          const interestsItems = tal.interests;
          


          return (
            <div key={index} className="rounded-sm flex flex-row shadow-xl hover:shadow-lg hover:shadow-green-400/60 cursor-pointer border border-zinc-800/20">
              <div className="">{console.log(typeof interestsItems )}
                <img
                  className="object-cover object-center h-40 w-80 rounded-tl-sm rounded-bl-sm"
                  src={tal.photoURL}
                />
              </div>
              <div className="flex flex-col py-2 px-6 text-zinc-50 w-full">
                <div className="flex justify-between flex-row w-full items-center">
                  <div className="float-left">
                    <h1 className="text-xl font-medium">{tal.displayName}</h1>
                  </div>
                  <div className="float-right space-x-4 flex flex-row text-sm">
                  {stacks.map((stackItem, index) => {
                    return (
                      <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700">
                        {stackItem}
                      </span>
                    );
                  })}
                   
                  </div>
                </div>
                <div className="w-full mt-3 text-zinc-200 space-y-2">
                  <p className="text-sm"> Interests: { 
                      interestsItems[0] && interestsItems[1] ? 
                        <span> {interestsItems[0]},</span> 
                        : <span>{interestsItems[0]}</span>}
                           {interestsItems[1] && interestsItems[2] ?
                              <span> {interestsItems[1]}, {interestsItems[2]}</span> 
                              : <span>{interestsItems[1]}</span>}
                              </p>
                        
                  <p className="text-sm">
                   {tal.bio}
                  </p>
                </div>
                <div className="w-full mt-3">
                  <div className="flex flex-row space-x-4 text-sm font-medium">
                    <p>{tal.firstName} {tal.lastName} </p>
                    <p>{tal.location} </p>
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
