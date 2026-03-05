import Link from 'next/link';
import { Shield, Info, Mail, Github, Twitter, Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer glass">
      <div className="footer-content">
        <div className="footer-section">
          <Link href="/" className="logo">
            <Zap className="logo-icon" />
            <span className="gradient-text">SHADOW TOOLHUB</span>
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
          <h4>Legal</h4>
          <Link href="/privacy-policy"><Shield size={16} /> Privacy Policy</Link>
          <Link href="/terms"><Info size={16} /> Terms of Service</Link>
          <Link href="/about"><Info size={16} /> About Us</Link>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <Link href="/contact"><Mail size={16} /> Contact Support</Link>
          <Link href="/faq"><Info size={16} /> FAQ</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Shadow ToolHub. All rights reserved.</p>
      </div>

    </footer>
  );
}
