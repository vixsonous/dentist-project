export default function PatientSummary() {
    return (
        <section className="flex flex-col gap-5">
            <div className="title">
                <h1 className="text-xl font-bold">Patient Summary</h1>
            </div>
            <hr />
            <div className="header flex justify-between">
                <div className="info-1 flex flex-col gap-4">
                    <p>Patient Information: </p>
                    <p>Name: Victor Chiong</p>
                    <p>
                        Address: Hansoy, Kaosdke Koke Rd. Kaogdot, Cebu City, Cebu
                    </p>
                    <p>Email: cjvicro@gmail.com</p>
                    <p>Contact No: 09672510357</p>
                    <p>Date of Birth: 1998-05-25</p>
                </div>
                <div className="info-2 flex flex-col gap-4">
                    <p>File No: 0041</p>
                    <p>Status: Married</p>
                    <p>Age: 20</p>
                    <p>Sex: M</p>
                    <p>Occupation: Student</p>
                    <p>Reffered by: Dr. Tanya Stark</p>
                </div>
            </div>
            <hr />
            <div className="dental-rec">
                <p className="title font-bold text-xl">Dental Record Summary</p>
            </div>
            <hr />
            <div className="odontogram-summary">
                <p className="title font-bold text-xl">
                    Odontogram-summary
                </p>
            </div>
            <hr />
            <div className="previous-history">
                <p className="title font-bold text-xl">
                    Previous History
                </p>
            </div>
            <hr />
            <div className="Attachments">
                <p className="title font-bold text-xl">
                    Attachments
                </p>
            </div>
            <hr />
            <div className="balance">
                <p className="title font-bold text-xl">
                    Balance
                </p>
            </div>
        </section>
    )
}