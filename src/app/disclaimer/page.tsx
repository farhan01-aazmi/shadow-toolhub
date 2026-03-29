import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Disclaimer | Nevy.in',
    description: 'Read the official disclaimer for Nevy.in regarding the accuracy of information and use of our financial and web utilities.',
    alternates: {
        canonical: 'https://www.nevy.in/disclaimer',
    },
};

export default function DisclaimerPage() {
    return (
        <div className="legal-container">
            <header className="legal-header">
                <h1>Disclaimer</h1>
                <p className="legal-intro">Please read this disclaimer carefully before using our website.</p>
            </header>

            <div className="legal-content">
                <section className="legal-section">
                    <h2>1. Accuracy of Information</h2>
                    <p>While we strive to provide accurate and up-to-date information, the tools and content on Nevy.in (including calculators and trackers) are for informational purposes only. We make no representations or warranties of any kind about the completeness, accuracy, or reliability of the information.</p>
                </section>

                <section className="legal-section">
                    <h2>2. Financial Disclaimer</h2>
                    <p>The financial calculators (EMI, Tax, Currency) should not be used as the sole basis for financial decisions. Always consult with a qualified financial professional before making significant financial commitments.</p>
                </section>

                <section className="legal-section">
                    <h2>3. External Links</h2>
                    <p>Our site may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, or completeness of any information on these external sites.</p>
                </section>

                <section className="legal-section">
                    <h2>4. Limitation of Liability</h2>
                    <p>In no event will Nevy.in be liable for any loss or damage including without limitation, indirect or consequential loss or damage, arising from the use of this website.</p>
                </section>
            </div>
        </div>
    );
}
