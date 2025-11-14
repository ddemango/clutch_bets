import { cfg } from "./config/env";
import { createServer } from "./server";
const app = createServer();
app.listen(cfg.port, () => console.log(`API http://localhost:${cfg.port}`));
