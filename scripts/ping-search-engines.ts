// run this with: npx tsx scripts/ping-search-engines.ts
// Or: node --loader ts-node/esm scripts/ping-search-engines.ts

const SITEMAP_URL = 'https://nevy.in/sitemap.xml';

async function pingSearchEngines() {
    console.log(`🚀 Pinging Search Engines with sitemap: ${SITEMAP_URL}`);

    const engines = [
        { name: 'Google', url: `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}` },
        { name: 'Bing', url: `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}` }
    ];

    for (const engine of engines) {
        try {
            console.log(`\nPinging ${engine.name}...`);
            const response = await fetch(engine.url);

            if (response.ok) {
                console.log(`✅ Successfully pinged ${engine.name}! (Status: ${response.status})`);
            } else {
                console.error(`❌ Failed to ping ${engine.name}. Status: ${response.status}`);
            }
        } catch (error: any) {
            console.error(`❌ Error pinging ${engine.name}:`, error.message);
        }
    }

    console.log('\n=========================================');
    console.log('Done! Note: Google/Bing process these requests asynchronously.');
    console.log('It still takes 24-72 hours minimum for them to actually crawl and index the 197+ pages.');
    console.log('For faster results, use Google Search Console -> URL Inspection tool manually.');
}

pingSearchEngines();
