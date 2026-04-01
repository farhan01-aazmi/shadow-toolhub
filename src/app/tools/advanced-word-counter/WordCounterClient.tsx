'use client';

import React, { useState } from 'react';
import { FileText, Zap, Lightbulb } from 'lucide-react';

export default function WordCounterClient() {
    const [text, setText] = useState('');

    const stats = {
        words: text.trim() ? text.trim().split(/\s+/).length : 0,
        chars: text.length,
        charsNoSpaces: text.replace(/\s/g, '').length,
        sentences: text.split(/[.!?]+/).filter(Boolean).length,
        readingTime: Math.ceil(text.trim().split(/\s+/).length / 200) || 0
    };

    return (
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

            <section className="expert-vault card shadow-lg" style={{ marginTop: '40px', gridColumn: '1 / -1' }}>
                <div className="vault-header" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', color: 'var(--primary)' }}>
                    <Zap size={20} />
                    <h2>Expert Vault: Content Optimization</h2>
                </div>
                <div className="vault-content">
                    <div className="vault-item" style={{ display: 'flex', gap: '16px' }}>
                        <div className="vault-icon" style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '8px', background: 'var(--primary-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                            <FileText size={18} />
                        </div>
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
            `}</style>
        </div>
    );
}
