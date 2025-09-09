test("Get to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toBe(parsedUpdatedAt);

  expect(responseBody.dependences.database.version).toEqual("17.6");
  expect(responseBody.dependences.database.max_connections).toEqual(100);
  expect(responseBody.dependences.database.opened_connections).toBe(1);
});
