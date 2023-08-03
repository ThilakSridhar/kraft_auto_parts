import express from "express";
import { Router as customerRoute } from "./routes/customer.route";

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get("/health", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", customerRoute);

app.listen(3333, () => {
  console.log("Server is running on port 3333");
});
