import Express from "express";
import { config } from "dotenv";
import moment from "moment";

import "./database/index.js";
import appRouter from "./routes/index.js";

config();

const app = Express();
app.use(Express.json());

app.use("/", appRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Server is Running",
    time: moment(new Date()).toISOString(),
  });
});

app.listen(process.env.PORT, () => {
  console.log(`server listning at http://localhost:${process.env.PORT}`);
});
