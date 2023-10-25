import Link from "next/link";

type patient = {
    patient_id: String,
    patient_name: String
}
interface pageProps {
    patient: patient
}

export default function PatientLink({patient}:pageProps) {
    return (
        <div>
            <Link className="p-4" href={`/patient/${patient.patient_id}`}>{patient.patient_name}</Link>
            <hr/>
        </div>
    )
}