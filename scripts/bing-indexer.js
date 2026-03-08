const axios = require('axios');
const fs = require('fs');
const path = require('path');

// IndexNow Configuration (Bing, Yandex, etc.)
const HOST = 'nevy.in';
const KEY = '8e5d2f4a1b9c6e3d2f4a1b9c6e3d2f4a'; // Generated UUID-like key
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

async function runBingIndexer() {
    console.log('🚀 Initializing IndexNow for Bing/Yandex...');

    // 1. Create the verification key file if it doesn't exist in public/
    const publicDir = path.join(__dirname, '../public');
    const keyFilePath = path.join(publicDir, `${KEY}.txt`);

    if (!fs.existsSync(keyFilePath)) {
        console.log('📄 Creating IndexNow verification key...');
        fs.writeFileSync(keyFilePath, KEY);
    }

    // 2. Load URLs from the generated sitemap logic or just hit the main tools
    // In a real scenario, we'd fetch the sitemap.xml, but for this sprint:
    const urls = [
        `https://${HOST}/`,
        `https://${HOST}/tools/currency-converter`,
        `https://${HOST}/tools/crypto-tracker`,
        `https://${HOST}/tools/image-optimizer`,
        `https://${HOST}/tools/loan-calculator`,
        `https://${HOST}/tools/word-counter`,
        `https://${HOST}/tools/meta-generator`,
        `https://${HOST}/blog`,
        `https://${HOST}/about`,
        `https://${HOST}/contact`,
        `https://${HOST}/privacy`,
        `https://${HOST}/terms`
    ];

    console.log(`🔗 Pinging ${urls.length} core URLs to IndexNow...`);

    try {
        const response = await axios.post('https://www.bing.com/indexnow', {
            host: HOST,
            key: KEY,
            keyLocation: KEY_LOCATION,
            urlList: urls
        });

        if (response.status === 200) {
            console.log('✅ Successfully submitted to Bing IndexNow!');
        } else {
            console.log(`⚠️ Bing responded with status: ${response.status}`);
        }
    } catch (error) {
        console.error('❌ IndexNow Submission Failed:', error.message);
        console.log('Note: This might fail in local environment if Bing cannot verify the key on a live nevy.in domain.');
    }
}

runBingIndexer();
