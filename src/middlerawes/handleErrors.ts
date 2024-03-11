import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { AppError } from "../errors/AppError";

export class handleErrors {
    execute = (error: Error, req: Request, res: Response, next: NextFunction): Response => {
        if(error instanceof ZodError){
            return res.status(400).json({message: error.errors})
        }
        if(error instanceof AppError){
            return res.status(error.statusCode).json({message: error.message})
        }
        console.log(error)
        return res.status(500).json({message: "Internal Server Error"})
    }
}