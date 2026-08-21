import { Bricolage_Grotesque, Manrope, JetBrains_Mono } from "next/font/google";
import Navebar from "./components/Navebar";
import Footer from "./components/Footer";
import Chatbot from "@/components/chatbot/Chatbot";
import type { Metadata } from "next";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Huzaifa Rehan",
  description:
    "I build AI-powered web apps, RAG pipelines, and multi-agent systems using Python, TypeScript, and Next.js.",
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${bricolage.variable} ${manrope.variable} ${jetbrains.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo.jpg" />
        <link rel="icon" href="/logo.jpg" />
        <link rel="shortcut icon" href="/logo.jpg" />
        <link rel="apple-touch-icon" href="/logo.jpg" />
      </head>
      <body className="site-shell font-body text-text antialiased">
        <Navebar />
        {children}
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
