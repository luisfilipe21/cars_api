import { prisma } from "../../../database/prisma"
import { carMockCreate, carMockUpdate, invalidCarMockUpdate } from "../../mocks/cars.mock"
import { request } from "../../uteis/uteis";

describe("Integration test: Upgrade Car", () => {
    const baseUrl = "/cars";
    const carsDb = prisma.cars;

    beforeEach(async () => {
        await carsDb.deleteMany();
    })
    afterAll(async () => {
        await carsDb.deleteMany();
    })

    test("Should be able to upgrade car successfully", async () => {
        const car = await prisma.cars.create({ data: carMockCreate });

        const data = await request.patch(`${baseUrl}/${car.id}`).send(carMockUpdate).expect(200).then((response) => response.body);

        const updatedCar = { ...car, ...carMockUpdate };

        expect(data).toStrictEqual(updatedCar);
    })

    test("Should throw error when body is invalid", async () => {
        const data = await request.patch(`${baseUrl}/bae2d9b4-5d62-4a46-8d85-0affe8ba4b86`).expect(404).then((response) => response.body);

        expect(data.message).toBe("Carro não encontrado.")
    })
    test("Should throw error when body is invalid", async () => {
        const car = await prisma.cars.create({ data: carMockCreate });
        await request.patch(`${baseUrl}/${car?.id}`).send(invalidCarMockUpdate).expect(400)
    })
})