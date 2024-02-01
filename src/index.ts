import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
require("dotenv").config();

import router from "./router";

const app = express();

app.use(
  cors({
    credentials: false,
  })
);

// app.use(compression());
// app.use(cookieParser());
app.use(bodyParser.json());

router(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});

const MONGO_URL = process.env.MONGO_URL;

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("connected", () => console.log("Connected to MongoDB"));
mongoose.connection.on("error", (error: Error) => console.log(error));
