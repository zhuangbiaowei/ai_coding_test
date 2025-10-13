import test from "node:test";
import assert from "node:assert";

import { add } from "./index.js";

test("adds numbers", () => {
  assert.strictEqual(add(2, 3), 5);
});

test("rejects non-numbers", () => {
  assert.throws(() => add(2, "3"), TypeError);
});
