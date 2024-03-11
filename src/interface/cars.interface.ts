import { z } from "zod";
import { createCarSchema, returnCarSchema, updateCarSchema } from "../schemas/cars.schemas";

export type CreateCar = z.infer<typeof createCarSchema>;
export type UpdateCar = z.infer<typeof updateCarSchema>;
export type ReturnCar = z.infer<typeof returnCarSchema>