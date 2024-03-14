import { CarService } from "../../../service/cars.service";
import { carMockBody, carMockList } from "../../mocks/cars.mock";
import { prismaMock } from "../../mocks/prisma";

describe("Unit test: Get one car ", () => {

    test("Unit test: Should be able to one car", async () => {
        prismaMock.cars.findUnique.mockResolvedValue(carMockBody);

        const carService = new CarService();

        const car = await carService.readOne(carMockBody.id);

        expect(car).toStrictEqual(carMockBody);
    })

    test("Unit test: Invalid body", async () => {

    })
    test("Unit test: Car not found", async () => {

    })
})