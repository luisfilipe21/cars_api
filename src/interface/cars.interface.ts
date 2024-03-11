import { z } from "zod";
import { createCarSchema, updateCarSchema } from "../schemas/cars.schemas";

export type CreateCar = z.infer<typeof createCarSchema>;
export type UpdateCar = z.infer<typeof updateCarSchema>;