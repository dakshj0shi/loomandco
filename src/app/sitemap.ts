import type { MetadataRoute } from "next";
import { products, site } from "@/lib/products";

const STATIC_ROUTES = [
  "",
  "shop",
  "about",
  "terms",
  "privacy",
  "returns",
  "shipping",
  "faqs",
  "journal",
  "contact",
  "store-locator",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_ROUTES.map((path) => ({
    url: `${site.url}/${path}`,
    lastModified: new Date(),
  }));

  const productEntries = products.map((p) => ({
    url: `${site.url}/product/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...productEntries];
}
