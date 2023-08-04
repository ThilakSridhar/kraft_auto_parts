import express from "express";
import CustomError, { globalErrorHandler } from "./utils/GlobalErrorHandler";

import { Router as customerRoute } from "./routes/customer.route";
import { Router as gstRoute } from "./routes/gst.route";

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(express.urlencoded());

app.get("/health", (req, res) => {
  res.send("Hello World!");
});

app.get("/error", (req, res, next) => {
  try {
    throw new CustomError("Test Error Check", 424);
  } catch (error) {
    next(error);
  }
});




app.use("/api", customerRoute);
app.use("/api", gstRoute);


app.all("*", (req, res, next) => {
  const error = new CustomError(`Can't find ${req.originalUrl} on the server!`, 404);
  next(error);
});

app.use(globalErrorHandler);
 
const server = app.listen(port, () => {
  try {
    console.log(`Server is running on port ${port}`);
  } catch (error) {
    console.error(error);
  }
});

// app.listen(3333, () => {
//   console.log("Server is running on port 3333");
// });
