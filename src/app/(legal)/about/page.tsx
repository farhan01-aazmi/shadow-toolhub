import { Metadata } from 'next';
import { Target, Heart, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
    title: "About Us | Nevy.in",
    description: "Learn more about Nevy.in – your destination for premium, free, and automated digital tools designed for efficiency.",
};

export default function AboutPage() {
    return (
        <div className="legal-container">
            <header className="legal-header">
                <h1 className="gradient-text">About Nevy.in</h1>
                <p className="legal-intro">
                    Empowering digital creators, financial analysts, and developers with
                    institutional-grade tools that are 100% free and private.
                </p>
            </header>

            <div className="legal-content card glass">
                <section className="about-section">
                    <h2>Our Mission</h2>
                    <p>
                        At Nevy.in, we believe that high-quality digital utilities should be accessible to everyone
                        without the burden of subscriptions, logins, or invasive tracking. Our suite of tools is designed
                        to provide instant, accurate, and secure solutions for common digital tasks.
                    </p>
                </section>

                <div className="values-grid">
                    <div className="value-item">
                        <Target size={24} className="text-primary" />
                        <div>
                            <h3>Accuracy</h3>
                            <p>We source our data from institutional-grade APIs to ensure real-time precision in every calculation.</p>
                        </div>
                    </div>
                    <div className="value-item">
                        <Heart size={24} className="text-secondary" />
                        <div>
                            <h3>Transparency</h3>
                            <p>No hidden fees, no credit cards, and no data harvesting. Our tools are built for the community.</p>
                        </div>
                    </div>
                    <div className="value-item">
                        <ShieldCheck size={24} className="text-accent" />
                        <div>
                            <h3>Security</h3>
                            <p>Processing happens in your browser whenever possible. Your data stays where it belongs—with you.</p>
                        </div>
                    </div>
                </div>

                <section className="about-section">
                    <h2>Why USA Traffic?</h2>
                    <p>
                        Nevy.in is optimized for global users with a special focus on the USA market, ensuring high-speed
                        delivery through edge computing and targeting high-value financial and tech niches.
                    </p>
                </section>
            </div>

        </div>
    );
}
