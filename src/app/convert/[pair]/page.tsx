import React from 'react';
import Link from 'next/link';
import { generateMetaTitle, generateMetaDescription, generateIntroParagraph, generateHistoricalAnalysis, generateFAQSchema, generateLongFormArticle } from '@/lib/seo/spintax';
import { fiatCurrencies } from '@/lib/data/fiat';
import { notFound } from 'next/navigation';
import AdSenseUnit from '@/components/ads/AdSenseUnit';

export const revalidate = 86400; // 24 hours
export const dynamicParams = true;

export async function generateStaticParams() {
    const criticalPairs = [
        { pair: 'usd-to-eur' }, { pair: 'usd-to-gbp' }, { pair: 'usd-to-inr' },
        { pair: 'eur-to-usd' }, { pair: 'gbp-to-usd' }, { pair: 'inr-to-usd' },
        { pair: 'usd-to-btc' }, { pair: 'btc-to-usd' }, { pair: 'eur-to-gbp' }
    ];
    return criticalPairs;
}

export async function generateMetadata({ params }: { params: Promise<{ pair: string }> }) {
    const { pair } = await params;
    const parts = pair.split('-to-');
    if (parts.length !== 2) return { title: 'Currency Conversion' };

    const fromCode = parts[0].toUpperCase();
    const toCode = parts[1].toUpperCase();

    return {
        title: generateMetaTitle(fromCode, toCode),
        description: generateMetaDescription(fromCode, toCode),
        alternates: {
            canonical: `https://www.nevy.in/convert/${pair}`
        }
    };
}

export default async function ConversionPage({ params }: { params: Promise<{ pair: string }> }) {
    const { pair } = await params;
    const parts = pair.split('-to-');

    if (parts.length !== 2) {
        notFound();
    }

    const fromCode = parts[0].toUpperCase();
    const toCode = parts[1].toUpperCase();

    const fiatFrom = fiatCurrencies.find(f => f.code === fromCode);
    const fiatTo = fiatCurrencies.find(f => f.code === toCode);

    const fromName = fiatFrom?.name || (fromCode.length > 3 ? fromCode : `${fromCode} Coin`);
    const toName = fiatTo?.name || (toCode.length > 3 ? toCode : `${toCode} Coin`);

    const introText = generateIntroParagraph(fromCode, toCode, fromName, toName);
    const historicalText = generateHistoricalAnalysis(fromCode, toCode);
    const faqSchema = generateFAQSchema(fromCode, toCode);
    const article = generateLongFormArticle(fromCode, toCode, fromName, toName, pair);

    return (
        <div className="container" style={{ padding: '80px 20px', maxWidth: '900px', margin: '0 auto' }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '20px', background: 'linear-gradient(135deg, #fff 0%, #aaa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Convert {fromName} to {toName}
                </h1>
                <p style={{ color: 'var(--primary)', fontSize: '1.2rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '600' }}>
                    Institutional Grade Exchange Data (2026)
                </p>
            </div>

            <AdSenseUnit type="leaderboard" />

            <div className="card glass" style={{ padding: '60px', marginBottom: '60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'var(--primary)', filter: 'blur(100px)', opacity: '0.1' }}></div>

                <h2 style={{ fontSize: '4.5rem', fontWeight: '900', margin: '20px 0', color: '#fff' }}>
                    1 {fromCode} <span style={{ color: 'var(--text-secondary)', fontSize: '2rem' }}>=</span> ? {toCode}
                </h2>

                <p style={{ marginBottom: '40px', color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto 40px' }}>
                    Global currency markets are moving. Unlock the exact mid-market rate for your {fromName} conversion instantly.
                </p>

                <Link href={`/tools/currency-converter/${fromCode.toLowerCase()}-to-${toCode.toLowerCase()}`} className="btn-a" style={{ padding: '20px 50px', fontSize: '1.3rem', borderRadius: '50px' }}>
                    Open Live Calculator
                </Link>
            </div>

            <div className="prose" style={{ background: 'rgba(255,255,255,0.01)', padding: '50px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div dangerouslySetInnerHTML={{ __html: article.slice(0, article.length / 2).replace(/\n/g, '<br/>') }} style={{ color: 'var(--text-secondary)', lineHeight: '2' }} />
                <AdSenseUnit type="in-article" />
                <div dangerouslySetInnerHTML={{ __html: article.slice(article.length / 2).replace(/\n/g, '<br/>') }} style={{ color: 'var(--text-secondary)', lineHeight: '2' }} />
            </div>

            <div style={{ marginTop: '80px' }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '30px' }}>Related {fromCode} Dashboards</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px' }}>
                    {fiatCurrencies.slice(0, 12).map((f) => {
                        if (f.code === fromCode) return null;
                        return (
                            <Link
                                key={f.code}
                                href={`/convert/${fromCode.toLowerCase()}-to-${f.code.toLowerCase()}`}
                                className="card glass-hover"
                                style={{ padding: '20px', textAlign: 'center', textDecoration: 'none', transition: '0.3s' }}
                            >
                                <span style={{ fontWeight: '700', color: '#fff' }}>{fromCode} to {f.code}</span>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
