import { Router } from "express";
import { CarsController } from "../controller/cars.controllers";
import { ValidateBody } from "../middlerawes/validateBody.middleware";
import { createCarSchema, updateCarSchema } from "../schemas/cars.schemas";

export const carRouter = Router();

const controller = new CarsController();
const validate = new ValidateBody()

carRouter.post("/", validate.execute(createCarSchema), controller.create);
carRouter.get("/", controller.readMany);

carRouter.get("/:id", controller.readOne);
carRouter.patch("/:id", validate.execute(updateCarSchema), controller.update);
carRouter.delete("/:id", controller.delete);