import Navebar from "./components/Navebar";
import Footer from "./components/Footer";
import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo.jpg" />
        <link rel="icon" href="/logo.jpg" />
        <link rel="shortcut icon" href="/logo.jpg" />
        <link rel="apple-touch-icon" href="/logo.jpg" />
      </head>
      <body className="site-shell text-white antialiased">
        <Navebar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
