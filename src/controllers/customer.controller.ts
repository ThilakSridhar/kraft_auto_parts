import { Prisma, PrismaClient,  } from "@prisma/client";
import {NextFunction, Request, Response } from "express";

import CustomError from "../utils/GlobalErrorHandler";


type CustomerCreateInput = Prisma.CustomerCreateInput;
type CustomerUpdateInput = Prisma.CustomerUpdateInput;

const prisma = new PrismaClient();

export async function getAllCustomers(req: Request, res: Response, next: NextFunction) 
{
  try {
    const customers = await prisma.customer.findMany();

    if (!customers) throw new CustomError("Customer not found", 424);

    return res.send(customers);

  } catch (error) {
    next(error);
  }
 
}

export async function getCustomerByCode(req: Request, res: Response, next: NextFunction) {
  try {
    const customerCode = Number(req.params.customerCode);

    const customer = await prisma.customer.findUnique({
      where: { customerCode },
    });

    if (!customer) throw new CustomError("Customer not found", 404);

    return res.status(200).json(customer);
  } catch (error) {
    next(error);
  }
}

export async function createCustomer(req: Request, res: Response , next: NextFunction) {
  try {
    const customerData: CustomerCreateInput = req.body.customerData;

    const customer = await prisma.customer.create({
      data: customerData,
    });
    if (!customer) throw new CustomError("Customer cannot be created", 424);

    return res.json(customer);
  } catch (error) {
    next(error);
  }
 
}

export async function updateCustomer(req: Request, res: Response , next: NextFunction) {
  try {
    const customerCode= Number (req.params.customerCode);
  const data: CustomerUpdateInput = req.body;
    const customer = await prisma.customer.update({
    where: { customerCode },
    data,
  });
  if (!customer) throw new CustomError("Customer cannot be updated", 434);

  return res.json(customer);
  } catch (error) {
   next(error); 
  }
  
}

export async function deleteCustomer(req: Request, res: Response , next: NextFunction) {
  try {
    const customerCode = Number(req.params.customerCode);
  const customer = await prisma.customer.delete({
    where: { customerCode },
  });
  if (!customer) throw new CustomError("Customer not create", 444);

  return res.json(customer) ;
  } catch (error) {
    next(error);
  }
  
}
