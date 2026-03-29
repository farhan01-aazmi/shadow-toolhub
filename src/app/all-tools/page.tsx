import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'All Free Tools | Nevy.in - Ultimate Utility Hub',
    description: 'Access 150+ free online tools for image compression, PDF conversion, SEO meta generation, finance calculators, and more. No signup required.',
    alternates: {
        canonical: 'https://www.nevy.in/all-tools',
    },
};

const CATEGORIES = [
    {
        name: 'Finance & Money',
        ico: '📐',
        tools: [
            { name: 'EMI Calculator', link: '/tools/loan-calculator/' },
            { name: 'Currency Converter', link: '/tools/currency-converter/' },
            { name: 'Crypto Tracker', link: '/tools/crypto-tracker/' },
        ]
    },
    {
        name: 'SEO & Content',
        ico: '✍️',
        tools: [
            { name: 'Word Counter', link: '/tools/word-counter/' },
            { name: 'Meta Tag Generator', link: '/tools/meta-generator/' },
            { name: 'Programmatic Conversions', link: '/convert/' },
        ]
    },
    {
        name: 'Images & Media',
        ico: '🖼️',
        tools: [
            { name: 'Image Compressor', link: '/tools/image-optimizer/' },
            { name: 'WebP Converter', link: '/tools/image-optimizer/' },
        ]
    },
    {
        name: 'Security & Dev',
        ico: '🔐',
        tools: [
            { name: 'Password Generator', link: '/tools/meta-generator/' },
            { name: 'JSON Formatter', link: '/tools/meta-generator/' },
        ]
    }
];

export default function ToolsDirectory() {
    return (
        <div className="container" style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>All Free Tools</h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                    Explore our suite of 150+ free, ad-free, and high-performance utilities.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px' }}>
                {CATEGORIES.map(cat => (
                    <div key={cat.name} className="card glass rv" style={{ padding: '30px' }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{cat.ico}</div>
                        <h2 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>{cat.name}</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {cat.tools.map(tool => (
                                <Link key={tool.name} href={tool.link} className="btn-o" style={{ textAlign: 'left', padding: '10px 15px', fontSize: '0.95rem' }}>
                                    {tool.name} →
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '80px', textAlign: 'center', padding: '40px', background: 'rgba(255,255,255,0.02)', borderRadius: '20px' }}>
                <h3 style={{ marginBottom: '15px' }}>Need a specific tool?</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '25px' }}>
                    We are constantly adding new utilities to Nevy.in. Contact us to request a custom tool.
                </p>
                <Link href="/contact/" className="btn-a" style={{ padding: '12px 30px' }}>
                    Contact Support
                </Link>
            </div>
        </div>
    );
}
