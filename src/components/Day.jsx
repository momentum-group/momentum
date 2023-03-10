import { useEffect, useState } from "react"
import Event from "./Event"

export default function Day({users}) {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        setEvents(users)
    }, [users])

    return (
        <div className="flex justify-center mt-10">
            <div class="overflow-scroll overscroll-none grid grid-cols-[70px,repeat(1,900px)] grid-rows-[auto,repeat(48,40px)] max-h-[500px] border-neutral-400/80 border-b">
    
                <div class="row-start-auto col-start-[1] sticky top-0 z-10 bg-white border-neutral-400/80 border-b"></div>
                <div class="row-start-auto col-start-[2] sticky top-0 z-10 font-semibold text-xl bg-white border-neutral-400/80 border-b text-center">  </div>

                <div class="row-start-[2] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">12 AM</div>
                <div class="row-start-[2] col-start-[2] border-neutral-400/80 border-b border-r"></div>

                <div class="row-start-[3] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div class="row-start-[3] col-start-[2] border-neutral-400/80 border-b border-r"></div>

                <div class="row-start-[4] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">1 AM</div>
                <div class="row-start-[4] col-start-[2] border-neutral-400/80 border-b border-r"></div>

                <div class="row-start-[5] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div class="row-start-[5] col-start-[2] border-neutral-400/80 border-b border-r"></div>

                <div class="row-start-[6] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">2 AM</div>
                <div class="row-start-[6] col-start-[2] border-neutral-400/80 border-b border-r"></div>

                <div class="row-start-[7] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div class="row-start-[7] col-start-[2] border-neutral-400/80 border-b border-r"></div>

                <div class="row-start-[8] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">3 AM</div>
                <div class="row-start-[8] col-start-[2] border-neutral-400/80 border-b border-r"></div>

                <div class="row-start-[9] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div class="row-start-[9] col-start-[2] border-neutral-400/80 border-b border-r"></div>


                <div class="row-start-[10] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">4 AM</div>
                <div class="row-start-[10] col-start-[2] border-neutral-400/80 border-b border-r"></div>
 

                <div class="row-start-[11] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div class="row-start-[11] col-start-[2] border-neutral-400/80 border-b border-r"></div>


                <div class="row-start-[12] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">5 AM</div>
                <div class="row-start-[12] col-start-[2] border-neutral-400/80 border-b border-r"></div>


                <div class="row-start-[13] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div class="row-start-[13] col-start-[2] border-neutral-400/80 border-b border-r"></div>


                <div class="row-start-[14] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">6 AM</div>
                <div class="row-start-[14] col-start-[2] border-neutral-400/80 border-b border-r"></div>

                <div class="row-start-[15] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div class="row-start-[15] col-start-[2] border-neutral-400/80 border-b border-r"></div>

                <div class="row-start-[16] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">7 AM</div>
                <div class="row-start-[16] col-start-[2] border-neutral-400/80 border-b border-r"></div>

                <div class="row-start-[17] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div class="row-start-[17] col-start-[2] border-neutral-400/80 border-b border-r"></div>

                <div class="row-start-[18] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">8 AM</div>
                <div class="row-start-[18] col-start-[2] border-neutral-400/80 border-b border-r"></div>

                <div class="row-start-[19] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div class="row-start-[19] col-start-[2] border-neutral-400/80 border-b border-r"></div>

                <div class="row-start-[20] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">9 AM</div>
                <div class="row-start-[20] col-start-[2] border-neutral-400/80 border-b border-r"></div>

                <div class="row-start-[21] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div class="row-start-[21] col-start-[2] border-neutral-400/80 border-b border-r"></div>

                <div class="row-start-[22] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">10 AM</div>
                <div class="row-start-[22] col-start-[2] border-neutral-400/80 border-b border-r"></div>


                <div class="row-start-[23] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div class="row-start-[23] col-start-[2] border-neutral-400/80 border-b border-r"></div>


                <div class="row-start-[24] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">11 AM</div>
                <div class="row-start-[24] col-start-[2] border-neutral-400/80 border-b border-r"></div>


                <div class="row-start-[25] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div class="row-start-[25] col-start-[2] border-neutral-400/80 border-b border-r"></div>


                <div class="row-start-[26] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">12 PM</div>
                <div class="row-start-[26] col-start-[2] border-neutral-400/80 border-b border-r"></div>


                <div class="row-start-[27] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div class="row-start-[27] col-start-[2] border-neutral-400/80 border-b border-r"></div>


                <div class="row-start-[28] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">1 PM</div>
                <div class="row-start-[28] col-start-[2] border-neutral-400/80 border-b border-r"></div>


                <div class="row-start-[29] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div class="row-start-[29] col-start-[2] border-neutral-400/80 border-b border-r"></div>
  

                <div class="row-start-[30] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">2 PM</div>
                <div class="row-start-[30] col-start-[2] border-neutral-400/80 border-b border-r"></div>


                <div class="row-start-[31] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div class="row-start-[31] col-start-[2] border-neutral-400/80 border-b border-r"></div>


                <div class="row-start-[32] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">3 PM</div>
                <div class="row-start-[32] col-start-[2] border-neutral-400/80 border-b border-r"></div>


                <div class="row-start-[33] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div class="row-start-[33] col-start-[2] border-neutral-400/80 border-b border-r"></div>


                <div class="row-start-[34] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">4 PM</div>
                <div class="row-start-[34] col-start-[2] border-neutral-400/80 border-b border-r"></div>


                <div class="row-start-[35] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div class="row-start-[35] col-start-[2] border-neutral-400/80 border-b border-r"></div>


                <div class="row-start-[36] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">5 PM</div>
                <div class="row-start-[36] col-start-[2] border-neutral-400/80 border-b border-r"></div>


                <div class="row-start-[37] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div class="row-start-[37] col-start-[2] border-neutral-400/80 border-b border-r"></div>


                <div class="row-start-[38] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">6 PM</div>
                <div class="row-start-[38] col-start-[2] border-neutral-400/80 border-b border-r"></div>


                <div class="row-start-[39] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div class="row-start-[39] col-start-[2] border-neutral-400/80 border-b border-r"></div>
 

                <div class="row-start-[40] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">7 PM</div>
                <div class="row-start-[40] col-start-[2] border-neutral-400/80 border-b border-r"></div>


                <div class="row-start-[41] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div class="row-start-[41] col-start-[2] border-neutral-400/80 border-b border-r"></div>


                <div class="row-start-[42] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">8 PM</div>
                <div class="row-start-[42] col-start-[2] border-neutral-400/80 border-b border-r"></div>


                <div class="row-start-[43] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div class="row-start-[43] col-start-[2] border-neutral-400/80 border-b border-r"></div>


                <div class="row-start-[44] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">9 PM</div>
                <div class="row-start-[44] col-start-[2] border-neutral-400/80 border-b border-r"></div>


                <div class="row-start-[45] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div class="row-start-[45] col-start-[2] border-neutral-400/80 border-b border-r"></div>


                <div class="row-start-[46] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">10 PM</div>
                <div class="row-start-[46] col-start-[2] border-neutral-400/80 border-b border-r"></div>


                <div class="row-start-[47] col-start-[1] border-neutral-400/80 border-r border-b sticky left-0"></div>
                <div class="row-start-[47] col-start-[2] border-neutral-400/80 border-b border-r"></div>


                <div class="row-start-[48] col-start-[1] border-neutral-400/80 border-r text-right sticky left-0 pr-2 pt-1 text-md font-light">11 PM</div>
                <div class="row-start-[48] col-start-[2] border-neutral-400/80 border-b border-r"></div>


                <div class="row-start-[49] col-start-[1] border-neutral-400/80 border-r sticky left-0"></div>
                <div class="row-start-[49] col-start-[2] border-neutral-400/80 border-r"></div>
                
                { events ? events.map((user, idx) => {

                    const schedule = user.result.schedule;

                    console.log(user)

                    const date = new Date();
                    const d = date.getDay();

                    if (schedule.length <= 1) {
                        return <></>;
                    }

                    let shift = schedule.map(String).slice(48*d, 48*(d+1));
                    let start = shift.indexOf("1");
                    let end = shift.lastIndexOf("1");
                    let day = {
                        start: start,
                        duration: end-start
                    }

                    console.log(day)

                    return <Event title='Work Shift' day={d} half_hour={day.start} duration={day.duration} num={idx} total={events.length} margin={Math.floor(900/events.length*idx)} key={idx} name={user.firstname}/>
                }) : <></>}

            </div>
        </div>
    )
}
