import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function PatientDetail(req: NextApiRequest, res: NextApiResponse) {
    const {
        query: {patient_id},
        method
    } = req;

    const prisma = new PrismaClient();

    const patient_detail = await prisma.patient_record.findUnique({
        where: {
            patient_id : Number(patient_id)
        }
    });

    return res.status(200).json({ responseSts: 200, responseBody: patient_detail, responseMsg: "Success" })
}