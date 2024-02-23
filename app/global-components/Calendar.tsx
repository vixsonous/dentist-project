import { SetStateAction, useEffect, useState } from "react"
import Modal from "./Modal";

type MonthEnum = {
    [key: string]: string
}

interface Schedule {
    id: Number,
    date_of_appointment: String,
    event: String,
    patient_id: String,
    start_time: String,
    waitlist: String,
    patient_name: String,
    patient_profile_pic: String,
    patient_contact: String,
}

export default function Calendar() {

    const [curDays, setCurDays] = useState(
        <>
            <div className="absolute top-20 left-40">
                <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
            </div>
        </>
    );
    const [apptSched, setApptSched] = useState(
        <>
            <div className="">
                <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
            </div>
        </>
    );

    const [curMonth, setCurMonth] = useState(new Date().getMonth() + 1);
    const [curYr, setCurYr] = useState(new Date().getFullYear());
    const [open, setOpen] = useState(false);

    const apptDt = async (day: Number, month: Number, year: Number) => {
        setOpen(!open)

        const appt = await fetch(`/api/appointment-sched/?dy=${day}&mnth=${month}&yr=${year}`).then((res) => res.json());
        const apptSched = appt.responseBody

        setApptSched(
            <>
                <table>
                    <thead>
                        <tr>
                            <th className="text-left">Patient</th>
                            <th className="text-center">Contact</th>
                            <th className="text-right">Start Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {apptSched.map((el: Schedule) => {
                            const stTime = new Date(String(el.start_time));
                            const stTimeStr = stTime.getUTCHours() > 12 ? `${("0" + (stTime.getUTCHours() - 12)).slice(-2)}:${("0" + stTime.getUTCMinutes()).slice(-2)} PM` : `${("0" + stTime.getUTCHours()).slice(-2)}:${("0" + stTime.getUTCMinutes()).slice(-2)} ${stTime.getUTCHours() == 12 ? 'PM' : 'AM'}`
                            return (
                                <tr>
                                    <td className="text-left">{el.patient_name}</td>
                                    <td className="text-center">{el.patient_contact}</td>
                                    <td className="text-right">{stTimeStr}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

            </>
        )
    }

    const changeDt = (curM: SetStateAction<number>, curY: SetStateAction<number>) => {
        const beforeDt = new Date(curYr, curMonth, 0);
        setCurMonth(curM);
        setCurYr(curY);
        const curDate = new Date(Number(curY), Number(curM), 0);

        const strtDt = new Date(Number(curY) - 1, Number(curM) - 1, 1);
        const noDays = curDate.getDate();
        const noBeforeDays = beforeDt.getDate();
        const strtDay = strtDt.getDay();
        let daysEl = Array.from(Array(noDays).keys());
        let beforeDaysEl = Array.from(Array(strtDay + 1).keys());
        let remaining = Array.from(Array(42 - (daysEl.length + beforeDaysEl.length)).keys());

        setCurDays(
            <>
                {
                    beforeDaysEl.toReversed().map((el) => {
                        return <a key={el} href="#" className="dayEl hover:bg-[#AFC8AD] rounded-md p-2 text-gray-500">{noBeforeDays - el}</a>
                    })
                }
                {
                    daysEl.map((el) => {
                        return <a key={el} onClick={() => apptDt(el + 1, curDate.getMonth() + 1, curDate.getFullYear())} href="#" className={`dayEl ${(el + 1) === new Date().getDate() && curDate.getMonth() === new Date().getMonth() ? 'hover:bg-[#12372A] rounded-md p-2 bg-[#436850] text-white' : 'hover:bg-[#AFC8AD] rounded-md p-2'}`}>{el + 1}</a>
                    })
                }
                {
                    remaining.map((el) => {
                        return <a key={el} href="#" className="dayEl hover:bg-[#AFC8AD] rounded-md p-2 text-gray-500">{el + 1}</a>
                    })
                }
            </>
        )
    }

    useEffect(() => {
        changeDt(curMonth, curYr);
    }, []);

    const nextMonth = () => {
        const curM = curMonth + 1 <= 12 ? curMonth + 1 : 1;
        const curY = curMonth + 1 <= 12 ? curYr : curYr + 1;
        changeDt(curM, curY);
    }

    const prevMonth = () => {
        const curM = curMonth - 1 >= 1 ? curMonth - 1 : 12;
        const curY = curMonth - 1 >= 1 ? curYr : curYr - 1;
        changeDt(curM, curY);
    }

    const months: MonthEnum = {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December',
    }
    return (
        <>
            <div className="bg-[#F2F1EB] shadow-xl overflow-hidden rounded-lg mx-auto text-center">
                <div className="flex items-center justify-around px-4 py-4">
                    <button onClick={prevMonth} className="p-2 rounded-md text-indigo-600">
                        <svg className="w-3 h-3 stroke-current" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    <div className="text-lg">{months[String(curMonth)]}, {curYr}</div>
                    <button onClick={nextMonth} className="p-2 rounded-md text-indigo-600">
                        <svg className="w-3 h-3 stroke-current" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"></path></svg>
                    </button>
                </div>
                <div className="relative grid grid-cols-7 grid-col-dense grid-rows-6 p-2 gap-1">
                    <div className="text-[#436850]">Sun</div>
                    <div className="text-[#436850]">Mon</div>
                    <div className="text-[#436850]">Tue</div>
                    <div className="text-[#436850]">Wed</div>
                    <div className="text-[#436850]">Thu</div>
                    <div className="text-[#436850]">Fri</div>
                    <div className="text-[#436850]">Sat</div>
                    {curDays}
                </div>
            </div>
            <Modal title={"Scheduled Appointments"} open={open} onClose={() => setOpen(false)} size="M">
                <div className="flex flex-col gap-1">
                    <hr />
                    <div className="flex flex-col gap-1">
                        {apptSched}
                    </div>
                </div>
            </Modal>
        </>
    )
}