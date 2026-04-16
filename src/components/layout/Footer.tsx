import Link from 'next/link';
import AdSenseUnit from '@/components/ads/AdSenseUnit';

export default function Footer() {
  return (
    <footer className="footer-bp">
      <div className="foot-line"></div>
      
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <AdSenseUnit type="leaderboard" />
      </div>

      <div className="foot-inner">
        <div className="foot-brand">
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
                <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="#141414" fontSize="13" fontWeight="900" fontFamily="system-ui" letterSpacing="-0.02em">T</text>
              </svg>
            </div>
            <span className="logo-word">Tech <em>Resolutions</em></span>
          </Link>
          <p>70+ free online tools — image, PDF, text, calculators, security. No signup required. No fees. Ever.</p>
        </div>

        <div className="foot-col">
          <h4>Explore Tools</h4>
          <Link href="/all-tools">All Tools</Link>
          <Link href="/tools/case-converter">Text Tools</Link>
          <Link href="/tools/image-compressor">Image Tools</Link>
          <Link href="/tools/pdf-to-word">PDF Tools</Link>
          <Link href="/tools/emi-calculator">Calculators</Link>
          <Link href="/tools/color-picker">Dev Tools</Link>
          <Link href="/tools/password-generator">Security</Link>
        </div>

        <div className="foot-col">
          <h4>Resources</h4>
          <Link href="/about">About Us</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/contact">Advertise</Link>
          <Link href="/contact">Submit Tool</Link>
        </div>

        <div className="foot-col">
          <h4>Legal</h4>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
          <Link href="/disclaimer">Disclaimer</Link>
          <Link href="/privacy-policy">Cookie Policy</Link>
        </div>
      </div>

      <div className="foot-bottom">
        <p>© 2026 Tech Resolutions — All rights reserved</p>
        <div className="foot-links">
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/terms-of-service">Terms</Link>
          <Link href="/disclaimer">Disclaimer</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
