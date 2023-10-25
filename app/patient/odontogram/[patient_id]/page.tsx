"use client";
import Menu from "@/app/global-components/Menu";
import Odontogram from "../odontogram";
import Link from "next/link";
import { FC, useState } from "react";
import Modal from "@/app/global-components/Modal";
import PatientRecord from "../../patientRecord";

interface pageProps {
    params: {patient_id: String}
}

const Orthodontics:FC<pageProps>  = ({params}) => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Menu />
            <div className="flex min-h-screen flex-col justify-center items-center">
                <div className="container flex flex-col gap-1">
                    <PatientRecord patient_id={params.patient_id}/>
                    <Odontogram patient_id={params.patient_id} />
                </div>
            </div>
            <Modal open={open} onClose={() => setOpen(false)}>
                <h1>Information</h1>
            </Modal>
        </div>
    )
}

export default Orthodontics;