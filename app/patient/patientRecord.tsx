import { PrismaClient } from "@prisma/client"
import { NextApiRequest } from "next"
import { Dispatch, SetStateAction } from "react"

type PatientRecordProps = {
    setOpen: Dispatch<SetStateAction<boolean>>
}

export default function PatientRecord({setOpen} : PatientRecordProps) {
    const prisma = new PrismaClient();
    
    return (
        <div className="">
            <h1 className="text-xl"><span className="font-medium">Patient:</span> Victor Chiong</h1>
            <span>Hansoy, Kaosdke Koke Rd. Kaogdot, Cebu City, Cebu</span>
            <br />
            <button className="text-sm" onClick={() => setOpen(true)}>See full details</button>
        </div>
    )
}