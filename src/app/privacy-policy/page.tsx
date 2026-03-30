import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Tech Resolutions',
  description: 'Your privacy is our priority. Learn how Tech Resolutions protects your data and ensures a safe online experience.',
  alternates: {
    canonical: 'https://www.nevy.in/privacy-policy',
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="container" style={{ padding: '80px 20px', maxWidth: '800px', margin: '0 auto' }}>
        <div className="rv">
            <h1>Privacy Policy</h1>
            <p style={{ marginTop: '20px', color: 'var(--text-secondary)' }}>
                Last updated: March 30, 2026
            </p>

            <section style={{ marginTop: '40px' }}>
                <h2>1. Commitment to Privacy</h2>
                <p style={{ marginTop: '10px', color: 'var(--text-secondary)' }}>
                    At Tech Resolutions, we take your privacy seriously. Our tools are designed to process data directly in your browser. We do not store, share, or sell your personal information.
                </p>
            </section>

            <section style={{ marginTop: '30px' }}>
                <h2>2. Data Collection</h2>
                <p style={{ marginTop: '10px', color: 'var(--text-secondary)' }}>
                    We do not collect any personal identification information (PII). Any data entered into our tools (like word counts, currency values, or image uploads) is processed locally on your device.
                </p>
            </section>

            <section style={{ marginTop: '30px' }}>
                <h2>3. Use of Cookies</h2>
                <p style={{ marginTop: '10px', color: 'var(--text-secondary)' }}>
                    We use minimal functional cookies to remember your preferences (like dark mode). We do not use invasive tracking or third-party advertising cookies.
                </p>
            </section>

            <section style={{ marginTop: '30px' }}>
                <h2>4. Third-Party Services</h2>
                <p style={{ marginTop: '10px', color: 'var(--text-secondary)' }}>
                    We may use reputable third-party services like Google AdSense to serve ads. These services may use cookies as dictated by their own privacy policies. Our tools themselves remain 100% private.
                </p>
            </section>

            <div style={{ marginTop: '60px', padding: '40px', background: 'rgba(255,255,255,0.02)', borderRadius: '20px' }}>
                <h3>Contact Us</h3>
                <p style={{ marginTop: '10px' }}>
                    If you have any questions about this Privacy Policy, contact Tech Resolutions at:
                    <br />
                    <strong>tech00kk@gmail.com</strong>
                </p>
            </div>
        </div>
    </div>
  );
}
