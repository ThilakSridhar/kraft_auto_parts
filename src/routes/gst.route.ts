import express from "express";
import {
  getAllgsts,
  getgstByCode,
  creategst,
  updategst,
  deletegst,
} from "../controllers/gst.controller";

export const Router = express.Router();

Router.get("/gsts", getAllgsts);
Router.get("/gst/:gstNo", getgstByCode);
Router.post("/gst", creategst);
Router.patch("/gst/:id", updategst);
Router.delete("/gst/:id", deletegst);
