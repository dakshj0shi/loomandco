import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { CartProvider } from "@/lib/cart";
import { WishlistProvider } from "@/lib/wishlist";
import { site } from "@/lib/products";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-display",
  display: "swap",
});

const body = localFont({
  variable: "--font-body",
  display: "swap",
  src: [
    {
      path: "../../public/sites/midnatthome-com-53b88b12/root-8a5edab2/fonts/modernera-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/sites/midnatthome-com-53b88b12/root-8a5edab2/fonts/modernera-medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: {
    default: `${site.brand} | ${site.tagline}`,
    template: `%s | ${site.brand}`,
  },
  description: site.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <CartProvider>
          <WishlistProvider>
            <ScrollReveal />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
