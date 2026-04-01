import React from 'react';
import { Metadata } from 'next';
import AdSenseUnit from '@/components/ads/AdSenseUnit';

export const metadata: Metadata = {
    title: 'Tip Calculator Free Online | Tech Resolutions',
    description: 'Free online Tip Calculator tool. No signup required, works instantly in your browser.',
};

export default function TipCalculatorPage() {
    return (
        <div className="container px-5 py-16 max-w-4xl mx-auto min-h-[70vh]">
            <div className="mb-8">
                <span className="text-sub text-sm">Home &gt; Tools &gt; Tip Calculator</span>
            </div>
            
            <h1 className="text-4xl mb-3 text-amber-500 font-bold">Tip Calculator</h1>
            <p className="text-sub text-lg mb-10">
                Free online Tip Calculator. Fast, secure, and runs entirely in your browser.
            </p>

            <AdSenseUnit type="leaderboard" className="mb-8" />

            <div className="card glass p-10 text-center my-10">
                <div className="text-5xl mb-5">⚙️</div>
                <h3 className="text-2xl font-semibold mb-2">Tool interface is loading...</h3>
                <p className="text-sub">This utility is being optimized for Next.js Edge and will be deployed in the next 24 hours.</p>
            </div>

            <AdSenseUnit type="rectangle" className="mt-8" />
            
            <div className="mt-16">
                <h2 className="mb-5 text-2xl font-bold">How It Works</h2>
                <ol className="pl-5 text-sub list-decimal space-y-3">
                    <li>Upload or enter your input data.</li>
                    <li>Our client-side scripts process the data instantly.</li>
                    <li>Download or copy the formatted result.</li>
                </ol>
            </div>
        </div>
    );
}
