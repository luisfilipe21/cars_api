import { z } from "zod";

export const carsSchema = z.object({
    id: z.string(),
    name: z.string().min(1),
    description: z.string().nullable(),
    brand: z.string().min(2),
    year: z.number().positive().gt(1950),
    km: z.number().positive().min(1)
})



export const createCarSchema = carsSchema.omit({id: true});
export const updateCarSchema = createCarSchema.partial();
export const returnCarSchema = carsSchema;
