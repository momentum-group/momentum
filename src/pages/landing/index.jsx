import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import styles from './Landing.module.css'
import { useState } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";


export default function Landing() {

    const [name, setName] = useLocalStorage("name", "")
    const [email, setEmail] = useLocalStorage("email", "");
    
    return (
        <div className="w-screen h-screen">
            <Head>
                <title>Momentum</title>
            </Head>
            
            <Navbar type="landing" />

            <main className="w-full h-5/6 flex items-center justify-center">

                <div className="relative w-full h-full">
                    <div className="absolute w-full h-full flex flex-row z-20">
                        <div className="flex-1 h-full flex px-48 mt-48 flex-col gap-2">
                            <p className="font-unbounded font-medium text-3xl text-end">Meet your new <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-300">assistant</span></p>
                            <p className="font-unbounded text-2xl text-end">They're called Momentum</p>
                            <p className="font-unbounded text-xl text-end">You don't have to worry about scheduling anymore</p>
                            <p className="font-unbounded text-4xl text-end font-medium mt-12">And it's completely free, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-mango font-bold">forever.</span></p>
                        </div>

                        <div className="flex-1 h-full flex flex-col mt-48 gap-6">
                            <p className="font-unbounded text-xl">Get started today</p>
                        
                            <div className="flex flex-col gap-2">
                                <input className="font-unbounded w-1/2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="name" onChange={e => setName(e.target.value)}/>
                                <input className="font-unbounded w-1/2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="email" onChange={e => setEmail(e.target.value)}/>
                                <Link href="/register"><button className="px-4 py-2 w-1/5 rounded-lg text-white font-unbounded shadow bg-gradient-to-r from-primary to-mango transition hover:scale-110">Let's go</button></Link>
                            </div>

                        </div>

                    </div>

                    <div className="absolute w-full h-full z-10">
                        <div className="z-0 relative w-full h-full">
                            <div className="bg-mango opacity-20 w-[300px] h-[200px] absolute right-[400px] top-[300px] rounded-xl" />
                            <div className="bg-red-300 opacity-20 w-[350px] h-[220px] absolute right-[500px] top-[250px] rounded-xl" />
                            <div className="bg-orange-500 opacity-20 w-[150px] h-[270px] absolute left-[300px] top-[100px] rounded-xl" />
                            <div className="bg-red-200 opacity-75 w-[250px] h-[220px] absolute right-[100px] top-[160px] rounded-xl" />
                            <div className="bg-mango opacity-50 w-[250px] h-[250px] rounded-full absolute left-[100px] top-[230px]" />
                            <div className="bg-rose-300 opacity-40 w-[250px] h-[250px] rounded-full absolute left-[350px] top-[450px]" />
                            <div className="bg-orange-500 opacity-20 w-[150px] h-[120px] absolute right-[100px] top-[500px] rounded-xl" />
                            <div className="bg-mango opacity-30 w-[150px] h-[150px] absolute right-[200px] top-[550px] rounded-full" />
                            <div className="bg-rose-600 opacity-10 w-[150px] h-[150px] absolute left-[550px] top-[80px] rounded-full" />
                        </div>
                    </div>
                </div>
            </main>
        
        </div>
    )

}