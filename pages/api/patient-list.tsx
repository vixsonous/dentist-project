import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();

export default async function handle(req:NextApiRequest, res:NextApiResponse) {

  const patient_list = await prisma.patient_record.findMany();

  res.json(patient_list)

}