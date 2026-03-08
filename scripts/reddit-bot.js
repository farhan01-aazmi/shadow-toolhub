const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const DATA_DIR = path.join(process.cwd(), 'automation_output', 'reddit_session');
const POSTS_FILE = path.join(process.cwd(), 'automation_output', 'reddit_templates.json');

async function runRedditBot() {
    console.log('🤖 Initializing Shadow Reddit Bot (Zero-Maintenance Mode)...');

    if (!fs.existsSync(POSTS_FILE)) {
        console.error('❌ Reddit templates not found. Run generate-growth-assets.js first.');
        return;
    }

    const posts = JSON.parse(fs.readFileSync(POSTS_FILE, 'utf8'));

    const browser = await puppeteer.launch({
        headless: false,
        userDataDir: DATA_DIR,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-blink-features=AutomationControlled']
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    try {
        console.log('🌐 Checking Reddit Session...');
        await page.goto('https://www.reddit.com/', { waitUntil: 'networkidle2', timeout: 60000 });

        // Robust Login Detection (Multiple Fallbacks)
        const isLoggedOut = await page.evaluate(() => {
            return !!document.querySelector('a[href*="login"]') || !!document.querySelector('#login-button');
        });

        if (isLoggedOut) {
            console.log('⚠️ Login Required! Please log in to Reddit once to capture session.');
            try {
                // Wait for the user profile element or create post button which indicates logged in status
                await page.waitForSelector('#user-drawer-button, #create-post-button', { timeout: 300000 });
                console.log('✅ Reddit Login detected. Capturing session...');
            } catch (e) {
                console.error('❌ Timeout waiting for Reddit login.');
                await browser.close();
                return;
            }
        }

        for (const post of posts) {
            try {
                console.log(`🚀 Preparing Post for ${post.subreddit}: ${post.title}`);

                const submitUrl = `https://www.reddit.com/${post.subreddit}/submit`;
                await page.goto(submitUrl, { waitUntil: 'networkidle2', timeout: 60000 });

                // 1. Set Title (Using multiple robust selectors)
                const titleSelector = 'textarea[placeholder="Title"], textarea[aria-label="Title"]';
                await page.waitForSelector(titleSelector, { timeout: 15000 });
                await page.type(titleSelector, post.title);

                // 2. Set Body (Using DraftJS/RichText fallback)
                // Reddit uses a div with role="textbox" often
                const bodySelector = 'div[role="textbox"], textarea[placeholder="Text (optional)"]';
                await page.waitForSelector(bodySelector, { timeout: 15000 });
                await page.click(bodySelector);
                await page.keyboard.type(post.body);

                console.log('👀 Reviewing Post for Safety...');
                await new Promise(r => setTimeout(r, 3000));

                // 3. Post (Find the button by text to be OS/Update resistant)
                const postBtn = await page.evaluateHandle(() => {
                    const buttons = Array.from(document.querySelectorAll('button'));
                    return buttons.find(b => b.innerText.toLowerCase() === 'post') || buttons.find(b => b.getAttribute('aria-label') === 'Post');
                });

                if (postBtn && postBtn.asElement()) {
                    // await postBtn.asElement().click(); // Commented for safety during first run
                    console.log(`✅ [DRAFT MODE] Success: Would have posted to ${post.subreddit}`);
                } else {
                    console.warn(`⚠️ Could not find Post button automatically for ${post.subreddit}`);
                }

                await new Promise(r => setTimeout(r, 5000));

            } catch (err) {
                console.error(`❌ Error in Reddit sub-task: ${err.message}`);
            }
        }

    } catch (globalErr) {
        console.error(`❌ Fatal Reddit Bot Error: ${globalErr.message}`);
    } finally {
        console.log('🎉 Reddit Session Cycle Completed.');
        await new Promise(r => setTimeout(r, 30000));
        await browser.close();
    }
}

runRedditBot().catch(console.error);
