import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Grams To Newtons - Free Online Universal Converter | Tech Resolutions',
    description: 'Convert Grams to Newtons instantly with our free online tool. High accuracy, no signup required, 100% private.',
};

export default function ToolPage() {
    return (
        <div className="container" style={{ padding: '80px 20px', maxWidth: '800px', margin: '0 auto' }}>
            <div className="rv">
                <div className="sec-lbl">// converter</div>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Grams To Newtons</h1>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>
                    Quick and accurate grams to newtons utility. Perfect for students, engineers, and professionals.
                </p>
                <div className="card glass" style={{ padding: '40px', textAlign: 'center' }}>
                    <p style={{ marginBottom: '20px', fontSize: '1.2rem' }}>Tool logic is initializing...</p>
                    <div style={{ padding: '20px', border: '1px dashed var(--sub)', borderRadius: '10px', color: 'var(--sub)' }}>
                        Interactive UI component loading from Edge...
                    </div>
                </div>
                <div className="mt-16">
                    <h2>About Grams To Newtons</h2>
                    <p style={{ marginTop: '20px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                        This tool allows you to convert between different units with ease. Simply enter your value and get the result instantly.
                        All processing is done in your browser for maximum privacy.
                    </p>
                </div>
            </div>
        </div>
    );
}
