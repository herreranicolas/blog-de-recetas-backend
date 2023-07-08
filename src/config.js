import "dotenv/config";

export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/blog_de_recetas_db";
