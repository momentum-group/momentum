
import Navbar from "@/components/Navbar"
import Link from "next/link"

export default function DangerZone() {

    return (
        <>
            <Navbar />
            <div className="flex mt-20 mx-44">
                <div className="flex flex-col font-semibold text-3xl gap-6 w-fit align-right items-end mt-6">
                    <Link href="/employee/settings/profile" className="w-fit hover:bg-primary hover:text-white px-5 py-2 rounded-2xl duration-150">
                        Profile
                    </Link>
                    <Link href="/employee/settings/availability" className="w-fit hover:bg-primary hover:text-white px-5 py-2 rounded-2xl duration-150">
                        Availability
                    </Link>
                    <Link href="/employee/settings/appearance" className="w-fit hover:bg-primary hover:text-white px-5 py-2 rounded-2xl duration-150">
                        Appearance
                    </Link>
                    <Link href="/employee/settings/dangerzone" className="w-fit text-red-600 mr-2 mt-80 hover:scale-110 hover:text-red-500 duration-150">
                        Danger Zone
                    </Link>
                </div>
                <div className="w-[1px] h-[600px] border border-black ml-10 mr-16" />
                <button className="w-fit h-fit bg-red-500 text-white py-2 px-6 text-xl rounded-2xl my-10">
                    Obliterate account
                </button>
            </div>
        </>
    )
}
