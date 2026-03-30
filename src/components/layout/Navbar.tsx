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
            <svg viewBox="0 0 42 42" fill="none">
              <defs>
                <linearGradient id="hexGradFoot" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f0a500" />
                  <stop offset="100%" stopColor="#ff4500" />
                </linearGradient>
              </defs>
              <path d="M21 2 L38 11.5 V30.5 L21 40 L4 30.5 V11.5 L21 2Z" fill="url(#hexGradFoot)" />
              <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="#141414" fontSize="13" fontWeight="900" fontFamily="system-ui" letterSpacing="-0.02em">TR</text>
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
