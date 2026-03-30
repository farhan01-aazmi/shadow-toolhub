import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-bp">
      <div className="foot-line"></div>
      <div className="foot-inner">
        <div className="foot-brand">
          <Link href="/" className="logo">
            <div className="logo-mark">
              <svg viewBox="0 0 34 34" fill="none">
                <rect width="34" height="34" rx="8" fill="#f0a500" />
                <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="#141414" fontSize="14" fontWeight="900" fontFamily="system-ui">TR</text>
              </svg>
            </div>
            <span className="logo-word">Tech <em>Resolutions</em></span>
          </Link>
          <p>70+ free online tools — image, PDF, text, calculators, security. No signup required. No fees. Ever.</p>
          <div className="socials">
            <a className="soc" href="https://x.com/tech_resolutions" target="_blank" rel="noopener noreferrer">𝕏</a>
            <a className="soc" href="https://linkedin.com/company/tech-resolutions" target="_blank" rel="noopener noreferrer">in</a>
            <a className="soc" href="https://youtube.com/@tech-resolutions" target="_blank" rel="noopener noreferrer">▶</a>
          </div>
        </div>

        <div className="foot-col">
          <h4>Explore Tools</h4>
          <Link href="/all-tools/">All Tools</Link>
          <Link href="/tools/case-converter/">Text Tools</Link>
          <Link href="/tools/image-compressor/">Image Tools</Link>
          <Link href="/tools/pdf-to-word/">PDF Tools</Link>
          <Link href="/tools/emi-calculator/">Calculators</Link>
          <Link href="/tools/color-picker/">Dev Tools</Link>
          <Link href="/tools/password-generator/">Security</Link>
        </div>

        <div className="foot-col">
          <h4>Resources</h4>
          <Link href="/about/">About Us</Link>
          <Link href="/blog/">Blog</Link>
          <Link href="/contact/">Contact Us</Link>
          <Link href="/contact/">Advertise</Link>
          <Link href="/contact/">Submit Tool</Link>
        </div>

        <div className="foot-col">
          <h4>Legal</h4>
          <Link href="/privacy-policy/">Privacy Policy</Link>
          <Link href="/terms-of-service/">Terms of Service</Link>
          <Link href="/disclaimer/">Disclaimer</Link>
          <Link href="/privacy-policy/">Cookie Policy</Link>
        </div>
      </div>

      <div className="foot-bottom">
        <p>© 2026 Tech Resolutions — All rights reserved</p>
        <div className="foot-links">
          <Link href="/privacy-policy/">Privacy</Link>
          <Link href="/terms-of-service/">Terms</Link>
          <Link href="/disclaimer/">Disclaimer</Link>
          <Link href="/contact/">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
