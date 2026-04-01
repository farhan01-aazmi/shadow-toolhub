import React from 'react';
import { Metadata } from 'next';
import BinaryToText from './BinaryToText';
import { Info, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Binary To Text Converter Free Online | Tech Resolutions',
    description: 'Convert binary code (0s and 1s) into readable text instantly. Professional grade, 100% private, and fast. No data leaves your browser.',
};

export default function BinaryToTextPage() {
    return (
        <div className="container" style={{ padding: '60px 48px', maxWidth: '1200px', margin: '0 auto', minHeight: '100vh' }}>
            <div style={{ marginBottom: '30px', fontFamily: 'var(--font-dm-mono)', fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--sub)' }}>
                Home &gt; Tools &gt; Binary To Text
            </div>
            
            <header className="mb-12">
                <div className="hero-kicker mb-4">{/* Tool: Developer Utility */}</div>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '20px' }}>
                    Binary <span className="amber">Decoder.</span><br />Text Output.
                </h1>
                <p style={{ color: 'var(--sub2)', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.8 }}>
                    Decode standard 8-bit binary strings into human-readable characters. Useful for debugging, CTF challenges, and data analysis.
                </p>
            </header>

            <BinaryToText />

            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="card glass p-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-amber/10 rounded-lg"><Info className="text-amber" /></div>
                        <h3 className="font-bold">Standard UTF-8</h3>
                    </div>
                    <p className="text-sub text-sm leading-relaxed">Our decode algorithm uses the standard UTF-8/ASCII character mapping, providing the most accurate results for modern software development.</p>
                </div>
                <div className="card glass p-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-accent/10 rounded-lg"><ShieldCheck className="text-accent" /></div>
                        <h3 className="font-bold">Privacy Guaranteed</h3>
                    </div>
                    <p className="text-sub text-sm leading-relaxed">Most binary decoders send your string to a backend for processing. Our tool executes 100% in your browser&apos;s RAM, ensuring your information stays private.</p>
                </div>
            </div>

            <section className="mt-24 pt-24 border-t border-line">
                <h2 style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '40px' }}>How to Use Binary to Text</h2>
                <div className="pro-content">
                    <p className="text-sub leading-relaxed mb-6">Binary code represents information using only 0 and 1. To use this tool, simply paste your binary sequence (separated by spaces or as a continuous block) into the input field and click &quot;Convert to Text.&quot; The decoder will iterate through every 8 bits (one byte) and convert it into the corresponding character.</p>
                    <p className="text-sub leading-relaxed"><b>Example:</b> Input 01010100 01100101 01100011 01101000 will result in <b>Tech</b>. This tool is optimized for 2026 performance standards, handling large data blocks with sub-millisecond latency.</p>
                </div>
            </section>
        </div>
    );
}
