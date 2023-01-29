import Event from "./Event"

export default function Week({ schedule }) {

    return (
        <div className="flex justify-center mt-10">
            <div className="overflow-scroll overscroll-none grid grid-cols-[70px,repeat(7,150px)] grid-rows-[auto,repeat(48,40px)] max-h-[500px] border-neutral-400/80 border-b">
    
                <div className="row-start-auto col-start-[1] sticky top-0 z-10 bg-white border-neutral-400/80 border-b"></div>
                <div className="row-start-auto col-start-[2] sticky top-0 z-10 font-semibold text-xl bg-white border-neutral-400/80 border-b text-center">Sunday</div>
                <div className="row-start-auto col-start-[3] sticky top-0 z-10 font-semibold text-xl bg-white border-neutral-400/80 border-b text-center">Monday</div>
                <div className="row-start-auto col-start-[4] sticky top-0 z-10 font-semibold text-xl bg-white border-neutral-400/80 border-b text-center">Tuesday</div>
                <div className="row-start-auto col-start-[5] sticky top-0 z-10 font-semibold text-xl bg-white border-neutral-400/80 border-b text-center">Wednesday</div>
                <div className="row-start-auto col-start-[6] sticky top-0 z-10 font-semibold text-xl bg-white border-neutral-400/80 border-b text-center">Thursday</div>
                <div className="row-start-auto col-start-[7] sticky top-0 z-10 font-semibold text-xl bg-white border-neutral-400/80 border-b text-center">Friday</div>
                <div className="row-start-auto col-start-[8] sticky top-0 z-10 font-semibold text-xl bg-white border-neutral-400/80 border-b text-center">Saturday</div>

                <div className="row-start-[2] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">12 AM</div>
                <div className="row-start-[2] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[2] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[2] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[2] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[2] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[2] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[2] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[3] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div className="row-start-[3] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[3] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[3] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[3] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[3] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[3] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[3] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[4] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">1 AM</div>
                <div className="row-start-[4] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[4] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[4] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[4] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[4] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[4] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[4] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[5] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div className="row-start-[5] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[5] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[5] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[5] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[5] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[5] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[5] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[6] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">2 AM</div>
                <div className="row-start-[6] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[6] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[6] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[6] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[6] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[6] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[6] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[7] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div className="row-start-[7] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[7] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[7] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[7] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[7] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[7] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[7] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[8] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">3 AM</div>
                <div className="row-start-[8] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[8] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[8] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[8] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[8] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[8] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[8] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[9] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div className="row-start-[9] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[9] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[9] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[9] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[9] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[9] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[9] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[10] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">4 AM</div>
                <div className="row-start-[10] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[10] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[10] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[10] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[10] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[10] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[10] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[11] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div className="row-start-[11] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[11] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[11] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[11] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[11] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[11] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[11] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[12] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">5 AM</div>
                <div className="row-start-[12] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[12] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[12] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[12] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[12] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[12] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[12] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[13] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div className="row-start-[13] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[13] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[13] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[13] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[13] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[13] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[13] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[14] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">6 AM</div>
                <div className="row-start-[14] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[14] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[14] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[14] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[14] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[14] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[14] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[15] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div className="row-start-[15] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[15] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[15] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[15] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[15] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[15] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[15] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[16] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">7 AM</div>
                <div className="row-start-[16] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[16] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[16] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[16] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[16] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[16] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[16] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[17] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div className="row-start-[17] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[17] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[17] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[17] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[17] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[17] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[17] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[18] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">8 AM</div>
                <div className="row-start-[18] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[18] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[18] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[18] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[18] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[18] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[18] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[19] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div className="row-start-[19] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[19] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[19] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[19] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[19] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[19] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[19] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[20] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">9 AM</div>
                <div className="row-start-[20] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[20] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[20] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[20] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[20] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[20] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[20] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[21] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div className="row-start-[21] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[21] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[21] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[21] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[21] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[21] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[21] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[22] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">10 AM</div>
                <div className="row-start-[22] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[22] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[22] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[22] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[22] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[22] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[22] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[23] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div className="row-start-[23] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[23] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[23] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[23] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[23] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[23] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[23] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[24] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">11 AM</div>
                <div className="row-start-[24] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[24] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[24] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[24] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[24] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[24] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[24] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[25] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div className="row-start-[25] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[25] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[25] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[25] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[25] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[25] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[25] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[26] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">12 PM</div>
                <div className="row-start-[26] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[26] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[26] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[26] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[26] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[26] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[26] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[27] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div className="row-start-[27] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[27] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[27] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[27] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[27] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[27] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[27] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[28] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">1 PM</div>
                <div className="row-start-[28] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[28] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[28] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[28] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[28] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[28] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[28] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[29] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div className="row-start-[29] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[29] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[29] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[29] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[29] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[29] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[29] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[30] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">2 PM</div>
                <div className="row-start-[30] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[30] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[30] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[30] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[30] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[30] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[30] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[31] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div className="row-start-[31] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[31] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[31] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[31] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[31] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[31] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[31] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[32] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">3 PM</div>
                <div className="row-start-[32] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[32] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[32] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[32] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[32] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[32] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[32] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[33] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div className="row-start-[33] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[33] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[33] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[33] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[33] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[33] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[33] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[34] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">4 PM</div>
                <div className="row-start-[34] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[34] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[34] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[34] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[34] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[34] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[34] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[35] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div className="row-start-[35] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[35] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[35] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[35] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[35] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[35] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[35] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[36] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">5 PM</div>
                <div className="row-start-[36] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[36] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[36] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[36] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[36] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[36] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[36] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[37] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div className="row-start-[37] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[37] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[37] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[37] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[37] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[37] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[37] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[38] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">6 PM</div>
                <div className="row-start-[38] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[38] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[38] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[38] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[38] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[38] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[38] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[39] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div className="row-start-[39] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[39] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[39] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[39] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[39] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[39] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[39] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[40] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">7 PM</div>
                <div className="row-start-[40] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[40] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[40] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[40] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[40] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[40] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[40] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[41] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div className="row-start-[41] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[41] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[41] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[41] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[41] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[41] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[41] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[42] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">8 PM</div>
                <div className="row-start-[42] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[42] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[42] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[42] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[42] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[42] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[42] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[43] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div className="row-start-[43] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[43] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[43] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[43] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[43] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[43] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[43] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[44] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">9 PM</div>
                <div className="row-start-[44] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[44] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[44] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[44] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[44] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[44] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[44] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[45] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div className="row-start-[45] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[45] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[45] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[45] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[45] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[45] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[45] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[46] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">10 PM</div>
                <div className="row-start-[46] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[46] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[46] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[46] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[46] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[46] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[46] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[47] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div className="row-start-[47] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[47] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[47] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[47] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[47] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[47] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[47] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[48] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">11 PM</div>
                <div className="row-start-[48] col-start-[2] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[48] col-start-[3] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[48] col-start-[4] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[48] col-start-[5] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[48] col-start-[6] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[48] col-start-[7] border-neutral-400/80 border-b border-r"></div>
                <div className="row-start-[48] col-start-[8] border-neutral-400/80 border-b border-r"></div>

                <div className="row-start-[49] col-start-[1] border-neutral-400/80 border-r sticky left-0"></div>
                <div className="row-start-[49] col-start-[2] border-neutral-400/80 border-r"></div>
                <div className="row-start-[49] col-start-[3] border-neutral-400/80 border-r"></div>
                <div className="row-start-[49] col-start-[4] border-neutral-400/80 border-r"></div>
                <div className="row-start-[49] col-start-[5] border-neutral-400/80 border-r"></div>
                <div className="row-start-[49] col-start-[6] border-neutral-400/80 border-r"></div>
                <div className="row-start-[49] col-start-[7] border-neutral-400/80 border-r"></div>
                <div className="row-start-[49] col-start-[8] border-neutral-400/80 border-r"></div>
                
                { Object.keys(schedule).map((day) => {
                    return <Event title='Work Shift' day={day} half_hour={schedule[day].start} duration={schedule[day].duration} />
                }) }

            </div>
        </div>
    )
}
