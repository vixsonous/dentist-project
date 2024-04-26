"use client"
import Modal from "@/app/global-components/Modal"
import { PrismaClient } from "@prisma/client"
import { NextApiRequest } from "next"
import Link from "next/link"
import { Dispatch, SetStateAction, useState } from "react"

type PatientRecordProps = {
    patient_id: String
}

export default function PatientRecord({ patient_id }: PatientRecordProps) {
    const prisma = new PrismaClient();
    const [open, setOpen] = useState(false);
    return (

        <div>
            <section className="flex items-center w-full gap-1 justify-between mt-[50px] p-2 rounded border-2 border-gray-300">
                <div className="min-w-screen">
                    <h1 className="text-xl"><span className="font-medium">Patient:</span> Victor Chiong</h1>
                    <span>Hansoy, Kaosdke Koke Rd. Kaogdot, Cebu City, Cebu</span>
                    <br />
                    <button className="text-sm" onClick={() => setOpen(true)}>See full details</button>
                </div>
            </section>
            <Modal size="M" title={"asdasd"} open={open} onClose={() => setOpen(false)}>
                <h1>asdasd</h1>
            </Modal>
        </div>
    )
}