import { Metadata } from 'next';
import WordCounterClient from './WordCounterClient';
import StructuredData from '@/components/seo/StructuredData';
import { LineChart, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
    title: "Professional Word Counter - Analyze Content Depth | Nevy.in",
    description: "Free online word counter to analyze text length, character density, and reading time. Optimized for bloggers, students, and SEO content writers in 2026.",
    keywords: ["word counter", "character counter", "sentence counter", "reading time calculator", "content analyzer"],
    alternates: {
        canonical: "https://www.nevy.in/tools/word-counter",
    },
    openGraph: {
        images: [
            {
                url: 'https://www.nevy.in/og/og-word-counter.png',
                width: 1200,
                height: 630,
                alt: 'Word Counter',
            }
        ],
    }
};

export default function WordCounterPage() {
    return (
        <div className="tool-container">
            <header className="tool-header">
                <div className="tool-category">Web Utility</div>
                <h1>Professional <span className="gradient-text">Word Counter</span></h1>
                <p className="tool-intro">
                    Analyze your content with precision. Get instant statistics on word count,
                    character density, and estimated reading time. 100% private.
                </p>
                <StructuredData data={{
                    "@context": "https://schema.org",
                    "@type": "SoftwareApplication",
                    "name": "Professional Word Counter",
                    "operatingSystem": "All",
                    "applicationCategory": "UtilitiesApplication",
                    "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "USD"
                    },
                    "description": "Accurate word and character counter with reading time estimation.",
                    "featureList": [
                        "Real-time word count",
                        "Character count (with/without spaces)",
                        "Sentence count",
                        "Reading time estimation"
                    ]
                }} />
                <StructuredData data={{
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "Is there a limit on text length?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "No, our professional word counter can handle extremely long texts, making it perfect for manuscripts and long-form blog posts."
                            }
                        }
                    ]
                }} />
            </header>

            <WordCounterClient />

            <section className="seo-benefits-grid card glass mt-8">
                <h2>Why Use Our Professional Word Counter?</h2>
                <div className="benefits-row">
                    <div className="benefit-item">
                        <LineChart size={24} className="text-primary" />
                        <div>
                            <h3>Optimize for SEO Length</h3>
                            <p>Search engines in 2026 heavily favor long-form, comprehensive content. Use our counter to ensure your articles hit the optimal 1,500 - 2,000 word sweet spot for competitive USA keywords.</p>
                        </div>
                    </div>
                    <div className="benefit-item">
                        <ShieldCheck size={24} className="text-accent" />
                        <div>
                            <h3>100% Local Processing</h3>
                            <p>Writing a confidential novel, an academic thesis, or private marketing copy? Your text never leaves your computer. We process everything in your browser's memory for absolute privacy.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="seo-content card glass mt-8">
                <div className="pro-content">
                    <h3>How to Analyze Your Text Like a Pro</h3>
                    <p>
                        Whether you are a student drafting an essay, a copywriter finalizing AdSense content, or a social media manager crafting the perfect tweet, precise character and word limits define the boundaries of your digital publishing. Our <b>Professional Word Counter</b> offers instantaneous metrics to keep you perfectly aligned with those constraints.
                    </p>
                    <p>
                        <b>1. Word Count vs. Character Count:</b> While blog posts and articles are measured in thousands of words, platforms like Twitter, SMS campaigns, and SEO Meta Titles rely entirely on strict character counts. Our tool provides both metrics simultaneously, including specific breakdowns of characters with and without spaces, giving you total control over the physical length of your text.
                    </p>
                    <p>
                        <b>2. The Reading Time Metric:</b> Modern web design often includes an "estimated reading time" at the top of articles. This UX feature significantly reduces bounce rates. We calculate this automatically based on the standard average reading speed of 225 words per minute. Knowing this helps you gauge whether your piece is a quick update or a deep-dive comprehensive guide.
                    </p>
                    <p>
                        <b>3. Security Guarantee:</b> We believe that your intellectual property is yours alone. Many free online tools upload your text to their servers to process it—potentially exposing your unreleased work or sensitive documents. Our application architecture is entirely <b>client-side</b>. When you paste your text into our tool, it is analyzed by JavaScript executing locally on your machine. We cannot read, store, or see your content.
                    </p>
                </div>
            </section>

        </div>
    );
}
