import { prisma } from "../../../database/prisma";
import { CarService } from "../../../service/cars.service";
import { carMockBody } from "../../mocks/cars.mock";
import { prismaMock } from "../../mocks/prisma";

describe("Unit test: Delete car ", () => {
    test("Unit test: Delete car should work correctly", async () => {
        const car = await prisma.cars.create({ data: carMockBody}) 
        const carService = new CarService();
        
        await carService.delete(carMockBody.id);
    })

    test("Unit test: Invalid body", async () => {

    })
    test("Unit test: Car not found", async () => {

    })

})