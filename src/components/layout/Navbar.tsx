"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav id="nav" className={`nav-bp ${scrolled ? 'scrolled' : ''}`}>
        <Link href="/" className="logo">
          <div className="logo-mark">
            <svg viewBox="0 0 34 34" fill="none">
              <rect width="34" height="34" rx="8" fill="#f0a500" />
              <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="#141414" fontSize="14" fontWeight="900" fontFamily="system-ui">TR</text>
            </svg>
          </div>
          <span className="logo-word">Tech <em>Resolutions</em></span>
        </Link>

        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/all-tools/">Tools</Link>
          <Link href="/blog/">Blog</Link>
          <Link href="/about/">About</Link>
          <Link href="/contact/">Contact</Link>
        </div>

        <Link href="/all-tools/" className="nav-cta" style={{ display: mobileOpen ? 'none' : undefined }}>
          All Tools →
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'none',
            background: 'none', border: 'none', color: 'var(--sub)',
            fontSize: '1.5rem', cursor: 'pointer'
          }}
          className="mobile-toggle"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </nav>

      {mobileOpen && (
        <div className="mobile-menu">
          {[
            { name: 'Home', path: '/' },
            { name: 'Tools', path: '/all-tools/' },
            { name: 'Blog', path: '/blog/' },
            { name: 'About', path: '/about/' },
            { name: 'Contact', path: '/contact/' }
          ].map(item => (
            <Link key={item.name} href={item.path} onClick={() => setMobileOpen(false)}>
              {item.name}
            </Link>
          ))}
        </div>
      )}

      <style jsx>{`
        @media(max-width:640px){
          .mobile-toggle { display: block !important; }
          .nav-cta { display: none !important; }
        }
      `}</style>
    </>
  );
}
