const https = require('https');

async function checkUrl(url) {
    return new Promise((resolve) => {
        const req = https.get(url, (res) => {
            resolve({ url, status: res.statusCode });
            res.resume(); // consume response
        });
        req.on('error', (e) => {
            resolve({ url, status: 'ERROR', message: e.message });
        });
        req.setTimeout(5000, () => {
            req.destroy();
            resolve({ url, status: 'TIMEOUT' });
        });
    });
}

async function run() {
    const baseUrl = 'https://www.nevy.in';
    const testPaths = [
        '/',
        '/sitemap.xml',
        '/robots.txt',
        '/convert/usd-to-inr',
        '/convert/eur-to-usd',
        '/convert/bitcoin-to-usd',
        '/tools/currency-converter',
        '/tools/currency-converter/usd-to-inr',
        '/blog',
        '/about',
        '/privacy',
        '/terms'
    ];

    console.log('--- STARTING ROBUST AUDIT ---');
    const results = [];
    for (const path of testPaths) {
        const res = await checkUrl(`${baseUrl}${path}`);
        results.push(res);
        console.log(`${res.status} | ${res.url}`);
    }
    console.log('--- AUDIT COMPLETE ---');

    const errors = results.filter(r => r.status !== 200 && r.status !== 301 && r.status !== 308);
    if (errors.length > 0) {
        console.log('!!! ERRORS FOUND !!!');
        errors.forEach(e => console.log(`${e.status}: ${e.url}`));
    } else {
        console.log('NO ERRORS FOUND. SITE IS 100% HEALTHY.');
    }
}

run();
