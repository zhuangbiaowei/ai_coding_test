import request from "supertest";
import { app, queue } from "./server.js";

describe("request queue", () => {
  beforeEach(() => {
    queue.current = Promise.resolve();
    queue.active = 0;
    queue.maxSeen = 0;
  });

  it("processes requests serially even when fired together", async () => {
    const start = Date.now();

    const responses = await Promise.all([
      request(app).post("/enqueue").send({ id: 1 }),
      request(app).post("/enqueue").send({ id: 2 }),
      request(app).post("/enqueue").send({ id: 3 }),
    ]);

    const times = responses.map((res) => res.body.processedAt);
    expect(times[0]).toBeLessThan(times[1]);
    expect(times[1]).toBeLessThan(times[2]);

    const duration = Date.now() - start;
    expect(duration).toBeGreaterThanOrEqual(300);
  });

  it("never reports concurrent work", async () => {
    await Promise.all([
      request(app).post("/enqueue").send({ id: "a" }),
      request(app).post("/enqueue").send({ id: "b" }),
      request(app).post("/enqueue").send({ id: "c" }),
      request(app).post("/enqueue").send({ id: "d" }),
    ]);

    const stats = await request(app).get("/stats");
    expect(stats.body.maxConcurrency).toBe(1);
  });
});
