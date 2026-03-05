import Link from 'next/link';
import { Search, Menu, Calculator, Coins, Image as ImageIcon, Code, Zap } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link href="/" className="logo">
          <Zap className="logo-icon" size={24} strokeWidth={2.5} />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: '800' }}>SHADOW <span style={{ color: 'var(--primary)' }}>TOOLHUB</span></span>
        </Link>

        <div className="nav-search">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search tools..." className="search-input" />
        </div>

        <div className="nav-links">
          <Link href="/tools/currency-converter">Finance</Link>
          <Link href="/tools/image-optimizer">Web</Link>
          <Link href="/tools/crypto-tracker">Crypto</Link>
        </div>

        <button className="mobile-menu">
          <Menu />
        </button>
      </div>

    </nav>
  );
}
