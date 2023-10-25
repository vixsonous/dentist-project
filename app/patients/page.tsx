import Link from "next/link";
import Menu from "@/app/global-components/Menu";
import { PrismaClient } from "@prisma/client";
import { GetServerSideProps } from "next";
import Patients from "./Patients";

export interface Props {
    patient_id: Number
    patient_name: String
}

function getPatients() {
    const prisma = new PrismaClient();
    return prisma.patient_record.findMany();
}

const patientMsOver = () => {
    console.log('mousever');
}

export default async function PatientsList() {
    const patients = await getPatients();

    
    return (
        <div>
            <Menu />
            <Patients patient_list={patients}/>
        </div>
    )
}