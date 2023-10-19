import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();

export default async function handle(req:NextApiRequest, res:NextApiResponse) {

  const posts = await prisma.odontogram.findMany();

  res.json(posts)

}