import { Metadata } from 'next';
import OptimizerComponent from './OptimizerComponent';
import { ShieldCheck, Zap, Globe, HardDrive } from 'lucide-react';
import StructuredData from '@/components/seo/StructuredData';

export const metadata: Metadata = {
    title: "Image Optimizer - Compress & Convert to WebP Online | Shadow ToolHub",
    description: "Free online image optimizer to compress and convert images to WebP, JPEG, or PNG. Boost your website speed and USA SEO ranking without losing quality.",
    keywords: ["image optimizer", "compress image", "webp converter", "online image compressor", "resize image online", "speed up website"],
};

export default function ImageOptimizerPage() {
    return (
        <div className="tool-container">
            <header className="tool-header">
                <h1 className="gradient-text">Image Optimizer Pro</h1>
                <p className="tool-intro">
                    Speed up your website by optimizing your images. Use our next-gen WebP compression
                    to reduce file sizes by up to 90% while maintaining crystal-clear quality.
                </p>
                <StructuredData data={{
                    "@context": "https://schema.org",
                    "@type": "SoftwareApplication",
                    "name": "Image Optimizer Pro",
                    "operatingSystem": "All",
                    "applicationCategory": "MultimediaApplication",
                    "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "USD"
                    },
                    "description": "Professional-grade image compression and WebP conversion tool.",
                    "featureList": [
                        "Lossless and lossy compression",
                        "WebP, PNG, JPEG support",
                        "Bulk optimization",
                        "Lightning fast browser-side processing"
                    ]
                }} />
                <StructuredData data={{
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "How much can I reduce image size?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Our optimizer can reduce file sizes by up to 90% depending on the format and quality settings, especially when converting to WebP."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Is my data safe?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, our image optimizer uses browser-side processing, meaning your images are never uploaded to our servers. Your privacy is 100% guaranteed."
                            }
                        }
                    ]
                }} />
            </header>

            <OptimizerComponent />

            <section className="seo-benefits-grid card glass">
                <h2>Why Website Speed Matters for USA SEO</h2>
                <div className="benefits-row">
                    <div className="benefit-item">
                        <Globe size={24} className="text-secondary" />
                        <div>
                            <h3>Improve Rankings</h3>
                            <p>Google prioritizes fast-loading websites in USA search results. Optimized images are the #1 way to boost Core Web Vitals.</p>
                        </div>
                    </div>
                    <div className="benefit-item">
                        <Zap size={24} className="text-primary" />
                        <div>
                            <h3>Better UX</h3>
                            <p>Reduce bounce rates by ensuring your pages load instantly for users on mobile and desktop devices.</p>
                        </div>
                    </div>
                    <div className="benefit-item">
                        <HardDrive size={24} className="text-accent" />
                        <div>
                            <h3>Save Storage</h3>
                            <p>Store more content while using less space on your hosting servers by using modern formats like WebP.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="usage-guide">
                <h2>How to use the Image Optimizer</h2>
                <div className="steps-cards">
                    <div className="step card">
                        <span className="step-num">01</span>
                        <h4>Upload</h4>
                        <p>Drag and drop your image or click to browse files (Up to 10MB).</p>
                    </div>
                    <div className="step card">
                        <span className="step-num">02</span>
                        <h4>Configure</h4>
                        <p>Select your desired format and adjust the quality slider for the perfect balance.</p>
                    </div>
                    <div className="step card">
                        <span className="step-num">03</span>
                        <h4>Download</h4>
                        <p>Instantly download your optimized image and use it on your website or social media.</p>
                    </div>
                </div>
            </section>

        </div>
    );
}
