import { carMock } from "../../mocks/cars.mock";
import { request } from "../uteis"

describe("Integration Tests: Create Car Route", () => {
    const baseUrl = "/cars"

    test("Should be able to create a car.", async () => {
        const response = await request.post(baseUrl).send(carMock);

        console.log(response.body);
        console.log(response.status);

        expect(response.status).toBe(201);
    })
})