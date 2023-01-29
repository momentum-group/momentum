
import Navbar from "@/components/Navbar"
import Link from "next/link"

export default function Appearance() {

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
                <form className="flex flex-col text-xl my-10 items-start gap-2">
                    <p className="self-start mb-4 text-2xl">
                        Select a color scheme!
                    </p>
                    <div>
                        <input type="radio" value="light" name="theme" className="accent-primary mr-2" />
                        <label className="mr-3">Light</label>
                    </div>
                    <div>
                        <input type="radio" value="dark" name="theme" className="accent-primary mr-2" />
                        <label className="mr-3">Dark</label>
                    </div>
                    <div>
                        <input type="radio" value="mango" name="theme" className="accent-primary mr-2" />
                        <label className="mr-3">Mango</label>
                    </div>
                    <div>
                        <input type="radio" value="darkula" name="theme" className="accent-primary mr-2" />
                        <label className="mr-3">Drakula</label>
                    </div>
                    <div>
                        <input type="radio" value="monokai" name="theme" className="accent-primary mr-2" />
                        <label className="mr-3">Monokai</label>
                    </div>
                    <button type="submit" className="bg-primary text-white py-2 px-6 mt-4 rounded-2xl">
                        Save
                    </button>
                </form>
            </div>
        </>
    )
}
