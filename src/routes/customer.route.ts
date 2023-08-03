import express from "express";
import {
  createCustomer,
  deleteCustomer,
  getAllCustomers,
  getCustomerByCode,
  updateCustomer,
} from "../controllers/customer.controller";

export const Router = express.Router();

Router.get("/customers", getAllCustomers);
Router.get("/customer/:customerCode", getCustomerByCode);
Router.post("/customer", createCustomer);
Router.patch("/customer/:customerCode", updateCustomer);
Router.delete("/customer/:customerCode", deleteCustomer);
