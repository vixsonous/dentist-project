import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function PatientAttachments(req: NextApiRequest, res: NextApiResponse) {
    const {
        query: { patient_id },
        method
    } = req;

    const prisma = new PrismaClient();

    const patient_attachments = await prisma.image_attachments.findMany({
        where: {
            patient_id: Number(patient_id)
        }
    });

    return res.status(200).json({ responseSts: 200, responseBody: patient_attachments, responseMsg: "Success" })
}