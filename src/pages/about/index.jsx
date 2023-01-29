
import Navbar from "@/components/Navbar"

export default function About() {
    return (
        <div className="h-screen overflow-hidden">

            <Navbar type="landing" />

            <div className="absolute flex flex-col text-2xl font-inter font-medium z-20">
                <p className="mt-24 mx-72">
                    Momentum is a completely open source, professional scheduling software. Powered by a powerful cloud computed mixed-integer linear programming algorithm, Momentum is robust and lightning fast.
                </p>
                <p className="mt-6 mx-72">
                    Why did we choose to be open source? Nearly all professional scheduling software is gatekept by large paywalls and subscription based payment plans. Small and large businesses alike lose thousands of dollars to the common per-user-per-month payment scheme, but Momentum breaks this pattern and aims to help businesses of any size, anywhere.
                </p>
                <p className="mt-6 mx-72">
                    With a focus on user experience and usability, Momentum aims to not only save businesses money, but also provide an environment where developers of all skill levels can help their community.
                </p>
            </div>

            <div className="absolute w-screen h-screen z-10">
                <div className="z-0 relative w-full h-full">
                    <div className="bg-mango opacity-20 w-[300px] h-[200px] absolute right-[400px] top-[250px] rounded-xl" />
                    <div className="bg-red-300 opacity-20 w-[350px] h-[220px] absolute right-[500px] top-[200px] rounded-xl" />
                    <div className="bg-orange-500 opacity-20 w-[150px] h-[270px] absolute left-[300px] top-[50px] rounded-xl" />
                    <div className="bg-red-200 opacity-75 w-[250px] h-[220px] absolute right-[100px] top-[110px] rounded-xl" />
                    <div className="bg-mango opacity-50 w-[250px] h-[250px] rounded-full absolute left-[100px] top-[180px]" />
                    <div className="bg-rose-300 opacity-40 w-[250px] h-[250px] rounded-full absolute left-[350px] top-[400px]" />
                    <div className="bg-orange-500 opacity-20 w-[150px] h-[120px] absolute right-[100px] top-[450px] rounded-xl" />
                    <div className="bg-mango opacity-30 w-[150px] h-[150px] absolute right-[200px] top-[500px] rounded-full" />
                    <div className="bg-rose-600 opacity-10 w-[150px] h-[150px] absolute left-[550px] top-[30px] rounded-full" />
                </div>
            </div>
        </div>
    )
}
