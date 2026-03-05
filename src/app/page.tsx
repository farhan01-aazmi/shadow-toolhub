import Link from "next/link";
import {
  Zap,
  ArrowRight,
  Calculator,
  Coins,
  Image as ImageIcon,
  Code,
  Shield,
  TrendingUp,
  Globe
} from "lucide-react";

export default function Home() {
  const featuredTools = [
    {
      name: "Currency Converter",
      desc: "Real-time global exchange rates with automated SEO pairing.",
      icon: <Calculator className="text-primary" />,
      href: "/tools/currency-converter",
      category: "Finance"
    },
    {
      name: "Crypto Tracker",
      desc: "Live prices for top 50+ cryptocurrencies via CoinGecko.",
      icon: <Coins className="text-secondary" />,
      href: "/tools/crypto-tracker",
      category: "Crypto"
    },
    {
      name: "Image Optimizer",
      desc: "Compress and convert images to WebP for lightning speed.",
      icon: <ImageIcon className="text-accent" />,
      href: "/tools/image-optimizer",
      category: "Web"
    },
    {
      name: "Loan Calculator",
      desc: "Estimate monthly payments for mortgages and auto loans.",
      icon: <Code className="text-primary" />,
      href: "/tools/loan-calculator",
      category: "Finance"
    }
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="badge glass">
          <Zap size={14} /> <span>Next-Gen Automation</span>
        </div>
        <h1 className="hero-title">
          Smart Tools for your <span className="gradient-text">Financial Future</span> <br />
          Built with Precision.
        </h1>
        <p className="hero-subtitle">
          Shadow ToolHub is a collection of high-performance, ad-free utility tools designed to simplify your digital life.
          Whether you're tracking Bitcoin prices or converting global currencies, we provide the data you need without the clutter.
        </p>
        <div className="hero-actions">
          <Link href="/tools/currency-converter" className="btn btn-primary">
            Explore Tools <ArrowRight size={18} />
          </Link>
          <Link href="/about" className="btn btn-secondary glass">
            Learn Strategy
          </Link>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar glass">
        <div className="stat-item">
          <TrendingUp size={20} />
          <span><b>High CPC</b> Optimized</span>
        </div>
        <div className="stat-item">
          <Globe size={20} />
          <span><b>USA</b> Servers</span>
        </div>
        <div className="stat-item">
          <Shield size={20} />
          <span><b>AdSense</b> Ready</span>
        </div>
      </section>

      {/* Featured Tools Grid */}
      <section className="featured-section">
        <div className="section-header">
          <h2 className="section-title">Popular Tools</h2>
          <p className="section-desc">Automated, data-driven solutions for your daily workflow.</p>
        </div>

        <div className="tools-grid">
          {featuredTools.map((tool) => (
            <Link href={tool.href} key={tool.name} className="tool-card card">
              <div className="tool-icon-wrapper">
                {tool.icon}
              </div>
              <div className="tool-category">{tool.category}</div>
              <h3>{tool.name}</h3>
              <p>{tool.desc}</p>
              <div className="tool-action">
                <span>Use Tool</span>
                <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Blog Section */}
      <section className="blog-teaser-section">
        <div className="section-header">
          <h2 className="section-title">Commonly Used Tools</h2>
          <p className="section-desc">Reliable, fast, and 100% free. No sign-ups required.</p>
        </div>

        <div className="blog-mini-grid">
          <Link href="/blog/mastering-currency-exchange-rates-2026" className="blog-mini-card card glass">
            <h4>Mastering Global Currency in 2026</h4>
            <span className="read-more">Read Guide <ArrowRight size={14} /></span>
          </Link>
          <Link href="/blog/crypto-market-survival-guide" className="blog-mini-card card glass">
            <h4>Crypto Market Survival Guide</h4>
            <span className="read-more">Read Guide <ArrowRight size={14} /></span>
          </Link>
        </div>
      </section>

    </div>
  );
}
