import Link from "next/link"

export default function Navigation() {
    return (
        <div className="flex flex-col font-semibold text-3xl gap-6 w-fit align-right items-end mt-6">
            <Link href="/employee" className="w-fit hover:text-primary mx-5 my-2 duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                </svg>
            </Link>
            <Link href="/employee/settings/profile" className="w-fit hover:bg-primary hover:text-white px-5 py-2 rounded-2xl duration-150">
                Profile
            </Link>
            <Link href="/employee/settings/availability" className="w-fit hover:bg-primary hover:text-white px-5 py-2 rounded-2xl duration-150">
                Availability
            </Link>
            <Link href="/employee/settings/appearance" className="w-fit hover:bg-primary hover:text-white px-5 py-2 rounded-2xl duration-150">
                Appearance
            </Link>
            <Link href="/employee/settings/dangerzone" className="w-fit text-red-600 mr-2 mt-60 hover:scale-110 hover:text-red-500 duration-150">
                Danger Zone
            </Link>
        </div>
    )
}
