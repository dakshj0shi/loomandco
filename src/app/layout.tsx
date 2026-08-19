import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import ScrollProgress from "@/components/ScrollProgress";
import UtmCapture from "@/components/UtmCapture";
import { CartProvider } from "@/lib/cart";
import { WishlistProvider } from "@/lib/wishlist";
import { ToastProvider } from "@/lib/toast";
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
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brand} | ${site.tagline}`,
    template: `%s | ${site.brand}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.brand,
    title: `${site.brand} | ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brand} | ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.brand,
  url: site.url,
  description: site.description,
  email: site.email,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <CartProvider>
          <WishlistProvider>
            <ToastProvider>
              <ScrollReveal />
              <UtmCapture />
              <ScrollProgress />
              <Header logo={<Logo variant="black" className="h-6 w-auto md:h-7" />} />
              <main className="flex-1">
                <PageTransition>{children}</PageTransition>
              </main>
              <Footer />
              <BackToTop />
              <CookieBanner />
            </ToastProvider>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
