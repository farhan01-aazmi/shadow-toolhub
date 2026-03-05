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
        log('📡 Step 1/3: Triggering Shadow Pinger...');
        execSync(`node "${path.join(SCRIPTS_DIR, 'shadow-pinger.js')}"`, { stdio: 'inherit' });

        log('🎨 Step 2/3: Generating Fresh Growth Assets (Reddit/Pinterest)...');
        execSync(`node "${path.join(SCRIPTS_DIR, 'generate-growth-assets.js')}"`, { stdio: 'inherit' });

        log('🤖 Step 3/3: Shadow Social Pre-processing...');
        // Social bot currently logs plans, in future it would handle headless posting
        execSync(`node "${path.join(SCRIPTS_DIR, 'shadow-social-bot.js')}"`, { stdio: 'inherit' });

        log('✅ Cycle completed successfully. All growth engines are operational.');
    } catch (error) {
        log(`❌ Error in autonomous cycle: ${error.message}`);
    }
}

runAutonomousCycle();
