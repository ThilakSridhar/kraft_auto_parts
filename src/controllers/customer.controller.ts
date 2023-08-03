import { Prisma, PrismaClient, Customer } from "@prisma/client";
import { Request, Response } from "express";

type CustomerCreateInput = Prisma.CustomerCreateInput;
type CustomerUpdateInput = Prisma.CustomerUpdateInput;

const prisma = new PrismaClient();

export async function getAllCustomers(req: Request, res: Response) {
  const customers = await prisma.customer.findMany();
  return res.send(customers);
}

export async function getCustomerByCode(req: Request, res: Response) {
  const customerCode = req.params.customerCode;

  console.log(customerCode, "customerCode");

  const customer = await prisma.customer.findUnique({
    where: { customerCode: Number(customerCode) },
  });

  return res.json(customer);
}

export async function createCustomer(req: Request, res: Response) {
  const customerData: CustomerCreateInput = req.body.customerData;
console.log (req.body)
  const customer = await prisma.customer.create({
    data: customerData,
  });
  return res.json(customer);
}

export async function updateCustomer(req: Request, res: Response) {
  // customerCode: number, data: CustomerUpdateInput
  const customerCode= req.params.customerCode;
  const data: CustomerUpdateInput = req.body;
    const customer = await prisma.customer.update({
    where: { customerCode: Number (customerCode) },
    data,
  });
  return res.json(customer);
}

export async function deleteCustomer(req: Request, res: Response) {
  // customerCode: number
  const customerCode = req.params.customerCode;
  const customer = await prisma.customer.delete({
    where: { customerCode: Number(customerCode) },
  });
  return res.json(customer) ;
}
