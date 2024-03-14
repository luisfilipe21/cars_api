import { CarService } from "../../../service/cars.service";
import { carMockBody, carMockUpdate } from "../../mocks/cars.mock";
import { prismaMock } from "../../mocks/prisma";

describe("Unit test: Update car ", () => {

    test("Unit test: Update car should work correctly", async () => {
        const carService = new CarService();

        const updatedCar = {...carMockBody, ...carMockUpdate}

        prismaMock.cars.update.mockResolvedValue(updatedCar);
        const carData = await carService.update(carMockUpdate, carMockBody.id)

        expect(carData).toStrictEqual(updatedCar);
    })

    test("Unit test: Invalid body", async () => {

    })
    test("Unit test: Car not found", async () => {

    })

})