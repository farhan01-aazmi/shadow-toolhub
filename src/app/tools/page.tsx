import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'All Free Online Tools | Nevy.in - 150+ Utility Tools',
    description: 'Browse 150+ free online tools — image compressor, PDF converter, EMI calculator, password generator, word counter, crypto tracker and more. No signup required.',
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
            { name: 'US Income Tax Calculator', link: '/tools/us-income-tax-calculator/' },
            { name: 'GST Calculator', link: '/tools/gst-calculator/' },
            { name: 'Percentage Calculator', link: '/tools/percentage-calculator/' },
            { name: 'Tip Calculator', link: '/tools/tip-calculator/' },
            { name: 'Salary to Hourly Calculator', link: '/tools/salary-to-hourly-calculator/' },
            { name: 'Compound Interest Calculator', link: '/tools/compound-interest-calculator/' },
            { name: 'Mortgage Calculator', link: '/tools/mortgage-calculator/' },
        ]
    },
    {
        name: 'Text & Content',
        ico: '✍️',
        tools: [
            { name: 'Word Counter', link: '/tools/word-counter/' },
            { name: 'Character Counter', link: '/tools/character-counter/' },
            { name: 'Case Converter', link: '/tools/case-converter/' },
            { name: 'Lorem Ipsum Generator', link: '/tools/lorem-ipsum-generator/' },
            { name: 'Text to Speech', link: '/tools/text-to-speech/' },
            { name: 'Reading Time Calculator', link: '/tools/reading-time-calculator/' },
            { name: 'Sentence Counter', link: '/tools/sentence-counter/' },
        ]
    },
    {
        name: 'Images & Media',
        ico: '🖼️',
        tools: [
            { name: 'Image Compressor', link: '/tools/image-optimizer/' },
            { name: 'Image Resizer', link: '/tools/image-resizer/' },
            { name: 'YouTube Thumbnail Downloader', link: '/tools/youtube-thumbnail-downloader/' },
            { name: 'QR Code Generator', link: '/tools/qr-code-generator/' },
            { name: 'Hex to RGB Converter', link: '/tools/hex-to-rgb/' },
            { name: 'Color Picker', link: '/tools/color-picker/' },
        ]
    },
    {
        name: 'PDF Tools',
        ico: '📄',
        tools: [
            { name: 'PDF to Word', link: '/tools/pdf-to-word/' },
            { name: 'Word to PDF', link: '/tools/word-to-pdf/' },
            { name: 'Merge PDF', link: '/tools/merge-pdf/' },
            { name: 'Compress PDF', link: '/tools/compress-pdf/' },
        ]
    },
    {
        name: 'SEO Tools',
        ico: '🏷️',
        tools: [
            { name: 'Meta Tag Generator', link: '/tools/meta-generator/' },
            { name: 'Meta Description Generator', link: '/tools/meta-description-generator/' },
            { name: 'Blog Title Generator', link: '/tools/blog-title-generator/' },
            { name: 'YouTube Title Generator', link: '/tools/youtube-title-generator/' },
        ]
    },
    {
        name: 'Security & Privacy',
        ico: '🔐',
        tools: [
            { name: 'Password Generator', link: '/tools/password-generator/' },
            { name: 'Random Number Generator', link: '/tools/random-number-generator/' },
            { name: 'UUID Generator', link: '/tools/uuid-generator/' },
            { name: 'IP Address Lookup', link: '/tools/ip-address-lookup/' },
        ]
    },
    {
        name: 'Developer Tools',
        ico: '💻',
        tools: [
            { name: 'JSON Formatter', link: '/tools/json-formatter/' },
            { name: 'Base64 Encoder/Decoder', link: '/tools/base64-encoder-decoder/' },
            { name: 'URL Encoder/Decoder', link: '/tools/url-encoder-decoder/' },
            { name: 'HTML Entities Encoder', link: '/tools/html-entities/' },
            { name: 'Regex Tester', link: '/tools/regex-tester/' },
            { name: 'Markdown to HTML', link: '/tools/markdown-to-html/' },
            { name: 'CSV to JSON', link: '/tools/csv-to-json/' },
            { name: 'Diff Checker', link: '/tools/diff-checker/' },
            { name: 'Binary to Text', link: '/tools/binary-to-text/' },
            { name: 'Pixel to Em/Rem', link: '/tools/px-to-em/' },
        ]
    },
    {
        name: 'Utility & Lifestyle',
        ico: '⚙️',
        tools: [
            { name: 'Age Calculator', link: '/tools/age-calculator/' },
            { name: 'BMI Calculator', link: '/tools/bmi-calculator/' },
            { name: 'Countdown Timer', link: '/tools/countdown-timer/' },
            { name: 'Pomodoro Timer', link: '/tools/pomodoro-timer/' },
            { name: 'Time Zone Converter', link: '/tools/time-zone-converter/' },
            { name: 'Unit Converter', link: '/tools/unit-converter/' },
            { name: 'Screen Resolution Checker', link: '/tools/screen-resolution/' },
        ]
    },
    {
        name: 'Unit Converters',
        ico: '📏',
        tools: [
            { name: 'Kg to Pounds', link: '/tools/kg-to-pounds/' },
            { name: 'Miles to Km', link: '/tools/miles-to-km/' },
            { name: 'Celsius to Fahrenheit', link: '/tools/celsius-to-fahrenheit/' },
            { name: 'Inches to Cm', link: '/tools/inches-to-cm/' },
            { name: 'Liters to Gallons', link: '/tools/liters-to-gallons/' },
            { name: 'Feet to Meters', link: '/tools/feet-to-meters/' },
            { name: 'Ounces to Grams', link: '/tools/ounces-to-grams/' },
            { name: 'Yards to Meters', link: '/tools/yards-to-meters/' },
        ]
    },
    {
        name: 'US State Calculators',
        ico: '🇺🇸',
        tools: [
            { name: 'California Paycheck Calculator', link: '/tools/california-paycheck-calculator/' },
            { name: 'Texas Sales Tax Calculator', link: '/tools/texas-sales-tax-calculator/' },
            { name: 'New York Paycheck Calculator', link: '/tools/new-york-paycheck-calculator/' },
            { name: 'Florida Mortgage Calculator', link: '/tools/florida-mortgage-calculator/' },
        ]
    },
];

export default function ToolsDirectory() {
    const totalTools = CATEGORIES.reduce((sum, cat) => sum + cat.tools.length, 0);

    return (
        <div className="container" style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>All Free Tools</h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                    Browse {totalTools}+ free, high-performance utilities across {CATEGORIES.length} categories. No signup. No fees. Ever.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px' }}>
                {CATEGORIES.map(cat => (
                    <div key={cat.name} className="card glass rv" style={{ padding: '30px' }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{cat.ico}</div>
                        <h2 style={{ marginBottom: '8px', fontSize: '1.4rem' }}>{cat.name}</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '20px' }}>
                            {cat.tools.length} tools
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {cat.tools.map(tool => (
                                <Link key={tool.name} href={tool.link} className="btn-o" style={{ textAlign: 'left', padding: '10px 15px', fontSize: '0.9rem' }}>
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
