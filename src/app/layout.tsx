import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: 'swap',
});

const dmMono = DM_Mono({
  weight: ['400', '500'],
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nevy.in'),
  title: {
    default: "Nevy.in — Tools that work.",
    template: "%s | Nevy.in"
  },
  description: "150+ free online tools for images, PDFs, text, calculators, and more. No signup. No fees. Ever.",
  keywords: ["free online tools", "image compressor", "pdf to word", "emi calculator", "password generator", "word counter", "json formatter"],
  authors: [{ name: "nevy.in" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nevy.in",
    siteName: "nevy.in",
    title: "Nevy.in — 150+ Free Online Tools",
    description: "Image, PDF, text, calculators, security — all tools in one place. No signup required. No fees.",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Nevy.in — Tools that work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nevy.in — 150+ Free Online Tools",
    description: "Image, PDF, text, calculators, security — free tools that work.",
    images: ["/api/og"],
  },
  alternates: {
    canonical: "./",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${dmMono.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
