import Link from "next/link";

export default function Navbar() {

    return (
        <div className="w-full flex flex-row justify-between items-center bg-primary p-4">
            <Link href="/">
                <p className="text-white text-2xl font-bold">Momentum</p>
            </Link>
            <Link href="/profile">
                <img src="drlee.png" className="w-[2.5rem] h-[2.5rem] rounded-full" />
            </Link>
        </div>
    )

}