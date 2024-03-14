import { prisma } from "../../../database/prisma"
import { carMockCreate, carMockUpdate } from "../../mocks/cars.mock"
import { request } from "../../uteis/uteis";

describe("Integration test: Delete Car", () => {
    const baseUrl = "/cars";
    const carsDb = prisma.cars;

    beforeEach(async () => {
        await carsDb.deleteMany();
    })
    afterAll(async () => {
        await carsDb.deleteMany();
    })

    test("Should be able to delete car successfully", async () => {
        const car = await prisma.cars.create({ data: carMockCreate });

        await request.delete(`${baseUrl}/${car.id}`).expect(204)
    })

    test("Should throw error when id is not found", async () => {
        
        const data = await request.delete(`${baseUrl}/04047768-d0f5-4710-a8aa-bf443f10c87d`).expect(404).then((response) => response.body);

        expect(data.message).toBe("Carro não encontrado.")
    })
})