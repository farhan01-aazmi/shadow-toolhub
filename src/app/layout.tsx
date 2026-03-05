import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nevy.in'),
  title: {
    default: "Shadow Event ToolHub | Premium Tools & Utilities",
    template: "%s | Shadow Event ToolHub"
  },
  description: "A premium suite of high-performance online tools for developers, designers, and financial analysis. Optimized for USA speed and SEO.",
  keywords: ["online tools", "currency converter", "crypto tracker", "image optimizer", "loan calculator", "seo tools", "developer tools"],
  authors: [{ name: "Shadow Event Team" }],
  viewport: "width=device-width, initial-scale=1",
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
    siteName: "Shadow Event ToolHub",
    title: "Shadow Event ToolHub | Premium Tools & Utilities",
    description: "High-performance, ad-free utility tools for Finance, Crypto, and SEO.",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Shadow Event ToolHub Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shadow Event ToolHub | Premium Tools & Utilities",
    description: "High-performance, ad-free utility tools for Finance, Crypto, and SEO.",
    images: ["/api/og"],
  },
  alternates: {
    canonical: "https://nevy.in",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable}`}>
        <Navbar />
        <div className="layout-container">
          <Sidebar />
          <main className="main-content">
            {children}
            <Footer />
          </main>
        </div>

      </body>
    </html>
  );
}
