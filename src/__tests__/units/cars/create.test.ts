import { prisma } from "../../../database/prisma"
import { CarService } from "../../../service/cars.service";
import { carMock } from "../../mocks/cars.mock";

describe("Unit tet: Create car ", () => {

    beforeEach(async () => {
        await prisma.cars.deleteMany();
    })
    beforeAll(async () => {
        await prisma.cars.deleteMany();
    })

    test("Unit tet: Create car should work correctly", async () => {
        const carService = new CarService();

        const carData = await carService.create(carMock)

        expect(carData.id).toBeDefined();
        expect(carData.name).toBe(carMock.name);
        expect(carData.description).toBe(carMock.description);
        expect(carData.brand).toBe(carMock.brand);
        expect(carData.year).toBe(carMock.year);
        expect(carData.km).toBe(carMock.km);

    })
})