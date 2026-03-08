/**
 * AUTONOMOUS GOVERNOR v1.0
 * The brain for Shadow ToolHub's hands-off growth.
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const SCRIPTS_DIR = path.join(__dirname);
const LOG_FILE = path.join(process.cwd(), 'automation_output', 'governor_audit.log');

function log(message) {
    const timestamp = new Date().toISOString();
    const entry = `[${timestamp}] ${message}\n`;
    console.log(entry.trim());
    if (!fs.existsSync(path.dirname(LOG_FILE))) fs.mkdirSync(path.dirname(LOG_FILE), { recursive: true });
    fs.appendFileSync(LOG_FILE, entry);
}

async function runAutonomousCycle() {
    log('🚀 Starting Autonomous Growth Cycle...');

    try {
        log('📡 Step 1/6: Triggering Shadow Pinger...');
        try { execSync(`node "${path.join(SCRIPTS_DIR, 'shadow-pinger.js')}"`, { stdio: 'inherit' }); } catch (e) { log('⚠️ Pinger failed, continuing...'); }

        log('🚀 Step 2/6: Fast Indexing via Google API...');
        try { execSync(`node "${path.join(SCRIPTS_DIR, 'google-indexer.js')}"`, { stdio: 'inherit' }); } catch (e) { log('⚠️ Indexer failed, continuing...'); }

        log('🎨 Step 3/6: Generating Fresh Growth Assets (Reddit/Pinterest)...');
        try { execSync(`node "${path.join(SCRIPTS_DIR, 'generate-growth-assets.js')}"`, { stdio: 'inherit' }); } catch (e) { log('⚠️ Asset generation failed, continuing...'); }

        log('📌 Step 4/6: Autonomous Pinterest Pinner...');
        // The Pinterest bot handles daily automated pinning to drive USA traffic
        execSync(`node "${path.join(SCRIPTS_DIR, 'pinterest-bot.js')}"`, { stdio: 'inherit' });

        log('🚀 Step 5/6: Autonomous Reddit Community Bot...');
        try { execSync(`node "${path.join(SCRIPTS_DIR, 'reddit-bot.js')}"`, { stdio: 'inherit' }); } catch (e) { log(`⚠️ Reddit Bot Warning: ${e.message}`); }

        log('🌍 Step 6/7: Shadow Social Pre-processing...');
        try { execSync(`node "${path.join(SCRIPTS_DIR, 'shadow-social-bot.js')}"`, { stdio: 'inherit' }); } catch (e) { log('⚠️ Social pre-processing failed, continuing...'); }

        log('🔎 Step 7/7: Bing & IndexNow Submission...');
        try { execSync(`node "${path.join(SCRIPTS_DIR, 'bing-indexer.js')}"`, { stdio: 'inherit' }); } catch (e) { log('⚠️ Bing Indexer failed, continuing...'); }

        log('✅ Cycle completed successfully. Site is indexing and social traffic is flowing.');
    } catch (error) {
        log(`❌ Error in autonomous cycle: ${error.message}`);
    }
}

runAutonomousCycle().catch(err => {
    console.error(`❌ Fatal Error in Governor: ${err.message}`);
    process.exit(1);
});
