import { IBM_Plex_Mono, Schibsted_Grotesk } from "next/font/google";
import Navebar from "./components/Navebar";
import Footer from "./components/Footer";
import Chatbot from "@/components/chatbot/Chatbot";
import type { Metadata, Viewport } from "next";
import { profile } from "@/data/portfolio";
import { siteDescription, siteKeywords, siteTitle, siteUrl } from "@/lib/site";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Huzaifa Rehan",
  },
  description: siteDescription,
  keywords: siteKeywords,
  applicationName: "Huzaifa Rehan Portfolio",
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Huzaifa Rehan",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
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
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: "#060B10",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${schibsted.variable} ${plexMono.variable}`}>
      <body className="bg-bg font-body text-text antialiased">
        <Navebar />
        {children}
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
