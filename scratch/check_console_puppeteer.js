const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', err => console.log('PAGE ERROR:', err.message));
    page.on('requestfailed', request => {
        console.log(`REQUEST FAILED: ${request.url()} - ${request.failure()?.errorText}`);
    });

    try {
        console.log('Navigating to https://www.nevy.in ...');
        await page.goto('https://www.nevy.in', { waitUntil: 'networkidle2' });
        console.log('--- Page loaded ---');
    } catch (e) {
        console.log('Navigation error:', e.message);
    }

    await browser.close();
})();
