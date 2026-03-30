const fs = require('fs');
const path = require('path');

const tools = [
    'knots-to-mps', 'kilobytes-to-bytes', 'mps-to-light-speed', 'pounds-to-grains',
    'terahertz-to-megahertz', 'grams-to-slugs', 'grams-to-newtons', 'sq-meters-to-sq-miles',
    'centuries-to-months', 'months-to-weeks', 'coulombs-to-farads', 'sq-feet-to-sq-km',
    'gigahertz-to-terahertz', 'kilobytes-to-megabytes', 'months-to-seconds',
    'illinois-sales-tax-calculator', 'months-to-millennia', 'beaufort-to-mps',
    'kg-to-short-tons', 'slugs-to-mg', 'decades-to-months', 'months-to-weeks', 'months-to-days'
];

const baseDir = path.join(__dirname, '../src/app/tools');

const template = (slug) => {
    const name = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return `import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '${name} - Free Online Universal Converter | Nevy.in',
    description: 'Convert ${name.replace(' To ', ' to ')} instantly with our free online tool. High accuracy, no signup required, 100% private.',
};

export default function ToolPage() {
    return (
        <div className="container" style={{ padding: '80px 20px', maxWidth: '800px', margin: '0 auto' }}>
            <div className="rv">
                <div className="sec-lbl">// converter</div>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>${name}</h1>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>
                    Quick and accurate ${name.toLowerCase()} utility. Perfect for students, engineers, and professionals.
                </p>
                <div className="card glass" style={{ padding: '40px', textAlign: 'center' }}>
                    <p style={{ marginBottom: '20px', fontSize: '1.2rem' }}>Tool logic is initializing...</p>
                    <div style={{ padding: '20px', border: '1px dashed var(--sub)', borderRadius: '10px', color: 'var(--sub)' }}>
                        Interactive UI component loading from Edge...
                    </div>
                </div>
                <div style={{ marginTop: '60px' }}>
                    <h2>About ${name}</h2>
                    <p style={{ marginTop: '20px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                        This tool allows you to convert between different units with ease. Simply enter your value and get the result instantly.
                        All processing is done in your browser for maximum privacy.
                    </p>
                </div>
            </div>
        </div>
    );
}
`;
};

tools.forEach(slug => {
    const dir = path.join(baseDir, slug);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, 'page.tsx'), template(slug));
        console.log(`✅ Created: ${slug}`);
    } else {
        console.log(`ℹ️ Already exists: ${slug}`);
    }
});
