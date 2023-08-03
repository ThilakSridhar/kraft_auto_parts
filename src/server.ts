import express from "express";
import { Router as customerRoute } from "./routes/customer.route";
import { Router as gstRoute } from "./routes/gst.route";
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get("/health", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", customerRoute);
app.use("/api", gstRoute);

app.listen(3333, () => {
  console.log("Server is running on port 3333");
});
