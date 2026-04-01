const puppeteer = require('puppeteer');
const fs = require('fs');

const ARTICLE_CONTENT = `
# 🛠️ Tech Resolutions: 70+ Free Online Tools for 2026

Efficiency and privacy are the new standard. Tech Resolutions is a 100% free, no-ads utility hub.

## 🔗 Try our most popular tools:
- **Image Compressor:** https://www.nevy.in/tools/image-optimizer
- **EMI Calculator:** https://www.nevy.in/tools/loan-calculator
- **Word Counter:** https://www.nevy.in/tools/word-counter
- **PDF to Word:** https://www.nevy.in/tools/pdf-to-word

### No Signup. No Fees. 100% Private (Runs in Browser).
Explore now: **https://www.nevy.in**
`;

async function executeOutreach() {
    console.log('🔍 STARTING OUTREACH ROBUST MODE...');
    const results = { timestamp: new Date().toISOString(), links: [] };
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    // 1. RENTRY.ORG
    try {
        console.log('📡 Connecting to Rentry.org...');
        await page.goto('https://rentry.org/', { waitUntil: 'networkidle2' });
        await page.waitForSelector('#text', { visible: true });
        await page.evaluate((text) => { document.querySelector('#text').value = text; }, ARTICLE_CONTENT);
        await page.click('button[type="submit"]');
        await page.waitForNavigation();
        console.log(`✅ RENTRY SUCCESS: ${page.url()}`);
        results.links.push({ platform: 'Rentry', url: page.url() });
    } catch (err) { console.log(`❌ Rentry Error: ${err.message}`); }

    // 2. CONTROLC
    try {
        console.log('📡 Connecting to ControlC.com...');
        await page.goto('https://controlc.com/', { waitUntil: 'networkidle2' });
        await page.waitForSelector('#paste_title', { visible: true });
        await page.type('#paste_title', 'Tech Resolutions: Full Productivity Suite');
        await page.evaluate((text) => { document.querySelector('#input').value = text; }, ARTICLE_CONTENT);
        await page.click('input[name="submit"]');
        await page.waitForNavigation();
        console.log(`✅ CONTROLC SUCCESS: ${page.url()}`);
        results.links.push({ platform: 'ControlC', url: page.url() });
    } catch (err) { console.log(`❌ ControlC Error: ${err.message}`); }

    fs.writeFileSync('outreach_log.json', JSON.stringify(results, null, 2));
    await browser.close();
}

executeOutreach();
