import { writeFileSync, mkdirSync } from "node:fs";

mkdirSync("dist", { recursive: true });
writeFileSync("dist/index.html", "<h1>Marketing!</h1>");
