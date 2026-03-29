const https = require('https');

async function checkRedirect(url) {
    return new Promise((resolve) => {
        https.get(url, (res) => {
            console.log(`${res.statusCode} - ${url}`);
            if (res.statusCode >= 300 && res.statusCode < 400) {
                console.log(`  -> Redirect to: ${res.headers.location}`);
            }
            resolve(res.statusCode);
        }).on('error', (e) => {
            console.log(`ERR - ${url}: ${e.message}`);
            resolve(null);
        });
    });
}

async function run() {
    console.log('--- REDIRECT AUDIT ---');
    await checkRedirect('https://nevy.in/robots.txt');
    await checkRedirect('https://nevy.in/sitemap.xml');
    await checkRedirect('https://www.nevy.in/robots.txt');
    await checkRedirect('https://www.nevy.in/sitemap.xml');
    await checkRedirect('https://www.nevy.in/convert/usd-to-inr/');
    console.log('--- AUDIT COMPLETE ---');
}

run();
