import Link from "next/link";
import Menu from "@/app/global-components/Menu";
import { PrismaClient } from "@prisma/client";
import { GetServerSideProps } from "next";

export interface Props {
    patient_id: Number
    patient_name: String
}

export const getServerSideProps:GetServerSideProps = async(context) => {
    const prisma = new PrismaClient()
    
    const patientList = await prisma.patient_record.findMany();

    return {
        props: {
            data: []
        }
    }
}

export default function Patients() {
    const patientList:Array<Props> = []
    return (
        <div>
            <Menu />
            <div className="min-h-screen flex flex-col justify-center items-center">
                <section className="w-3/4 h-3/4 border-2">
                    <div className="flex flex-col gap-1">
                    {
                        patientList.map((el) => {
                            return (
                                <div>
                                    <Link className="p-4" href={`/patient/${el.patient_id}`}>{el.patient_name}</Link>
                                    <hr/>
                                </div>
                            )
                        })
                    }
                    </div>
                </section>
            </div>
        </div>
    )
}