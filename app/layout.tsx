import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PERSONAL_INFO } from "@/lib/portfolio-data";
import { SITE_DESCRIPTION, SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});
const title = "Akshat / Sketchbook";

export const viewport: Viewport = {
  themeColor: "#f7f4ec",
  width: "device-width",
  initialScale: 1,
};
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description: SITE_DESCRIPTION,
  authors: [{ name: PERSONAL_INFO.name, url: SITE_URL }],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description: SITE_DESCRIPTION,
    type: "website",
    url: SITE_URL,
    siteName: "Akshat’s Sketchbook",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title,
    description: SITE_DESCRIPTION,
    creator: "@imakshat_27",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: PERSONAL_INFO.name,
      url: SITE_URL,
      sameAs: Object.values(PERSONAL_INFO.socials),
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: title,
      description: SITE_DESCRIPTION,
      mainEntity: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
