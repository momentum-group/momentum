import Navbar from "@/components/Navbar"
import Navigation from "@/components/Employee/Navigation"
import { useState } from "react"
import clientPromise from "@/middleware/database";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
    try {
        const client = await clientPromise;
        const query = context.query;
        const db = client.db("org_companyName")
        const user = await db.collection("users").find({email: {$eq: query.email}}).toArray();

        return {
            props: { isConnected: true, availability: user[0].availability},
        } 
    } catch (e) {
        console.error(e)
        return {
            props: { isConnected: false },
        }
    }
}

export default function Availability({isConnected, availability}) {

    const router = useRouter();


    const [sundayStart, setSundayStart] = useState(availability.slice(0, 48).indexOf(1))
    const [sundayEnd, setSundayEnd] = useState(availability.slice(0, 48).lastIndexOf(1))

    const [mondayStart, setMondayStart] = useState(availability.slice(48, 96).indexOf(1))
    const [mondayEnd, setMondayEnd] = useState(availability.slice(48, 96).lastIndexOf(1))

    const [tuesdayStart, setTuesdayStart] = useState(availability.slice(96, 144).indexOf(1))
    const [tuesdayEnd, setTuesdayEnd] = useState(availability.slice(96, 144).lastIndexOf(1))

    const [wedStart, setWedStart] = useState(availability.slice(144, 192).indexOf(1))
    const [wedEnd, setWedEnd] = useState(availability.slice(144, 192).lastIndexOf(1))

    const [thurStart, setThurStart] = useState(availability.slice(192, 240).indexOf(1))
    const [thurEnd, setThurEnd] = useState(availability.slice(192, 240).lastIndexOf(1))

    const [friStart, setFriStart] = useState(availability.slice(240, 288).indexOf(1))
    const [friEnd, setFriEnd] = useState(availability.slice(240, 288).lastIndexOf(1))

    const [satStart, setSatStart] = useState(availability.slice(288, 336).indexOf(1))
    const [satEnd, setSatEnd] = useState(availability.slice(288, 336).lastIndexOf(1))


    const handleSave = async () => {
        const sunday = new Array(48).fill(0)
        sunday.fill(1, sundayStart, sundayEnd)
        
        const mon = new Array(48).fill(0)
        mon.fill(1, mondayStart, mondayEnd)

        const tues = new Array(48).fill(0)
        tues.fill(1, tuesdayStart, tuesdayEnd)

        const wed = new Array(48).fill(0)
        wed.fill(1, wedStart, wedEnd)

        const thu = new Array(48).fill(0)
        thu.fill(1, thurStart, thurEnd)

        const fri = new Array(48).fill(0)
        fri.fill(1, friStart, friEnd)

        const sat = new Array(48).fill(0)
        sat.fill(1, satStart, satEnd)
        
        const availability = sunday.concat(mon, tues, wed, thu, fri, sat)

        const response = await fetch("/api/saveAvailability", {
            method: "POST",
            body: JSON.stringify({email: router.query.email, availability: availability}),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        if (data.status == 200) {
        } else {
        }

    }


    return (
        <>
            <Navbar />
            <div className="flex mt-20 mx-44">
                
                <Navigation />

                <div className="w-[1px] h-[600px] border border-black ml-10 mr-16" />

                <div className="mt-10">
                    <span className="text-3xl font-semibold">
                        February 5, 2023 - February 11, 2023
                    </span>
                    <form className="grid grid-cols-4 text-left gap-y-6 w-[700px] my-10">

                        <div className="flex flex-col text-xl gap-2 items-start">
                            <label className="mr-3 text-2xl font-medium">
                                Sunday
                            </label>
                            <div>
                                <span>Start Time: </span>
                                <select id="availability" name="sunday_start" value={sundayStart} onChange={(e) => setSundayStart(e.target.value)} className="bg-white border border-neutral-400 hover:border-neutral-500 px-4 py-2 pr-4 rounded shadow leading-tight accent-primary">
                                    <option value="0">12:00 AM</option>
                                    <option value="1">12:30 AM</option>
                                    <option value="2">1:00 AM</option>
                                    <option value="3">1:30 AM</option>
                                    <option value="4">2:00 AM</option>
                                    <option value="5">2:30 AM</option>
                                    <option value="6">3:00 AM</option>
                                    <option value="7">3:30 AM</option>
                                    <option value="8">4:00 AM</option>
                                    <option value="9">4:30 AM</option>
                                    <option value="10">5:00 AM</option>
                                    <option value="11">5:30 AM</option>
                                    <option value="12">6:00 AM</option>
                                    <option value="13">6:30 AM</option>
                                    <option value="14">7:00 AM</option>
                                    <option value="15">7:30 AM</option>
                                    <option value="16">8:00 AM</option>
                                    <option value="17">8:30 AM</option>
                                    <option value="18" selected>9:00 AM</option>
                                    <option value="19">9:30 AM</option>
                                    <option value="20">10:00 AM</option>
                                    <option value="21">10:30 AM</option>
                                    <option value="22">11:00 AM</option>
                                    <option value="23">11:30 AM</option>
                                    <option value="24">12:00 PM</option>
                                    <option value="25">12:30 PM</option>
                                    <option value="26">1:00 PM</option>
                                    <option value="27">1:30 PM</option>
                                    <option value="28">2:00 PM</option>
                                    <option value="29">2:30 PM</option>
                                    <option value="30">3:00 PM</option>
                                    <option value="31">3:30 PM</option>
                                    <option value="32">4:00 PM</option>
                                    <option value="33">4:30 PM</option>
                                    <option value="34">5:00 PM</option>
                                    <option value="35">5:30 PM</option>
                                    <option value="36">6:00 PM</option>
                                    <option value="37">6:30 PM</option>
                                    <option value="38">7:00 PM</option>
                                    <option value="39">7:30 PM</option>
                                    <option value="40">8:00 PM</option>
                                    <option value="41">8:30 PM</option>
                                    <option value="42">9:00 PM</option>
                                    <option value="43">9:30 PM</option>
                                    <option value="44">10:00 PM</option>
                                    <option value="45">10:30 PM</option>
                                    <option value="46">11:00 PM</option>
                                    <option value="47">11:30 PM</option>
                                </select>
                            </div>
                            <div>
                                <span>End Time: </span>
                                <select id="availability" name="sunday_end" value={sundayEnd} onChange={(e) => setSundayEnd(e.target.value)} className="bg-white border border-neutral-400 hover:border-neutral-500 px-4 py-2 pr-4 rounded shadow leading-tight accent-primary">
                                    <option value="0">12:00 AM</option>
                                    <option value="1">12:30 AM</option>
                                    <option value="2">1:00 AM</option>
                                    <option value="3">1:30 AM</option>
                                    <option value="4">2:00 AM</option>
                                    <option value="5">2:30 AM</option>
                                    <option value="6">3:00 AM</option>
                                    <option value="7">3:30 AM</option>
                                    <option value="8">4:00 AM</option>
                                    <option value="9">4:30 AM</option>
                                    <option value="10">5:00 AM</option>
                                    <option value="11">5:30 AM</option>
                                    <option value="12">6:00 AM</option>
                                    <option value="13">6:30 AM</option>
                                    <option value="14">7:00 AM</option>
                                    <option value="15">7:30 AM</option>
                                    <option value="16">8:00 AM</option>
                                    <option value="17">8:30 AM</option>
                                    <option value="18">9:00 AM</option>
                                    <option value="19">9:30 AM</option>
                                    <option value="20">10:00 AM</option>
                                    <option value="21">10:30 AM</option>
                                    <option value="22">11:00 AM</option>
                                    <option value="23">11:30 AM</option>
                                    <option value="24">12:00 PM</option>
                                    <option value="25">12:30 PM</option>
                                    <option value="26">1:00 PM</option>
                                    <option value="27">1:30 PM</option>
                                    <option value="28">2:00 PM</option>
                                    <option value="29">2:30 PM</option>
                                    <option value="30">3:00 PM</option>
                                    <option value="31">3:30 PM</option>
                                    <option value="32">4:00 PM</option>
                                    <option value="33">4:30 PM</option>
                                    <option value="34" selected>5:00 PM</option>
                                    <option value="35">5:30 PM</option>
                                    <option value="36">6:00 PM</option>
                                    <option value="37">6:30 PM</option>
                                    <option value="38">7:00 PM</option>
                                    <option value="39">7:30 PM</option>
                                    <option value="40">8:00 PM</option>
                                    <option value="41">8:30 PM</option>
                                    <option value="42">9:00 PM</option>
                                    <option value="43">9:30 PM</option>
                                    <option value="44">10:00 PM</option>
                                    <option value="45">10:30 PM</option>
                                    <option value="46">11:00 PM</option>
                                    <option value="47">11:30 PM</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col text-xl gap-2 items-start">
                            <label className="mr-3 text-2xl font-medium">
                                Monday
                            </label>
                            <div>
                                <span>Start Time: </span>
                                <select id="availability" name="monday_start" value={mondayStart} onChange={(e) => setMondayStart(e.target.value)} className="bg-white border border-neutral-400 hover:border-neutral-500 px-4 py-2 pr-4 rounded shadow leading-tight accent-primary">
                                    <option value="0">12:00 AM</option>
                                    <option value="1">12:30 AM</option>
                                    <option value="2">1:00 AM</option>
                                    <option value="3">1:30 AM</option>
                                    <option value="4">2:00 AM</option>
                                    <option value="5">2:30 AM</option>
                                    <option value="6">3:00 AM</option>
                                    <option value="7">3:30 AM</option>
                                    <option value="8">4:00 AM</option>
                                    <option value="9">4:30 AM</option>
                                    <option value="10">5:00 AM</option>
                                    <option value="11">5:30 AM</option>
                                    <option value="12">6:00 AM</option>
                                    <option value="13">6:30 AM</option>
                                    <option value="14">7:00 AM</option>
                                    <option value="15">7:30 AM</option>
                                    <option value="16">8:00 AM</option>
                                    <option value="17">8:30 AM</option>
                                    <option value="18" selected>9:00 AM</option>
                                    <option value="19">9:30 AM</option>
                                    <option value="20">10:00 AM</option>
                                    <option value="21">10:30 AM</option>
                                    <option value="22">11:00 AM</option>
                                    <option value="23">11:30 AM</option>
                                    <option value="24">12:00 PM</option>
                                    <option value="25">12:30 PM</option>
                                    <option value="26">1:00 PM</option>
                                    <option value="27">1:30 PM</option>
                                    <option value="28">2:00 PM</option>
                                    <option value="29">2:30 PM</option>
                                    <option value="30">3:00 PM</option>
                                    <option value="31">3:30 PM</option>
                                    <option value="32">4:00 PM</option>
                                    <option value="33">4:30 PM</option>
                                    <option value="34">5:00 PM</option>
                                    <option value="35">5:30 PM</option>
                                    <option value="36">6:00 PM</option>
                                    <option value="37">6:30 PM</option>
                                    <option value="38">7:00 PM</option>
                                    <option value="39">7:30 PM</option>
                                    <option value="40">8:00 PM</option>
                                    <option value="41">8:30 PM</option>
                                    <option value="42">9:00 PM</option>
                                    <option value="43">9:30 PM</option>
                                    <option value="44">10:00 PM</option>
                                    <option value="45">10:30 PM</option>
                                    <option value="46">11:00 PM</option>
                                    <option value="47">11:30 PM</option>
                                </select>
                            </div>
                            <div>
                                <span>End Time: </span>
                                <select id="availability" name="monday_end" value={mondayEnd} onChange={(e) => setMondayEnd(e.target.value)} className="bg-white border border-neutral-400 hover:border-neutral-500 px-4 py-2 pr-4 rounded shadow leading-tight accent-primary">
                                    <option value="0">12:00 AM</option>
                                    <option value="1">12:30 AM</option>
                                    <option value="2">1:00 AM</option>
                                    <option value="3">1:30 AM</option>
                                    <option value="4">2:00 AM</option>
                                    <option value="5">2:30 AM</option>
                                    <option value="6">3:00 AM</option>
                                    <option value="7">3:30 AM</option>
                                    <option value="8">4:00 AM</option>
                                    <option value="9">4:30 AM</option>
                                    <option value="10">5:00 AM</option>
                                    <option value="11">5:30 AM</option>
                                    <option value="12">6:00 AM</option>
                                    <option value="13">6:30 AM</option>
                                    <option value="14">7:00 AM</option>
                                    <option value="15">7:30 AM</option>
                                    <option value="16">8:00 AM</option>
                                    <option value="17">8:30 AM</option>
                                    <option value="18">9:00 AM</option>
                                    <option value="19">9:30 AM</option>
                                    <option value="20">10:00 AM</option>
                                    <option value="21">10:30 AM</option>
                                    <option value="22">11:00 AM</option>
                                    <option value="23">11:30 AM</option>
                                    <option value="24">12:00 PM</option>
                                    <option value="25">12:30 PM</option>
                                    <option value="26">1:00 PM</option>
                                    <option value="27">1:30 PM</option>
                                    <option value="28">2:00 PM</option>
                                    <option value="29">2:30 PM</option>
                                    <option value="30">3:00 PM</option>
                                    <option value="31">3:30 PM</option>
                                    <option value="32">4:00 PM</option>
                                    <option value="33">4:30 PM</option>
                                    <option value="34" selected>5:00 PM</option>
                                    <option value="35">5:30 PM</option>
                                    <option value="36">6:00 PM</option>
                                    <option value="37">6:30 PM</option>
                                    <option value="38">7:00 PM</option>
                                    <option value="39">7:30 PM</option>
                                    <option value="40">8:00 PM</option>
                                    <option value="41">8:30 PM</option>
                                    <option value="42">9:00 PM</option>
                                    <option value="43">9:30 PM</option>
                                    <option value="44">10:00 PM</option>
                                    <option value="45">10:30 PM</option>
                                    <option value="46">11:00 PM</option>
                                    <option value="47">11:30 PM</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col text-xl gap-2 items-start">
                            <label className="mr-3 text-2xl font-medium">
                                Tuesday
                            </label>
                            <div>
                                <span>Start Time: </span>
                                <select id="availability" name="tuesday_start" value={tuesdayStart} onChange={(e) => setTuesdayStart(e.target.value)} className="bg-white border border-neutral-400 hover:border-neutral-500 px-4 py-2 pr-4 rounded shadow leading-tight accent-primary">
                                    <option value="0">12:00 AM</option>
                                    <option value="1">12:30 AM</option>
                                    <option value="2">1:00 AM</option>
                                    <option value="3">1:30 AM</option>
                                    <option value="4">2:00 AM</option>
                                    <option value="5">2:30 AM</option>
                                    <option value="6">3:00 AM</option>
                                    <option value="7">3:30 AM</option>
                                    <option value="8">4:00 AM</option>
                                    <option value="9">4:30 AM</option>
                                    <option value="10">5:00 AM</option>
                                    <option value="11">5:30 AM</option>
                                    <option value="12">6:00 AM</option>
                                    <option value="13">6:30 AM</option>
                                    <option value="14">7:00 AM</option>
                                    <option value="15">7:30 AM</option>
                                    <option value="16">8:00 AM</option>
                                    <option value="17">8:30 AM</option>
                                    <option value="18" selected>9:00 AM</option>
                                    <option value="19">9:30 AM</option>
                                    <option value="20">10:00 AM</option>
                                    <option value="21">10:30 AM</option>
                                    <option value="22">11:00 AM</option>
                                    <option value="23">11:30 AM</option>
                                    <option value="24">12:00 PM</option>
                                    <option value="25">12:30 PM</option>
                                    <option value="26">1:00 PM</option>
                                    <option value="27">1:30 PM</option>
                                    <option value="28">2:00 PM</option>
                                    <option value="29">2:30 PM</option>
                                    <option value="30">3:00 PM</option>
                                    <option value="31">3:30 PM</option>
                                    <option value="32">4:00 PM</option>
                                    <option value="33">4:30 PM</option>
                                    <option value="34">5:00 PM</option>
                                    <option value="35">5:30 PM</option>
                                    <option value="36">6:00 PM</option>
                                    <option value="37">6:30 PM</option>
                                    <option value="38">7:00 PM</option>
                                    <option value="39">7:30 PM</option>
                                    <option value="40">8:00 PM</option>
                                    <option value="41">8:30 PM</option>
                                    <option value="42">9:00 PM</option>
                                    <option value="43">9:30 PM</option>
                                    <option value="44">10:00 PM</option>
                                    <option value="45">10:30 PM</option>
                                    <option value="46">11:00 PM</option>
                                    <option value="47">11:30 PM</option>
                                </select>
                            </div>
                            <div>
                                <span>End Time: </span>
                                <select id="availability" name="tuesday_end" value={tuesdayEnd} onChange={(e) => setTuesdayEnd(e.target.value)} className="bg-white border border-neutral-400 hover:border-neutral-500 px-4 py-2 pr-4 rounded shadow leading-tight accent-primary">
                                    <option value="0">12:00 AM</option>
                                    <option value="1">12:30 AM</option>
                                    <option value="2">1:00 AM</option>
                                    <option value="3">1:30 AM</option>
                                    <option value="4">2:00 AM</option>
                                    <option value="5">2:30 AM</option>
                                    <option value="6">3:00 AM</option>
                                    <option value="7">3:30 AM</option>
                                    <option value="8">4:00 AM</option>
                                    <option value="9">4:30 AM</option>
                                    <option value="10">5:00 AM</option>
                                    <option value="11">5:30 AM</option>
                                    <option value="12">6:00 AM</option>
                                    <option value="13">6:30 AM</option>
                                    <option value="14">7:00 AM</option>
                                    <option value="15">7:30 AM</option>
                                    <option value="16">8:00 AM</option>
                                    <option value="17">8:30 AM</option>
                                    <option value="18">9:00 AM</option>
                                    <option value="19">9:30 AM</option>
                                    <option value="20">10:00 AM</option>
                                    <option value="21">10:30 AM</option>
                                    <option value="22">11:00 AM</option>
                                    <option value="23">11:30 AM</option>
                                    <option value="24">12:00 PM</option>
                                    <option value="25">12:30 PM</option>
                                    <option value="26">1:00 PM</option>
                                    <option value="27">1:30 PM</option>
                                    <option value="28">2:00 PM</option>
                                    <option value="29">2:30 PM</option>
                                    <option value="30">3:00 PM</option>
                                    <option value="31">3:30 PM</option>
                                    <option value="32">4:00 PM</option>
                                    <option value="33">4:30 PM</option>
                                    <option value="34" selected>5:00 PM</option>
                                    <option value="35">5:30 PM</option>
                                    <option value="36">6:00 PM</option>
                                    <option value="37">6:30 PM</option>
                                    <option value="38">7:00 PM</option>
                                    <option value="39">7:30 PM</option>
                                    <option value="40">8:00 PM</option>
                                    <option value="41">8:30 PM</option>
                                    <option value="42">9:00 PM</option>
                                    <option value="43">9:30 PM</option>
                                    <option value="44">10:00 PM</option>
                                    <option value="45">10:30 PM</option>
                                    <option value="46">11:00 PM</option>
                                    <option value="47">11:30 PM</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col text-xl gap-2 items-start">
                            <label className="mr-3 text-2xl font-medium">
                                Wednesday
                            </label>
                            <div>
                                <span>Start Time: </span>
                                <select id="availability" name="wednesday_start" value={wedStart} onChange={(e) => setWedStart(e.target.value)} className="bg-white border border-neutral-400 hover:border-neutral-500 px-4 py-2 pr-4 rounded shadow leading-tight accent-primary">
                                    <option value="0">12:00 AM</option>
                                    <option value="1">12:30 AM</option>
                                    <option value="2">1:00 AM</option>
                                    <option value="3">1:30 AM</option>
                                    <option value="4">2:00 AM</option>
                                    <option value="5">2:30 AM</option>
                                    <option value="6">3:00 AM</option>
                                    <option value="7">3:30 AM</option>
                                    <option value="8">4:00 AM</option>
                                    <option value="9">4:30 AM</option>
                                    <option value="10">5:00 AM</option>
                                    <option value="11">5:30 AM</option>
                                    <option value="12">6:00 AM</option>
                                    <option value="13">6:30 AM</option>
                                    <option value="14">7:00 AM</option>
                                    <option value="15">7:30 AM</option>
                                    <option value="16">8:00 AM</option>
                                    <option value="17">8:30 AM</option>
                                    <option value="18" selected>9:00 AM</option>
                                    <option value="19">9:30 AM</option>
                                    <option value="20">10:00 AM</option>
                                    <option value="21">10:30 AM</option>
                                    <option value="22">11:00 AM</option>
                                    <option value="23">11:30 AM</option>
                                    <option value="24">12:00 PM</option>
                                    <option value="25">12:30 PM</option>
                                    <option value="26">1:00 PM</option>
                                    <option value="27">1:30 PM</option>
                                    <option value="28">2:00 PM</option>
                                    <option value="29">2:30 PM</option>
                                    <option value="30">3:00 PM</option>
                                    <option value="31">3:30 PM</option>
                                    <option value="32">4:00 PM</option>
                                    <option value="33">4:30 PM</option>
                                    <option value="34">5:00 PM</option>
                                    <option value="35">5:30 PM</option>
                                    <option value="36">6:00 PM</option>
                                    <option value="37">6:30 PM</option>
                                    <option value="38">7:00 PM</option>
                                    <option value="39">7:30 PM</option>
                                    <option value="40">8:00 PM</option>
                                    <option value="41">8:30 PM</option>
                                    <option value="42">9:00 PM</option>
                                    <option value="43">9:30 PM</option>
                                    <option value="44">10:00 PM</option>
                                    <option value="45">10:30 PM</option>
                                    <option value="46">11:00 PM</option>
                                    <option value="47">11:30 PM</option>
                                </select>
                            </div>
                            <div>
                                <span>End Time: </span>
                                <select id="availability" name="wednesday_end" value={wedEnd} onChange={(e) => setWedEnd(e.target.value)} className="bg-white border border-neutral-400 hover:border-neutral-500 px-4 py-2 pr-4 rounded shadow leading-tight accent-primary">
                                    <option value="0">12:00 AM</option>
                                    <option value="1">12:30 AM</option>
                                    <option value="2">1:00 AM</option>
                                    <option value="3">1:30 AM</option>
                                    <option value="4">2:00 AM</option>
                                    <option value="5">2:30 AM</option>
                                    <option value="6">3:00 AM</option>
                                    <option value="7">3:30 AM</option>
                                    <option value="8">4:00 AM</option>
                                    <option value="9">4:30 AM</option>
                                    <option value="10">5:00 AM</option>
                                    <option value="11">5:30 AM</option>
                                    <option value="12">6:00 AM</option>
                                    <option value="13">6:30 AM</option>
                                    <option value="14">7:00 AM</option>
                                    <option value="15">7:30 AM</option>
                                    <option value="16">8:00 AM</option>
                                    <option value="17">8:30 AM</option>
                                    <option value="18">9:00 AM</option>
                                    <option value="19">9:30 AM</option>
                                    <option value="20">10:00 AM</option>
                                    <option value="21">10:30 AM</option>
                                    <option value="22">11:00 AM</option>
                                    <option value="23">11:30 AM</option>
                                    <option value="24">12:00 PM</option>
                                    <option value="25">12:30 PM</option>
                                    <option value="26">1:00 PM</option>
                                    <option value="27">1:30 PM</option>
                                    <option value="28">2:00 PM</option>
                                    <option value="29">2:30 PM</option>
                                    <option value="30">3:00 PM</option>
                                    <option value="31">3:30 PM</option>
                                    <option value="32">4:00 PM</option>
                                    <option value="33">4:30 PM</option>
                                    <option value="34" selected>5:00 PM</option>
                                    <option value="35">5:30 PM</option>
                                    <option value="36">6:00 PM</option>
                                    <option value="37">6:30 PM</option>
                                    <option value="38">7:00 PM</option>
                                    <option value="39">7:30 PM</option>
                                    <option value="40">8:00 PM</option>
                                    <option value="41">8:30 PM</option>
                                    <option value="42">9:00 PM</option>
                                    <option value="43">9:30 PM</option>
                                    <option value="44">10:00 PM</option>
                                    <option value="45">10:30 PM</option>
                                    <option value="46">11:00 PM</option>
                                    <option value="47">11:30 PM</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col text-xl gap-2 items-start">
                            <label className="mr-3 text-2xl font-medium">
                                Thursday
                            </label>
                            <div>
                                <span>Start Time: </span>
                                <select id="availability" name="thursday_start" value={thurStart} onChange={(e) => setThurStart(e.target.value)} className="bg-white border border-neutral-400 hover:border-neutral-500 px-4 py-2 pr-4 rounded shadow leading-tight accent-primary">
                                    <option value="0">12:00 AM</option>
                                    <option value="1">12:30 AM</option>
                                    <option value="2">1:00 AM</option>
                                    <option value="3">1:30 AM</option>
                                    <option value="4">2:00 AM</option>
                                    <option value="5">2:30 AM</option>
                                    <option value="6">3:00 AM</option>
                                    <option value="7">3:30 AM</option>
                                    <option value="8">4:00 AM</option>
                                    <option value="9">4:30 AM</option>
                                    <option value="10">5:00 AM</option>
                                    <option value="11">5:30 AM</option>
                                    <option value="12">6:00 AM</option>
                                    <option value="13">6:30 AM</option>
                                    <option value="14">7:00 AM</option>
                                    <option value="15">7:30 AM</option>
                                    <option value="16">8:00 AM</option>
                                    <option value="17">8:30 AM</option>
                                    <option value="18" selected>9:00 AM</option>
                                    <option value="19">9:30 AM</option>
                                    <option value="20">10:00 AM</option>
                                    <option value="21">10:30 AM</option>
                                    <option value="22">11:00 AM</option>
                                    <option value="23">11:30 AM</option>
                                    <option value="24">12:00 PM</option>
                                    <option value="25">12:30 PM</option>
                                    <option value="26">1:00 PM</option>
                                    <option value="27">1:30 PM</option>
                                    <option value="28">2:00 PM</option>
                                    <option value="29">2:30 PM</option>
                                    <option value="30">3:00 PM</option>
                                    <option value="31">3:30 PM</option>
                                    <option value="32">4:00 PM</option>
                                    <option value="33">4:30 PM</option>
                                    <option value="34">5:00 PM</option>
                                    <option value="35">5:30 PM</option>
                                    <option value="36">6:00 PM</option>
                                    <option value="37">6:30 PM</option>
                                    <option value="38">7:00 PM</option>
                                    <option value="39">7:30 PM</option>
                                    <option value="40">8:00 PM</option>
                                    <option value="41">8:30 PM</option>
                                    <option value="42">9:00 PM</option>
                                    <option value="43">9:30 PM</option>
                                    <option value="44">10:00 PM</option>
                                    <option value="45">10:30 PM</option>
                                    <option value="46">11:00 PM</option>
                                    <option value="47">11:30 PM</option>
                                </select>
                            </div>
                            <div>
                                <span>End Time: </span>
                                <select id="availability" name="thursday_end" value={thurEnd} onChange={(e) => setThurEnd(e.target.value)} className="bg-white border border-neutral-400 hover:border-neutral-500 px-4 py-2 pr-4 rounded shadow leading-tight accent-primary">
                                    <option value="0">12:00 AM</option>
                                    <option value="1">12:30 AM</option>
                                    <option value="2">1:00 AM</option>
                                    <option value="3">1:30 AM</option>
                                    <option value="4">2:00 AM</option>
                                    <option value="5">2:30 AM</option>
                                    <option value="6">3:00 AM</option>
                                    <option value="7">3:30 AM</option>
                                    <option value="8">4:00 AM</option>
                                    <option value="9">4:30 AM</option>
                                    <option value="10">5:00 AM</option>
                                    <option value="11">5:30 AM</option>
                                    <option value="12">6:00 AM</option>
                                    <option value="13">6:30 AM</option>
                                    <option value="14">7:00 AM</option>
                                    <option value="15">7:30 AM</option>
                                    <option value="16">8:00 AM</option>
                                    <option value="17">8:30 AM</option>
                                    <option value="18">9:00 AM</option>
                                    <option value="19">9:30 AM</option>
                                    <option value="20">10:00 AM</option>
                                    <option value="21">10:30 AM</option>
                                    <option value="22">11:00 AM</option>
                                    <option value="23">11:30 AM</option>
                                    <option value="24">12:00 PM</option>
                                    <option value="25">12:30 PM</option>
                                    <option value="26">1:00 PM</option>
                                    <option value="27">1:30 PM</option>
                                    <option value="28">2:00 PM</option>
                                    <option value="29">2:30 PM</option>
                                    <option value="30">3:00 PM</option>
                                    <option value="31">3:30 PM</option>
                                    <option value="32">4:00 PM</option>
                                    <option value="33">4:30 PM</option>
                                    <option value="34" selected>5:00 PM</option>
                                    <option value="35">5:30 PM</option>
                                    <option value="36">6:00 PM</option>
                                    <option value="37">6:30 PM</option>
                                    <option value="38">7:00 PM</option>
                                    <option value="39">7:30 PM</option>
                                    <option value="40">8:00 PM</option>
                                    <option value="41">8:30 PM</option>
                                    <option value="42">9:00 PM</option>
                                    <option value="43">9:30 PM</option>
                                    <option value="44">10:00 PM</option>
                                    <option value="45">10:30 PM</option>
                                    <option value="46">11:00 PM</option>
                                    <option value="47">11:30 PM</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col text-xl gap-2 items-start">
                            <label className="mr-3 text-2xl font-medium">
                                Friday
                            </label>
                            <div>
                                <span>Start Time: </span>
                                <select id="availability" name="friday_start" value={friStart} onChange={(e) => setFriStart(e.target.value)} className="bg-white border border-neutral-400 hover:border-neutral-500 px-4 py-2 pr-4 rounded shadow leading-tight accent-primary">
                                    <option value="0">12:00 AM</option>
                                    <option value="1">12:30 AM</option>
                                    <option value="2">1:00 AM</option>
                                    <option value="3">1:30 AM</option>
                                    <option value="4">2:00 AM</option>
                                    <option value="5">2:30 AM</option>
                                    <option value="6">3:00 AM</option>
                                    <option value="7">3:30 AM</option>
                                    <option value="8">4:00 AM</option>
                                    <option value="9">4:30 AM</option>
                                    <option value="10">5:00 AM</option>
                                    <option value="11">5:30 AM</option>
                                    <option value="12">6:00 AM</option>
                                    <option value="13">6:30 AM</option>
                                    <option value="14">7:00 AM</option>
                                    <option value="15">7:30 AM</option>
                                    <option value="16">8:00 AM</option>
                                    <option value="17">8:30 AM</option>
                                    <option value="18" selected>9:00 AM</option>
                                    <option value="19">9:30 AM</option>
                                    <option value="20">10:00 AM</option>
                                    <option value="21">10:30 AM</option>
                                    <option value="22">11:00 AM</option>
                                    <option value="23">11:30 AM</option>
                                    <option value="24">12:00 PM</option>
                                    <option value="25">12:30 PM</option>
                                    <option value="26">1:00 PM</option>
                                    <option value="27">1:30 PM</option>
                                    <option value="28">2:00 PM</option>
                                    <option value="29">2:30 PM</option>
                                    <option value="30">3:00 PM</option>
                                    <option value="31">3:30 PM</option>
                                    <option value="32">4:00 PM</option>
                                    <option value="33">4:30 PM</option>
                                    <option value="34">5:00 PM</option>
                                    <option value="35">5:30 PM</option>
                                    <option value="36">6:00 PM</option>
                                    <option value="37">6:30 PM</option>
                                    <option value="38">7:00 PM</option>
                                    <option value="39">7:30 PM</option>
                                    <option value="40">8:00 PM</option>
                                    <option value="41">8:30 PM</option>
                                    <option value="42">9:00 PM</option>
                                    <option value="43">9:30 PM</option>
                                    <option value="44">10:00 PM</option>
                                    <option value="45">10:30 PM</option>
                                    <option value="46">11:00 PM</option>
                                    <option value="47">11:30 PM</option>
                                </select>
                            </div>
                            <div>
                                <span>End Time: </span>
                                <select id="availability" name="friday_end" value={friEnd} onChange={(e) => setFriEnd(e.target.value)} className="bg-white border border-neutral-400 hover:border-neutral-500 px-4 py-2 pr-4 rounded shadow leading-tight accent-primary">
                                    <option value="0">12:00 AM</option>
                                    <option value="1">12:30 AM</option>
                                    <option value="2">1:00 AM</option>
                                    <option value="3">1:30 AM</option>
                                    <option value="4">2:00 AM</option>
                                    <option value="5">2:30 AM</option>
                                    <option value="6">3:00 AM</option>
                                    <option value="7">3:30 AM</option>
                                    <option value="8">4:00 AM</option>
                                    <option value="9">4:30 AM</option>
                                    <option value="10">5:00 AM</option>
                                    <option value="11">5:30 AM</option>
                                    <option value="12">6:00 AM</option>
                                    <option value="13">6:30 AM</option>
                                    <option value="14">7:00 AM</option>
                                    <option value="15">7:30 AM</option>
                                    <option value="16">8:00 AM</option>
                                    <option value="17">8:30 AM</option>
                                    <option value="18">9:00 AM</option>
                                    <option value="19">9:30 AM</option>
                                    <option value="20">10:00 AM</option>
                                    <option value="21">10:30 AM</option>
                                    <option value="22">11:00 AM</option>
                                    <option value="23">11:30 AM</option>
                                    <option value="24">12:00 PM</option>
                                    <option value="25">12:30 PM</option>
                                    <option value="26">1:00 PM</option>
                                    <option value="27">1:30 PM</option>
                                    <option value="28">2:00 PM</option>
                                    <option value="29">2:30 PM</option>
                                    <option value="30">3:00 PM</option>
                                    <option value="31">3:30 PM</option>
                                    <option value="32">4:00 PM</option>
                                    <option value="33">4:30 PM</option>
                                    <option value="34" selected>5:00 PM</option>
                                    <option value="35">5:30 PM</option>
                                    <option value="36">6:00 PM</option>
                                    <option value="37">6:30 PM</option>
                                    <option value="38">7:00 PM</option>
                                    <option value="39">7:30 PM</option>
                                    <option value="40">8:00 PM</option>
                                    <option value="41">8:30 PM</option>
                                    <option value="42">9:00 PM</option>
                                    <option value="43">9:30 PM</option>
                                    <option value="44">10:00 PM</option>
                                    <option value="45">10:30 PM</option>
                                    <option value="46">11:00 PM</option>
                                    <option value="47">11:30 PM</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col text-xl gap-2 items-start">
                            <label className="mr-3 text-2xl font-medium">
                                Saturday
                            </label>
                            <div>
                                <span>Start Time: </span>
                                <select id="availability" name="saturday_start" value={satStart} onChange={(e) => setSatStart(e.target.value)} className="bg-white border border-neutral-400 hover:border-neutral-500 px-4 py-2 pr-4 rounded shadow leading-tight accent-primary">
                                    <option value="0">12:00 AM</option>
                                    <option value="1">12:30 AM</option>
                                    <option value="2">1:00 AM</option>
                                    <option value="3">1:30 AM</option>
                                    <option value="4">2:00 AM</option>
                                    <option value="5">2:30 AM</option>
                                    <option value="6">3:00 AM</option>
                                    <option value="7">3:30 AM</option>
                                    <option value="8">4:00 AM</option>
                                    <option value="9">4:30 AM</option>
                                    <option value="10">5:00 AM</option>
                                    <option value="11">5:30 AM</option>
                                    <option value="12">6:00 AM</option>
                                    <option value="13">6:30 AM</option>
                                    <option value="14">7:00 AM</option>
                                    <option value="15">7:30 AM</option>
                                    <option value="16">8:00 AM</option>
                                    <option value="17">8:30 AM</option>
                                    <option value="18" selected>9:00 AM</option>
                                    <option value="19">9:30 AM</option>
                                    <option value="20">10:00 AM</option>
                                    <option value="21">10:30 AM</option>
                                    <option value="22">11:00 AM</option>
                                    <option value="23">11:30 AM</option>
                                    <option value="24">12:00 PM</option>
                                    <option value="25">12:30 PM</option>
                                    <option value="26">1:00 PM</option>
                                    <option value="27">1:30 PM</option>
                                    <option value="28">2:00 PM</option>
                                    <option value="29">2:30 PM</option>
                                    <option value="30">3:00 PM</option>
                                    <option value="31">3:30 PM</option>
                                    <option value="32">4:00 PM</option>
                                    <option value="33">4:30 PM</option>
                                    <option value="34">5:00 PM</option>
                                    <option value="35">5:30 PM</option>
                                    <option value="36">6:00 PM</option>
                                    <option value="37">6:30 PM</option>
                                    <option value="38">7:00 PM</option>
                                    <option value="39">7:30 PM</option>
                                    <option value="40">8:00 PM</option>
                                    <option value="41">8:30 PM</option>
                                    <option value="42">9:00 PM</option>
                                    <option value="43">9:30 PM</option>
                                    <option value="44">10:00 PM</option>
                                    <option value="45">10:30 PM</option>
                                    <option value="46">11:00 PM</option>
                                    <option value="47">11:30 PM</option>
                                </select>
                            </div>
                            <div>
                                <span>End Time: </span>
                                <select id="availability" name="saturday_end" value={satEnd} onChange={(e) => setSatEnd(e.target.value)} className="bg-white border border-neutral-400 hover:border-neutral-500 px-4 py-2 pr-4 rounded shadow leading-tight accent-primary">
                                    <option value="0">12:00 AM</option>
                                    <option value="1">12:30 AM</option>
                                    <option value="2">1:00 AM</option>
                                    <option value="3">1:30 AM</option>
                                    <option value="4">2:00 AM</option>
                                    <option value="5">2:30 AM</option>
                                    <option value="6">3:00 AM</option>
                                    <option value="7">3:30 AM</option>
                                    <option value="8">4:00 AM</option>
                                    <option value="9">4:30 AM</option>
                                    <option value="10">5:00 AM</option>
                                    <option value="11">5:30 AM</option>
                                    <option value="12">6:00 AM</option>
                                    <option value="13">6:30 AM</option>
                                    <option value="14">7:00 AM</option>
                                    <option value="15">7:30 AM</option>
                                    <option value="16">8:00 AM</option>
                                    <option value="17">8:30 AM</option>
                                    <option value="18">9:00 AM</option>
                                    <option value="19">9:30 AM</option>
                                    <option value="20">10:00 AM</option>
                                    <option value="21">10:30 AM</option>
                                    <option value="22">11:00 AM</option>
                                    <option value="23">11:30 AM</option>
                                    <option value="24">12:00 PM</option>
                                    <option value="25">12:30 PM</option>
                                    <option value="26">1:00 PM</option>
                                    <option value="27">1:30 PM</option>
                                    <option value="28">2:00 PM</option>
                                    <option value="29">2:30 PM</option>
                                    <option value="30">3:00 PM</option>
                                    <option value="31">3:30 PM</option>
                                    <option value="32">4:00 PM</option>
                                    <option value="33">4:30 PM</option>
                                    <option value="34" selected>5:00 PM</option>
                                    <option value="35">5:30 PM</option>
                                    <option value="36">6:00 PM</option>
                                    <option value="37">6:30 PM</option>
                                    <option value="38">7:00 PM</option>
                                    <option value="39">7:30 PM</option>
                                    <option value="40">8:00 PM</option>
                                    <option value="41">8:30 PM</option>
                                    <option value="42">9:00 PM</option>
                                    <option value="43">9:30 PM</option>
                                    <option value="44">10:00 PM</option>
                                    <option value="45">10:30 PM</option>
                                    <option value="46">11:00 PM</option>
                                    <option value="47">11:30 PM</option>
                                </select>
                            </div>
                        </div>
                    </form>
                    <button onClick={handleSave} className="row-start-3 bg-primary text-white text-xl py-2 px-6 rounded-2xl w-fit h-fit">
                        Submit
                    </button>
                </div>

            </div>
        </>
    )
}
