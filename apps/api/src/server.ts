import express from "express";
import cors from "cors";
import { auth } from "./middleware/auth";
import { errorHandler } from "./middleware/error";
import { healthRouter } from "./routes/health.routes";
import { slipsRouter } from "./routes/slips.routes";
import { analyzeRouter } from "./routes/analyze.routes";
import { chatRouter } from "./routes/chat.routes";

export function createServer() {
  const app = express();
  app.use(cors());
  app.use(express.json({ limit: "2mb" }));
  app.use(auth);
  app.use("/api", healthRouter);
  app.use("/api", slipsRouter);
  app.use("/api", analyzeRouter);
  app.use("/api", chatRouter);
  app.use(errorHandler);
  return app;
}