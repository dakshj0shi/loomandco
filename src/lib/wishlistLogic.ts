/* Pure wishlist maths, mirroring cartLogic.ts so it can be tested the same way. */

export type WishlistItem = {
  slug: string;
  name: string;
  price: number;
  tone: string;
};

/** Present → removed, absent → added. */
export function toggleItem(items: WishlistItem[], item: WishlistItem): WishlistItem[] {
  const exists = items.some((i) => i.slug === item.slug);
  return exists ? items.filter((i) => i.slug !== item.slug) : [...items, item];
}
