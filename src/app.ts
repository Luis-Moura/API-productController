import express from "express";
import { router } from "./routes/routes";
import path from "path";
import cors from "cors";
import bodyParser from "body-parser";

import * as dotenv from "dotenv";
dotenv.config();

export const app = express();

const corsOptions = {
    origin: process.env.FRONT_END_URL,
    optionsSuccessStatus: 200,
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(express.json());
app.use(router);
app.use(express.static(path.join(__dirname, "../public")));
