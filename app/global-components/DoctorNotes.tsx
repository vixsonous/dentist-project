import { odontogram } from "@prisma/client"

interface pageProps {
    tooth_no: String,
    tooth_pos: String,
    doctor_notes: Array<odontogram>
}
export default function DoctorNotes({tooth_no, tooth_pos, doctor_notes}: pageProps) {
    
    return (
        <article className="container">
            <div className="header flex justify-between">
                <div className="tooth_no mr-20">
                    Tooth Number: {tooth_no}
                </div>
                <div className="tooth_pos">
                    Tooth Position: {tooth_pos}
                </div>
            </div>
            <hr/>
            <div className="doctor-notes">
                <table className="table-fixed min-w-screen">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Doctor</th>
                            <th>Diagnosis</th>
                            <th>Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctor_notes.map((el, idx) => {
                                const date = new Date(el.date);
                                const day = date.getDate();
                                const month = date.getMonth();
                                const year = date.getFullYear();
                                return (
                                    <tr key={idx} className="note p-2 mt-6 mb-6 border-solid rounded-xl border-2 border-black">
                                        <td>{`${year}-${month}-${day}`}</td>
                                        <td>{el.doc_id}</td>
                                        <td>{el.diagnosis_observ}</td>
                                        <td>{el.remarks}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                
            </div>
        </article>
    )
}