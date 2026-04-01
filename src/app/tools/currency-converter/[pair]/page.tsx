import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLatestRates, getCurrencyName, commonCurrencies } from '@/lib/api/currency';
import { fiatCurrencies } from '@/lib/data/fiat';
import { US_STATES_DATA } from '@/lib/data/us-states';
import { generateIntroParagraph, generateHistoricalAnalysis, generateLongFormArticle, generateFAQSchema } from '@/lib/seo/spintax';
import ConverterComponent from '../ConverterComponent';
import Link from 'next/link';
import { ArrowRight, Lightbulb, MessageSquare, ShieldCheck, TrendingUp, Clock, AlertTriangle } from 'lucide-react';
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
        description: `Convert ${from} to ${to} with real-time exchange rates. Get the latest ${from}/${to} mid-market rate, comprehensive historical data, 24/7 market analysis, and zero-fee comparisons for free.`,
        alternates: {
            canonical: `https://www.nevy.in/tools/currency-converter/${params.pair}`,
        },
        openGraph: {
            images: [
                {
                    url: `https://www.nevy.in/og/og-currency-${from.toLowerCase()}-to-${to.toLowerCase()}.png`,
                    width: 1200,
                    height: 630,
                    alt: `${from} to ${to} Conversion`,
                }
            ],
        }
    };
}

