import Navbar from "@/components/Navbar";
import styles from './Employer.module.css'

const times = ["8:00am", "9:00am","10:00am", "11:00am","12:00am", "1:00pm","2:00pm","3:00pm","4:00pm","5:00pm"]

export default function EmployerHome() {
    return (
        <div className="font-inter">
            <Navbar/>

            <main className="mx-64">
                <p className="text-3xl font-medium pl-4">Today</p>

                <div className="w-full relative">
                    <div className="w-full flex flex-col">
                        {times.map((time, idx) => {
                            return <div className="flex flex-row w-full" key={idx}>
                                    <p className="w-20 ">{time}</p>
                                    <div className={styles.calendersection} />
                                </div>
                        })}
                    </div>
                </div>
            </main>
        </div>
    )
}
