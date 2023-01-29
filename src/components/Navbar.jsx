import Link from "next/link";

export default function Navbar(props) {

    if (props.type == null) {
        return (
            <div className="w-full flex flex-row justify-between items-center bg-primary p-4">
                <Link href="/">
                    <p className="text-white text-2xl font-bold font-unbounded">Momentum</p>
                </Link>
                <Link href="/profile">
                    <img src="drlee.png" className="w-[2.5rem] h-[2.5rem] rounded-full" />
                </Link>
            </div>
        )
    } else if (props.type == "register") {
        return (
            <div className="w-full flex flex-row justify-center items-center p-4 gap-20">
                <Link href="/">
                    <p className="uppercase text-black font-bold font-unbounded relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300">about</p>
                </Link>
                <Link href="/">
                    <p className="uppercase text-black font-bold font-unbounded relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300">careers</p>
                </Link>
                <Link href="/">
                    <p className="font-unbounded text-7xl uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-mango">Momentum</p>
                </Link>
                <Link href="/register">
                    <p className="uppercase text-black font-bold font-unbounded relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-black
              before:scale-x-100 before:origin-top-left
              before:transition before:ease-in-out before:duration-300">register</p>
                </Link>
                <Link href="/login">
                    <p className="uppercase text-black font-bold font-unbounded relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300">login</p>
                </Link>
            </div>
        )
    } else if (props.type == 'landing') {
        return (
            <div className="w-full flex flex-row justify-center items-center p-4 gap-20">
                <Link href="/">
                    <p className="uppercase text-black font-bold font-unbounded relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300">about</p>
                </Link>
                <Link href="/">
                    <p className="uppercase text-black font-bold font-unbounded relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300">careers</p>
                </Link>
                <Link href="/">
                    <p className="font-unbounded text-7xl uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-mango">Momentum</p>
                </Link>
                <Link href="/register">
                    <p className="uppercase text-black font-bold font-unbounded relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300">register</p>
                </Link>
                <Link href="/login">
                    <p className="uppercase text-black font-bold font-unbounded relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300">login</p>
                </Link>
            </div>
        )
    } else if (props.type == "login") {
        return (
            <div className="w-full flex flex-row justify-center items-center p-4 gap-20">
                <Link href="/">
                    <p className="uppercase text-black font-bold font-unbounded relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300">about</p>
                </Link>
                <Link href="/">
                    <p className="uppercase text-black font-bold font-unbounded relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300">careers</p>
                </Link>
                <Link href="/">
                    <p className="font-unbounded text-7xl uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-mango">Momentum</p>
                </Link>
                <Link href="/register">
                    <p className="uppercase text-black font-bold font-unbounded relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300">register</p>
                </Link>
                <Link href="/login">
                    <p className="uppercase text-black font-bold font-unbounded relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-black
              before:scale-x-100 before:origin-top-left
              before:transition before:ease-in-out before:duration-300">login</p>
                </Link>
            </div>
        )
    } 
}
