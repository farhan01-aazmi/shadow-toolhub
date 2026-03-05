import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCoinDetails } from '@/lib/api/crypto';
import Link from 'next/link';
import { ArrowLeft, TrendingUp, TrendingDown, BarChart3, Activity, Info, Shield, ShieldCheck, Zap, Lightbulb, MessageSquare } from 'lucide-react';
import StructuredData from '@/components/seo/StructuredData';

interface Props {
    params: { coin: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const coinId = (await params).coin;
    const coin = await getCoinDetails(coinId);

    if (!coin) return { title: 'Crypto Detail' };

    return {
        title: `${coin.name} (${coin.symbol.toUpperCase()}) Price - Live Market Cap & Stats | Shadow ToolHub`,
        description: `Get the real-time ${coin.name} price, market cap, trading volume, and 24h change. Comprehensive ${coin.symbol.toUpperCase()} analysis with institutional-grade data.`,
    };
}

export default async function CoinDetailPage({ params }: Props) {
    const coinId = (await params).coin;
    const coin = await getCoinDetails(coinId);

    if (!coin) notFound();

    const isUp = coin.price_change_percentage_24h >= 0;

    return (
        <div className="tool-container">
            <nav className="breadcrumb">
                <Link href="/">Home</Link> / <Link href="/tools/crypto-tracker">Crypto Tracker</Link> / <span>{coin.name}</span>
            </nav>

            <Link href="/tools/crypto-tracker" className="back-link">
                <ArrowLeft size={16} /> Back to Dashboard
            </Link>

            <header className="coin-header card glass">
                <div className="coin-title-row">
                    <div className="coin-info">
                        <img src={coin.image} alt={coin.name} className="coin-logo-lg" />
                        <div>
                            <h1>{coin.name} <span className="text-muted">{coin.symbol.toUpperCase()}</span></h1>
                            <span className="rank-badge">Rank #{coin.market_cap_rank}</span>
                        </div>
                    </div>
                    <div className="coin-price-block">
                        <div className="current-price">${coin.current_price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</div>
                        <div className={`price-change ${isUp ? 'text-up' : 'text-down'}`}>
                            {isUp ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                            {Math.abs(coin.price_change_percentage_24h).toFixed(2)}% (24h)
                        </div>
                    </div>
                </div>

                <div className="stats-grid">
                    <div className="stat-card">
                        <span className="stat-label">Market Cap</span>
                        <span className="stat-value">${coin.market_cap.toLocaleString()}</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-label">24h Volume</span>
                        <span className="stat-value">${coin.total_volume.toLocaleString()}</span>
                    </div>
                </div>
                <StructuredData data={{
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": `What is the current price of ${coin.name}?`,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": `The current live price of ${coin.name} (${coin.symbol.toUpperCase()}) is $${coin.current_price.toLocaleString()}.`
                            }
                        }
                    ]
                }} />
            </header>

            <div className="tool-layout">
                <div className="tool-main">
                    <article className="automated-article card glass">
                        <StructuredData data={{
                            "@context": "https://schema.org",
                            "@type": "SoftwareApplication",
                            "name": `${coin.name} Live Price Tracker`,
                            "operatingSystem": "All",
                            "applicationCategory": "FinanceApplication",
                            "offers": {
                                "@type": "Offer",
                                "price": "0",
                                "priceCurrency": "USD"
                            }
                        }} />

                        <div className="expert-vault card shadow-sm mb-8">
                            <div className="vault-header">
                                <Lightbulb className="text-accent" size={24} />
                                <h3>Market Intelligence: {coin.name} Sentiment</h3>
                            </div>
                            <p>
                                When tracking <b>{coin.symbol.toUpperCase()}</b>, it's vital to look beyond just the price. Market liquidity and volume distribution often tell a deeper story.
                                we've seen {coin.name} traders increasingly focus on these 24h highs and lows to set their entry points.
                                <b>Advice:</b> Never trade on FOMO; use our real-time data to plan your moves based on actual market performance.
                            </p>
                        </div>

                        <h2>{coin.name} ({coin.symbol.toUpperCase()}) Market Analysis</h2>
                        <p>
                            Staying informed about <b>{coin.name}</b> can be a full-time job, but we've simplified it.
                            Currently ranked <b>#{coin.market_cap_rank}</b>, {coin.symbol.toUpperCase()} remains a cornerstone of the digital asset world.
                            Whether you're a long-term "HODLer" or a day trader, having a clean, advertisement-free dashboard like Shadow ToolHub is your biggest advantage.
                        </p>
                        <p>
                            The current price of ${coin.current_price.toLocaleString()} is just one piece of the puzzle. With a 24h volume of <b>${coin.total_volume.toLocaleString()}</b>,
                            the {coin.name} market shows active participation. Our goal is to give you the same clarity institutional desk traders have, straight to your browser.
                        </p>

                        <div className="insights-grid">
                            <div className="insight-card">
                                <ShieldCheck size={20} className="text-primary" />
                                <div>
                                    <h4>Institutional Precision</h4>
                                    <p>Our data feed is direct, reducing the "lag" often found on free trackers, so you see the move before the crowd.</p>
                                </div>
                            </div>
                            <div className="insight-card">
                                <MessageSquare size={20} className="text-secondary" />
                                <div>
                                    <h4>Human-First UX</h4>
                                    <p>We built this because we were tired of cluttered crypto sites. Just the stats, the charts, and the truth.</p>
                                </div>
                            </div>
                        </div>

                        <section className="faq-section">
                            <h3>Crypto Community FAQ: {coin.name}</h3>
                            <div className="faq-item">
                                <p className="q">"Is ${coin.symbol.toUpperCase()} worth watching today?"</p>
                                <p className="a">
                                    With a 24h change of <b>{coin.price_change_percentage_24h.toFixed(2)}%</b>, it's definitely worth keeping an eye on.
                                    Price volatility often signals an opportunity for those with a solid plan.
                                </p>
                            </div>
                            <div className="faq-item">
                                <p className="q">"Where should I set my price alerts for {coin.name}?"</p>
                                <p className="a">
                                    Many traders look at the 24h high (<b>${coin.high_24h.toLocaleString()}</b>) and low (<b>${coin.low_24h.toLocaleString()}</b>) shown above.
                                    These often act as psychological support and resistance levels.
                                </p>
                            </div>
                            <div className="faq-item">
                                <p className="q">"Is the data here live?"</p>
                                <p className="a">
                                    Yes! We pull directly from the CoinGecko institutional API, ensuring that the Rank #{coin.market_cap_rank} status and price metrics are as fresh as possible.
                                </p>
                            </div>
                        </section>
                    </article>
                </div>

                <aside className="tool-sidebar">
                    <div className="sidebar-card card premium">
                        <BarChart3 size={24} className="text-secondary" />
                        <h3>Institutional Grade Data</h3>
                        <p>Our {coin.name} metrics are optimized for financial analysis and day-trading insights.</p>
                    </div>
                    <div className="sidebar-card card">
                        <h3>Quick Links</h3>
                        <div className="links-stack">
                            <Link href="/tools/currency-converter" className="side-link">Currency Converter</Link>
                            <Link href="/tools/image-optimizer" className="side-link">Image Optimizer</Link>
                        </div>
                    </div>
                </aside>
            </div>

        </div>
    );
}
