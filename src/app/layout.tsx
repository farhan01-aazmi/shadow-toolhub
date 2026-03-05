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
  title: "Shadow Event ToolHub | Premium Tools & Utilities",
  description: "A premium suite of high-performance online tools for developers, designers, and financial analysis. Optimized for USA speed and SEO.",
  keywords: ["online tools", "currency converter", "crypto tracker", "image optimizer", "loan calculator", "seo tools", "developer tools"],
  authors: [{ name: "Shadow Event Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
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
