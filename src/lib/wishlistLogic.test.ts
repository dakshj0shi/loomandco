import { test } from "node:test";
import assert from "node:assert/strict";
import { toggleItem, type WishlistItem } from "./wishlistLogic.ts";

const cushion: WishlistItem = { slug: "sofa-cushion-oat", name: "Sofa cushion — Oat", price: 85, tone: "#ddd2bd" };

test("toggling an absent item adds it", () => {
  assert.deepEqual(toggleItem([], cushion), [cushion]);
});

test("toggling a present item removes it", () => {
  assert.deepEqual(toggleItem([cushion], cushion), []);
});

test("toggling only affects the matching slug", () => {
  const other: WishlistItem = { ...cushion, slug: "sofa-cushion-ash", name: "Sofa cushion — Ash" };
  assert.deepEqual(toggleItem([cushion, other], cushion), [other]);
});
