import Head from "next/head";
import Navbar from "@/components/Navbar";
import Dropdown from "@/components/Dropdown";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useState } from "react";
import clientPromise from "@/middleware/database";

export async function getServerSideProps(context) {
    try {
      await clientPromise
      // `await clientPromise` will use the default database passed in the MONGODB_URI
      // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
      //
      // `const client = await clientPromise`
      // `const db = client.db("myDatabase")`
      //
      // Then you can execute queries against your database like so:
      // db.find({}) or any of the MongoDB Node Driver commands

        const client = await clientPromise
        const db = client.db("org_companyName")
        
        const users = await db.collection("users").find({}).toArray()
        

        return {
            props: { isConnected: true, users: JSON.parse(JSON.stringify(users)) },
        } 
    } catch (e) {
        console.error(e)
        return {
            props: { isConnected: false },
        }
    }
  }

export default function Register({isConnected, users}) {

    const [name, setName] = useLocalStorage("name", "");
    const [email, setEmail] = useLocalStorage("email", "");

    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const [showPasswordError, setShowPasswordError] = useState(false);


    const [accountType, setAccountType] = useState('');
    const [business, setBusiness] = useState('');

    const handleSetAccountType = (type) => {
        setAccountType(type);
    }

    const handleRegister = async (e) => {
        var isEmployer = false;
        if (accountType == 'Employee') {
            isEmployer = false;
        
            const response = await fetch("/api/register", {
                method: "POST",
                body: JSON.stringify({email: email, password: password, firstname: name.split(" ")[0], lastname: name.split(" ")[1], company: business, is_employer: isEmployer}),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            
            const data = await response.json();
            if (data.status == 200) {
                router.push({pathname: "/employee", query: {user: email}})
            } else {
                //TODO: Show error
            }
        } else {
            isEmployer = true;
            const response = await fetch("/api/registerBusiness", {
                method: "POST",
                body: JSON.stringify({company: business}),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            
            const data = await response.json();
            if (data.status == 200) {
                const response = await fetch("/api/register", {
                    method: "POST",
                    body: JSON.stringify({email: email, password: password, firstname: name.split(" ")[0], lastname: name.split(" ")[1], company: business, is_employer: isEmployer}),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                
                const data = await response.json();
                if (data.status == 200) {
                    router.push({pathname: "/employer", query: {user: email}})
                } else {
                    //TODO: Show error
                }
            } else {
                //TODO: Show error
            }
        }
    };

    const handleEqualPassword = (e) => {
        setPasswordRepeat(e.target.value)

        if (e.target.value != password) {
            setShowPasswordError(true);
            return;
        }
        setShowPasswordError(false);
    }

    const handleFirstPasswordEqual = (e) => {
        setPassword(e.target.value)

        if (passwordRepeat == '') {
            return;
        }

        if (e.target.value != passwordRepeat) {
            setShowPasswordError(true);
            return;
        }
        setShowPasswordError(false);
    }

    return (
        <div className="h-screen text-black font-unbounded">
            <Head>
                <title>Momentum | Register</title>
            </Head>
            <Navbar type={"register"}/>

            <main className="w-full h-5/6 flex items-center justify-center">

                <div className="relative w-full h-full">
                    <div className="absolute w-full h-full flex flex-col gap-6 z-10 items-center justify-center">
                            <p className="font-unbounded text-xl">Glad to see you here!</p>
                            <div className="flex flex-col gap-2">
                                <input className="font-unbounded shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="name" value={name} onChange={e => setName(e.target.value)}/>
                                <input className="font-unbounded shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
                                
                                <br />
                                <input className="font-unbounded shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="password" placeholder="password" value={password} onChange={e => handleFirstPasswordEqual(e)}/>
                                <input className="font-unbounded shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="password" placeholder="password" value={passwordRepeat} onChange={e => handleEqualPassword(e)}/>

                                { showPasswordError ? <p className="text-red-400 text-xs">Passwords don't match</p> : <></>}

                                <br />
                                <label htmlFor="account-type" className="text-sm">Are you an employer or employee?</label>
                                <Dropdown setType={handleSetAccountType} />    

                                { accountType === 'Employer' ? 
                                    <div className="mt-6 flex flex-col">
                                        <label htmlFor="businessName" className="text-sm">Please enter the name of your employer</label>
                                        <input className="font-unbounded shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="businessName" type="text" placeholder="name of business" onChange={e => setBusiness(e.target.value)}/>
                                    </div> 
                                : 
                                    <></>
                                }                 
                                { accountType === 'Employee' ? 
                                    <div className="mt-6 flex flex-col">
                                        <label htmlFor="businessName" className="text-sm">Please enter the name of your employer</label>
                                        <input className="font-unbounded shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="businessName" type="text" placeholder="name of business" onChange={e => setBusiness(e.target.value)}/>
                                    </div> 
                                : 
                                    <></>
                                }                      

                                <button className="px-4 py-2 rounded-lg text-white font-unbounded shadow bg-gradient-to-r from-primary to-mango transition hover:scale-110" onClick={handleRegister}>Let's go</button>
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