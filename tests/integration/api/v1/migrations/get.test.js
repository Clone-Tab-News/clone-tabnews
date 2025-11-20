import database from "infra/database.js";
// import fetch from "node-fetch";

// globalThis.fetch = fetch;

beforeAll(cleanDatabase);

async function cleanDatabase() {
  // Derrubar todas as tabelas do banco de dados
  // E depois recriar o schema public
  await database.query("drop schema public cascade; create schema public;");
}

test("Get to /api/v1/migrations should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations");
  const responseBody = await response.json();

  expect(response.status).toBe(200);
  expect(Array.isArray(responseBody)).toBe(true);
  expect(responseBody.length).toBeGreaterThanOrEqual(0);
});
