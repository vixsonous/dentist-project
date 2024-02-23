import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function GetAppointment(req: NextApiRequest, res: NextApiResponse) {
    const {
        query: { month, year },
        method
    } = req;

    const prisma = new PrismaClient();

    const stDate = new Date();
    stDate.setUTCMonth(Number(month) - 1);
    stDate.setUTCFullYear(Number(year));
    stDate.setDate(1);
    stDate.setHours(0, 0, 0, 0);

    const etDate = new Date();
    etDate.setUTCMonth(Number(month) - 1);
    etDate.setUTCFullYear(Number(year));
    etDate.setDate(31);
    etDate.setHours(24, 0, 0, 0);

    const schedules = await prisma.scheduled_appointments.findMany({
        where: {
            date_of_appointment: {
                gte: stDate,
                lte: etDate
            }
        }
    });

    return res.status(200).json({ responseSts: 200, responseBody: schedules, responseMsg: "Success" })
}