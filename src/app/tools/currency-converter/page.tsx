import { Metadata } from 'next';
import Link from 'next/link';
import { getLatestRates } from '@/lib/api/currency';
import ConverterComponent from './ConverterComponent';
import { ArrowRight, TrendingUp, ShieldCheck, Zap, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: "Currency Converter - Real-Time Exchange Rates | Tech Resolutions",
  description: 'Check real-time global exchange rates with our clean, ad-free mid-market currency tracker. Updated every 60 seconds.',
  openGraph: {
    type: 'website',
    url: 'https://www.nevy.in/tools/currency-converter',
    title: 'Live Currency Tracker | Tech Resolutions',
    description: 'Check real-time global exchange rates with our clean, ad-free mid-market currency tracker. Updated every 60 seconds.',
    images: ['https://www.nevy.in/api/og?title=Currency%20Exchange&desc=Real-time%20mid-market%20rates'],
  },
};

export default async function CurrencyConverterPage() {
  const data = await getLatestRates('USD');

  if (!data) {
    return (
      <div className="error-container card">
        <h2>Service Temporarily Unavailable</h2>
        <p>We&apos;re having trouble fetching real-time rates. Please try again in few minutes.</p>
      </div>
    );
  }

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
        <p className="text-sub mt-4 max-w-2xl mx-auto mb-10 leading-relaxed">
          We pull institutional mid-market rates directly from top API providers. No hidden banking spreads, no signup walls. Just the raw data you need for your next transfer.
          <br/><br/>
          Whether you&apos;re an expat, a digital nomad, or managing a global business, knowing the real rate is the first step to financial efficiency.
        </p>
      </header>

      <div className="tool-layout">
        <div className="tool-main">
          <ConverterComponent initialRates={data.rates} />

          <section className="seo-content card glass">
            <div className="card glass mt-12 text-left p-8 border-t-4 border-amber-500">
              <h3 className="flex items-center gap-3 text-lg font-bold mb-4">
                <TrendingUp className="text-amber-500" size={24} />
                The &quot;Mid-Market&quot; Edge
              </h3>
              <p className="text-sub mb-4">
                Have you ever noticed that the rate you see on traditional banks is vastly different from the one shown here? That&apos;s because traditional institutions add a hidden spread (often up to 4%) on top of the mid-market rate. 
              </p>
            </div>

            <div className="features-grid mt-8">
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
            </div>

            <div className="pro-content">
              <h3>Expert Financial Context</h3>
              <p>
                In the modern global economy, currency fluctuations are driven by complex geopolitical factors,
                Central Bank interest rate decisions (FED, ECB, RBI), and international trade balances.
                Our <b>Currency Converter</b> doesn&apos;t just show numbers; it provides a gateway to
                understanding these market dynamics.
              </p>
              <p>
                We use the <b>Mid-Market Rate</b>, which is the midpoint between the buy and sell rates
                from global currency markets. Unlike banks or currency exchange booths that add a
                significant markup (often called &quot;the spread&quot;), we provide the raw, transparent data
                you need for accurate financial planning, remittances, and business forecasting.
              </p>
              <ul className="pl-6 list-disc text-sub mt-4 space-y-2">
                <li><b>Real-time Processing:</b> Powered by high-speed APIs for zero latency.</li>
                <li><b>Global Coverage:</b> Supporting 150+ fiat currencies and exotic pairs.</li>
                <li><b>SEO Architecture:</b> Programmatic pages built for high CPC finance keywords.</li>
              </ul>
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
