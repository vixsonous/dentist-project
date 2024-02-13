import { Prisma, PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function AppointmentSched(req: NextApiRequest, res: NextApiResponse) {
    const {
        query: { dy, mnth, yr },
        method
    } = req;

    const prisma = new PrismaClient();

    const sched = await prisma.$queryRaw(
        Prisma.sql`SELECT * FROM scheduled_appointments sa INNER JOIN patient_record pr ON sa.patient_id = pr.patient_id WHERE sa.date_of_appointment = ${new Date(`${yr}-${mnth}-${dy ? Number(dy) + 1 : dy}`).toISOString().split("T")[0]}`
    )

    res.status(200).json({ responseSts: 200, responseBody: sched, responseMsg: "Success" });
}