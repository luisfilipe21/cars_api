import "express-async-errors";
import express, { Application, json } from "express";
import "dotenv/config";
import { carRouter } from "./router/cars.router";
import { handleErrors } from "./middlerawes/handleErrors";

export const app: Application = express();
const handleError = new handleErrors();
app.use(json());

app.use("/cars", carRouter);

app.use(handleError.execute)