import { useState } from "react";
import Modal from "../global-components/Modal";

const AppointmentBooking = () => {
    const [open, setOpen] = useState(false);
    return (
        <section>
            <button type="button" onClick={() => setOpen(true)} className="bg-[#F2F1EB] p-3 rounded-lg shadow-xl border-2 hover:bg-[#AFC8AD]">Book an Appointment</button>
            <Modal title={"Appointment Booking"} open={open} onClose={() => setOpen(false)}>
                <h1>Book Appointment</h1>
            </Modal>
        </section>
    );
}

export default AppointmentBooking;