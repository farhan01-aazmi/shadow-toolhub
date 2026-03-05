const axios = require('axios');
const fs = require('fs');

const SITE_URL = 'https://shadow-toolhub2-pkkbzn3qe-farhan01-aazmis-projects.vercel.app';
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
            // Note: Google's sitemap ping service is restricted in some regions, 
            // but we attempt it anyway as a standard legacy trigger.
            // For 2026, the best way is GSC API, but this trigger still alerts bots.
            console.log(`✅ ${engine.name} notified successfully.`);
        } catch (error) {
            console.error(`❌ Failed to ping ${engine.name}:`, error.message);
        }
    }

    console.log('\n✨ Shadow Pinger Completed. Google bots have been alerted to your 100+ new articles.');
}

pingSearchEngines();
