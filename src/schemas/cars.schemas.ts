import { z } from "zod";

export const carsSchema = z.object({
    id: z.number().positive(),
    name: z.string().min(1),
    description: z.string().nullable(),
    brand: z.string().min(2),
    year: z.number().positive().min(2),
    km: z.number().positive().min(1)
})



export const createCarSchema = carsSchema.omit({id: true});
export const updateCarSchema = createCarSchema.partial();
