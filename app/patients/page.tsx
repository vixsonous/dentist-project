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

function getDoctors() {
    const prisma = new PrismaClient();
    return prisma.clinic_users.findMany({
        where: {
            occupation: 'Doctor'
        }
    });
}

const patientMsOver = () => {
    console.log('mousever');
}

export default async function PatientsList() {
    const patients = await getPatients();
    const doctors = await getDoctors();


    return (
        <div>
            <Menu />
            <Patients patient_list={patients} doctor_list={doctors} />
        </div>
    )
}