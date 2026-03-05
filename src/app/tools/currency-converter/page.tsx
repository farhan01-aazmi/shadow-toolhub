import { Metadata } from 'next';
import Link from 'next/link';
import { getLatestRates, commonCurrencies, getCurrencyName } from '@/lib/api/currency';
import ConverterComponent from './ConverterComponent';
import { ArrowRight, Star, BarChart3, ShieldCheck, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: "Currency Converter - Real-Time Exchange Rates | Shadow ToolHub",
  description: "Convert 150+ currencies with real-time exchange rates. Precise, fast, and free global currency conversion with historical insights.",
  keywords: ["currency converter", "exchange rates", "usd to inr", "forex rates", "money converter", "real time currency"],
};

export default async function CurrencyConverterPage() {
  const data = await getLatestRates('USD');

  if (!data) {
    return (
      <div className="error-container card">
        <h2>Service Temporarily Unavailable</h2>
        <p>We're having trouble fetching real-time rates. Please try again in few minutes.</p>
      </div>
    );
  }

  // Generate some common pairs for SEO
  const commonPairs = [
    { from: 'USD', to: 'EUR' },
    { from: 'EUR', to: 'USD' },
    { from: 'USD', to: 'GBP' },
    { from: 'GBP', to: 'USD' },
    { from: 'USD', to: 'INR' },
    { from: 'USD', to: 'JPY' },
    { from: 'USD', to: 'CAD' },
    { from: 'USD', to: 'AUD' },
  ];

  return (
    <div className="tool-container">
      <header className="tool-header">
        <h1 className="gradient-text">Currency Converter</h1>
        <p className="tool-intro">
          Access accurate, real-time mid-market exchange rates for over 150 currencies.
          Trusted by professionals for global financial analysis.
        </p>
      </header>

      <div className="tool-layout">
        <div className="tool-main">
          <ConverterComponent initialRates={data.rates} />

          <section className="seo-content card glass">
            <h2>Why use Shadow ToolHub for Currency Conversion?</h2>
            <div className="features-grid">
              <div className="feature-item">
                <Zap size={20} className="text-primary" />
                <div>
                  <h4>Lightning Fast</h4>
                  <p>Edge-cached rates updated every 60 minutes for maximum accuracy and speed.</p>
                </div>
              </div>
              <div className="feature-item">
                <ShieldCheck size={20} className="text-primary" />
                <div>
                  <h4>Trusted Data</h4>
                  <p>We source our data from institutional commercial providers and central banks.</p>
                </div>
              </div>
              <div className="feature-item">
                <BarChart3 size={20} className="text-primary" />
                <div>
                  <h4>Zero Fees</h4>
                  <p>Our tools are 100% free with no hidden tracking or subscription required.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <aside className="tool-sidebar">
          <div className="sidebar-card card">
            <h3>Popular Conversions</h3>
            <div className="pairs-list">
              {commonPairs.map(pair => (
                <Link
                  key={`${pair.from}-${pair.to}`}
                  href={`/tools/currency-converter/${pair.from.toLowerCase()}-to-${pair.to.toLowerCase()}`}
                  className="pair-link"
                >
                  <span>{pair.from} to {pair.to}</span>
                  <ArrowRight size={14} />
                </Link>
              ))}
            </div>
          </div>

          <div className="sidebar-card card premium">
            <Star size={24} className="star-icon" />
            <h3>Market Insights</h3>
            <p>Get daily updates on market trends and currency fluctuations for high-value targets.</p>
            <button className="btn-sm">Coming Soon</button>
          </div>
        </aside>
      </div>

    </div>
  );
}
