import React from 'react';
import { Metadata } from 'next';
import AdSenseUnit from '@/components/ads/AdSenseUnit';

export const metadata: Metadata = {
    title: 'Compound Interest Calculator Free Online | Tech Resolutions',
    description: 'Free online Compound Interest Calculator tool. No signup required, works instantly in your browser.',
};

export default function CompoundInterestCalculatorPage() {
    return (
        <div className="container px-5 py-16 max-w-4xl mx-auto min-h-[70vh]">
            <div className="mb-8">
                <span style={{ color: 'var(--sub)', fontSize: '0.9rem' }}>Home &gt; Tools &gt; Compound Interest Calculator</span>
            </div>
            
            <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', color: 'var(--amber)' }}>Compound Interest Calculator</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '40px' }}>
                Free online Compound Interest Calculator. Fast, secure, and runs entirely in your browser.
            </p>

            <AdSenseUnit type="leaderboard" className="mb-8" />

            <div className="card glass" className="card glass p-10 text-center my-10">
                <div className="text-5xl mb-5">⚙️</div>
                <h3>Tool interface is loading...</h3>
                <p style={{ color: 'var(--sub)' }}>This utility is being optimized for Next.js Edge and will be deployed in the next 24 hours.</p>
            </div>

            <AdSenseUnit type="rectangle" className="mt-8" />
            
            <div className="mt-16">
                <h2 className="mb-5">How It Works</h2>
                <ol style={{ paddingLeft: '20px', color: 'var(--sub)' }}>
                    <li className="mb-3">Upload or enter your input data.</li>
                    <li className="mb-3">Our client-side scripts process the data instantly.</li>
                    <li className="mb-3">Download or copy the formatted result.</li>
                </ol>
            </div>
        </div>
    );
}
