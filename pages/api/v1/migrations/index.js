import migrateRunner from "node-pg-migrate";
import { join } from "node:path";
import database from "infra/database.js";

export default async function migrations(request, response) {
  let dbClient;

  try {
    dbClient = await database.getNewClient();
    const defaulMigrationsOptions = {
      dbClient,
      dryRun: true,
      dir: join(process.cwd(), "infra", "migrations"),
      direction: "up",
      verbose: true,
      migrationsTable: "pgmigrations",
    };

    if (request.method === "GET") {
      const pendingMigrations = await migrateRunner(defaulMigrationsOptions);
      return response.status(200).json(pendingMigrations);
    }

    if (request.method === "POST") {
      const migratedMigrations = await migrateRunner({
        ...defaulMigrationsOptions,
        dryRun: false,
      });

      if (migratedMigrations.length > 0) {
        return response.status(201).json(migratedMigrations);
      }

      return response.status(200).json(migratedMigrations);
    }

    return response.status(405).json({ message: "Method not allowed" });
  } catch (error) {
    console.error("Migration error:", {
      method: request.method,
      message: error.message,
      stack: error.stack,
    });
    return response.status(500).json({
      error: error.message,
      ...(process.env.NODE_ENV === "development" && { stack: error.stack }),
    });
  } finally {
    if (dbClient) {
      await dbClient.end();
    }
  }
}
