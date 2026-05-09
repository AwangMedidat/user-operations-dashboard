import { createDefaultPreset } from "ts-jest";

const tsJestTransformCfg = createDefaultPreset().transform;

const jestConfig = {
  testEnvironment: "jsdom",

  transform: {
    ...tsJestTransformCfg,
  },

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  testPathIgnorePatterns: ["/node_modules/", "/.next/", "/e2e/"],
};

/** @type {import("jest").Config} */
export default jestConfig;