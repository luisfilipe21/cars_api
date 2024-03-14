import { CarService } from "../../../service/cars.service";
import { carMockList } from "../../mocks/cars.mock";
import { prismaMock } from "../../mocks/prisma";
import { carDefaultExpects } from "../utils";

describe("Unit test: Get many cars ", () => {

    test("Unit test: Should be able to get all cars", async () => {
        prismaMock.cars.findMany.mockResolvedValue(carMockList)

        const carService = new CarService();
        
        const cars = await carService.readMany();

        expect(cars).toHaveLength(carMockList.length);
        carDefaultExpects(cars[0], carMockList[0])
        carDefaultExpects(cars[1], carMockList[1])
    })

})