import { Cars } from "@prisma/client"
import { carsSchema, returnCarSchema } from "../schemas/cars.schemas"
import { prisma } from "../database/prisma"
import { CreateCar, ReturnCar, UpdateCar } from "../interface/cars.interface"

export class CarService {

    create = async (body: CreateCar): Promise<ReturnCar> => {
        const newCar =await prisma.cars.create({ data: body });
        return returnCarSchema.parse(newCar)
    }

    readMany = async (): Promise<Cars[]> => {
        return await prisma.cars.findMany();
    }

    readOne = async (index: string) => {
        return await prisma.cars.findUnique({ where: { id: index } })
    }

    update = async (body: UpdateCar, index: string): Promise<CreateCar> => {
        const updatedBody = await prisma.cars.update({ where: { id: index }, data: { ...body } })
        return carsSchema.parse(updatedBody)
    }

    delete = async (index: string): Promise<void> => {
        await prisma.cars.delete({ where: { id: index } });
    }
}