
import { RiLinkedinBoxFill, RiTwitterFill, RiGithubFill } from "react-icons/ri";
import { collection, getDocs, onSnapshot, query, orderBy, where, doc, getDoc, deleteDoc, updateDoc, setDoc, docSnap } from '@firebase/firestore';

import { db, auth } from '../utils/firebase';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../utils/context';


export default function Profile() {

    const { user, username } = useContext(UserContext);
    console.log(user);
    
    // Set page data
    const [photoURL, setPhotoURL] = useState('https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png');
    const [displayName, setDisplayName] = useState("Loading...");
    const [bio, setBio] = useState('Loading...');
    const [interests, setInterests] = useState(['Loading...']);
    const [languages, setLanguages] = useState(['Loading...']);
    const [prefers, setPrefers] = useState(['Loading...']);
    const [stack, setStack] = useState(['Loading...']);
    const [portfolioUrl, setPortfolioUrl] = useState('portfolio-url.com');
    const [location, setLocation] = useState('Loading...');
    const [socialGithub, setSocialGithub] = useState('');
    const [socialLinkedin, setSocialLinkedin] = useState('');
    const [socialTwitter, setSocialTwitter] = useState('');
    const [openToWork, setOpenToWork] = useState(false);

    useEffect(() => {
        if (user) {
        const uid = auth.currentUser.uid;
        console.log(uid);
        const docRef = doc(db, "users", uid);
        const docSnap = getDoc(docRef)
        .then((doc) => {

            docSnap = doc.data();
            console.log('docSnap', docSnap);
            setPhotoURL(docSnap.photoURL);
            setDisplayName(docSnap.displayName);
            setBio(docSnap.bio);
            setInterests(docSnap.interests);
            setLanguages(docSnap.languages);
            setPrefers(docSnap.prefers);
            setStack(docSnap.stack);
            setPortfolioUrl(docSnap.portfolioUrl);
            setLocation(docSnap.location);
            setSocialGithub(docSnap.socialGithub);
            setSocialLinkedin(docSnap.socialLinkedin);
            setSocialTwitter(docSnap.socialTwitter);
            setOpenToWork(docSnap.openToWork);
        })
        }}, [user]);

    return (
        <div className='mx-1 rounded-sm flex flex-row shadow-lg shadow-zinc-400/10 border border-zinc-800/20'>
            <div className="p-3 sm:p-6 text-zinc-100 w-full space-y-6">
                <div className="flex flex-row space-x-4 w-full">
                    <div className="">
                        <img src={photoURL} className="rounded-sm h-20 w-20" />
                    </div>
                    <div className="flex flex-row w-full ">
                        <div className="flex flex-col w-full h-full justify-between">
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-row space-x-4">
                                    <p className="text-white font-bold">{displayName}</p>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-green-400 bg-gradient-to-br from-zinc-800 to-zinc-700">
                                        <svg className="-ml-0.5 mr-1 h-3 w-3 text-green-400 animate-pulse" fill="currentColor" viewBox="0 0 8 8">
                                            <circle cx={4} cy={4} r={3} />
                                        </svg>
                                        OPEN TO WORK
                                    </span>  
                                </div>
                                
                                <div className="space-x-2 flex flex-row items-center">
                                    <a href={socialGithub} target="_blank" rel ="noopener noreferrer">
                                        <RiGithubFill className="h-6 w-6 cursor-pointer text-zinc-200 hover:text-zinc-50" />
                                    </a>
                                    <a href={socialLinkedin} target="_blank" rel ="noopener noreferrer">
                                        <RiLinkedinBoxFill className="h-6 w-6 cursor-pointer text-zinc-200 hover:text-zinc-50" />
                                    </a>
                                    <a href={socialTwitter} target="_blank" rel ="noopener noreferrer">
                                        <RiTwitterFill className="h-6 w-6 cursor-pointer text-zinc-200 hover:text-zinc-50" />
                                    </a>
                                </div>
                            </div>
                            <a href={portfolioUrl} target="_blank" rel ="noopener noreferrer" className="text-green-400 underline underline-offset-1 font-medium">{portfolioUrl}</a>
                            <p>{bio}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="font-bold">About</p>
                    <p><span className="text-zinc-400">Based in: </span> {location}</p>
                    <p><span className="text-zinc-400">Interested in: </span>{interests}</p>
                    <p><span className="text-zinc-400">Prefers: </span>{prefers}</p>
                    <p><span className="text-zinc-400">Speaks: </span>{languages}</p>
                </div>
                <div className="space-y-1">
                    <p className="font-bold">Stack</p>
                    <div className="space-x-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700">
                          React
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700">
                          Nextjs
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700">
                          Tailwind
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700">
                          Firebase
                        </span> 
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700">
                          MERN
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700">
                          Python
                        </span> 
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700">
                          Dart
                        </span> 
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700">
                          Vercel
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700">
                          Ant Design
                        </span>
                    </div>
                </div>
                
                <div className="space-y-4">
                    <p className="font-bold">Projects</p>
                    {/* Project list */}
                        {/* Project 1 */}
                        <div className='rounded-sm flex flex-row shadow-xl hover:shadow-lg hover:shadow-green-400/60 cursor-pointer border border-zinc-800/20'>
                            <div className=''>
                                <img className='object-cover object-center h-40 w-80 rounded-tl-sm rounded-bl-sm' src='https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80' />
                            </div>
                            <div className='py-3 px-6 text-zinc-50 w-ful space-y-2'>
                                <h1 className='text-base font-bold'>
                                    Project name 1
                                </h1>
                                <p className='text-sm'>
                                This is the project overview, that will describe in one sentence what the project is about.
                                </p>
                                <p className='text-sm'>
                                This is the project description, that will describe in two sentences why the talent created the project, with which tool stack, and how much time it took him to complete it.
                                </p>
                                <div className='space-x-4 flex flex-row text-sm pt-1 '>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700">
                                    React
                                    </span>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700">
                                    Nextjs
                                    </span>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700">
                                    Tailwind
                                    </span>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700">
                                    Firebase
                                    </span> 
                                </div>
                            </div>
                        </div>
                        {/* Project 2 */}
                        <div className='rounded-sm flex flex-row shadow-xl hover:shadow-lg hover:shadow-green-400/60 cursor-pointer border border-zinc-800/20'>
                            <div className=''>
                                <img className='object-cover object-center h-40 w-80 rounded-tl-sm rounded-bl-sm' src='https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80' />
                            </div>
                            <div className='py-3 px-6 text-zinc-50 w-ful space-y-2'>
                                <h1 className='text-base font-bold'>
                                    Project name 1
                                </h1>
                                <p className='text-sm'>
                                This is the project overview, that will describe in one sentence what the project is about.
                                </p>
                                <p className='text-sm'>
                                This is the project description, that will describe in two sentences why the talent created the project, with which tool stack, and how much time it took him to complete it.
                                </p>
                                <div className='space-x-4 flex flex-row text-sm pt-1 '>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700">
                                    React
                                    </span>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700">
                                    Nextjs
                                    </span>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700">
                                    Tailwind
                                    </span>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-zinc-50 bg-gradient-to-br from-zinc-800 to-zinc-700">
                                    Firebase
                                    </span> 
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}