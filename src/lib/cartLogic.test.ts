import { test } from "node:test";
import assert from "node:assert/strict";
import { addLine, setQty, totals, type Line } from "./cartLogic";

const towel = { slug: "waffle-towel-rowan", name: "Waffle towel Rowan", price: 40, tone: "#a8b4ae" };

test("same slug and size merges, different size does not", () => {
  let lines: Line[] = [];
  lines = addLine(lines, { ...towel, size: "50x70" });
  lines = addLine(lines, { ...towel, size: "50x70" }, 2);
  assert.equal(lines.length, 1);
  assert.equal(lines[0].qty, 3);

  lines = addLine(lines, { ...towel, size: "100x150" });
  assert.equal(lines.length, 2);
});

test("sizeless products merge with each other", () => {
  let lines = addLine([], towel);
  lines = addLine(lines, towel);
  assert.deepEqual([lines.length, lines[0].qty], [1, 2]);
});

test("zero or negative qty is a no-op on add", () => {
  assert.deepEqual(addLine([], towel, 0), []);
  assert.deepEqual(addLine([], towel, -1), []);
});

test("setQty updates, and zero removes the line", () => {
  const lines = addLine(addLine([], towel), { ...towel, slug: "apron-sten", price: 45 });
  assert.equal(setQty(lines, 0, 5)[0].qty, 5);
  assert.equal(setQty(lines, 0, 0).length, 1);
  assert.equal(setQty(lines, 0, 0)[0].slug, "apron-sten");
});

test("totals sum quantity and money", () => {
  const lines = addLine(addLine([], towel, 2), { ...towel, slug: "apron-sten", price: 45 });
  assert.deepEqual(totals(lines), { count: 3, subtotal: 125 });
});
