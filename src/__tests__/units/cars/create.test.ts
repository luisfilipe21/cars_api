import { prisma } from "../../../database/prisma"
import { CarService } from "../../../service/cars.service";
import { carMockBody, carMockCreate } from "../../mocks/cars.mock";
import { prismaMock } from "../../mocks/prisma";

describe("Unit tet: Create car ", () => {

    test("Unit tet: Create car should work correctly", async () => {
        const carService = new CarService();

        prismaMock.cars.create.mockResolvedValue(carMockBody);
        const carData = await carService.create(carMockCreate);

        expect(carData).toStrictEqual(carMockBody);
    })
   
    test("Unit tet: Create car should work correctly", async () => {
        const carService = new CarService();

        prismaMock.cars.create.mockResolvedValue(carMockBody);
        const carData = await carService.create(carMockCreate);

        expect(carData).toStrictEqual(carMockBody);
    })


})