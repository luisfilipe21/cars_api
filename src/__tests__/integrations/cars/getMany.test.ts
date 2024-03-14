import { prisma } from "../../../database/prisma"
import { carMockListCreate } from "../../mocks/cars.mock"
import { carDefaultExpects } from "../../units/utils";
import { request } from "../../uteis/uteis"

describe("Integrations test: Get many cars", () => {
    const baseUrl = "/cars";
    const carsDb = prisma.cars;

    beforeEach(async () => {
        await carsDb.deleteMany();
    })
    afterAll(async () => {
        await carsDb.deleteMany();
    })

    test("should be able to get many cars successfully", async () => {
        await prisma.cars.createMany({ data: carMockListCreate })

        const data = await request.get(baseUrl).expect(200).then((response) => response.body)

        expect(data).toHaveLength(2);
        expect(data[0].id).toBeDefined();
        carDefaultExpects(data[0], carMockListCreate[0])

        expect(data[1].id).toBeDefined();
        carDefaultExpects(data[1], carMockListCreate[1])
    })
})