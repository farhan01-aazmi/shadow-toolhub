import { Metadata } from 'next';
import OptimizerComponent from './OptimizerComponent';
import { ShieldCheck, Zap, Globe, HardDrive } from 'lucide-react';
import StructuredData from '@/components/seo/StructuredData';

export const metadata: Metadata = {
    title: "Image Optimizer - Compress & Convert to WebP Online | Nevy.in",
    description: "Free online image optimizer to compress and convert images to WebP, JPEG, or PNG. Boost your website speed and USA SEO ranking without losing quality.",
    keywords: ["image optimizer", "compress image", "webp converter", "online image compressor", "resize image online", "speed up website"],
    alternates: {
        canonical: "https://nevy.in/tools/image-optimizer",
    },
    openGraph: {
        images: [
            {
                url: 'https://nevy.in/og/og-image-optimizer.png',
                width: 1200,
                height: 630,
                alt: 'Image Optimizer',
            }
        ],
    }
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

            <section className="seo-content card glass mt-8">
                <div className="pro-content">
                    <h3>Professional Image Strategy for Web Mastery</h3>
                    <p>
                        In the era of <b>Core Web Vitals</b>, image optimization is no longer optional.
                        Large, unoptimized images are the leading cause of high <b>Largest Contentful Paint (LCP)</b>
                        scores, which directly negatively impact your USA Google rankings.
                    </p>
                    <p>
                        Our <b>Image Optimizer Pro</b> leverages the power of the <b>WebP</b> format.
                        WebP is a modern image format that provides superior lossless and lossy
                        compression for images on the web. Using WebP, webmasters can create
                        smaller, richer images that make the web faster.
                    </p>
                    <p>
                        Beyond simple compression, we provide institutional-grade conversion
                        algorithms that preserve the <b>Visual Fidelity</b> of your assets while
                        stripping unnecessary metadata that adds weight to your pages.
                    </p>
                    <ul>
                        <li><b>WebP Conversion:</b> Standard for modern browser performance.</li>
                        <li><b>Client-Side Processing:</b> Secure, fast, and no server latency.</li>
                        <li><b>SEO Optimized:</b> Built to help you hit those 99+ Lighthouse scores.</li>
                    </ul>
                </div>
            </section>

        </div>
    );
}
