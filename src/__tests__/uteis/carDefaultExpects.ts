import { Cars } from "@prisma/client";
import { CreateCar } from "../../interface/cars.interface";

export const carDefaultExpects = (data: Cars, expectedData: CreateCar) => {
    expect(data.name).toBe(expectedData.name);
    expect(data.brand).toBe(expectedData.brand);
    expect(data.description).toBe(expectedData.description);
    expect(data.year).toBe(expectedData.year);
    expect(data.km).toBe(expectedData.km);
}