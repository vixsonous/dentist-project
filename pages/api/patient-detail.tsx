import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default function PatientDetail(req: NextApiRequest, res: NextApiResponse) {
    const {
        query: {patient_id},
        method
    } = req;

    const prisma = new PrismaClient();
}