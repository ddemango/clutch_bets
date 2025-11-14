import { Request, Response, NextFunction } from "express";
import { cfg } from "../config/env";
export function auth(req: Request, res: Response, next: NextFunction) {
  if (!cfg.authToken) return next();
  const token = req.headers["x-api-key"];
  if (token !== cfg.authToken) return res.status(401).json({ error: "Unauthorized" });
  next();
}