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
                    <PatientRecord />
                    <Odontogram />
                </div>
            </div>
            <Modal open={open} onClose={() => setOpen(false)}>
                <h1>Information</h1>
            </Modal>
        </div>
    )
}