import { Metadata } from 'next';
import MetaGeneratorClient from './MetaGeneratorClient';
import StructuredData from '@/components/seo/StructuredData';

export const metadata: Metadata = {
    title: "Meta Tag Generator - SEO & Social Preview Tool | Nevy.in",
    description: "Create high-performance meta tags for SEO and social media. Includes live Google preview, Open Graph, and Twitter card generation for 2026 search engines.",
    keywords: ["meta tag generator", "seo tags", "open graph generator", "twitter card generator", "google preview tool"],
    alternates: {
        canonical: "https://nevy.in/tools/meta-generator",
    },
    openGraph: {
        images: [
            {
                url: 'https://nevy.in/og/og-meta-generator.png',
                width: 1200,
                height: 630,
                alt: 'Meta Tag Generator',
            }
        ],
    }
};

export default function MetaGeneratorPage() {
    return (
        <div className="tool-container">
            <header className="tool-header">
                <div className="tool-category">SEO Utility</div>
                <h1>Meta Tag <span className="gradient-text">Generator</span></h1>
                <p className="tool-intro">
                    Create clean, high-performance meta tags to improve your search visibility.
                    Optimized for 2026 search algorithms.
                </p>
                <StructuredData data={{
                    "@context": "https://schema.org",
                    "@type": "SoftwareApplication",
                    "name": "Advanced Meta Tag Generator",
                    "operatingSystem": "All",
                    "applicationCategory": "SEOApplication",
                    "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "USD"
                    },
                    "description": "Professional tool for generating SEO-optimized meta tags and social previews.",
                    "featureList": [
                        "Primary Meta Tag generation",
                        "Open Graph / Facebook support",
                        "Twitter Card support",
                        "Live Google Search preview"
                    ]
                }} />
            </header>

            <MetaGeneratorClient />
        </div>
    );
}
