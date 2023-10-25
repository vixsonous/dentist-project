"use client";

import { patient_record } from "@prisma/client";
import Link from "next/link";
import { useState } from "react";
import PatientSummary from "./PatientSummary";
import './compiled.css'
import Calendar from "../global-components/Calendar";

interface pageProps {
    patient_list: Array<patient_record>
}
export default function Patients({patient_list}:pageProps) {

    const [loading, setLoading] = useState(false);

    const onClick = async (patient_id:String) => {
        setLoading(true);
        const notes = await fetch(`/api/patient-summary/?patient_id=${patient_id}`).then((res) => res.json())
        setLoading(false);
        console.log(notes);
    }
    return (
        <div className="w-screen flex justify-center items-center">
            <div className="container w-screen h-screen flex gap-5 justify-center items-center">
                <section className="rounded-lg w-1/4 h-3/4 overflow-scroll border-2 p-4 bg-white">
                    <div className="flex flex-col gap-1">
                    {
                        patient_list.map((el, idx) => {
                            return (
                                <div key={idx} className="p-2">
                                    <div className="flex gap-4 items-center">
                                        <img className="w-7 h-7 rounded-full" src="https://hips.hearstapps.com/hmg-prod/images/cute-photos-of-cats-looking-at-camera-1593184780.jpg?crop=0.6672958942897593xw:1xh;center,top&resize=980:*" />
                                        <button onClick={() => onClick(String(el.patient_id))}>{el.patient_name}</button>
                                        <Link className="p-2" href={`/patient/${el.patient_id}`}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></Link>
                                    </div>
                                    <hr/>
                                </div>
                            )
                        })
                    }
                    </div>
                </section>
                <section className="rounded-lg bg-white overflow-scroll w-1/2 h-3/4 border-2 flex justify-center items-center">
                    {
                        loading ? <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg> : <div className="w-full h-full p-4">
                        <PatientSummary />
                    </div>
                    }
                </section>
                <section className="h-3/4 w-1/4">
                    <div className="h-3/4 rounded-lg p-4 bg-white">
                        <Calendar />
                    </div>
                </section>
            </div>
        </div>
    )
}