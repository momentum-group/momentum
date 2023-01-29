
import Navbar from "@/components/Navbar"
import Link from "next/link"

export default function Availability() {

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

                <form className="grid grid-cols-4 text-left w-[700px] my-10">

                    <div className="flex flex-col text-xl gap-2 items-start">
                        <label className="mr-3 text-2xl font-medium">
                            Sunday
                        </label>
                        <div>
                            <span>Start Time: </span>
                            <select id="availability" name="sunday_start" className="bg-white border border-neutral-400 hover:border-neutral-500 px-4 py-2 pr-4 rounded shadow leading-tight accent-primary">
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
                            <select id="availability" name="sunday_end" className="bg-white border border-neutral-400 hover:border-neutral-500 px-4 py-2 pr-4 rounded shadow leading-tight accent-primary">
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
                    </div>

                    <div className="flex flex-col text-xl gap-2 items-start">
                        <label className="mr-3 text-2xl font-medium">
                            Monday
                        </label>
                        <div>
                            <span>Start Time: </span>
                            <select id="availability" name="monday_start" className="bg-white border border-neutral-400 hover:border-neutral-500 px-4 py-2 pr-4 rounded shadow leading-tight accent-primary">
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
                            <select id="availability" name="monday_end" className="bg-white border border-neutral-400 hover:border-neutral-500 px-4 py-2 pr-4 rounded shadow leading-tight accent-primary">
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
                    </div>

                    <div className="flex flex-col text-xl gap-2 items-start">
                        <label className="mr-3 text-2xl font-medium">
                            Tuesday
                        </label>
                        <div>
                            <span>Start Time: </span>
                            <select id="availability" name="tuesday_start" className="bg-white border border-neutral-400 hover:border-neutral-500 px-4 py-2 pr-4 rounded shadow leading-tight accent-primary">
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
                            <select id="availability" name="tuesday_end" className="bg-white border border-neutral-400 hover:border-neutral-500 px-4 py-2 pr-4 rounded shadow leading-tight accent-primary">
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
                    </div>

                    <div className="flex flex-col text-xl gap-2 items-start">
                        <label className="mr-3 text-2xl font-medium">
                            Wednesday
                        </label>
                        <div>
                            <span>Start Time: </span>
                            <select id="availability" name="wednesday_start" className="bg-white border border-neutral-400 hover:border-neutral-500 px-4 py-2 pr-4 rounded shadow leading-tight accent-primary">
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
                            <select id="availability" name="wednesday_end" className="bg-white border border-neutral-400 hover:border-neutral-500 px-4 py-2 pr-4 rounded shadow leading-tight accent-primary">
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
                    </div>

                    <div className="flex flex-col text-xl gap-2 items-start">
                        <label className="mr-3 text-2xl font-medium">
                            Thursday
                        </label>
                        <div>
                            <span>Start Time: </span>
                            <select id="availability" name="thursday_start" className="bg-white border border-neutral-400 hover:border-neutral-500 px-4 py-2 pr-4 rounded shadow leading-tight accent-primary">
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
                            <select id="availability" name="thursday_end" className="bg-white border border-neutral-400 hover:border-neutral-500 px-4 py-2 pr-4 rounded shadow leading-tight accent-primary">
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
                    </div>

                    <div className="flex flex-col text-xl gap-2 items-start">
                        <label className="mr-3 text-2xl font-medium">
                            Friday
                        </label>
                        <div>
                            <span>Start Time: </span>
                            <select id="availability" name="friday_start" className="bg-white border border-neutral-400 hover:border-neutral-500 px-4 py-2 pr-4 rounded shadow leading-tight accent-primary">
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
                            <select id="availability" name="friday_end" className="bg-white border border-neutral-400 hover:border-neutral-500 px-4 py-2 pr-4 rounded shadow leading-tight accent-primary">
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
                    </div>

                    <div className="flex flex-col text-xl gap-2 items-start">
                        <label className="mr-3 text-2xl font-medium">
                            Saturday
                        </label>
                        <div>
                            <span>Start Time: </span>
                            <select id="availability" name="saturday_start" className="bg-white border border-neutral-400 hover:border-neutral-500 px-4 py-2 pr-4 rounded shadow leading-tight accent-primary">
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
                            <select id="availability" name="saturday_end" className="bg-white border border-neutral-400 hover:border-neutral-500 px-4 py-2 pr-4 rounded shadow leading-tight accent-primary">
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
                    </div>
                    
                    <button type="submit" className="row-start-3 bg-primary text-white py-2 px-6 mt-4 rounded-2xl w-fit h-fit">
                        Submit
                    </button>

                </form>
            </div>
        </>
    )
}
