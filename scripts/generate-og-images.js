const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

const PUBLIC_DIR = path.join(process.cwd(), 'public', 'og');
if (!fs.existsSync(PUBLIC_DIR)) fs.mkdirSync(PUBLIC_DIR, { recursive: true });

// Data sources matching the application
const commonCurrencies = [
    'USD', 'EUR', 'GBP', 'INR', 'JPY', 'CAD', 'AUD', 'CHF', 'CNY', 'AED', 'SAR', 'PKR'
];

const topCryptos = [
    'bitcoin', 'ethereum', 'tether', 'binancecoin', 'solana', 'ripple', 'usdc', 'cardano', 'avalanche-2', 'dogecoin'
];

// Utility: Draw a branded gradient background
function drawBrandedBackground(ctx, width, height, theme = 'dark') {
    // Brand colors: Deep blues and purples
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    if (theme === 'dark') {
        gradient.addColorStop(0, '#0f172a'); // Slate 900
        gradient.addColorStop(1, '#312e81'); // Indigo 900
    } else if (theme === 'crypto') {
        gradient.addColorStop(0, '#1e293b');
        gradient.addColorStop(1, '#065f46'); // Emerald 800
    } else {
        gradient.addColorStop(0, '#1e1b4b'); // Indigo 950
        gradient.addColorStop(1, '#172554'); // Blue 950
    }

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Add subtle grid pattern for "tech/finance" feel
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
    ctx.lineWidth = 1;
    for (let i = 0; i < width; i += 40) {
        ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, height); ctx.stroke();
    }
    for (let i = 0; i < height; i += 40) {
        ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(width, i); ctx.stroke();
    }

    // Add glowing orbs
    const orb = ctx.createRadialGradient(width * 0.8, height * 0.2, 0, width * 0.8, height * 0.2, 400);
    orb.addColorStop(0, 'rgba(99, 102, 241, 0.2)'); // Indigo 500
    orb.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = orb;
    ctx.fillRect(0, 0, width, height);
}

// Draw the standard typography structure for OG images
function drawTypography(ctx, width, height, title, subtitle, category) {
    // Category pill
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.beginPath();
    ctx.roundRect(80, 80, 300, 50, 25);
    ctx.fill();
    ctx.fillStyle = '#60a5fa'; // Blue 400
    ctx.font = 'bold 24px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(category, 110, 115);

    // Main Title
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 84px sans-serif';
    // Handle text wrapping
    const words = title.split(' ');
    let line = '';
    let y = 260;
    for (let n = 0; n < words.length; n++) {
        let testLine = line + words[n] + ' ';
        let metrics = ctx.measureText(testLine);
        let testWidth = metrics.width;
        if (testWidth > width - 160 && n > 0) {
            ctx.fillText(line, 80, y);
            line = words[n] + ' ';
            y += 100;
        } else {
            line = testLine;
        }
    }
    ctx.fillText(line, 80, y);

    // Subtitle
    ctx.fillStyle = '#94a3b8'; // Slate 400
    ctx.font = '36px sans-serif';
    ctx.fillText(subtitle, 80, height - 120);

    // Branding / Domain watermark
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 32px sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText('shadowtoolhub.com', width - 80, height - 80);
}

// Generate single image and save to disk
function generateImage(filename, title, subtitle, category, theme = 'dark') {
    const width = 1200;
    const height = 630;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    drawBrandedBackground(ctx, width, height, theme);
    drawTypography(ctx, width, height, title, subtitle, category);

    const buffer = canvas.toBuffer('image/png');
    const outPath = path.join(PUBLIC_DIR, filename);
    fs.writeFileSync(outPath, buffer);
    console.log(`🖼️ Created OG: ${filename}`);
}

async function main() {
    console.log('🚀 Starting Mass OG Image Generation for 197+ Pages...\n');

    // 1. Core Tools
    generateImage('og-loan-calculator.png', 'Advanced Mortgage & Loan Calculator', 'Visualize principal vs interest with institutional precision.', 'FINANCE TOOL', 'dark');
    generateImage('og-word-counter.png', 'Professional SEO Word & Character Counter', 'Analyze keyword density and reading time instantly.', 'SEO UTILITY', 'dark');
    generateImage('og-meta-generator.png', '2026 Meta Tag Generator & Previewer', 'Build valid HTML5 tags for max Google CTR.', 'SEO UTILITY', 'dark');
    generateImage('og-image-optimizer.png', 'WebP Image Optimizer for Next.js', 'Compress images locally without losing quality.', 'DEV TOOL', 'dark');
    generateImage('og-currency-converter.png', 'Live Forex Currency Converter', 'Real-time mid-market rates for 144+ pairings.', 'FINANCE TOOL', 'finance');
    generateImage('og-crypto-tracker.png', 'Live Crypto Dashboard', 'Real-time prices, volume, and market cap tracking.', 'CRYPTO HUB', 'crypto');

    // 2. Programmatic Currency Pairs (132 pairs)
    let cCount = 0;
    for (let i = 0; i < commonCurrencies.length; i++) {
        for (let j = 0; j < commonCurrencies.length; j++) {
            if (i === j) continue;
            const from = commonCurrencies[i];
            const to = commonCurrencies[j];
            const title = `Convert ${from} to ${to}`;
            const sub = `Live mid-market Exchange Rate without bank fees.`;
            generateImage(`og-currency-${from.toLowerCase()}-to-${to.toLowerCase()}.png`, title, sub, 'CURRENCY CONVERTER', 'finance');
            cCount++;
        }
    }

    // 3. Programmatic Crypto Coins
    let crCount = 0;
    for (const coin of topCryptos) {
        const title = `${coin.toUpperCase()} Live Price Tracker`;
        const sub = `Real-time ${coin} market cap, volume, and 24h changes.`;
        generateImage(`og-crypto-${coin}.png`, title, sub, 'CRYPTO ASSET', 'crypto');
        crCount++;
    }

    console.log(`\n✅ Completed Generation!`);
    console.log(`=========================`);
    console.log(`Core Tools: 6`);
    console.log(`Currency Pairs: ${cCount}`);
    console.log(`Crypto Pages: ${crCount}`);
    console.log(`Total Images generated in /public/og/: ${6 + cCount + crCount}`);
}

main().catch(console.error);
