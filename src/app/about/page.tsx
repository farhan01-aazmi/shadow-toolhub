import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Zap, Globe, Users } from 'lucide-react';

export const metadata: Metadata = {
    title: 'About Us - Privacy-First Online Tools | Nevy.in',
    description: 'Nevy.in is a privacy-first tool hub providing 150+ free online utilities with institutional-grade accuracy. No tracking, no signups. Built for speed and transparency.',
    alternates: {
        canonical: 'https://www.nevy.in/about',
    },
};

export default function AboutPage() {
    return (
        <div className="container" style={{ padding: '80px 20px', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '20px', textAlign: 'center' }}>About Nevy.in</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', textAlign: 'center', marginBottom: '60px' }}>
                We believe utility tools should be free, fast, and private. Built with precision in 2026.
            </p>

            <div style={{ display: 'grid', gap: '30px', marginBottom: '60px' }}>
                <div className="card glass" style={{ padding: '30px' }}>
                    <Zap size={28} style={{ color: 'var(--primary)', marginBottom: '15px' }} />
                    <h2 style={{ marginBottom: '15px' }}>Our Mission</h2>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                        Nevy.in was built with one goal: to provide professionals, students, and everyday users with
                        high-performance online tools that respect their time and privacy. No ads. No signups. No tracking. Just tools that work.
                    </p>
                </div>

                <div className="card glass" style={{ padding: '30px' }}>
                    <Globe size={28} style={{ color: 'var(--secondary)', marginBottom: '15px' }} />
                    <h2 style={{ marginBottom: '15px' }}>What We Offer</h2>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                        Over 70+ free utilities including currency converters, crypto trackers, image optimizers,
                        EMI calculators, word counters, and SEO tools. All powered by institutional-grade APIs
                        and delivered via Tech Resolutions infrastructure for near-zero latency.
                    </p>
                </div>

                <div className="card glass" style={{ padding: '30px' }}>
                    <Shield size={28} style={{ color: 'var(--accent)', marginBottom: '15px' }} />
                    <h2 style={{ marginBottom: '15px' }}>Privacy First</h2>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                        Our team at Tech Resolutions ensures that we do not collect personal data, sell information to third parties, or use invasive tracking scripts.
                        Your calculations, conversions, and file uploads stay in your browser.
                    </p>
                </div>
            </div>

            <div style={{ textAlign: 'center', padding: '40px', background: 'rgba(255,255,255,0.02)', borderRadius: '20px' }}>
                <h3 style={{ marginBottom: '15px' }}>Have questions or feedback?</h3>
                <Link href="/contact/" className="btn-a" style={{ padding: '12px 30px' }}>
                    Contact Us
                </Link>
            </div>
        </div>
    );
}
