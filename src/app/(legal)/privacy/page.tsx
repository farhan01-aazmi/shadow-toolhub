import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Privacy Policy | Nevy.in",
    description: "Learn how Nevy.in handles your data and ensures your privacy while using our digital tools.",
};

export default function PrivacyPage() {
    return (
        <div className="legal-container">
            <header className="legal-header">
                <h1 className="gradient-text">Privacy Policy</h1>
                <p className="legal-intro">Last Updated: March 2026</p>
            </header>

            <div className="legal-content card glass">
                <section className="legal-section">
                    <h2>1. Information We Collect</h2>
                    <p>
                        At Nevy.in, we prioritize your privacy. For most of our tools (like the Image Optimizer and Loan Calculator),
                        data is processed locally in your browser and is never sent to our servers. We do not require account registration.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>2. Use of Cookies & Advertising</h2>
                    <p>
                        We use Google AdSense to serve advertisements. Google may use cookies to serve ads based on your prior visits
                        to our website or other websites. You may opt out of personalized advertising by visiting Ad Settings.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>3. Data Security</h2>
                    <p>
                        We implement industry-standard security measures to protect the integrity of our platform. However, since we
                        collect minimal personal information, the risk to your personal data is significantly reduced.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>4. Third-Party Links</h2>
                    <p>
                        Our website may contain links to external sites. We are not responsible for the privacy practices or content
                        of these third-party websites.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>5. Contact Us</h2>
                    <p>
                        If you have any questions regarding this Privacy Policy, you can reach out to us via our official channels.
                    </p>
                </section>
            </div>

        </div>
    );
}
