"use client";

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import StructuredData from '@/components/seo/StructuredData';
import Sidebar from '@/components/layout/Sidebar';

const TOOLS = [
  { num: '01', ico: '📐', name: 'EMI Calculator', cat: 'Finance', desc: 'Calculate monthly payments for home, car, and personal loans instantly', uses: '1.1L/mo', tag: 'Finance', link: '/tools/emi-calculator' },
  { num: '02', ico: '🔐', name: 'Password Generator', cat: 'Security', desc: 'Create strong, secure passwords with custom length and complexity settings', uses: '91K/mo', tag: 'Security', link: '/tools/password-generator' },
  { num: '03', ico: '🖼️', name: 'Image Compressor', cat: 'Image', desc: 'Compress JPG, PNG, WebP images without losing quality — supports batch processing', uses: '82K/mo', tag: 'Image', link: '/tools/image-compressor' },
  { num: '04', ico: '✍️', name: 'Word Counter', cat: 'Text', desc: 'Instant word count, character count, sentence analysis, and reading time', uses: '82K/mo', tag: 'Text', link: '/tools/advanced-word-counter' },
  { num: '05', ico: '💱', name: 'Currency Converter', cat: 'Finance', desc: 'Real-time currency conversion with mid-market exchange rates for 150+ currencies', uses: '67K/mo', tag: 'Finance', link: '/tools/currency-converter' },
  { num: '06', ico: '₿', name: 'Crypto Tracker', cat: 'Finance', desc: 'Live cryptocurrency prices, market cap, volume, and 24h change tracking', uses: '55K/mo', tag: 'Finance', link: '/tools/crypto-tracker' },
  { num: '07', ico: '🏷️', name: 'Meta Tag Generator', cat: 'SEO', desc: 'Generate SEO meta tags, Open Graph, and Twitter cards automatically', uses: '43K/mo', tag: 'SEO', link: '/tools/meta-generator' },
  { num: '08', ico: '🎨', name: 'Image Optimizer', cat: 'Image', desc: 'Optimize images for web — reduce file size while maintaining visual quality', uses: '38K/mo', tag: 'Image', link: '/tools/image-compressor' },
  { num: '09', ico: '🇺🇸', name: 'US Tax Calculator', cat: 'Finance', desc: 'Calculate 2026 federal income tax liability with latest IRS brackets', uses: 'New', tag: 'High CPC', link: '/tools/us-income-tax-calculator' },
  { num: '10', ico: '📄', name: 'PDF to Word', cat: 'PDF', desc: 'Convert PDF documents to editable Microsoft Word files accurately', uses: '45K', tag: 'Hot', link: '/tools/pdf-to-word' },
  { num: '11', ico: '🔢', name: 'JSON Formatter', cat: 'Dev', desc: 'Clean, format, and validate JSON data with syntax highlighting', uses: '32K', tag: 'Dev', link: '/tools/json-formatter' },
  { num: '12', ico: '⏰', name: 'Pomodoro Timer', cat: 'Design', desc: 'Boost productivity with 25/5 work-break cycles and audio alerts', uses: '28K', tag: 'Utility', link: '/tools/pomodoro-timer' },
];

const TABS = ['All', 'Text', 'Image', 'PDF', 'Security', 'Dev', 'Finance', 'Design'];

const CHIPS = ['Image Compressor', 'PDF to Word', 'EMI Calculator', 'Password Generator', 'Color Picker'];

