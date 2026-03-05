import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLatestRates, getCurrencyName, commonCurrencies } from '@/lib/api/currency';
import ConverterComponent from '../ConverterComponent';
import Link from 'next/link';
import { ArrowRight, Info, CheckCircle, TrendingDown, TrendingUp, ShieldCheck, Zap, Lightbulb, MessageSquare } from 'lucide-react';
import StructuredData from '@/components/seo/StructuredData';

interface Props {
    params: { pair: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const [fromCode, toCode] = (await params).pair.split('-to-');

    if (!fromCode || !toCode) return { title: 'Currency Converter' };

    const from = fromCode.toUpperCase();
    const to = toCode.toUpperCase();

    return {
        title: `${from} to ${to} Currency Converter - Live ${from}/${to} Exchange Rate`,
        description: `Convert ${from} to ${to} with real-time exchange rates. Get the latest ${from}/${to} mid-market rate, historical data, and analysis for free.`,
    };
}

export default async function CurrencyPairPage({ params }: Props) {
    const [fromCode, toCode] = (await params).pair.split('-to-');

    if (!fromCode || !toCode) notFound();

    const from = fromCode.toUpperCase();
    const to = toCode.toUpperCase();

    // Validate currencies
    if (!commonCurrencies.includes(from) || !commonCurrencies.includes(to)) {
        notFound();
    }

    const data = await getLatestRates(from);
    if (!data) notFound();

    const rate = data.rates[to];
    const fromName = getCurrencyName(from);
    const toName = getCurrencyName(to);

    return (
        <div className="tool-container">
            <nav className="breadcrumb">
                <Link href="/">Home</Link> / <Link href="/tools/currency-converter">Currency Converter</Link> / <span>{from} to {to}</span>
            </nav>

            <header className="tool-header">
                <h1 className="gradient-text">{from} to {to} Converter</h1>
                <p className="tool-intro">
                    Convert {fromName} ({from}) to {toName} ({to}) with institutional-grade accuracy.
                    Current mid-market rate: <b>1 {from} = {rate.toFixed(4)} {to}</b>.
                </p>
                <StructuredData data={{
                    "@context": "https://schema.org",
                    "@type": "SoftwareApplication",
                    "name": `${from} to ${to} Currency Converter`,
                    "operatingSystem": "All",
                    "applicationCategory": "FinanceApplication",
                    "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "USD"
                    },
                    "description": `Real-time ${from} to ${to} converter with institutional mid-market rates.`,
                    "featureList": [
                        "Real-time exchange rates",
                        "Institutional mid-market data",
                        "Zero hidden fees",
                        "Instant calculations"
                    ]
                }} />
                <StructuredData data={{
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": `What is the best rate for ${from} to ${to}?`,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": `The current mid-market exchange rate is 1 ${from} = ${rate.toFixed(4)} ${to}.`
                            }
                        }
                    ]
                }} />
            </header>

            <div className="tool-layout">
                <div className="tool-main">
                    {/* Pre-fill the converter with this pair */}
                    <ConverterComponent initialRates={data.rates} />

                    <article className="automated-article card glass">
                        <StructuredData data={{
                            "@context": "https://schema.org",
                            "@type": "SoftwareApplication",
                            "name": `${from} to ${to} Converter`,
                            "operatingSystem": "All",
                            "applicationCategory": "FinanceApplication",
                            "offers": {
                                "@type": "Offer",
                                "price": "0",
                                "priceCurrency": "USD"
                            },
                            "featureList": [
                                "Real-time exchange rates",
                                "Institutional mid-market data",
                                "Zero hidden fees",
                                "Instant mobile-optimized calculations"
                            ]
                        }} />

                        <div className="expert-vault card shadow-sm mb-8">
                            <div className="vault-header">
                                <Lightbulb className="text-secondary" size={24} />
                                <h3>Expert Insight: Timing Your ${from} Swap</h3>
                            </div>
                            <p>
                                When exchanging {fromName} for {toName}, we've noticed that market volatility often peaks during the crossover of the London and New York trading sessions.
                                <b>Pro Tip:</b> If your transaction isn't urgent, compare rates over a 24-hour period to catch the most favorable mid-market dip.
                                Our tool refreshes every hour to help you spot these trends accurately.
                            </p>
                        </div>

                        <h2>Understanding the {from} to {to} Exchange Rate</h2>
                        <p>
                            Exchanging <b>{fromName}</b> for <b>{toName}</b> is more than just a number—it's about getting the best value for your hard-earned money.
                            Whether you're sending money home to family, paying an international invoice, or planning a trip to a {toName}-using region,
                            understanding the "Mid-Market Rate" is your best defense against unfair bank fees.
                        </p>

                        <div className="insights-grid">
                            <div className="insight-card">
                                <ShieldCheck size={20} className="text-primary" />
                                <div>
                                    <h4>Why Our Rates Matter</h4>
                                    <p>We source data from the same institutional feeds used by major banks, but we show you the raw rate without the hidden "spread" banks often add.</p>
                                </div>
                            </div>
                            <div className="insight-card">
                                <MessageSquare size={20} className="text-secondary" />
                                <div>
                                    <h4>Real-World Utility</h4>
                                    <p>Our tool is designed for speed. No sign-ups, no ads blocking your view—just the data you need to make a quick financial decision.</p>
                                </div>
                            </div>
                        </div>

                        <section className="faq-section">
                            <h3>Common Questions We Get About {from}/{to}</h3>
                            <div className="faq-item">
                                <p className="q">"What's the best way to get 1 {from} into {to} without losing money?"</p>
                                <p className="a">
                                    The "best" way is almost always the one with the lowest fee on top of the mid-market rate (the rate you see on this page).
                                    Today, that rate is <b>{rate.toFixed(4)}</b>. Use this as your benchmark when comparing transfer services.
                                </p>
                            </div>
                            <div className="faq-item">
                                <p className="q">"How much will I actually get in {to}?"</p>
                                <p className="a">
                                    If you convert 1 {fromName} right now at our mid-market rate, you'd get {rate.toFixed(4)} {toName}.
                                    Keep in mind that most banks will take a 2-5% cut, so always use our calculator to see what you *should* be getting.
                                </p>
                            </div>
                            <div className="faq-item">
                                <p className="q">"Is the {from} to {to} market volatile right now?"</p>
                                <p className="a">
                                    Currency markets never sleep. While the {from}/{to} pair is generally stable, global economic shifts can cause sudden moves.
                                    Bookmark this page to stay updated on the latest hourly shifts.
                                </p>
                            </div>
                        </section>
                    </article>
                </div>

                <aside className="tool-sidebar">
                    <div className="sidebar-card card">
                        <h3>Reverse Conversion</h3>
                        <Link
                            href={`/tools/currency-converter/${to.toLowerCase()}-to-${from.toLowerCase()}`}
                            className="pair-link highlight"
                        >
                            <span>{to} to {from}</span>
                            <ArrowRight size={14} />
                        </Link>
                    </div>

                    <div className="sidebar-card card">
                        <h3>Other {from} Pairs</h3>
                        <div className="pairs-list">
                            {commonCurrencies.filter(c => c !== from && c !== to).slice(0, 5).map(c => (
                                <Link
                                    key={c}
                                    href={`/tools/currency-converter/${from.toLowerCase()}-to-${c.toLowerCase()}`}
                                    className="pair-link"
                                >
                                    <span>{from} to {c}</span>
                                    <ArrowRight size={14} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>

        </div>
    );
}
