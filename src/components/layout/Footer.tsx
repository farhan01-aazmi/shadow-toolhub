import Link from 'next/link';
import { Shield, Info, Mail, Github, Twitter, Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <Link href="/" className="logo">
            <Zap className="logo-icon" size={24} strokeWidth={2.5} />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: '800' }}>SHADOW <span style={{ color: 'var(--primary)' }}>TOOLHUB</span></span>
          </Link>
          <p className="footer-desc">
            A premium suite of high-performance tools and calculators optimized for speed and SEO.
          </p>
          <div className="social-links">
            <Link href="https://twitter.com" target="_blank"><Twitter size={20} /></Link>
            <Link href="https://github.com" target="_blank"><Github size={20} /></Link>
          </div>
        </div>

        <div className="footer-section">
          <h4>Explore Tools</h4>
          <Link href="/tools/currency-converter">Currency Converter</Link>
          <Link href="/tools/crypto-tracker">Crypto Tracker</Link>
          <Link href="/tools/image-optimizer">Image Optimizer</Link>
          <Link href="/tools/word-counter">Word Counter</Link>
        </div>

        <div className="footer-section">
          <h4>Resources</h4>
          <Link href="/blog">Expert Insights</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Nevy.in. All rights reserved.</p>
      </div>

    </footer>
  );
}
