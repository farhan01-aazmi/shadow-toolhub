const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

// Path to your service account key file
const KEY_FILE = path.join(process.cwd(), 'service-account.json');

async function indexUrls(urls) {
    if (!fs.existsSync(KEY_FILE)) {
        console.error('❌ Error: service-account.json not found in project root.');
        process.exit(1);
    }

    const auth = new google.auth.GoogleAuth({
        keyFile: KEY_FILE,
        scopes: ['https://www.googleapis.com/auth/indexing'],
    });

    const client = await auth.getClient();
    const indexing = google.indexing({
        version: 'v3',
        auth: client,
    });

    console.log(`🚀 Starting Fast Indexing for ${urls.length} URLs...`);

    for (const url of urls) {
        try {
            const res = await indexing.urlNotifications.publish({
                requestBody: {
                    url: url,
                    type: 'URL_UPDATED',
                },
            });
            console.log(`✅ Indexed: ${url}`);
        } catch (error) {
            console.error(`❌ Failed to index ${url}:`);
            console.error(`   Status Code: ${error.code}`);
            console.error(`   Message: ${error.message}`);
            if (error.response && error.response.data) {
                console.error(`   Details: ${JSON.stringify(error.response.data.error)}`);
            }
        }
    }
}

// Automate URL extraction from the LIVE sitemap
async function getLatestUrls() {
    console.log('📡 Fetching latest URLs from https://nevy.in/sitemap.xml...');
    try {
        const response = await fetch('https://nevy.in/sitemap.xml');
        const xml = await response.text();

        // Simple regex to extract all <loc> content
        const locs = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);

        console.log(`✅ Found ${locs.length} URLs in sitemap.`);

        // Google Indexing API Limit: 200 per day. 
        // We capture the most important ones or just a healthy variety.
        return locs.slice(0, 100);
    } catch (error) {
        console.error('❌ Failed to fetch live sitemap. Using defaults.');
        return [
            'https://nevy.in/',
            'https://nevy.in/blog',
            'https://nevy.in/tools/currency-converter',
            'https://nevy.in/tools/crypto-tracker'
        ];
    }
}

(async () => {
    const urls = await getLatestUrls();
    await indexUrls(urls);
})();
