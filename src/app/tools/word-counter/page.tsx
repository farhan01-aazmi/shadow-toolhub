'use client';

import React, { useState } from 'react';
import { Type, FileText, Zap, Info, Lightbulb } from 'lucide-react';
import StructuredData from '@/components/seo/StructuredData';

export default function WordCounterPage() {
    const [text, setText] = useState('');

    const stats = {
        words: text.trim() ? text.trim().split(/\s+/).length : 0,
        chars: text.length,
        charsNoSpaces: text.replace(/\s/g, '').length,
        sentences: text.split(/[.!?]+/).filter(Boolean).length,
        readingTime: Math.ceil(text.trim().split(/\s+/).length / 200) || 0
    };

    return (
        <div className="tool-container">
            <header className="tool-header">
                <div className="tool-category">Web Utility</div>
                <h1>Professional <span className="gradient-text">Word Counter</span></h1>
                <p className="tool-intro">
                    Analyze your content with precision. Get instant statistics on word count,
                    character density, and estimated reading time. 100% private.
                </p>
                <StructuredData data={{
                    "@context": "https://schema.org",
                    "@type": "SoftwareApplication",
                    "name": "Professional Word Counter",
                    "operatingSystem": "All",
                    "applicationCategory": "UtilitiesApplication",
                    "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "USD"
                    },
                    "description": "Accurate word and character counter with reading time estimation.",
                    "featureList": [
                        "Real-time word count",
                        "Character count (with/without spaces)",
                        "Sentence count",
                        "Reading time estimation"
                    ]
                }} />
                <StructuredData data={{
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "Is there a limit on text length?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "No, our professional word counter can handle extremely long texts, making it perfect for manuscripts and long-form blog posts."
                            }
                        }
                    ]
                }} />
            </header>

            <div className="tool-layout">
                <div className="tool-main">
                    <div className="card" style={{ padding: '0' }}>
                        <textarea
                            className="word-counter-textarea"
                            placeholder="Paste your text here..."
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>
                </div>

                <div className="tool-sidebar">
                    <div className="card stats-card">
                        <h3>Content Stats</h3>
                        <div className="stats-list">
                            <div className="stat-row">
                                <span>Words</span>
                                <b>{stats.words}</b>
                            </div>
                            <div className="stat-row">
                                <span>Characters</span>
                                <b>{stats.chars}</b>
                            </div>
                            <div className="stat-row">
                                <span>Chars (No Spaces)</span>
                                <b>{stats.charsNoSpaces}</b>
                            </div>
                            <div className="stat-row">
                                <span>Sentences</span>
                                <b>{stats.sentences}</b>
                            </div>
                            <div className="stat-row" style={{ borderTop: '1px solid var(--card-border)', marginTop: '12px', paddingTop: '12px' }}>
                                <span>Reading Time</span>
                                <b>~{stats.readingTime} min</b>
                            </div>
                        </div>
                    </div>

                    <div className="card tip-card" style={{ marginTop: '24px' }}>
                        <div className="tip-header">
                            <Lightbulb size={16} color="var(--primary)" />
                            <span>Pro Insight</span>
                        </div>
                        <p>
                            For SEO, most top-ranking articles in 2026 are between 1,200 and 1,800 words.
                            Ensure your keywords appear naturally in the first 100 words.
                        </p>
                    </div>
                </div>
            </div>

            <section className="expert-vault card" style={{ marginTop: '40px' }}>
                <div className="vault-header">
                    <Zap size={20} />
                    <h2>Expert Vault: Content Optimization</h2>
                </div>
                <div className="vault-content">
                    <div className="vault-item">
                        <div className="vault-icon"><FileText size={18} /></div>
                        <div>
                            <h4>Readability is Authority</h4>
                            <p>Google's EEAT signals now prioritize content that is actually helpful. Avoid 'fluff' and use shorter sentences to increase retention.</p>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .word-counter-textarea {
                    width: 100%;
                    min-height: 400px;
                    background: transparent;
                    border: none;
                    padding: 32px;
                    color: white;
                    font-size: 16px;
                    font-family: inherit;
                    outline: none;
                    resize: vertical;
                }
                .stats-list {
                    margin-top: 20px;
                }
                .stat-row {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 12px;
                    font-size: 14px;
                }
                .stat-row span {
                    color: var(--text-muted);
                }
                .tip-header {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 12px;
                    font-weight: 700;
                    font-size: 14px;
                }
                .tip-card p {
                    font-size: 13px;
                    color: var(--text-muted);
                    line-height: 1.5;
                }
                .vault-header {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 24px;
                    color: var(--primary);
                }
                .vault-item {
                    display: flex;
                    gap: 16px;
                }
                .vault-icon {
                    flex-shrink: 0;
                    width: 40px;
                    height: 40px;
                    border-radius: 8px;
                    background: var(--primary-glow);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--primary);
                }
            `}</style>
        </div>
    );
}
