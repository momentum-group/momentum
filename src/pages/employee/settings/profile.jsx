
import Navbar from "@/components/Navbar"
import Link from "next/link"

export default function Profile() {

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
                <form className="flex flex-col text-xl my-10 items-end gap-2">
                    <div>
                        <label className="mr-3">Name</label>
                        <input type="text" name="name" placeholder="John Doe" className="border-2 p-2" />
                    </div>
                    <div>
                        <label className="mr-3">Email</label>
                        <input type="text" name="email" placeholder="johndoe@gmail.com" className="border-2 p-2" />
                    </div>
                    <div>
                        <label className="mr-3">Phone #</label>
                        <input type="text" name="cell" placeholder="(123) 456-7890" className="border-2 p-2" />
                    </div>
                    <button type="submit" className="bg-primary text-white py-2 px-6 mt-2 rounded-2xl">
                        Save
                    </button>
                </form>
            </div>
        </>
    )
}
