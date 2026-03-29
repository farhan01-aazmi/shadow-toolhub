import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { fiatCurrencies } from '@/lib/data/fiat';
import { commonCurrencies } from '@/lib/api/currency';

export const metadata: Metadata = {
    title: 'Currency & Crypto Conversion Directory | Nevy.in',
    description: 'Explore our comprehensive directory of 10,000+ currency and cryptocurrency exchange pairs. Real-time institutional rates with zero markup.',
    alternates: {
        canonical: 'https://www.nevy.in/convert',
    },
};

export default function ConvertDirectory() {
    const majorFiats = ['USD', 'EUR', 'GBP', 'INR', 'AUD', 'CAD', 'JPY', 'CHF', 'CNY', 'AED'];

    return (
        <div className="container" style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Conversion Directory</h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                    Access high-fidelity market data for 10,000+ global pairs.
                </p>
            </div>

            <section style={{ marginBottom: '60px' }}>
                <h2 style={{ marginBottom: '30px', borderBottom: '1px solid var(--border)', paddingBottom: '10px' }}>Major Fiat Conversions</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
                    {majorFiats.map(fiat => (
                        <div key={fiat} className="card glass" style={{ padding: '20px' }}>
                            <h3 style={{ marginBottom: '15px' }}>{fiat} Pairs</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                {fiatCurrencies.slice(0, 8).map(to => (
                                    fiat !== to.code && (
                                        <Link key={to.code} href={`/convert/${fiat.toLowerCase()}-to-${to.code.toLowerCase()}`} className="link-all" style={{ fontSize: '0.9rem' }}>
                                            {fiat} to {to.code}
                                        </Link>
                                    )
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 style={{ marginBottom: '30px', borderBottom: '1px solid var(--border)', paddingBottom: '10px' }}>Crypto to Fiat Gateway</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
                    {['bitcoin', 'ethereum', 'solana', 'dogecoin'].map(crypto => (
                        <div key={crypto} className="card glass" style={{ padding: '20px' }}>
                            <h3 style={{ marginBottom: '15px', textTransform: 'capitalize' }}>{crypto}</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                {majorFiats.map(fiat => (
                                    <Link key={fiat} href={`/convert/${crypto}-to-${fiat.toLowerCase()}`} className="link-all" style={{ fontSize: '0.9rem' }}>
                                        {crypto.toUpperCase()} to {fiat}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
