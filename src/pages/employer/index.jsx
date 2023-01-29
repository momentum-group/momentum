import Navbar from "@/components/Navbar";
import Day from "@/components/Day";

export default function EmployerHome() {
    return (
        <div className="font-inter">
            <Navbar/>

            <main className="mx-64">
                <p className="text-3xl font-medium pl-4">Today</p>
                <Day />
            </main>
        </div>
    )
}