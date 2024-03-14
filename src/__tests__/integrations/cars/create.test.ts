import { prisma } from "../../../database/prisma";
import { carMockCreate } from "../../mocks/cars.mock";
import { request } from "../uteis"

describe("Integration Tests: Create Car Route", () => {
    const baseUrl = "/cars";
    const carsDb = prisma.cars;

    beforeEach(async () => {
        await carsDb.deleteMany();
    })
    beforeAll(async () => {
        await carsDb.deleteMany();
    })



    test("Should be able to create a car.", async () => {
        const req = await request.post(baseUrl).send(carMockCreate);

        const expectedValue = {
            id: expect.any(String),
            name: carMockCreate.name,
            description: carMockCreate.description,
            brand: carMockCreate.brand,
            year: carMockCreate.year,
            km: carMockCreate.km
        }

        expect(req.body).toStrictEqual(expectedValue)
        expect(req.status).toBe(201);
    })

    test("Should not be able to create card - Invalid Body.", async () => {
        const req = await request.post(baseUrl).send();

        const expectedValue = {
            "message": [
                {
                    "code": "invalid_type",
                    "expected": "string",
                    "message": "Required",
                    "path": [
                        "name",
                    ],
                    "received": "undefined",
                },
                {
                    "code": "invalid_type",
                    "expected": "string",
                    "message": "Required",
                    "path": [
                        "description",
                    ],
                    "received": "undefined",
                },
                {
                    "code": "invalid_type",
                    "expected": "string",
                    "message": "Required",
                    "path": [
                        "brand",
                    ],
                    "received": "undefined",
                },
                {
                    "code": "invalid_type",
                    "expected": "number",
                    "message": "Required",
                    "path": [
                        "year",
                    ],
                    "received": "undefined",
                },
                {
                    "code": "invalid_type",
                    "expected": "number",
                    "message": "Required",
                    "path": [
                        "km",
                    ],
                    "received": "undefined",
                },
            ],
        }

        expect(req.body).toStrictEqual(expectedValue)
        expect(req.status).toBe(400);
    })
})