import { Metadata } from 'next';
import { getTopCoins } from '@/lib/api/crypto';
import CryptoDashboard from './CryptoDashboard';
import { Shield, TrendingUp, BarChart3, Zap } from 'lucide-react';

export const metadata: Metadata = {
    title: "Live Crypto Prices & Market Tracker | Nevy.in",
    description: "Track live cryptocurrency prices, market cap, and 24h changes for Bitcoin, Ethereum, and 50+ altcoins. Premium crypto dashboard with real-time accuracy.",
    keywords: ["crypto tracker", "bitcoin price", "ethereum price", "live crypto rates", "crypto market cap", "altcoin tracker"],
    alternates: {
        canonical: "https://nevy.in/tools/crypto-tracker",
    },
};

export default async function CryptoTrackerPage() {
    const coins = await getTopCoins(50);

    if (!coins || coins.length === 0) {
        return (
            <div className="error-container card">
                <h2>Crypto Market Data Unavailable</h2>
                <p>We're experiencing delays in fetching live market data. Please refresh the page in a moment.</p>
            </div>
        );
    }

    return (
        <div className="tool-container">
            <header className="tool-header">
                <h1 className="gradient-text">Crypto Market Tracker</h1>
                <p className="tool-intro">
                    Real-time insights into the world's leading cryptocurrencies.
                    Track prices, volume, and market dynamics with institutional-grade precision.
                </p>
            </header>

            <div className="dashboard-wrapper">
                <CryptoDashboard initialCoins={coins} />
            </div>

            <section className="seo-content-grid">
                <div className="card glass">
                    <TrendingUp className="text-secondary" />
                    <h3>Real-Time Volatility</h3>
                    <p>Our dashboard updates using the CoinGecko API every 5 minutes, ensuring you have the latest data for volatile USA markets.</p>
                </div>
                <div className="card glass">
                    <BarChart3 className="text-primary" />
                    <h3>Institutional Metrics</h3>
                    <p>Access high, low, and market cap data for the top 50 coins, providing a comprehensive view of global crypto dominance.</p>
                </div>
                <div className="card glass">
                    <Shield className="text-accent" />
                    <h3>Free & Secure</h3>
                    <p>Analyze thousands of coins with no login required. Your data and searches remain private and secure.</p>
                </div>
            </section>

            <section className="seo-content card glass mt-8">
                <div className="pro-content">
                    <h3>Institutional Market Analysis</h3>
                    <p>
                        The cryptocurrency market, led by <b>Bitcoin (BTC)</b> and <b>Ethereum (ETH)</b>, has evolved
                        into a trillion-dollar asset class. Unlike traditional fiat currencies, the value of digital
                        assets is determined by protocol utility, decentralized consensus, and global liquidity flows.
                    </p>
                    <p>
                        Our <b>Crypto Tracker</b> provides the precision required for institutional-level
                        monitoring. By tracking metrics like Market Capitalization (the total value of all
                        mined coins) and 24-hour volume, traders can identify liquidity trends and
                        market sentiment shifts before they happen.
                    </p>
                    <p>
                        Whether you're monitoring <b>Stablecoins</b> for ecosystem stability or tracking
                        the growth of Layer-2 scaling solutions, Nevy.in delivers raw,
                        high-frequency data without the noise of typical news-driven trackers.
                    </p>
                    <ul>
                        <li><b>Market Dominance:</b> Real-time tracking of Bitcoin vs Altcoin ratios.</li>
                        <li><b>USA Market Focus:</b> Optimized for high-CPC trading keywords.</li>
                        <li><b>Data Integrity:</b> Sourced from decentralized price aggregators.</li>
                    </ul>
                </div>
            </section>

        </div>
    );
}
