import Navbar from "@/components/Navbar";
import Day from "@/components/Day";
import clientPromise from "@/middleware/database";
import { useEffect, useState } from "react";

export async function getServerSideProps(context) {
    try {

        const client = await clientPromise;
        const query = context.query;
        const db = client.db("org_companyName")
        const user = await db.collection("users").find({email: {$eq: query.user}}).toArray();

        return {
            props: { isConnected: true, user: JSON.parse(JSON.stringify(user[0])) },
        } 
    } catch (e) {
        console.error(e)
        return {
            props: { isConnected: false },
        }
    }
}

export default function EmployerHome({isConnected, user}) {

    const [users, setUsers] = useState(null);

    useEffect( () => {
        if (user == undefined) {
            return;
        }
        fetch("/api/getEmployeeSchedules", {
            method: "POST",
            body: JSON.stringify({company: user.company}),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(response => response.json())
        .then(data => {
            if (data.status == 200) {
            
                // Display schedules for the day
                setUsers(data.users)
    
            } else {
                //TODO: 
            }
        })
    }, [isConnected])

    return (
        <div className="font-inter">
            <Navbar/>

            <main className="mx-64 mt-10">
                <p className="text-3xl font-semibold pl-4">Today</p>
                <Day users={users} />
            </main>
        </div>
    )
}