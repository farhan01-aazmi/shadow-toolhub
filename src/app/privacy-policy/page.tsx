import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy - CCPA Compliant | Nevy.in',
    description: 'Read the Nevy.in CCPA-compliant privacy policy. We are committed to protecting your data. No tracking, no cookies, no personal data collection.',
    alternates: {
        canonical: 'https://www.nevy.in/privacy-policy',
    },
};

export default function PrivacyPage() {
    return (
        <div className="container" style={{ padding: '80px 20px', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '40px' }}>Privacy Policy</h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>Last updated: March 2026</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                <section>
                    <h2 style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>1. Information We Collect</h2>
                    <p>Nevy.in does not collect any personally identifiable information (PII). We do not require account creation, email addresses, or any form of registration to use our tools.</p>
                </section>

                <section>
                    <h2 style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>2. Cookies and Tracking</h2>
                    <p>We do not use cookies, local storage tokens, or any form of browser fingerprinting to track your activity. Your sessions are completely anonymous.</p>
                </section>

                <section>
                    <h2 style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>3. Data Processing</h2>
                    <p>All tool operations (image compression, word counting, PDF conversions) are processed locally in your browser. No files are uploaded to our servers.</p>
                </section>

                <section>
                    <h2 style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>4. Third-Party Services</h2>
                    <p>We use third-party APIs (such as FreeCurrencyAPI and CoinGecko) to fetch real-time market data. These services have their own privacy policies. We do not share any user data with these providers.</p>
                </section>

                <section>
                    <h2 style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>5. Advertising</h2>
                    <p>We may use Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior visits. You can opt out of personalized advertising by visiting Google&apos;s Ads Settings.</p>
                </section>

                <section>
                    <h2 style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>6. Contact</h2>
                    <p>If you have any questions about this privacy policy, please contact us at contact@nevy.in.</p>
                </section>
            </div>
        </div>
    );
}
