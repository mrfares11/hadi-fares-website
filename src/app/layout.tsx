import type { Metadata } from "next";
import { Bodoni_Moda, Archivo } from "next/font/google";
import { site } from "@/data/content";
import "./globals.css";

// High-contrast Didone serif for the big name & section headings (dramatic).
const serif = Bodoni_Moda({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

// Bold grotesque for statements, labels, stats and body text.
const sans = Archivo({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${site.name} · ${site.role}`,
  description: site.description,
  openGraph: {
    title: `${site.name} · ${site.role}`,
    description: site.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${serif.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">{children}</body>
    </html>
  );
}
