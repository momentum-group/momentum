import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion"
import useLocalStorage from "@/hooks/useLocalStorage";


export default function Landing() {

    const [name, setName] = useLocalStorage("name", "")
    const [email, setEmail] = useLocalStorage("email", "");
    
    return (
        <div className="w-screen h-full">
            <Head>
                <title>Momentum</title>
            </Head>
            
            <Navbar type="landing" />

            <main className="w-full h-5/6 flex items-center justify-center">

                <motion.div className="relative w-full h-full">
                    <div className="absolute w-full h-full flex flex-row z-20">
                        <div className="flex-1 h-full flex px-48 mt-48 flex-col gap-2">
                            <motion.p className="font-unbounded font-medium text-3xl text-end" initial={{opacity: 0, translateY: 100}} animate={{opacity: 1, translateY: 0}} transition={{ duration: 1.0 }}>Meet your new <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-300">assistant</span>.</motion.p>
                            <motion.p className="font-unbounded text-2xl text-end" initial={{opacity: 0, translateY: 100}} animate={{opacity: 1, translateY: 0}} transition={{ duration: 1.0, delay: 1.5 }}>They're called Momentum.</motion.p>
                            <motion.p className="font-unbounded text-xl text-end" initial={{opacity: 0, translateY: 100}} animate={{opacity: 1, translateY: 0}} transition={{ duration: 1.0, delay: 3.0 }}>You don't have to worry about scheduling anymore.</motion.p>
                            <motion.p className="font-unbounded text-4xl text-end font-medium mt-12" initial={{opacity: 0, translateY: 200}} animate={{opacity: 1, translateY: 0}} transition={{ duration: 1.8, delay: 4.5 }}>And it's completely free, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-mango font-bold">forever.</span></motion.p>
                        </div>

                        <motion.div className="flex-1 h-full flex flex-col mt-48 gap-6" initial={{opacity: 0, translateY: 200}} animate={{opacity: 1, translateY: 0}} transition={{ duration: 1.0, delay: 6.0 }}>
                            <p className="font-unbounded text-xl">Get started today!</p>
                        
                            <div className="flex flex-col gap-2">
                                <input className="font-unbounded w-1/2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="name" onChange={e => setName(e.target.value)}/>
                                <input className="font-unbounded w-1/2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="email" onChange={e => setEmail(e.target.value)}/>
                                <Link href="/register"><button className="px-4 py-2 w-1/5 rounded-lg text-white font-unbounded shadow bg-gradient-to-r from-primary to-mango transition hover:scale-110">Let's go</button></Link>
                            </div>

                        </motion.div>

                    </div>

                    <div className="absolute w-full h-full z-10 overflow-hidden">
                        <div className="z-0 relative w-full h-full overflow-hidden">
                            <div className="bg-mango opacity-20 w-[300px] h-[200px] absolute right-[400px] top-[250px] rounded-xl" />
                            <div className="bg-red-300 opacity-20 w-[350px] h-[220px] absolute right-[500px] top-[200px] rounded-xl" />
                            <div className="bg-orange-500 opacity-20 w-[150px] h-[270px] absolute left-[300px] top-[50px] rounded-xl" />
                            <div className="bg-red-200 opacity-75 w-[250px] h-[220px] absolute right-[100px] top-[110px] rounded-xl" />
                            <div className="bg-mango opacity-50 w-[250px] h-[250px] rounded-full absolute left-[100px] top-[180px]" />
                            <div className="bg-rose-300 opacity-40 w-[250px] h-[250px] rounded-full absolute left-[350px] top-[400px]" />
                            <div className="bg-orange-500 opacity-20 w-[150px] h-[120px] absolute right-[100px] top-[450px] rounded-xl" />
                            <div className="bg-mango opacity-30 w-[150px] h-[150px] absolute right-[200px] top-[500px] rounded-full" />
                            <div className="bg-rose-600 opacity-10 w-[150px] h-[150px] absolute left-[550px] top-[30px] rounded-full" />
                        </div>
                    </div>
                </motion.div>
            </main>
        
        </div>
    )

}