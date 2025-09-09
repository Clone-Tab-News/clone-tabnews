import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const databaseVersion = await database
    .query("SHOW server_version;")
    .then((result) => result.rows[0].server_version);

  const maxConnections = await database
    .query("SHOW max_connections;")
    .then((result) => result.rows[0].max_connections);

  const databaseOpenedConnectionsResult = await database.query(
    "SELECT count(*)::int from pg_stat_activity WHERE datname = 'local_db';",
  );

  response.status(200).json({
    updated_at: updatedAt,
    dependences: {
      database: {
        version: databaseVersion,
        max_connections: parseInt(maxConnections),
        opened_connections: databaseOpenedConnectionsResult.rows[0].count,
      },
    },
  });
}

export default status;
