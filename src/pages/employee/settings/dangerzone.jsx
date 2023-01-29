
import Navbar from "@/components/Navbar"
import Link from "next/link"
import Navigation from "@/components/Employee/Navigation"

export default function DangerZone() {

    return (
        <>
            <Navbar />
            <div className="flex mt-20 mx-44">
                <Navigation />
                <div className="w-[1px] h-[600px] border border-black ml-10 mr-16" />
                <button className="w-fit h-fit bg-red-500 text-white py-2 px-6 text-xl rounded-2xl my-10">
                    Delete account
                </button>
            </div>
        </>
    )
}
