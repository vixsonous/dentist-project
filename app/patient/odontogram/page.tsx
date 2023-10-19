"use client";
import Menu from "@/app/global-components/Menu";
import Odontogram from "./odontogram";
import Link from "next/link";
import { useState } from "react";
import Modal from "@/app/global-components/Modal";
import PatientRecord from "../patientRecord";


export default function Orthodontics() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Menu />
            <div className="flex min-h-screen flex-col justify-center items-center">
                <div className="container flex flex-col gap-1">
                    <section className="flex items-center w-full gap-1 justify-between p-2 rounded border-2 border-gray-300">
                        <PatientRecord setOpen={setOpen}/>
                        <div className="flex gap-2">
                            <Link href="/patient/dentalrecord">Dental Service Record</Link>
                            <span>|</span>
                            <Link href="/patient/odontogram">Odontogram</Link>
                            <span>|</span>
                            <Link href="/patient/dentalrecord">Previous History</Link>
                            <span>|</span>
                            <Link href="/patient/dentalrecord">Attachments</Link>
                            <span>|</span>
                            <Link href="/patient/dentalrecord">Balance</Link>
                        </div>
                    </section>
                    <Odontogram />
                </div>
            </div>
            <Modal open={open} onClose={() => setOpen(false)}>
                <h1>Information</h1>
            </Modal>
        </div>
    )
}