const BLOG = [
  { cat: 'Image Tools', catClass: 'c1', date: '05 Mar 2026', title: 'How to 3x Your Website Speed with Image Compression — Complete Guide 2026', excerpt: 'Heavy images slow down your website and hurt SEO rankings. Learn step-by-step how to properly optimize images without losing quality — improve Google rankings and reduce bounce rate.', wide: true, slug: 'page-speed-seo-ranking-factor-2026' },
  { cat: 'Security', catClass: 'c2', date: '01 Mar 2026', title: 'What Makes a Strong Password in 2026? Complete Security Guide', excerpt: 'Simple, actionable tricks that actually work. Start applying them today.', slug: 'crypto-risk-management-guide-2026' },
  { cat: 'PDF Tools', catClass: 'c3', date: '24 Feb 2026', title: 'PDF to Word: 5 Free Methods That Work Even on Slow Internet', excerpt: 'Tested on various network speeds — no login required, no payment needed.', slug: 'expert-guide-to-image-optimization' },
  { cat: 'Finance', catClass: 'c4', date: '10 Feb 2026', title: 'Why You Should Always Use an EMI Calculator Before Buying a Home', excerpt: 'The one calculation you should always do before taking out a home loan.', slug: 'future-of-global-finance-cbdc-2026' },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('All');
  const counterRef = useRef<HTMLDivElement>(null);
  const scrambleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.08 });
    document.querySelectorAll('.rv, .rv2').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Removed automated counter per user request (Error 4)

  useEffect(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%';
    const orig = 'work.';
    let frame = 0;
    const total = 32;
    const el = scrambleRef.current;
    if (!el) return;
    const run = () => {
      frame++;
      if (frame >= total) { el.textContent = orig; return; }
      el.textContent = orig.split('').map((c, i) => {
        if (i < Math.floor((frame / total) * orig.length)) return c;
        return c === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)];
      }).join('');
      requestAnimationFrame(run);
    };
    const timer = setTimeout(() => { frame = 0; requestAnimationFrame(run); }, 900);
    return () => clearTimeout(timer);
  }, []);

  const handleChip = (text: string) => {
    const input = document.querySelector('.hero-search input') as HTMLInputElement;
    if (input) { input.value = text; input.focus(); }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.nevy.in/#organization",
        "name": "Tech Resolutions",
        "url": "https://www.nevy.in",
        "logo": "https://www.nevy.in/logo.png",
        "description": "Tech Resolutions provides 70+ free online tools for images, PDFs, text, calculators and more. No signup required. No fees.",
        "sameAs": [
          "https://x.com/tech_resolutions",
          "https://linkedin.com/company/tech-resolutions",
          "https://youtube.com/@tech-resolutions"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.nevy.in/#website",
        "url": "https://www.nevy.in",
        "name": "Tech Resolutions",
        "description": "The Ultimate Free Online Utility Hub",
        "publisher": { "@id": "https://www.nevy.in/#organization" },
        "potentialAction": [{
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.nevy.in/?s={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }]
      }
    ]
  };

  return (
    <>
      <StructuredData data={organizationSchema} />

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bgnumber" aria-hidden="true">70</div>
        <div className="hero-top">
          <div className="rv2">
            <div className="hero-kicker">Free Online Tools — Tech Resolutions</div>
            <h1 className="hero-h1">
              Tools<br />
              <span className="out">that</span><br />
              <span className="acc" ref={scrambleRef}>work.</span>
            </h1>
          </div>
          <div className="hero-right rv">
            <p className="hero-desc">
              Over 70+ free tools for image compression, PDF conversion, password generation, EMI calculation, and more. No signup. No fees. Ever.
            </p>
            <div className="hero-search">
              <input type="text" placeholder="Search tools or guides..." aria-label="Search tools" />
              <button>Search</button>
            </div>
            <div className="chips">
              {CHIPS.map(chip => (
                <span key={chip} className="chip" onClick={() => handleChip(chip)} role="button">{chip}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="hero-stats rv">
          <div className="hs"><div className="hs-n amber">70+</div><div className="hs-l">Free Tools</div></div>
          <div className="hs"><div className="hs-n stroke">New</div><div className="hs-l">Fast Growing</div></div>
          <div className="hs"><div className="hs-n amber">10+</div><div className="hs-l">Categories</div></div>
          <div className="hs"><div className="hs-n stroke">$0</div><div className="hs-l">Always Free</div></div>
        </div>
      </section>

      <div className="container" style={{ padding: '0 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="tool-layout">
          <div className="tool-main">
            {/* ── FEATURED TOOL ── */}
            <div className="featured rv" style={{ margin: 0 }}>
              <div className="feat-box">
                <div className="feat-l">
                  <div className="feat-kicker">Tool of the Week</div>
                  <h2>Image<br /><em>Compressor</em></h2>
                  <p>Compress JPG, PNG, and WebP images without losing quality. Supports batch processing. Files never leave your browser — 100% client-side.</p>
                  <div className="btns">
                    <Link href="/tools/image-compressor" className="btn-a">Open Tool →</Link>
                    <Link href="/tools/image-compressor#how-it-works" className="btn-o">How it Works</Link>
                  </div>
                </div>
                <div className="feat-r">
                  <div className="feat-list">
                    {[
                      { n: '01', t: 'Instant Processing', d: 'Runs entirely in your browser — no upload wait time' },
                      { n: '02', t: 'Batch Mode', d: 'Compress up to 20 images simultaneously' },
                      { n: '03', t: 'Quality Slider', d: 'Fine-tune the balance between quality and file size' },
                      { n: '04', t: '100% Private', d: 'Your files never leave your device or touch any server' },
                    ].map(item => (
                      <div key={item.n} className="feat-item">
                        <span className="feat-num">{item.n}</span>
                        <div><div className="feat-name">{item.t}</div><div className="feat-desc">{item.d}</div></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── TOOLS SECTION ── */}
            <div className="tools-sec rv" id="tools-section">
              <div className="sec-head">
                <div>
                  <div className="sec-lbl">// tools</div>
                  <h2 className="sec-ttl" style={{ fontSize: '1.4rem' }}>Popular Tools</h2>
                </div>
                <Link href="/all-tools" className="link-all" style={{ opacity: 0.7 }}>All 70+ Tools →</Link>
              </div>
              <div className="tabs">
                {TABS.map(tab => (
                  <div key={tab} className={`tab ${activeTab === tab ? 'on' : ''}`} onClick={() => setActiveTab(tab)}>
                    {tab}
                  </div>
                ))}
              </div>
              <div className="ttable">
                {TOOLS.filter(tool => activeTab === 'All' || tool.cat === activeTab).map(tool => (
                  <Link key={tool.num} className="trow" href={tool.link}>
                    <span className="tnum">{tool.num}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
                      <span className="tico">{tool.ico}</span>
                      <div>
                        <div className="tname">{tool.name}</div>
                        <div className="tsub">{tool.cat}</div>
                      </div>
                    </div>
                    <div className="tdesc">{tool.desc}</div>
                    <div className="tuses">{tool.uses}</div>
                    <div className="ttag">{tool.tag}</div>
                  </Link>
                ))}
              </div>
            </div>

            {/* ── BLOG SECTION ── */}
            <div className="content-area rv" id="blog-section" style={{ border: 'none', background: 'none', padding: 0 }}>
                <div className="blog-hd">
                  <div>
                    <div className="sec-lbl">// blog &amp; guides</div>
                    <div className="sec-ttl">Latest Articles</div>
                  </div>
                  <Link href="/blog" className="link-all">All Articles</Link>
                </div>
                <div className="bgrid">
                  {BLOG.map((post, i) => (
                    <Link key={i} className={`bpost ${post.wide ? 'wide' : ''}`} href={`/blog/${post.slug}`}>
                      <div className="barr">↗</div>
                      <div>
                        <div className="bmeta">
                          <span className={`bcat ${post.catClass}`}>{post.cat}</span>
                          <span className="bdate">{post.date}</span>
                        </div>
                        <div className="btitle">{post.title}</div>
                      </div>
                      {post.excerpt && <div><div className="bexc">{post.excerpt}</div></div>}
                    </Link>
                  ))}
                </div>
            </div>
          </div>
          
          <div className="tool-sidebar">
             <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
