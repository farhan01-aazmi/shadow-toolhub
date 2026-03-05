'use client';

import React, { useState } from 'react';
import { Search, Zap, Code, Shield, Lightbulb, Copy, Check } from 'lucide-react';

export default function MetaGeneratorPage() {
    const [meta, setMeta] = useState({
        title: '',
        description: '',
        keywords: '',
        author: '',
        robots: 'index, follow'
    });
    const [copied, setCopied] = useState(false);

    const generateCode = () => {
        return `<!-- Primary Meta Tags -->
<title>${meta.title}</title>
<meta name="title" content="${meta.title}">
<meta name="description" content="${meta.description}">
<meta name="keywords" content="${meta.keywords}">
<meta name="author" content="${meta.author}">
<meta name="robots" content="${meta.robots}">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:title" content="${meta.title}">
<meta property="og:description" content="${meta.description}">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:title" content="${meta.title}">
<meta property="twitter:description" content="${meta.description}">`;
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generateCode());
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="tool-container">
            <header className="tool-header">
                <div className="tool-category">SEO Utility</div>
                <h1>Meta Tag <span className="gradient-text">Generator</span></h1>
                <p className="tool-intro">
                    Create clean, high-performance meta tags to improve your search visibility.
                    Optimized for 2026 search algorithms.
                </p>
            </header>

            <div className="tool-layout">
                <div className="tool-main">
                    <div className="card">
                        <div className="meta-form">
                            <div className="input-group">
                                <label>Page Title</label>
                                <input
                                    type="text"
                                    placeholder="Enter page title"
                                    className="premium-input"
                                    value={meta.title}
                                    onChange={(e) => setMeta({ ...meta, title: e.target.value })}
                                />
                                <small>{meta.title.length} / 60 characters (Optimal: 50-60)</small>
                            </div>

                            <div className="input-group" style={{ marginTop: '20px' }}>
                                <label>Meta Description</label>
                                <textarea
                                    placeholder="Enter meta description"
                                    className="premium-input"
                                    style={{ minHeight: '100px' }}
                                    value={meta.description}
                                    onChange={(e) => setMeta({ ...meta, description: e.target.value })}
                                />
                                <small>{meta.description.length} / 160 characters (Optimal: 150-160)</small>
                            </div>

                            <div className="input-group" style={{ marginTop: '20px' }}>
                                <label>Keywords (Comma separated)</label>
                                <input
                                    type="text"
                                    placeholder="e.g. tools, finance, shadow"
                                    className="premium-input"
                                    value={meta.keywords}
                                    onChange={(e) => setMeta({ ...meta, keywords: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="card result-card" style={{ marginTop: '32px' }}>
                        <div className="result-header">
                            <h3>Generated HTML</h3>
                            <button className="btn btn-outline" onClick={copyToClipboard} style={{ padding: '8px 16px' }}>
                                {copied ? <Check size={16} color="var(--primary)" /> : <Copy size={16} />}
                                {copied ? 'Copied!' : 'Copy Tags'}
                            </button>
                        </div>
                        <pre className="code-output">
                            {generateCode()}
                        </pre>
                    </div>
                </div>

                <div className="tool-sidebar">
                    <div className="card tip-card">
                        <div className="tip-header">
                            <Lightbulb size={16} color="var(--primary)" />
                            <span>SEO Excellence</span>
                        </div>
                        <p>
                            Meta descriptions don't directly influence rankings, but they greatly impact <b>CTR (Click-Through Rate)</b>.
                            Write for humans first, bots second.
                        </p>
                    </div>

                    <div className="card preview-card" style={{ marginTop: '24px' }}>
                        <h3>Search Preview</h3>
                        <div className="search-preview">
                            <div className="preview-url">www.yourdomain.com › tools</div>
                            <div className="preview-title">{meta.title || 'Page Title Appears Here'}</div>
                            <div className="preview-desc">
                                {meta.description || 'Your meta description will appear here in the search results snippets. Make it compelling!'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .premium-input {
                    width: 100%;
                    background: #111418;
                    border: 1px solid var(--card-border);
                    border-radius: 8px;
                    padding: 12px 16px;
                    color: white;
                    outline: none;
                    transition: border-color 0.2s;
                }
                .premium-input:focus {
                    border-color: var(--primary);
                }
                .input-group label {
                    display: block;
                    font-size: 14px;
                    font-weight: 600;
                    margin-bottom: 8px;
                    color: var(--text-muted);
                }
                .input-group small {
                    display: block;
                    margin-top: 6px;
                    font-size: 11px;
                    color: var(--text-muted);
                }
                .result-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 20px;
                }
                .code-output {
                    background: #050505;
                    padding: 24px;
                    border-radius: 8px;
                    font-family: 'Fira Code', monospace;
                    font-size: 13px;
                    color: #94a3b8;
                    white-space: pre-wrap;
                    overflow-x: auto;
                    border: 1px solid #1a1a1a;
                }
                .search-preview {
                    margin-top: 16px;
                    background: #fff;
                    padding: 16px;
                    border-radius: 8px;
                }
                .preview-url {
                    color: #202124;
                    font-size: 12px;
                    margin-bottom: 4px;
                }
                .preview-title {
                    color: #1a0dab;
                    font-size: 18px;
                    margin-bottom: 8px;
                }
                .preview-desc {
                    color: #4d5156;
                    font-size: 14px;
                    line-height: 1.4;
                }
            `}</style>
        </div>
    );
}
