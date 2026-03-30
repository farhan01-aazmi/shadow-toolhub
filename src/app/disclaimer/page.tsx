import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Disclaimer | Tech Resolutions',
    description: 'Read the official disclaimer for Tech Resolutions regarding the accuracy of information and use of our financial and web utilities.',
    alternates: {
        canonical: 'https://www.nevy.in/disclaimer',
    },
};

export default function DisclaimerPage() {
    return (
        <div className="container" style={{ padding: '80px 20px', maxWidth: '800px', margin: '0 auto' }}>
            <div className="rv">
                <header style={{ marginBottom: '40px', textAlign: 'center' }}>
                    <h1>Disclaimer</h1>
                    <p style={{ marginTop: '20px', color: 'var(--text-secondary)' }}>Please read this disclaimer carefully before using our website.</p>
                </header>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                    <section>
                        <h2 style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>1. Accuracy of Information</h2>
                        <p>While we strive to provide accurate and up-to-date information, the tools and content on Tech Resolutions (including calculators and trackers) are for informational purposes only. We make no representations or warranties of any kind about the completeness, accuracy, or reliability of the information.</p>
                    </section>

                    <section>
                        <h2 style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>2. Financial Disclaimer</h2>
                        <p>The financial calculators (EMI, Tax, Currency) should not be used as the sole basis for financial decisions. Always consult with a qualified financial professional before making significant financial commitments.</p>
                    </section>

                    <section>
                        <h2 style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>3. External Links</h2>
                        <p>Our site may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, or completeness of any information on these external sites.</p>
                    </section>

                    <section>
                        <h2 style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>4. Limitation of Liability</h2>
                        <p>In no event will Tech Resolutions or its operators be liable for any loss or damage including without limitation, indirect or consequential loss or damage, arising from the use of this website.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
