import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us | Tech Resolutions',
  description: 'Get in touch with the Tech Resolutions team for support, business inquiries, or tool suggestions.',
  alternates: {
    canonical: 'https://www.nevy.in/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="contact-page">
      {/* ── HERO ── */}
      <section className="contact-hero">
        <div className="contact-hero-bg" aria-hidden="true">HELLO</div>
        <div className="rv2">
          <div className="sec-lbl">// get in touch</div>
          <h1 className="contact-hero-title">
            Let&apos;s<br />
            <span className="out">connect</span><br />
            <span className="acc">today.</span>
          </h1>
        </div>
        <p className="contact-hero-desc">
          Whether you have a question about our tools, want to suggest a new feature, or are interested in partnerships — we&apos;d love to hear from you.
        </p>
      </section>

      {/* ── CONTENT ── */}
      <div className="contact-container">
        <div className="contact-grid">

          {/* ── EMAIL CARD ── */}
          <div className="contact-card contact-card-main">
            <div className="contact-card-accent"></div>
            <div className="contact-card-kicker">// preferred method</div>
            <h2 className="contact-card-title">Email Us</h2>
            <p className="contact-card-desc">
              For support, inquiries, tool suggestions, or business partnerships — reach us at:
            </p>
            <a href="mailto:support@nevy.in" className="btn-a" style={{ marginTop: '20px' }}>
              support@nevy.in
            </a>
            <div className="contact-response-time">
              We aim to respond within 24–48 business hours.
            </div>
          </div>

          {/* ── FAQ MINI CARD ── */}
          <div className="contact-card">
            <div className="contact-card-accent"></div>
            <div className="contact-card-kicker">// common questions</div>
            <h2 className="contact-card-title">Quick Help</h2>
            <div className="contact-faq-list">
              <div className="contact-faq-item">
                <div className="contact-faq-q">How do I suggest a new tool?</div>
                <div className="contact-faq-a">Email us at support@nevy.in with your idea and we&apos;ll review it.</div>
              </div>
              <div className="contact-faq-item">
                <div className="contact-faq-q">Is everything really free?</div>
                <div className="contact-faq-a">Yes. All 70+ tools are free, with no signup or hidden fees.</div>
              </div>
              <div className="contact-faq-item">
                <div className="contact-faq-q">Interested in advertising?</div>
                <div className="contact-faq-a">Send us a proposal at support@nevy.in and we&apos;ll get back to you.</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── CTA BAR ── */}
        <div className="contact-cta-bar">
          <div className="contact-cta-inner">
            <div>
              <div className="sec-lbl">// explore</div>
              <div className="contact-cta-text">Looking for tools instead? Browse 70+ free utilities.</div>
            </div>
            <div className="btns">
              <Link href="/all-tools" className="btn-a">All Tools →</Link>
              <Link href="/blog" className="btn-o">Read Blog</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
