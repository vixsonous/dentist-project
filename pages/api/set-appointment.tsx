import { Prisma, PrismaClient, scheduled_appointments_waitlist } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function SetAppointment(req: NextApiRequest, res: NextApiResponse) {
    const {
        query: { pid, did, st, et, d },
        method
    } = req;

    const prisma = new PrismaClient();

    if (!pid || !did || !st || !et) res.status(500).json({ responseSts: 500, responseMsg: "Error: Missing Parameters! " });

    const stDate = new Date();
    const stString = String(st);
    stDate.setUTCHours(0, 0, 0, 0);
    stDate.setUTCHours(Number(stString.split(":")[0]));
    stDate.setUTCMinutes(Number(stString.split(":")[1]));

    const etDate = new Date();
    const etString = String(et);
    etDate.setUTCHours(0, 0, 0, 0);
    etDate.setUTCHours(Number(etString.split(":")[0]));
    etDate.setUTCMinutes(Number(etString.split(":")[1]));

    const sched = await prisma.scheduled_appointments.create({
        data: {
            patient_id: Number(pid),
            date_of_appointment: new Date(String(d)),
            start_time: stDate,
            end_time: etDate,
            doc_id: Number(did),
            waitlist: scheduled_appointments_waitlist.true,
            event: 'tooth_extract'
        }
    });

    res.status(200).json({ responseSts: 200, responseBody: sched, responseMsg: "Success" });
}