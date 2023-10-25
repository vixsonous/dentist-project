import { PrismaClient, odontogram_position } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();

export default async function handle(req:NextApiRequest, res:NextApiResponse) {
  const {
    query: {patient_id, tooth_pos, doctor_id, tooth_no},
    method
  } = req;

  let tooth_position;
  if(tooth_pos === '0' ) tooth_position = odontogram_position.Center
  if(tooth_pos === '1' ) tooth_position = odontogram_position.Front
  if(tooth_pos === '2' ) tooth_position = odontogram_position.Left
  if(tooth_pos === '3' ) tooth_position = odontogram_position.Right
  if(tooth_pos === '4' ) tooth_position = odontogram_position.Back

  const notes = await prisma.odontogram.findMany({
    where: {
      patient_id : {
        equals: Number(patient_id)
      },
      position : {
        equals: tooth_position
      },
      tooth_no: {
        equals: Number(tooth_no)
      }
    }
  });

  return res.status(200).json({ responseSts: 200, responseBody: notes, responseMsg: "Success" });
}