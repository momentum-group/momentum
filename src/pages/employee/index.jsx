import Navbar from "@/components/Navbar"
import Week from "@/components/Week"
import clientPromise from "@/middleware/database";
import { useEffect, useState } from "react";
import Link from "next/link";

export async function getServerSideProps(context) {
    try {

        const client = await clientPromise;
        const query = context.query;
        const db = client.db("org_companyName")
        const user = await db.collection("users").find({email: {$eq: query.user}}).toArray();

        return {
            // TODO: CHANGE TO result.schedule INSTEAD OF AVAILABILITY
            props: { isConnected: true, schedule: JSON.parse(JSON.stringify(user[0].availability)) },
        } 
    } catch (e) {
        console.error(e)
        return {
            props: { isConnected: false },
        }
    }
  }

export default function EmployeeHome({isConnected, schedule}) {
    
    const [scheduleObjs, setScheduleObjs] = useState({})

    useEffect(() => {
        if (schedule == undefined) {
            return;
        }

        let schedules = []

        for (let i = 0; i < schedule.length; i += 48) {
            let shift = schedule.slice(i, i+49);
            shift = shift.map(String);
            let start = shift.indexOf("1");
            let end = shift.lastIndexOf("1");
            let day = {
                start: start,
                duration: end-start
            }
            schedules[i/48] = day;
        }
        
        setScheduleObjs(schedules);
    }, [isConnected])

    return (
        <>  
            <Navbar />

            <div className="flex flex-col">
                <div className="flex">
                    <div>
                        <h1 className="font-semibold text-6xl ml-60 mt-20">Your Week</h1>
                        <h2 className="font-semibold text-lg ml-60 mt-1">January 29, 2023 - January 4, 2023</h2>
                    </div>
                    <Link href="/employee/settings/profile" className="mt-24 hover:text-primary hover:rotate-90 hover:scale-110 duration-300 w-fit h-fit">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </Link>
                </div>
                <Week schedule={scheduleObjs} />
            </div>

        </>
    )
}
