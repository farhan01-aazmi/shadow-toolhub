import { Metadata } from 'next';
import MetaGeneratorClient from './MetaGeneratorClient';
import StructuredData from '@/components/seo/StructuredData';
import { Globe, Share2 } from 'lucide-react';

export const metadata: Metadata = {
    title: "Meta Tag Generator - SEO & Social Preview Tool | Nevy.in",
    description: "Create high-performance meta tags for SEO and social media. Includes live Google preview, Open Graph, and Twitter card generation for 2026 search engines.",
    keywords: ["meta tag generator", "seo tags", "open graph generator", "twitter card generator", "google preview tool"],
    alternates: {
        canonical: "https://www.nevy.in/tools/meta-generator",
    },
    openGraph: {
        images: [
            {
                url: 'https://www.nevy.in/og/og-meta-generator.png',
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

            <section className="seo-benefits-grid card glass mt-8">
                <h2>Why Every Content Creator Needs an Advanced Meta Tag Generator</h2>
                <div className="benefits-row">
                    <div className="benefit-item">
                        <Globe size={24} className="text-primary" />
                        <div>
                            <h3>Higher CTR in Search</h3>
                            <p>Optimized Meta Titles and Descriptions are your first impression in Google. Compelling, exact-character descriptions directly increase your Click-Through Rate (CTR) in the US market.</p>
                        </div>
                    </div>
                    <div className="benefit-item">
                        <Share2 size={24} className="text-secondary" />
                        <div>
                            <h3>Social Media Virality</h3>
                            <p>Proper Open Graph (Facebook) and Twitter Card tags ensure your links expand into beautiful, clickable visual cards when shared, increasing social traffic exponentially.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="seo-content card glass mt-8">
                <div className="pro-content">
                    <h3>The 2026 Guide to Meta Tag Optimization</h3>
                    <p>
                        In the heavily saturated digital landscape of 2026, creating great content isn't enough; you must package it correctly for search engine crawlers and social media algorithms. Our <b>Advanced Meta Tag Generator</b> takes the guesswork out of this critical technical SEO step.
                    </p>
                    <p>
                        <b>1. The 160-Character Rule:</b> Google typically truncates meta descriptions beyond 160 characters. If your snippet cuts off mid-sentence, users are less likely to click. Our live preview tool lets you see exactly how your description will render on mobile and desktop search results before you deploy it. Make every character count, and always include a clear Call-To-Action (CTA).
                    </p>
                    <p>
                        <b>2. The Power of Open Graph (OG) Tags:</b> Originally developed by Facebook, OG tags are now standard across almost all social platforms, including LinkedIn and iMessage. If you've ever shared a link that appeared as plain text instead of an image card, it's missing OG tags. Our generator authors the correct <code>og:title</code>, <code>og:description</code>, and <code>og:image</code> syntax to ensure maximum presentation value.
                    </p>
                    <p>
                        <b>3. Absolute Privacy:</b> Your upcoming article titles and descriptions might be confidential before launch. With our generator, <b>100% of the text processing happens locally in your device's browser</b>. We do not transmit your drafted meta tags to any external server. You get the benefit of a professional SEO tool without compromising your editorial privacy.
                    </p>
                </div>
            </section>

        </div>
    );
}
