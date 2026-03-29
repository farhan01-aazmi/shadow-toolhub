const https = require('https');

async function checkUrl(url) {
    return new Promise((resolve) => {
        https.get(url, (res) => {
            resolve({ url, status: res.statusCode });
        }).on('error', (e) => {
            resolve({ url, status: 'ERROR', message: e.message });
        });
    });
}

async function run() {
    const baseUrl = 'https://www.nevy.in';
    const testPaths = [
        '/',
        '/convert/usd-to-inr',
        '/convert/eur-to-usd',
        '/convert/gbp-to-inr',
        '/convert/bitcoin-to-usd',
        '/tools/currency-converter',
        '/about',
        '/privacy',
        '/terms'
    ];

    console.log('--- STARTING LIVE AUDIT ---');
    for (const path of testPaths) {
        const result = await checkUrl(`${baseUrl}${path}`);
        console.log(`STATUS ${result.status}: ${result.url}`);
    }
    console.log('--- AUDIT COMPLETE ---');
}

run();
