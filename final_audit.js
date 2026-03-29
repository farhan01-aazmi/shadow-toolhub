const https = require('https');

async function checkUrl(url) {
    return new Promise((resolve) => {
        https.get(url, (res) => {
            resolve({ url, status: res.statusCode, location: res.headers.location });
        }).on('error', (e) => {
            resolve({ url, status: 'ERROR', message: e.message });
        });
    });
}

async function run() {
    console.log('--- FINAL PRODUCTION AUDIT ---');
    const results = await Promise.all([
        checkUrl('https://www.nevy.in/sitemap.xml'),
        checkUrl('https://www.nevy.in/robots.txt'),
        checkUrl('https://www.nevy.in/convert/usd-to-inr'),
        checkUrl('https://www.nevy.in/convert/usd-to-inr/'), // Check redirect
    ]);

    results.forEach(r => {
        console.log(`STATUS ${r.status}${r.location ? ' -> ' + r.location : ''}: ${r.url}`);
    });
    console.log('--- AUDIT COMPLETE ---');
}

run();
