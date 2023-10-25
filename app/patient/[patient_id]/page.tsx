import Link from "next/link";
import PatientRecord from "../patientRecord";
import { PrismaClient } from "@prisma/client";
import { GetServerSideProps, GetStaticPaths } from "next";
import Menu from "@/app/global-components/Menu";
import { FC } from "react";

type PatientDetail = {
    id: number,
    name: String,
    age: number
}

interface PatientProps {
    patientDetail: PatientDetail
}

interface pageProps {
    params: {patient_id: String}
}

const Home: FC<pageProps> = ({params}:pageProps) =>{
    
    return (
        <div>
            <Menu />
            <div className="min-h-screen flex flex-col justify-center items-center">
                <div className="container flex flex-col gap-1">
                    <section>
                        <PatientRecord patient_id={params.patient_id}/>
                    </section>
                    <section>
                        <Link href={`/patient/odontogram/${params.patient_id}`}>Odontogram</Link>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Home;