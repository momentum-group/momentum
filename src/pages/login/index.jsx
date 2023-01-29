import Head from "next/head";
import Navbar from "@/components/Navbar";
import Dropdown from "@/components/Dropdown";

export default function Register() {

    return (
        <div className="h-screen text-black font-unbounded">
            <Head>
                <title>Momentum | Login</title>
            </Head>
            <Navbar type={"login"}/>

            <main className="w-full h-5/6 flex items-center justify-center">

                <div className="relative w-full h-full">
                    <div className="absolute w-full h-full flex flex-col gap-6 z-10 items-center justify-center">
                            <p className="font-unbounded text-xl">Glad to have you back!</p>
                            <div className="flex flex-col gap-2">
                                <input className="font-unbounded shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="email" />
                                <input className="font-unbounded shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="password" />                               

                                <button className="px-4 py-2 rounded-lg text-white font-unbounded shadow bg-gradient-to-r from-primary to-mango transition hover:scale-110">Let's go</button>
                            </div>
                    </div>

                    <div className="absolute w-full h-full z-0">
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