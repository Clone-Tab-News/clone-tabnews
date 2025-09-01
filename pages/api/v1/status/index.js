import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  response.status(200).json({
    status: "ok",
    updated_at: updatedAt,
  });
}

export default status;
