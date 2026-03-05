import { Metadata } from 'next';
import WordCounterClient from './WordCounterClient';
import StructuredData from '@/components/seo/StructuredData';

export const metadata: Metadata = {
    title: "Professional Word Counter - Analyze Content Depth | Shadow ToolHub",
    description: "Free online word counter to analyze text length, character density, and reading time. Optimized for bloggers, students, and SEO content writers in 2026.",
    keywords: ["word counter", "character counter", "sentence counter", "reading time calculator", "content analyzer"],
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
        </div>
    );
}
