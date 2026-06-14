import Navebar from "./components/Navebar";
import Footer from "./components/Footer";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Huzaifa Rehan — AI Engineer & Full-Stack Developer",
  description:
    "I build AI-powered web apps, RAG pipelines, and multi-agent systems using Python, TypeScript, and Next.js.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="site-shell text-white antialiased">
        <Navebar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
