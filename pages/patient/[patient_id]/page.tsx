import Link from "next/link";
import PatientRecord from "../patientRecord";
import { PrismaClient } from "@prisma/client";
import { GetServerSideProps, GetStaticPaths } from "next";
import Menu from "@/app/global-components/Menu";

type PatientDetail = {
    id: number,
    name: String,
    age: number
}

interface PatientProps {
    patientDetail: PatientDetail
}

const prisma = new PrismaClient();

export const getStaticPaths:GetStaticPaths = async () => {
    
    const patientList = await prisma.patient_record.findMany();

    const paths = patientList.map((el) => {
        return {
            params: {
                patient: el.patient_id.toString()
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getServerSideProps:GetServerSideProps = async (context) => {
    const patientDetails = await prisma.patient_record.findUnique({
        where: {
            patient_id: 12
        }
    });

    return {
        props: {
            data: patientDetails
        }
    }
}


export default function Home(){

    return (
        <div>
            <Menu />
            <div className="min-h-screen flex flex-col justify-center items-center">
                <div className="container flex flex-col gap-1">
                    <section>
                        <PatientRecord/>
                    </section>
                    <section>
                        <Link href="/patient/odontogram">Odontogram</Link>
                    </section>
                </div>
            </div>
        </div>
    )
}