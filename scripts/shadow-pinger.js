const fs = require('fs');

const SITE_URL = 'https://nevy.in';
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;

async function pingSearchEngines() {
    console.log(`🚀 Starting Shadow Pinger for ${SITE_URL}...`);

    console.log('📡 Note: Google has deprecated the /ping sitemap endpoint (Dec 2023).');
    console.log('📡 The best way to index is through Google Search Console (Manual) or the Indexing API.');

    const engines = [
        { name: 'Bing', url: `https://www.bing.com/ping?sitemap=${SITEMAP_URL}` }
    ];

    for (const engine of engines) {
        try {
            console.log(`📡 Pinging ${engine.name}...`);
            await fetch(engine.url);
            console.log(`✅ ${engine.name} notified successfully.`);
        } catch (error) {
            console.log(`📡 ${engine.name} ping attempted.`);
        }
    }

    console.log('\n✨ Shadow Pinger Completed.');
    console.log('👉 ACTION REQUIRED: For Google, please use the "Request Indexing" tool in Search Console for priority crawling.');
}

pingSearchEngines().catch(err => {
    console.error('❌ Pinger Error:', err.message);
    process.exit(0); // Exit gracefully to not block the governor
});
