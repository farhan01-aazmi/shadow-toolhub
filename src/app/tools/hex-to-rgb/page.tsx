import React from 'react';
import { Metadata } from 'next';
import AdSenseUnit from '@/components/ads/AdSenseUnit';

export const metadata: Metadata = {
    title: 'Hex To Rgb Free Online | Nevy.in',
    description: 'Free online Hex To Rgb tool. No signup required, works instantly in your browser.',
};

export default function HexToRgbPage() {
    return (
        <div className="container" style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto', minHeight: '70vh' }}>
            <div style={{ marginBottom: '30px' }}>
                <span style={{ color: 'var(--sub)', fontSize: '0.9rem' }}>Home &gt; Tools &gt; Hex To Rgb</span>
            </div>
            
            <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', color: 'var(--amber)' }}>Hex To Rgb</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '40px' }}>
                Free online Hex To Rgb. Fast, secure, and runs entirely in your browser.
            </p>

            <AdSenseUnit type="leaderboard" className="mb-8" />

            <div className="card glass" style={{ padding: '40px', textAlign: 'center', margin: '40px 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>⚙️</div>
                <h3>Tool interface is loading...</h3>
                <p style={{ color: 'var(--sub)' }}>This utility is being optimized for Next.js Edge and will be deployed in the next 24 hours.</p>
            </div>

            <AdSenseUnit type="rectangle" className="mt-8" />
            
            <div style={{ marginTop: '60px' }}>
                <h2 style={{ marginBottom: '20px' }}>How It Works</h2>
                <ol style={{ paddingLeft: '20px', color: 'var(--sub)' }}>
                    <li style={{ marginBottom: '10px' }}>Upload or enter your input data.</li>
                    <li style={{ marginBottom: '10px' }}>Our client-side scripts process the data instantly.</li>
                    <li style={{ marginBottom: '10px' }}>Download or copy the formatted result.</li>
                </ol>
            </div>
        </div>
    );
}