export default async function CurrencyPairPage({ params }: Props) {
    const [fromCode, toCode] = (await params).pair.split('-to-');

    if (!fromCode || !toCode) notFound();

    const from = fromCode.toUpperCase();
    const to = toCode.toUpperCase();

    // Stable State Selection based on pair hash
    const stateCodes = Object.keys(US_STATES_DATA);
    const hash = (await params).pair.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const stateCode = stateCodes[hash % stateCodes.length];

    // Validate currencies
    if (!commonCurrencies.includes(from) || !commonCurrencies.includes(to)) {
        // Fallback for mass programmatic pages that are not in commonCurrencies
        const fiatCodes = fiatCurrencies.map(f => f.code);
        if (!fiatCodes.includes(from) || !fiatCodes.includes(to)) {
             notFound();
        }
    }

    const data = await getLatestRates(from);
    if (!data) notFound();

    const rate = data.rates[to] || 1.0; // Fallback for missing rates
    const fromName = getCurrencyName(from);
    const toName = getCurrencyName(to);

    const introText = generateIntroParagraph(from, to, fromName, toName, stateCode);
    const historicalAnalysis = generateHistoricalAnalysis(from, to, stateCode);
    const article = generateLongFormArticle(from, to, fromName, toName, (await params).pair, stateCode);

    return (
        <div className="tool-container">
            <nav className="breadcrumb">
                <Link href="/">Home</Link> / <Link href="/tools/currency-converter">Currency Converter</Link> / <span>{from} to {to}</span>
            </nav>

            <header className="tool-header">
                <h1 className="gradient-text">{from} to {to} Converter</h1>
                <div className="content mb-6" dangerouslySetInnerHTML={{ __html: introText.replace(/\n/g, '<br/>') }} />
                <p className="tool-intro">
                    Current mid-market rate: <b>1 {from} = {rate.toFixed(4)} {to}</b>. (Localized for {US_STATES_DATA[stateCode].name})
                </p>
                <StructuredData data={[
                    {
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
                        "description": `Real-time ${from} to ${to} converter with institutional mid-market rates and US-localized analysis for ${US_STATES_DATA[stateCode].name}.`,
                        "featureList": [
                            "Real-time exchange tracking",
                            "Institutional mid-market feed",
                            "Zero hidden fees",
                            "US State localized data"
                        ]
                    },
                    generateFAQSchema(from, to, rate.toFixed(4))
                ]} />
            </header>

            <div className="tool-layout">
                <div className="tool-main">
                    <ConverterComponent initialRates={data.rates} />

                    <div className="card p-6 border border-[#222] mb-8">
                        <Clock className="amber mb-4" size={28} />
                        <h4 className="font-bold mb-2">High-Frequency Refreshes</h4>
                        <p className="text-sm text-sub leading-relaxed">
                            Data pipelines ensure the {from}/{to} chart reflects the latest macroeconomic shifts almost instantly. You&apos;re currently viewing the real-time institutional exchange rate for {from} to {to}. This is the pure data feed, before any bank or consumer financial institution adds their retail markup.
                        </p>
                    </div>

                    <article className="automated-article card glass">
                        <div className="expert-vault card shadow-sm mb-8">
                            <div className="vault-header">
                                <Lightbulb className="text-secondary" size={24} />
                                <h3>Expert Insight: Timing Your {from} Swap</h3>
                            </div>
                            <p>
                                When exchanging {fromName} for {toName}, we&apos;ve noticed that market volatility often peaks during the crossover of the London and New York trading sessions.
                                <b>Pro Tip:</b> If your transaction isn't urgent, compare rates over a 24-hour period to catch the most favorable mid-market dip.
                                Our tool refreshes every hour to help you spot these trends accurately.
                            </p>
                        </div>

                        <h2>Understanding the {from} to {to} Exchange Rate</h2>
                            Exchanging <b>{fromName}</b> for <b>{toName}</b> is more than just a number—it&apos;s about getting the best value for your hard-earned money.

                        <div className="insights-grid">
                            <div className="insight-card">
                                <ShieldCheck size={20} className="text-primary" />
                                <div>
                                    <h4>Institutional Analysis</h4>
                                    <div dangerouslySetInnerHTML={{ __html: historicalAnalysis.replace(/\n/g, '<br/>') }} />
                                </div>
                            </div>
                            <div className="insight-card">
                                <MessageSquare size={20} className="text-secondary" />
                                <div>
                                    <h4>Real-World Utility</h4>
                                    <p>Our tool is designed for speed. No sign-ups, no ads—just the accurate data you need for {fromName} swaps.</p>
                                </div>
                            </div>
                        </div>

                        <div className="card glass relative overflow-hidden my-8 min-h-[300px]">
                            <div className="absolute top-4 right-4 text-xs font-mono text-amber/60 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                LIVE SPREAD
                            </div>
                            <h3 className="text-xl font-bold mb-4">Historical & Market Context</h3>
                            <div className="bg-[#1a1a1a] p-5 rounded-lg border border-[#333] mb-6">
                                <h4 className="flex items-center gap-2 text-md font-bold mb-3">
                                    <AlertTriangle size={18} className="amber" />
                                    The &quot;Zero Fee&quot; Trap
                                </h4>
                                <p className="text-sm text-sub leading-relaxed">
                                    Many airport kiosks and traditional banks advertise &quot;0% Commission&quot;. They make their profit by adjusting the rate above the mid-market value you see here. Always check this dashboard before committing to a {from} transfer.
                                </p>
                            </div>
                        </div>

                        <div className="programmatic-prose mt-8 mb-8" dangerouslySetInnerHTML={{ __html: article.replace(/\n/g, '<br/>') }} />

                        <section className="faq-section">
                            <h3>Common Questions We Get About {from}/{to}</h3>
                            <div className="faq-item">
                                <p className="q">&quot;What&apos;s the best way to get 1 {from} into {to} without losing money?&quot;</p>
                                <p className="a">
                                    The &quot;best&quot; way is almost always the one with the lowest fee on top of the mid-market rate (the rate you see on this page).
                                    Today, that rate is <b>{rate.toFixed(4)}</b>. Use this as your benchmark when comparing transfer services.
                                </p>
                            </div>
                            <div className="faq-item">
                                <p className="q">&quot;How much will I actually get in {to}?&quot;</p>
                                <p className="a">
                                    If you convert 1 {fromName} right now at our mid-market rate, you&apos;d get {rate.toFixed(4)} {toName}.
                                    Keep in mind that most banks will take a 2-5% cut, so always use our calculator to see what you *should* be getting.
                                </p>
                            </div>
                            <div className="faq-item">
                                <p className="q">&quot;Is the {from} to {to} market volatile right now?&quot;</p>
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

            <section className="seo-benefits-grid card glass mt-8">
                <h2>Why Choose Our Institutional {from} to {to} Converter?</h2>
                <div className="benefits-row">
                    <div className="benefit-item">
                        <TrendingUp size={24} className="text-primary" />
                        <div>
                            <h3>True Mid-Market Rates</h3>
                            <p>Banks hide fees by altering exchange rates. We show you the true institutional mid-market rate for {from}/{to}, updating continuously so you know exactly what your money is worth.</p>
                        </div>
                    </div>
                    <div className="benefit-item">
                        <ShieldCheck size={24} className="text-secondary" />
                        <div>
                            <h3>100% Client-Side Privacy</h3>
                            <p>We process your {from} conversion locally in your browser. We don&apos;t log your location or the amounts you are calculating, ensuring complete financial anonymity.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="seo-content card glass mt-8">
                <div className="pro-content">
                    <h3>Guide: Getting the Best {from} to {to} Exchange Rate</h3>
                    <p>
                        When converting <b>{from} to {to}</b>, the biggest mistake most consumers and small businesses make is accepting the rate offered by their retail bank or an airport kiosk. These institutions systematically apply a &quot;spread&quot;—a hidden markup ranging from 2% to 6% on top of the actual market rate.
                    </p>
                    <p>
                        <b>Understanding the Mid-Market Rate:</b><br />
                        The rate you see on our <b>{from} to {to} Currency Converter</b> is the &quot;mid-market rate&quot;. This is the midpoint between global buy and sell rates derived from wholesale currency markets. By knowing this exact figure, you can compare it against the rate your bank or transfer service offers to uncover exactly how much they are charging you in hidden margins.
                    </p>
                    <p>
                        <b>Security and Privacy Benefits:</b><br />
                        In an era of aggressive user-tracking, financial tools are notorious for harvesting data. If you use a tool to check {from}/{to} conversions, that data is often sold to advertisers who then target you with high-fee financial products. We eliminate this entirely. By utilizing strict <b>Client-Side Execution</b>, your browser handles the calculation while our server only broadcasts the raw data feed. No personal identifiable information (PII) is ever collected.
                    </p>
                    <p>Always verify the mid-market rate here before authorizing large international wire transfers or paying foreign invoices.</p>
                </div>
            </section>

        </div>
    );
}
