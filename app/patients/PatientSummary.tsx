import { clinic_users, image_attachments, patient_record } from "@prisma/client"
import { useState } from "react"

interface pageProps {
    curPatient: patient_record
    images: image_attachments[]
    doclist: Array<clinic_users>
}

export default function PatientSummary({ curPatient, images, doclist }: pageProps) {

    const image_attch = images.find(elem => elem.attachment_xray === "false")
    const xray_attch = images.find(elem => elem.attachment_xray === "true")

    const [states, setStates] = useState({
        attachment: '',
        xray: ''
    })

    const FileOnchange = async (files: FileList | null, type: string) => {

        if (files === null) return;

        const filename = files[0].name

        if (type === "xray") setStates(state => ({ ...state, xray: filename }));

        if (type === "attachment") setStates(state => ({ ...state, attachment: filename }));

        const form = new FormData();
        form.append('file', files[0]);

        const res = await fetch(`/api/patient-image-upload`, {
            method: "POST",
            body: form
        }).then((res) => res.json());

        console.log(res);
    }
    return (
        <section className="flex flex-col gap-5">
            <div className="title flex text-xl items-center justify-between pl-4 pr-4">
                <h1>Patient Summary</h1>
                <h1>File No: {String(curPatient.patient_id).padStart(4, '0')}</h1>
            </div>
            <hr />
            <div className="flex justify-center items-center flex-col gap-1">
                <img className="w-40 h-40 rounded-full" src="https://i.kym-cdn.com/entries/icons/facebook/000/046/895/huh_cat.jpg" />
                <p className="text-xl mt-5">{curPatient.patient_name}</p>
                <p className="text-sm">{curPatient.patient_address}</p>
            </div>
            <div className="header flex justify-center mt-10">
                <div className="info-1 w-3/4 flex gap-4">
                    <div className="flex flex-col gap-2 w-full">
                        <div className="flex justify-between">
                            <p>Email: </p>
                            <p>{curPatient.patient_email}</p>
                        </div>
                        <hr />
                        <div className="flex justify-between">
                            <p>Contact No: </p>
                            <p>{curPatient.patient_contact}</p>
                        </div>
                        <hr />
                        <div className="flex justify-between">
                            <p>Date of Birth: </p>
                            <p>{new Date(curPatient.date_of_birth).toDateString()}</p>
                        </div>
                        <hr />
                        <div className="flex justify-between">
                            <p>Status: </p>
                            <p>{curPatient.patient_status}</p>
                        </div>
                        <hr />
                        <div className="flex justify-between">
                            <p>Age: </p>
                            <p>{curPatient.patient_age}</p>
                        </div>
                        <hr />
                        <div className="flex justify-between">
                            <p>Sex: </p>
                            <p>{curPatient.patient_sex}</p>
                        </div>
                        <hr />
                        <div className="flex justify-between">
                            <p>Occupation: </p>
                            <p>{curPatient.patient_occupation}</p>
                        </div>
                        <hr />
                        <div className="flex justify-between">
                            <p>Reffered by: </p>
                            <p>{curPatient.patient_reference}</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="dental-rec">
                <p className="title text-xl flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                    </svg>
                    Dental Service Record Summary
                </p>
                <div className="flex justify-center items-center">
                    <div className="info-1 w-3/4 flex gap-4">
                        <div className="flex w-full justify-between mt-10">
                            <p>Age:</p>
                            <p>20</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="previous-history">
                <p className="title text-xl flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                    </svg>
                    Previous History
                </p>
                <div className="flex flex-col justify-center items-center">
                    <div className="info-1 w-3/4 flex gap-4">
                        <div className="flex w-full justify-between mt-10">
                            <p>Diabetes:</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                {curPatient.diabetes === "false" ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                )}
                            </svg>
                        </div>
                    </div>
                    <div className="info-1 w-3/4 flex gap-4">
                        <div className="flex w-full justify-between mt-10">
                            <p>Bleeding Tendency:</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                {curPatient.bleeding_tendency === "false" ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                )}
                            </svg>
                        </div>
                    </div>
                    <div className="info-1 w-3/4 flex gap-4">
                        <div className="flex w-full justify-between mt-10">
                            <p>Drug Sensitivity:</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                {curPatient.drug_sensitivity === "false" ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                )}
                            </svg>
                        </div>
                    </div>
                    <div className="info-1 w-3/4 flex gap-4">
                        <div className="flex w-full justify-between mt-10">
                            <p>Heart Condition:</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                {curPatient.heart_condition === "false" ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                )}
                            </svg>
                        </div>
                    </div>
                    <div className="info-1 w-3/4 flex gap-4">
                        <div className="flex w-full justify-between mt-10">
                            <p>Rheumatic Fever:</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                {curPatient.rheumatic_fever === "false" ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                )}
                            </svg>
                        </div>
                    </div>
                    <div className="info-1 w-3/4 flex gap-4">
                        <div className="flex w-full justify-between mt-10">
                            <p>Blood Pressure:</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                {curPatient.blood_pressure === "false" ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                )}
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="Attachments">
                <p className="title text-xl flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                    </svg>
                    Attachments
                </p>
                <div className="flex justify-center items-center">
                    <div className="info-1 w-3/4 flex flex-col gap-4">
                        <div className="flex w-full justify-between mt-10">
                            <p>Attachments:</p>
                            {
                                image_attch ? (
                                    <p>{image_attch.image_url}</p>
                                ) : (
                                    <div className="flex flex-col gap-1">
                                        <p className="flex justify-end">{states.attachment === "" ? "No Image attachment" : states.attachment}</p>
                                        <div>
                                            <label htmlFor="file1" className="btn p-1 border border-1 border-black rounded">Select Image</label>
                                            <input className="hidden" onChange={(event) => FileOnchange(event.currentTarget.files, "attachment")} id="file1" type="file" />
                                        </div>

                                    </div>
                                )
                            }
                        </div>
                        <div className="flex w-full justify-between mt-10">
                            <p>X-Ray:</p>
                            {
                                xray_attch ? (
                                    <p>{xray_attch.image_url}</p>
                                ) : (
                                    <div className="flex flex-col gap-1">
                                        <p className="flex justify-end">{states.xray === "" ? "No X-Ray attachment" : states.xray}</p>
                                        <div>
                                            <label htmlFor="file2" className="btn p-1 border border-1 border-black rounded">Select Image</label>
                                            <input className="hidden" onChange={(event) => FileOnchange(event.currentTarget.files, "xray")} id="file2" type="file" />
                                        </div>

                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="balance">
                <p className="title text-xl flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                    </svg>
                    Balance
                </p>
                <div className="flex justify-center items-center">
                    <div className="info-1 w-3/4 flex gap-4">
                        <div className="flex w-full justify-between mt-10">
                            <p>Payment:</p>
                            <p>20000.00</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </section>
    )
}