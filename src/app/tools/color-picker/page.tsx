import React from 'react';
import { Metadata } from 'next';
import ColorPicker from './ColorPicker';
import { Palette, Code, Layers } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Color Picker Free Online | HEX to RGB Converter | Tech Resolutions',
    description: 'Advanced online color picker and converter. Get HEX, RGB, and HSL codes instantly. Perfect for designers and developers in 2026.',
};

export default function ColorPickerPage() {
    return (
        <div className="container" style={{ padding: '60px 48px', maxWidth: '1200px', margin: '0 auto', minHeight: '100vh' }}>
            <div style={{ marginBottom: '30px', fontFamily: 'var(--font-dm-mono)', fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--sub)' }}>
                Home &gt; Tools &gt; Color Picker
            </div>
            
            <header className="mb-12">
                <div className="hero-kicker mb-4">{/* Tool: Design Utility */}</div>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '20px' }}>
                    Visual <span className="amber">Color</span><br />Explorer.
                </h1>
                <p style={{ color: 'var(--sub2)', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.8 }}>
                    Find the perfect shade for your project. Pick colors, convert between HEX and RGB formats, and build beautiful palettes instantly.
                </p>
            </header>

            <ColorPicker />

            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="card glass p-8 border-l-4 border-amber">
                    <Palette size={32} className="text-amber mb-6" />
                    <h3 className="mb-4">Live Preview</h3>
                    <p className="text-sub text-sm leading-relaxed">See how colors look in real-time as you navigate the wheel or enter specific values.</p>
                </div>
                <div className="card glass p-8 border-l-4 border-accent">
                    <Code size={32} className="text-accent mb-6" />
                    <h3 className="mb-4">Dev Friendly</h3>
                    <p className="text-sub text-sm leading-relaxed">Copy production-ready HEX and RGB strings directly to your clipboard in one click.</p>
                </div>
                <div className="card glass p-8 border-l-4 border-primary">
                    <Layers size={32} className="text-primary mb-6" />
                    <h3 className="mb-4">Design Trends</h3>
                    <p className="text-sub text-sm leading-relaxed">Stay updated with 2026 design standards by using our curated quick-select palette.</p>
                </div>
            </div>

            <section className="mt-24 pt-24 border-t border-line">
                <h2 style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '40px' }}>Design Resource</h2>
                <div className="pro-content">
                    <p className="text-sub leading-relaxed mb-6">In modern web development, color is more than aesthetics—it defines user interaction and accessibility. Our <b>Color Picker</b> is designed to be a high-performance utility that bridges the gap between creative vision and technical implementation.</p>
                    <p className="text-sub leading-relaxed">By providing both HEX and RGB outputs, we support a wide range of development workflows, from CSS-in-JS to traditional stylesheets. Our 2026 optimized engine ensures smooth, lag-free selection even on high-DPI displays.</p>
                </div>
            </section>
        </div>
    );
}
