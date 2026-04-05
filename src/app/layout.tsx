import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
  metadataBase: new URL('https://www.nevy.in'),
  title: {
    default: "Tech Resolutions — Tools that work.",
    template: "%s | Tech Resolutions"
  },
  description: "70+ free online tools for images, PDFs, text, calculators, and more. No signup. No fees. Ever.",
  keywords: ["free online tools", "image compressor", "pdf to word", "emi calculator", "password generator", "word counter", "json formatter"],
  authors: [{ name: "Tech Resolutions" }],
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
    url: "https://www.nevy.in",
    siteName: "Tech Resolutions",
    title: "Tech Resolutions — 70+ free online tools",
    description: "Image, PDF, text, calculators, security — all tools in one place. No signup required. No fees.",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Tech Resolutions — Tools that work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Resolutions — 70+ free online tools",
    description: "Image, PDF, text, calculators, security — free tools that work.",
    images: ["/api/og"],
  },
  verification: {
    google: "HPkUACF_q2-iC1jpltw59K7gKpFTQaKcdg5xjGqGCHM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${dmMono.variable}`}>
      <head>
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2623046574772198"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
