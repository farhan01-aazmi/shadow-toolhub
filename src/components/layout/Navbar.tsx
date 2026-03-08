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
              <rect width="34" height="34" fill="#141414" />
              <path d="M8 8L17 8L26 17L17 26L8 26Z" fill="none" stroke="#f0a500" strokeWidth="1.5" />
              <circle cx="17" cy="17" r="3" fill="#f0a500" />
              <line x1="8" y1="8" x2="26" y2="8" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
              <line x1="8" y1="26" x2="26" y2="26" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
            </svg>
          </div>
          <span className="logo-word">nevy<em>.in</em></span>
        </Link>

        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="#tools-section">Tools</Link>
          <Link href="#blog-section">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <Link href="#tools-section" className="nav-cta" style={{ display: mobileOpen ? 'none' : undefined }}>
          All Tools →
        </Link>

        {/* Mobile hamburger - only visible on small screens via CSS */}
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
          {['Home', 'Tools', 'Blog', 'About', 'Contact'].map(item => (
            <Link key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} onClick={() => setMobileOpen(false)}>
              {item}
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
