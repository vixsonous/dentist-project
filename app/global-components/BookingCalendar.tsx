import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import Modal from "./Modal";
import { clinic_users, patient_record, scheduled_appointments } from "@prisma/client";

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

interface DayProps {
    el: number,
    curDate: Date,
    month: number,
    year: number,
    schedules: Array<scheduled_appointments>
}

interface pageProps {
    patientlist: Array<patient_record>
    doclist: Array<clinic_users>
}

export default function BookingCalendar({ patientlist, doclist }: pageProps) {

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

    const [docList, setDocList] = useState(doclist);
    const [curMonth, setCurMonth] = useState(new Date().getMonth() + 1);
    const [curYr, setCurYr] = useState(new Date().getFullYear()); 4

    const getSchedules = async (month: string, year: string) => {
        const scheds = await fetch(`/api/get-appointment/?month=${month}&year=${year}`).then((res) => res.json())

        return scheds.responseBody;
    }

    const changeDt = async (curM: number, curY: number) => {
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

        const scheds = await getSchedules(String(curM), String(curY));

        console.log(scheds)
        setCurDays(
            <>
                {
                    beforeDaysEl.toReversed().map((el) => {
                        return <a key={el} href="#" className="dayEl hover:bg-[#AFC8AD] rounded-md p-2 text-gray-500">{noBeforeDays - el}</a>
                    })
                }
                {
                    daysEl.map((el, idx) => {

                        return (
                            <Day key={idx} el={el} curDate={curDate} month={curM} year={curY} schedules={[]} />
                        )
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

    const setAppointment = async (patient_id: string, doctor_id: string, start_time: string, end_time: string, date: string, m: string, y: string) => {
        interface timeMap {
            [key: string]: string
        }
        const timePlot: timeMap = {
            "0": "0:00",
            "1": "0:30",
            "2": "1:00",
            "3": "1:30",
            "4": "2:00",
            "5": "2:30",
            "6": "3:00",
            "7": "3:30",
            "8": "4:00",
            "9": "4:30",
            "10": "5:00",
            "11": "5:30",
            "12": "6:00",
            "13": "6:30",
            "14": "7:00",
            "15": "7:30",
            "16": "8:00",
            "17": "8:30",
            "18": "9:00",
            "19": "9:30",
            "20": "10:00",
            "21": "10:30",
            "22": "11:00",
            "23": "11:30",
            "24": "12:00",
            "25": "12:30",
            "26": "13:00",
            "27": "13:30",
            "28": "14:00",
            "29": "14:30",
            "30": "15:00",
            "31": "15:30",
            "32": "16:00",
            "33": "16:30",
            "34": "17:00",
            "35": "17:30",
            "36": "18:00",
            "37": "18:30",
            "38": "19:00",
            "39": "19:30",
            "40": "20:00",
            "41": "20:30",
            "42": "21:00",
            "43": "21:30",
            "44": "22:00",
            "45": "22:30",
            "46": "23:00",
            "47": "23:30",
        }

        // pid = patient_id, did = doctor_id, st = start_time, et = end_time

        return await fetch(`/api/set-appointment/?pid=${patient_id}&did=${doctor_id}&st=${timePlot[start_time]}&et=${timePlot[end_time]}&d=${y}-${String(m).padStart(2, '0')}-${String(date).padStart(2, '0')}`).then((res) => res.json())
    }

    const setSched = async (patient_id: string, doctor_id: string, start_time: string, end_time: string, date: string, m: string, y: string) => {
        const resVal = await setAppointment(patient_id, doctor_id, start_time, end_time, date, m, y);

        console.log(resVal)
    }

    interface ScheduleModalMap {
        curOpn: boolean,
        setCurOpn: Dispatch<SetStateAction<boolean>>,
        selectionActive: boolean,
        selectedTime: { start: number; end: number },
        setSelectedTime: Dispatch<SetStateAction<{ start: number; end: number; }>>,
        setPList: Dispatch<SetStateAction<boolean>>,
        setSelectedDoc: Dispatch<SetStateAction<number>>,
        setSelectionActive: Dispatch<SetStateAction<boolean>>,
    }

    const ScheduleModal = ({
        curOpn,
        setCurOpn,
        selectionActive,
        selectedTime,
        setSelectedTime,
        setPList,
        setSelectedDoc,
        setSelectionActive,
    }: ScheduleModalMap) => {

        return (
            <Modal title={"Schedule"} open={curOpn} onClose={() => {
                setCurOpn(false);
            }} size="M">
                <div className="flex flex-col p-2  ">
                    <div className="h-[20rem] flex overflow-scroll">
                        <div className="p-2 w-[100px] flex flex-col">
                            <div className="w-full"></div>
                            {
                                [...Array(24).keys(), ...Array(24).keys()].sort((a, b) => a - b).map((n, idx) => {
                                    return (
                                        <span key={idx} className="p-2 w-[100px]">{idx % 2 === 0 ? `${n}:00` : `${n}:30`}</span>
                                    )
                                })
                            }
                        </div>
                        {
                            docList.map((doc, idx1) => {
                                const arr: HTMLDivElement[] | null[] = [];
                                const elRefs = useRef(arr);

                                const selectTime = (n: number) => {
                                    // if refs is 0, use elRefs. if refs is 1, use elHalfRefs
                                    if (elRefs.current[n]?.classList.contains("bg-[#436850]")) {
                                        return;
                                    }

                                    elRefs.current[n]?.classList.add("bg-[#436850]")

                                    for (let i = 0; i < elRefs.current.length; i++) {
                                        if (elRefs.current[i]?.classList.contains("bg-[#AFC8AD]")) {
                                            elRefs.current[i]?.classList.add("bg-[#436850]");
                                            elRefs.current[i]?.classList.add("border-[#436850]");

                                        }
                                    }

                                    if (selectionActive && n === selectedTime.start) {
                                        elRefs.current[n]?.classList.remove("bg-[#436850]")
                                    }

                                    if (selectionActive && n !== selectedTime.start) {
                                        setSelectedTime(prev => ({ ...prev, end: n }))
                                        setPList(true);
                                        setSelectedDoc(doc.user_id);
                                    }

                                    if (!selectionActive) {
                                        setSelectedTime(prev => ({ ...prev, start: n }))
                                    }

                                    setSelectionActive(prev => !prev);
                                }

                                const hoverTime = (n: number, refs: number) => {

                                    for (let i = 0; i < elRefs.current.length; i++) {
                                        elRefs.current[i]?.classList.remove("bg-[#AFC8AD]");
                                    }

                                    if (!elRefs.current[n]?.classList.contains("bg-[#436850]")) {
                                        elRefs.current[n]?.classList.add("bg-[#AFC8AD]");
                                    }

                                    if (selectionActive) {
                                        for (let i = 0; i < elRefs.current.length; i++) {
                                            elRefs.current[i]?.classList.remove("bg-[#AFC8AD]");
                                        }

                                        for (let i = selectedTime.start + 1; i <= n; i++) {
                                            elRefs.current[i]?.classList.add("bg-[#AFC8AD]");
                                        }
                                    }


                                }

                                const clearHover = () => {
                                    for (let i = 0; i < elRefs.current.length; i++) {
                                        elRefs.current[i]?.classList.remove("bg-[#AFC8AD]");
                                    }
                                }

                                return (
                                    <div key={idx1} className="flex p-2 flex-col">
                                        {
                                            [...Array(24).keys(), ...Array(24).keys()].sort((a, b) => a - b).map((n, idx2) => {
                                                return (
                                                    <div className="w-[100px] h-full relative" key={idx2}>
                                                        <div className="flex">
                                                            <div>
                                                                <div className={`selector h-[40px] w-[100px] p-2 border border-solid border-[#AFC8AD]`} aria-disabled id={`${idx1}${idx2}`} onMouseLeave={clearHover} onMouseOver={() => hoverTime(idx2, 0)} onClick={() => selectTime(idx2)} ref={el => elRefs.current[idx2] = el}>&#8203;</div>
                                                            </div>
                                                            <hr />
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </Modal>
        )
    }

    interface PatientsModalMap {
        pList: boolean,
        setPList: Dispatch<SetStateAction<boolean>>,
        selectedDoc: number,
        selectedTime: { start: number; end: number },
        selectionActive: boolean,
        el: string
        month: string
        year: string
    }

    const PatientsModal = ({ pList, setPList, selectedDoc, selectedTime, el, month, year }: PatientsModalMap) => {
        return (
            <Modal title="Patients" open={pList} onClose={() => setPList(false)} size="S">
                <div className="p-2 overflow-scroll h-[300px]">
                    {
                        patientlist.map((p) => {

                            return (
                                <div key={p.patient_id}>
                                    <h1 onClick={() => setSched(String(p.patient_id), String(selectedDoc), String(selectedTime.start), String(selectedTime.end), `${el}`, month, year)} className="p-1 text-left" >{p.patient_name}</h1>
                                    <hr />
                                </div>
                            )
                        })
                    }
                </div>
            </Modal>
        )
    }



    const Day = ({ el, curDate, month, year, schedules }: DayProps) => {
        const [curOpn, setCurOpn] = useState(false);
        const [pList, setPList] = useState(false);

        const [selectionActive, setSelectionActive] = useState(false);
        const [selectedTime, setSelectedTime] = useState({ start: 0, end: 0 });

        const [selectedDoc, setSelectedDoc] = useState(0);
        return (
            <>
                <a onClick={() => {
                    setCurOpn(!curOpn)
                }} href="#" className={`dayEl ${(el + 1) === new Date().getDate() && curDate.getMonth() === new Date().getMonth() ? 'hover:bg-[#12372A] rounded-md p-2 bg-[#436850] text-white' : 'hover:bg-[#AFC8AD] rounded-md p-2'}`}>{el + 1}</a>
                <ScheduleModal
                    curOpn={curOpn}
                    setCurOpn={setCurOpn}
                    selectionActive={selectionActive}
                    setSelectedTime={setSelectedTime}
                    selectedTime={selectedTime}
                    setPList={setPList}
                    setSelectedDoc={setSelectedDoc}
                    setSelectionActive={setSelectionActive}
                />
                <PatientsModal
                    pList={pList}
                    setPList={setPList}
                    selectedDoc={selectedDoc}
                    selectedTime={selectedTime}
                    selectionActive={selectionActive}
                    el={String(el + 1)}
                    month={String(month)}
                    year={String(year)}
                />
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

        </>
    )
}