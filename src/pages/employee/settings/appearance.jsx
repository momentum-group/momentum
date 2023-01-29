
import Navbar from "@/components/Navbar"
import Link from "next/link"
import Navigation from "@/components/Employee/Navigation"

export default function Appearance() {

    return (
        <>
            <Navbar />
            <div className="flex mt-20 mx-44">
                <Navigation />
                <div className="w-[1px] h-[600px] border border-black ml-10 mr-16" />
                <form className="flex flex-col text-xl my-10 items-start gap-2">
                    <span className="self-start mb-4 text-2xl">
                        Select a color scheme!
                    </span>
                    <div>
                        <input type="radio" value="light" id="light" name="theme" className="accent-primary mr-2" />
                        <label for="light" className="mr-3">Light</label>
                    </div>
                    <div>
                        <input type="radio" value="dark" id="dark" name="theme" className="accent-primary mr-2" />
                        <label for="dark" className="mr-3">Dark</label>
                    </div>
                    <div>
                        <input type="radio" value="mango" id="mango" name="theme" className="accent-primary mr-2" />
                        <label for="mango" className="mr-3">Mango</label>
                    </div>
                    <div>
                        <input type="radio" value="drakula" id="drakula" name="theme" className="accent-primary mr-2" />
                        <label for="drakula" className="mr-3">Drakula</label>
                    </div>
                    <div>
                        <input type="radio" value="monokai" id="monokai" name="theme" className="accent-primary mr-2" />
                        <label for="monokai" className="mr-3">Monokai</label>
                    </div>
                    <button type="submit" className="bg-primary text-white py-2 px-6 mt-4 rounded-2xl">
                        Save
                    </button>
                </form>
            </div>
        </>
    )
}
