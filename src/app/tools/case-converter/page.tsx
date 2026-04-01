import React from 'react';
import { Metadata } from 'next';
import CaseConverter from './CaseConverter';
import { Check, FileText } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Case Converter Free Online | Sentence, Title, Upper, Lower | Tech Resolutions',
    description: 'Instantly transform your text to Sentence case, Title Case, UPPERCASE, or lowercase. Professional online case converter with no data tracking.',
};

export default function CaseConverterPage() {
    return (
        <div className="container" style={{ padding: '60px 48px', maxWidth: '1200px', margin: '0 auto', minHeight: '100vh' }}>
            <div style={{ marginBottom: '30px', fontFamily: 'var(--font-dm-mono)', fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--sub)' }}>
                Home &gt; Tools &gt; Case Converter
            </div>
            
            <header className="mb-12">
                <div className="hero-kicker mb-4">{/* Tool: Text Utility */}</div>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '20px' }}>
                    Case <span className="amber">Changer.</span><br />Total Control.
                </h1>
                <p style={{ color: 'var(--sub2)', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.8 }}>
                    Format your content exactly how you want it. Convert strings to uppercase, lowercase, or sentence case with architectural precision.
                </p>
            </header>

            <CaseConverter />

            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="card glass p-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-amber/10 rounded-lg"><Check className="text-amber" /></div>
                        <h3 className="font-bold">4 Conversion Modes</h3>
                    </div>
                    <ul className="space-y-3 text-sub text-sm leading-relaxed">
                        <li>• Sentence Case: Capitalizes only the first letter.</li>
                        <li>• UPPERCASE: Makes every letter a capital.</li>
                        <li>• lowercase: Makes every letter small.</li>
                        <li>• Title Case: Capitalizes the first letter of each word.</li>
                    </ul>
                </div>
                <div className="card glass p-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-accent/10 rounded-lg"><FileText className="text-accent" /></div>
                        <h3 className="font-bold">SEO Friendly</h3>
                    </div>
                    <p className="text-sub text-sm leading-relaxed">Perfect for formatting SEO Meta Titles or Headings to ensure consistency across your digital platform in 2026.</p>
                </div>
            </div>

            <section className="mt-24 pt-24 border-t border-line">
                <h2 style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '40px' }}>Mastering Text Formatting</h2>
                <div className="pro-content">
                    <p className="text-sub leading-relaxed mb-6">Whether you are fixing a &quot;CAPS LOCK&quot; accident or preparing a novel for publishing, manual case correction is a waste of time. Our <b>Case Converter</b> automates the process using highly optimized JavaScript regex. It supports multiple languages and respects standard punctuation markers to ensure sentence case logic is accurate.</p>
                    <p className="text-sub leading-relaxed">By processing data 100% on the client side, we ensure your text never leaves your browser, giving you absolute privacy for sensitive documents or personal notes.</p>
                </div>
            </section>
        </div>
    );
}
