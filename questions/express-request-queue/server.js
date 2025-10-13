import express from "express";
import { RequestQueue } from "./requestQueue.js";

const app = express();
const queue = new RequestQueue();

function simulateSlowJob(payload) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        processedAt: Date.now(),
        payload,
      });
    }, 100);
  });
}

app.use(express.json());

app.post("/enqueue", async (req, res) => {
  const job = await queue.enqueue(() => simulateSlowJob(req.body));
  res.json(job);
});

app.get("/stats", (_req, res) => {
  res.json({ active: queue.active, maxConcurrency: queue.maxSeen });
});

export { app, queue };
