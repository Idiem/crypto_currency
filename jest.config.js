const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "@/app/(.*)": "<rootDir>/app/$1",
    "@/assets/(.*)$": "<rootDir>/assets/$1",
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/redux/(.*)$": "<rootDir>/src/redux/$1",
    "@/pages/(.*)$": "<rootDir>/pages/$1",
    "@/styles/(.*)$": "<rootDir>/styles/$1",
    "@/utils/(.*)$": "<rootDir>/utils/$1",
  },
  testMatch: ["**/*.test.tsx"],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
