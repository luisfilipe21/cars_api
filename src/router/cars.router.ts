import { Router } from "express";
import { CarsController } from "../controller/cars.controllers";

export const carRouter = Router();
const controller = new CarsController();

carRouter.post("/", controller.create);
carRouter.get("/", controller.readMany);

carRouter.get("/:id", controller.readOne);
carRouter.patch("/:id", controller.update);
carRouter.delete("/:id", controller.delete);