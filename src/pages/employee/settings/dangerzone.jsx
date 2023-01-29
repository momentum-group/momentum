
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
                <div className="flex flex-col my-10 gap-10">
                    <Link href="/">
                        <p className="text-red-500 text-xl font-bold ">Log out</p>
                    </Link>
                    <button className="w-fit h-fit bg-red-500 text-white py-2 px-6 text-xl rounded-2xl">
                        Delete account
                    </button>
                </div>
            </div>
        </>
    )
}
