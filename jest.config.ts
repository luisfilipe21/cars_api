import type { Config } from 'jest';

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/__tests__/(units|integrations)/**/*.test.[jt]s?(x)"]
};

export default config;
