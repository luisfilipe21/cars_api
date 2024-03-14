import { prisma } from "../../../database/prisma";
import { carMockBody, carMockCreate } from "../../mocks/cars.mock";
import { request } from "../../uteis/uteis";

describe("Integrations test: Get one car", () => {
    const baseUrl = "/cars";
    const carsDb = prisma.cars;

    beforeEach(async () => {
        await carsDb.deleteMany();
    })
    afterAll(async () => {
        await carsDb.deleteMany();
    })

    test("Should be able to get one car successfully", async () => {
        const car = await prisma.cars.create({ data: carMockCreate });

        const data = await request.get(`${baseUrl}/${car.id}`).send(carMockBody).expect(200).then((response) => response.body);
        console.log(data)

        expect(data).toStrictEqual(carMockBody);
    })

    test("Should throw error when car is not found", async () => {
        const data = await request.patch(`${baseUrl}/bae2d9b4-5d62-4a46-8d85-0affe8ba4b86`).expect(404).then((response) => response.body);

        expect(data.message).toBe("Carro não encontrado.")
    })
})