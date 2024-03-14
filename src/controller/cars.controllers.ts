import { Request, Response } from "express";
import { CarService } from "../service/cars.service";

export class CarsController {
    private carService = new CarService();

    create = async (req: Request, res: Response): Promise<Response> => {
        const newCar = await this.carService.create(req.body); 
        return res.status(201).json(newCar);
    }

    readOne = async (req: Request, res: Response): Promise<Response> => {
        const car = await this.carService.readOne(req.params.id);
        return res.status(200).json(car);
    }

    readMany = async (req: Request, res: Response): Promise<Response> =>{
        const allCars = await this.carService.readMany();
        return res.status(200).json(allCars);
    }

    update = async (req: Request, res: Response): Promise<Response> =>{
        const updatedCar = await this.carService.update(req.body, req.params.id);
        return res.status(200).json(updatedCar)
    }

    delete = async (req: Request, res: Response): Promise<Response> =>{
        await this.carService.delete(req.params.id);
        return res.status(204).json();
    }
}