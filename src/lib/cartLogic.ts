/* Pure cart maths, kept out of the React file so it can be tested with `npm test`. */

export type Line = {
  slug: string;
  name: string;
  price: number;
  tone: string;
  size?: string;
  qty: number;
};

/** Same product in the same size merges; a different size is its own line. */
export function addLine(lines: Line[], item: Omit<Line, "qty">, qty = 1): Line[] {
  if (qty <= 0) return lines;
  const i = lines.findIndex((l) => l.slug === item.slug && l.size === item.size);
  if (i < 0) return [...lines, { ...item, qty }];
  return lines.map((l, j) => (j === i ? { ...l, qty: l.qty + qty } : l));
}

/** Setting a quantity to zero or below removes the line. */
export function setQty(lines: Line[], index: number, qty: number): Line[] {
  if (qty <= 0) return lines.filter((_, j) => j !== index);
  return lines.map((l, j) => (j === index ? { ...l, qty } : l));
}

export function totals(lines: Line[]) {
  return {
    count: lines.reduce((s, l) => s + l.qty, 0),
    subtotal: lines.reduce((s, l) => s + l.price * l.qty, 0),
  };
}
