import Navbar from "@/components/Navbar"
import Week from "@/components/Week"

export default function EmployeeHome() {
    
    return (
        <>  
            <Navbar />

            <div className="flex flex-col">
                <h1 className="font-semibold text-6xl mx-60 mt-20">Your Week</h1>
                <Week />
            </div>

        </>
    )
}
