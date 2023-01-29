import Navbar from "@/components/Navbar"
import Week from "@/components/Week"
import clientPromise from "@/middleware/database";
import { useEffect, useState } from "react";

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
                <h1 className="font-semibold text-6xl mx-60 mt-20">Your Week</h1>
                <Week schedule={scheduleObjs} />
            </div>

        </>
    )
}
