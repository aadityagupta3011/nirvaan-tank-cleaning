import "./globals.css";
import { IBM_Plex_Mono, IBM_Plex_Sans, Source_Serif_4 } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import JsonLd from "@/components/JsonLd";
import { SITE, KEYWORDS, inCity } from "@/lib/site";
import { localBusinessSchema, websiteSchema } from "@/lib/seo";

// Self-hosted at build time by next/font: no layout shift, no request to Google at runtime.
const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});
const serif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

const defaultTitle = `Water Tank Cleaning Services${inCity} | ${SITE.name}`;

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: defaultTitle, template: `%s | ${SITE.name}` },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: KEYWORDS,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "Home Services",
  alternates: { canonical: SITE.url },
  formatDetection: { telephone: true, email: true, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: defaultTitle,
    description: SITE.description,
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: `${SITE.name} — ${SITE.tagline}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  verification: {
    ...(SITE.verification.google && { google: SITE.verification.google }),
    ...(SITE.verification.bing && { other: { "msvalidate.01": SITE.verification.bing } }),
  },
  other: {
    ...(SITE.region && { "geo.region": `IN-${SITE.region}` }),
    ...(SITE.city && { "geo.placename": SITE.city }),
    ...(SITE.geo && {
      "geo.position": `${SITE.geo.latitude};${SITE.geo.longitude}`,
      ICBM: `${SITE.geo.latitude}, ${SITE.geo.longitude}`,
    }),
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1f2a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body>
        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={websiteSchema()} />
        <div className="min-h-screen bg-paper text-ink">
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <MobileActionBar />
        </div>
      </body>
    </html>
  );
}
