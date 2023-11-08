"use client";

import { patient_record } from "@prisma/client";
import Link from "next/link";
import { ReactElement, useEffect, useRef, useState } from "react";
import PatientSummary from "./PatientSummary";
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
                <section className="relative shadow-xl rounded-lg w-1/4 h-3/4 overflow-scroll border-2 p-4 bg-white">
                    <p className="bg-white flex gap-2 text-xl font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                        </svg>
                        Patient List
                    </p>
                    <hr className="pb-6"/>
                    <div className="flex flex-col gap-1">
                    {
                        patient_list.map((el, idx) => {
                            const [opn, setOpn] = useState(false);
                            const ref = useRef<HTMLDivElement>(null);
                            const [disp, setDisp] = useState(false);
                            

                            const opnPopup = () => {
                                if(!opn) {
                                    setDisp(true);
                                    setTimeout(() => {
                                        setOpn(true);
                                    }, 50);
                                } else {
                                    setOpn(false);
                                    setTimeout(() => {
                                        setDisp(false);
                                    }, 150);
                                }
                            }

                            useEffect(() => {
                                /**
                                 * Alert if clicked on outside of element
                                 */
                                function handleClickOutside(event:any) {
                                  if (ref.current && !ref.current.contains(event.target) && opn) {
                                    setOpn(false);
                                    setTimeout(() => {
                                        setDisp(false);
                                    }, 150);
                                  }
                                }
                                // Bind the event listener
                                document.addEventListener("mousedown", handleClickOutside);
                                return () => {
                                  // Unbind the event listener on clean up
                                  document.removeEventListener("mousedown", handleClickOutside);
                                };
                              }, [opn]);
                            
                            return (
                                <div key={idx} className="p-2">
                                    <div className="flex gap-4 items-center justify-between">
                                        <div className="flex gap-4 items-center">
                                            <img className="w-8 h-8 rounded-full p-1" src="https://hips.hearstapps.com/hmg-prod/images/cute-photos-of-cats-looking-at-camera-1593184780.jpg?crop=0.6672958942897593xw:1xh;center,top&resize=980:*" />
                                            <button onClick={() => onClick(String(el.patient_id))}>{el.patient_name}</button>
                                        </div>
                                        
                                        <div className="relative inline-block text-left">
                                            <div ref={ref}>
                                                <button onClick={opnPopup}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="currentColor" d="M10.001 7.8a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 10 7.8zm0-2.6A2.2 2.2 0 1 0 9.999.8a2.2 2.2 0 0 0 .002 4.4zm0 9.6a2.2 2.2 0 1 0 0 4.402a2.2 2.2 0 0 0 0-4.402z"/></svg>
                                                </button>
                                            </div>
                                            <div style={{display: disp ? '' : 'none'}} className={`absolute right-0 transition-opacity ${opn ? 'opacity-1' : 'opacity-0'} z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                                                <div className="py-1" role="none">
                                                <Link href={`/patient/${el.patient_id}`} className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">Patient Record</Link>
                                                <Link href={`/patient/dentalrecord/${el.patient_id}`} className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">Dental Record</Link>
                                                <Link href={`/patient/odontogram/${el.patient_id}`} className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1">Odontogram</Link>
                                                <Link href={`/patient/prevhist/${el.patient_id}`} className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">Previous History</Link>
                                                <Link href={`/patient/attachment/${el.patient_id}`} className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">Attachment</Link>
                                                <Link href={`/patient/balance/${el.patient_id}`} className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">Balance</Link>
                                                </div>
                                            </div>
                                            </div>
                                    </div>
                                    <hr/>
                                </div>
                            )
                        })
                    }
                    </div>
                </section>
                <section className="rounded-lg shadow-xl bg-white overflow-scroll w-1/2 h-3/4 border-2 flex justify-center items-center">
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
                    <div className="h-3/4 rounded-lg">
                        <Calendar />
                    </div>
                </section>
            </div>
        </div>
    )
}