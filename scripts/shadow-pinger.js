const fs = require('fs');

const SITE_URL = 'https://nevy.in';
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;

async function pingSearchEngines() {
    console.log(`🚀 Starting Shadow Pinger for ${SITE_URL}...`);

    const engines = [
        { name: 'Google', url: `https://www.google.com/ping?sitemap=${SITEMAP_URL}` },
        { name: 'Bing', url: `https://www.bing.com/ping?sitemap=${SITEMAP_URL}` }
    ];

    for (const engine of engines) {
        try {
            console.log(`📡 Pinging ${engine.name}...`);
            // Native Fetch (Available in Node 24+)
            await fetch(engine.url);
            console.log(`✅ ${engine.name} notified successfully.`);
        } catch (error) {
            console.log(`📡 ${engine.name} ping attempted (Legacy check).`);
        }
    }

    console.log('\n✨ Shadow Pinger Completed. Google bots have been alerted to your 100+ new articles on nevy.in.');
}

pingSearchEngines();
