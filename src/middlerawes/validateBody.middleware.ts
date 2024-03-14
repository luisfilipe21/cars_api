import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import { prisma } from "../database/prisma";
import { AppError } from "../errors/AppError";

export class ValidateBody {
    execute = (schema: AnyZodObject) => {
        return (req: Request, res: Response, next: NextFunction) => {
            req.body = schema.parse(req.body);
            return next();
        }
    }

    isIdValid = async (req: Request, res: Response, next: NextFunction) => {
        const carId = req.params.id;
        
        const validId = await prisma.cars.findFirst({ where: {id: carId}})

        if(!validId) {
            throw new AppError(404, "Carro não encontrado.")
        }
        return next();
    }
}