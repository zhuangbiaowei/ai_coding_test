import express from "express";
import { readFileSync } from "node:fs";

const app = express();

app.get("/healthz", (_req, res) => {
  res.json({ status: "ok" });
});

app.get("*", (_req, res) => {
  const html = readFileSync("dist/index.html", "utf8");
  res.type("html").send(html);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
