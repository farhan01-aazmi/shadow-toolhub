import React from 'react';
import { Metadata } from 'next';
import AdSenseUnit from '@/components/ads/AdSenseUnit';

export const metadata: Metadata = {
    title: 'Yards To Meters Free Online | Tech Resolutions',
    description: 'Free online Yards To Meters tool. No signup required, works instantly in your browser.',
};

export default function YardsToMetersPage() {
    return (
        <div className="container px-5 py-16 max-w-4xl mx-auto min-h-[70vh]">
            <div className="mb-8">
                <span className="text-sub text-sm">Home &gt; Tools &gt; Yards To Meters</span>
            </div>
            
            <h1 className="text-4xl mb-2 text-amber">Yards To Meters</h1>
            <p className="text-sub text-lg mb-10">
                Free online Yards To Meters. Fast, secure, and runs entirely in your browser.
            </p>

            <AdSenseUnit type="leaderboard" className="mb-8" />

            <div className="card glass p-10 text-center my-10">
                <div className="text-5xl mb-5">⚙️</div>
                <h3>Tool interface is loading...</h3>
                <p className="text-sub">This utility is being optimized for Next.js Edge and will be deployed in the next 24 hours.</p>
            </div>

            <AdSenseUnit type="rectangle" className="mt-8" />
            
            <div className="mt-16">
                <h2 className="mb-5">How It Works</h2>
                <ol className="pl-5 text-sub">
                    <li className="mb-2">Upload or enter your input data.</li>
                    <li className="mb-2">Our client-side scripts process the data instantly.</li>
                    <li className="mb-2">Download or copy the formatted result.</li>
                </ol>
            </div>
        </div>
    );
}
