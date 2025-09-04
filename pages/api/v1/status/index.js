import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const databaseVersion = await database
    .query("SHOW server_version;")
    .then((result) => result.rows[0].server_version);

  const maxConnections = await database
    .query("SHOW max_connections;")
    .then((result) => result.rows[0].max_connections);

  response.status(200).json({
    updated_at: updatedAt,
    dependences: {
      database: {
        version: databaseVersion,
        max_connections: parseInt(maxConnections),
      },
    },
  });
}

export default status;
