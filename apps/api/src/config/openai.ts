import OpenAI from "openai";
import { cfg } from "./env";
export const openai = new OpenAI({ apiKey: cfg.openaiKey });
