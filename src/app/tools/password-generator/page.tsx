import React from 'react';
import { Metadata } from 'next';
import PasswordGenerator from './PasswordGenerator';
import { ShieldCheck, Lock, RefreshCw } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Password Generator Free Online | Tech Resolutions',
    description: 'Generate secure, strong, and customizable passwords instantly. No sign-up required, works entirely in your browser for maximum security.',
};

export default function PasswordGeneratorPage() {
    return (
        <div className="container" style={{ padding: '60px 48px', maxWidth: '1200px', margin: '0 auto', minHeight: '100vh' }}>
            <div style={{ marginBottom: '30px', fontFamily: 'var(--font-dm-mono)', fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--sub)' }}>
                Home &gt; Tools &gt; Password Generator
            </div>
            
            <header className="mb-12">
                <div className="hero-kicker mb-4">{/* Tool: Security Utility */}</div>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '20px' }}>
                    Secure <span className="amber">Password</span><br />Generator.
                </h1>
                <p style={{ color: 'var(--sub2)', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.8 }}>
                    Create strong, impossible-to-guess passwords instantly. All computation happens locally in your browser — your data never touches a server.
                </p>
            </header>

            <PasswordGenerator />

            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="card glass p-8">
                    <ShieldCheck size={32} className="text-amber mb-6" />
                    <h3 className="mb-4">100% Private</h3>
                    <p className="text-sub text-sm leading-relaxed">Unlike other sites, we don&apos;t transmit your generated passwords. Your security stays on your machine.</p>
                </div>
                <div className="card glass p-8">
                    <Lock size={32} className="text-accent mb-6" />
                    <h3 className="mb-4">Custom Strength</h3>
                    <p className="text-sub text-sm leading-relaxed">Choose from upper, lower, numbers, and symbols to meet any specific security requirements.</p>
                </div>
                <div className="card glass p-8">
                    <RefreshCw size={32} className="text-primary mb-6" />
                    <h3 className="mb-4">Infinite Tries</h3>
                    <p className="text-sub text-sm leading-relaxed">Refresh your pool as many times as you want until you find the perfect secure string for your accounts.</p>
                </div>
            </div>

            <section className="mt-24 pt-24 border-t border-line">
                <h2 style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '40px' }}>Frequently Asked Questions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h4 className="mb-4 font-bold">Why use a password generator?</h4>
                        <p className="text-sub leading-relaxed">Using a generator ensures your passwords are truly random and not based on predictable patterns like birthdays or common phrases, significantly reducing the risk of brute-force attacks.</p>
                    </div>
                    <div>
                        <h4 className="mb-4 font-bold">Is it safe to use this online?</h4>
                        <p className="text-sub leading-relaxed">Yes. Because Tech Resolutions uses client-side JavaScript, the generator logic executes in your local environment. No data is stored, and no communication with a backend occurs during generation.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
