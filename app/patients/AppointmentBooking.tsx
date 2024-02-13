import { useState } from "react";
import Modal from "../global-components/Modal";
import BookingCalendar from "../global-components/BookingCalendar";
import { clinic_users } from "@prisma/client";

interface pageProps {
    doclist: Array<clinic_users>
}

const AppointmentBooking = ({ doclist }: pageProps) => {
    const [open, setOpen] = useState(false);
    return (
        <section>
            <button type="button" onClick={() => setOpen(true)} className="bg-[#F2F1EB] p-3 rounded-lg shadow-xl border-2 hover:bg-[#AFC8AD]">Book an Appointment</button>
            <Modal title={"Appointment Booking"} open={open} onClose={() => setOpen(false)}>
                <BookingCalendar doclist={doclist} />
            </Modal>
        </section>
    );
}

export default AppointmentBooking;