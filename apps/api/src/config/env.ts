import "dotenv/config";
export const cfg = {
  port: Number(process.env.PORT ?? 4000),
  openaiKey: process.env.OPENAI_API_KEY!,
  databaseUrl: process.env.DATABASE_URL!,
  authToken: process.env.API_AUTH_TOKEN ?? "",
  storageBase: process.env.STORAGE_BASE ?? "file"
};
