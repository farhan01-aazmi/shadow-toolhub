import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Terms of Service | Nevy.in",
    description: "Read the terms and conditions for using the Nevy.in digital tools and platform.",
};

export default function TermsPage() {
    return (
        <div className="legal-container">
            <header className="legal-header">
                <h1 className="gradient-text">Terms of Service</h1>
                <p className="legal-intro">Effective Date: March 2026</p>
            </header>

            <div className="legal-content card glass">
                <section className="legal-section">
                    <h2>1. Acceptance of Terms</h2>
                    <p>By accessing Nevy.in, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
                </section>

                <section className="legal-section">
                    <h2>2. Use License</h2>
                    <p>Permission is granted to temporarily use the tools on Nevy.in for personal or commercial use. This is a license, not a transfer of title.</p>
                </section>

                <section className="legal-section">
                    <h2>3. Disclaimer</h2>
                    <p>The tools on Nevy.in are provided "as is". We make no warranties, expressed or implied, regarding the accuracy or reliability of the results provided by our tools.</p>
                </section>

                <section className="legal-section">
                    <h2>4. Limitations</h2>
                    <p>In no event shall Nevy.in be liable for any damages arising out of the use or inability to use the tools on our platform.</p>
                </section>

                <section className="legal-section">
                    <h2>5. Governing Law</h2>
                    <p>These terms are governed by and construed in accordance with the laws of the jurisdiction in which the operator resides.</p>
                </section>
            </div>

        </div>
    );
}
