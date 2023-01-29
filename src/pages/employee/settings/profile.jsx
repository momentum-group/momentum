
import Navbar from "@/components/Navbar"
import Navigation from "@/components/Employee/Navigation"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Profile() {

    const router = useRouter()

    return (
        <>
            <Navbar />
            <div className="flex mt-20 mx-44">
                <Navigation email={router.query.email} />
                <div className="w-[1px] h-[600px] border border-black ml-10 mr-16" />
                <form className="flex flex-col text-xl my-10 items-end gap-2">
                    <div>
                        <label className="mr-3">Name</label>
                        <input type="text" name="name" placeholder="Nicholas Ly" className="border-2 p-2" />
                    </div>
                    <div>
                        <label className="mr-3">Email</label>
                        <input type="text" name="email" placeholder="lynichol@msu.edu" className="border-2 p-2" />
                    </div>
                    <div>
                        <label className="mr-3">Phone #</label>
                        <input type="text" name="cell" placeholder="(630) 785-0186" className="border-2 p-2" />
                    </div>
                    <button type="submit" className="bg-primary text-white py-2 px-6 mt-2 rounded-2xl">
                        Save
                    </button>
                </form>
            </div>
        </>
    )
}
