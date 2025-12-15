const dotenv = require("dotenv");
dotenv.config({
  path: ".env.development",
}); // Carrega as variaveis de ambiente do .env para o process.env

const nextJest = require("next/jest"); // Da para o jest os "poderes" do nextjs

const createJestConfig = nextJest();
const jestConfig = createJestConfig({
  moduleDirectories: ["node_modules", "<rootDir>"],
  testEnvironment: "node",
  testTimeout: 60000,
});

module.exports = jestConfig;
