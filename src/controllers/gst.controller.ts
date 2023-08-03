import { Prisma, PrismaClient, Customer } from "@prisma/client";
import { Request, Response } from "express";

type CustomerCreateInput = Prisma.gstCreateInput;
type CustomerUpdateInput = Prisma.gstUpdateInput;

const prisma = new PrismaClient();

export async function getAllgsts(req: Request, res: Response) {
  const gsts = await prisma.gst.findMany();
  return res.json(gsts);
}

export async function getgstByCode(req: Request, res: Response) {
  const gstNo = req.params.gstNo; // Fixed: use req.params.gstNo instead of req.params.id

  console.log(gstNo, "gstNo"); // Print the correct variable name

  const gst = await prisma.gst.findUnique({
    where: { gstNumber: gstNo }, // Corrected to search by gstNumber
  });

  return res.json(gst);
}

export async function creategst(req: Request, res: Response) {
  const gstData: CustomerCreateInput = req.body.data; // Updated type name to CustomerCreateInput
  console.log(req.body);

  const gst = await prisma.gst.create({
    data: gstData,
  });
  return res.json(gst);
}

export async function updategst(req: Request, res: Response) {
  const id = Number(req.params.id); // Parse the ID to a number
  const data: CustomerUpdateInput = req.body.data; // Updated type name to CustomerUpdateInput

  const gst = await prisma.gst.update({
    where: { id: id }, // Use the parsed id variable here
    data,
  });
  return res.json(gst);
}

export async function deletegst(req: Request, res: Response) {
  const id = Number(req.params.id); // Parse the ID to a number
  const gst = await prisma.gst.delete({
    where: { id: id }, // Use the parsed id variable here
  });
  return res.json(gst);
}
