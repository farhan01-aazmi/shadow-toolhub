import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | Nevy.in',
    description: 'Read the Nevy.in terms and conditions. By using our free tools, you agree to these terms of service.',
    alternates: {
        canonical: 'https://www.nevy.in/terms',
    },
};

export default function TermsPage() {
    return (
        <div className="container" style={{ padding: '80px 20px', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '40px' }}>Terms of Service</h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>Last updated: March 2026</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                <section>
                    <h2 style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>1. Acceptance of Terms</h2>
                    <p>By accessing and using Nevy.in, you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use the site.</p>
                </section>

                <section>
                    <h2 style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>2. Use of Services</h2>
                    <p>Nevy.in provides free online tools for personal and commercial use. You may not use our services for any illegal or unauthorized purpose. You must not attempt to disrupt or overload the service.</p>
                </section>

                <section>
                    <h2 style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>3. Accuracy of Data</h2>
                    <p>While we strive for accuracy, currency exchange rates, cryptocurrency prices, and other financial data are provided for informational purposes only. We do not guarantee the accuracy of any data presented and are not liable for any financial decisions made based on our tools.</p>
                </section>

                <section>
                    <h2 style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>4. Intellectual Property</h2>
                    <p>All content, design, and functionality on Nevy.in are the intellectual property of Nevy.in. You may not copy, redistribute, or repurpose our content without explicit written permission.</p>
                </section>

                <section>
                    <h2 style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>5. Limitation of Liability</h2>
                    <p>Nevy.in shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of our tools. All tools are provided &quot;as is&quot; without warranty of any kind.</p>
                </section>

                <section>
                    <h2 style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>6. Changes to Terms</h2>
                    <p>We reserve the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated revision date.</p>
                </section>
            </div>
        </div>
    );
}
