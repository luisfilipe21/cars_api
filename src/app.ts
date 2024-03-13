import "express-async-errors";
import "dotenv/config";
import express, { Application, json } from "express";
import { carRouter } from "./router/cars.router";
import { HandleErrors } from "./middlerawes/handleErrors";
import helmet from "helmet";

export const app: Application = express();
const handleError = new HandleErrors();

app.use(helmet());
app.use(json());

app.use("/cars", carRouter);

app.use(handleError.execute);