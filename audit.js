const https = require('https');

const urls = [
    'https://www.nevy.in/',
    'https://www.nevy.in/about/',
    'https://www.nevy.in/privacy/',
    'https://www.nevy.in/terms/',
    'https://www.nevy.in/contact/',
    'https://www.nevy.in/tools/currency-converter/',
    'https://www.nevy.in/tools/crypto-tracker/',
    'https://www.nevy.in/tools/image-optimizer/',
    'https://www.nevy.in/tools/loan-calculator/',
    'https://www.nevy.in/tools/word-counter/',
    'https://www.nevy.in/tools/meta-generator/',
    'https://www.nevy.in/convert/',
    'https://www.nevy.in/convert/usd-to-inr/',
    'https://www.nevy.in/convert/eur-to-usd/',
    'https://www.nevy.in/convert/gbp-to-usd/',
    'https://www.nevy.in/convert/bitcoin-to-usd/',
    'https://www.nevy.in/convert/ethereum-to-inr/',
    'https://www.nevy.in/blog/mastering-usd-inr-exchange-rates/',
    'https://www.nevy.in/blog/page-speed-seo-ranking-factor-2026/'
];

async function checkUrl(url) {
    return new Promise((resolve) => {
        https.get(url, (res) => {
            console.log(`${res.statusCode} - ${url}`);
            resolve(res.statusCode);
        }).on('error', (e) => {
            console.log(`ERR - ${url}: ${e.message}`);
            resolve(null);
        });
    });
}

async function run() {
    console.log('--- LIVE PRODUCTION AUDIT ---');
    for (const url of urls) {
        await checkUrl(url);
    }
    console.log('--- AUDIT COMPLETE ---');
}

run();
