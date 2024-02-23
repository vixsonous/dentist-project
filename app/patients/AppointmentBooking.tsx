import { useState } from "react";
import Modal from "../global-components/Modal";
import BookingCalendar from "../global-components/BookingCalendar";
import { clinic_users, patient_record } from "@prisma/client";

interface pageProps {
    patientlist: Array<patient_record>
    doclist: Array<clinic_users>
}

const AppointmentBooking = ({ patientlist, doclist }: pageProps) => {
    const [open, setOpen] = useState(false);
    return (
        <section>
            <BookingCalendar patientlist={patientlist} doclist={doclist} />
        </section>
    );
}

export default AppointmentBooking;