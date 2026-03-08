const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const DATA_DIR = path.join(process.cwd(), 'automation_output', 'pinterest_session');
const PINS_FILE = path.join(process.cwd(), 'automation_output', 'pinterest_pins.json');

function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

async function clearAndType(page, selector, text) {
    await page.waitForSelector(selector, { timeout: 10000 });
    await page.click(selector);
    await delay(300);
    // Select all existing text and delete it
    await page.keyboard.down('Control');
    await page.keyboard.press('a');
    await page.keyboard.up('Control');
    await page.keyboard.press('Backspace');
    await delay(200);
    // Type character by character to trigger React state updates
    await page.keyboard.type(text, { delay: 30 });
    await delay(500);
}

async function runPinner() {
    console.log('🤖 Pinterest Bot v3.0 (Board Creation + Keyboard Typing)');

    if (!fs.existsSync(PINS_FILE)) {
        console.error('❌ Pins file not found.');
        return;
    }

    const pins = JSON.parse(fs.readFileSync(PINS_FILE, 'utf8'));

    const browser = await puppeteer.launch({
        headless: false,
        userDataDir: DATA_DIR,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-blink-features=AutomationControlled']
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900 });

    console.log('🌐 Checking Pinterest Session...');
    await page.goto('https://www.pinterest.com/pin-builder/', { waitUntil: 'networkidle2', timeout: 60000 });
    await delay(3000);

    // Login check
    if (page.url().includes('login')) {
        console.log('⚠️ LOGIN REQUIRED! Please log in now...');
        try {
            await page.waitForFunction(() => !window.location.href.includes('login'), { timeout: 300000 });
            console.log('✅ Login detected!');
            await page.goto('https://www.pinterest.com/pin-builder/', { waitUntil: 'networkidle2', timeout: 60000 });
            await delay(3000);
        } catch (e) {
            console.error('❌ Login timeout.');
            await browser.close();
            return;
        }
    }

    let publishedCount = 0;
    const BOARD_NAME = 'Finance Tools';

    for (let i = 0; i < pins.length; i++) {
        const pin = pins[i];
        try {
            console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
            console.log(`📌 [${i + 1}/${pins.length}] ${pin.title}`);
            console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);

            // Fresh pin builder page
            await page.goto('https://www.pinterest.com/pin-builder/', { waitUntil: 'networkidle2', timeout: 60000 });
            await delay(4000);

            // === STEP 1: Upload Image ===
            console.log('  📷 Step 1: Uploading image...');
            let imagePath = '';
            if (pin.link.includes('currency')) imagePath = path.join(process.cwd(), 'public', 'social', 'currency_pin.png');
            else if (pin.link.includes('crypto')) imagePath = path.join(process.cwd(), 'public', 'social', 'crypto_pin.png');
            else if (pin.link.includes('loan')) imagePath = path.join(process.cwd(), 'public', 'social', 'loan_pin.png');
            else if (pin.link.includes('word')) imagePath = path.join(process.cwd(), 'public', 'social', 'word_pin.png');
            else if (pin.link.includes('meta')) imagePath = path.join(process.cwd(), 'public', 'social', 'meta_pin.png');

            if (!imagePath || !fs.existsSync(imagePath)) {
                console.error(`  ❌ SKIP: Image not found: ${imagePath}`);
                continue;
            }

            const fileInput = await page.$('input[type="file"]');
            if (!fileInput) { console.error('  ❌ SKIP: File input missing'); continue; }
            await fileInput.uploadFile(imagePath);
            console.log('  ✅ Image uploaded');
            await delay(5000);

            // === STEP 2: Type Title (Keyboard) ===
            console.log('  📝 Step 2: Typing title...');
            try {
                await clearAndType(page, 'textarea[placeholder="Add your title"]', pin.title);
                console.log('  ✅ Title typed');
            } catch (e) {
                console.error(`  ❌ Title failed: ${e.message}`);
            }

            // === STEP 3: Type Description (Click + Keyboard) ===
            console.log('  📝 Step 3: Typing description...');
            try {
                const descSelector = 'div[aria-label="Tell everyone what your Pin is about"]';
                await page.waitForSelector(descSelector, { timeout: 10000 });
                await page.click(descSelector);
                await delay(300);
                await page.keyboard.type(pin.description, { delay: 20 });
                console.log('  ✅ Description typed');
            } catch (e) {
                console.error(`  ❌ Description failed: ${e.message}`);
            }

            // === STEP 4: Type Link (Keyboard) ===
            console.log('  🔗 Step 4: Typing link...');
            try {
                await clearAndType(page, 'textarea[placeholder="Add a destination link"]', pin.link);
                console.log('  ✅ Link typed');
            } catch (e) {
                console.error(`  ❌ Link failed: ${e.message}`);
            }

            // === STEP 5: Select/Create Board (CRITICAL!) ===
            console.log('  📋 Step 5: Selecting board...');
            try {
                // The "Select" dropdown is a button next to the red "Publish" button at top-right
                // Click it by finding the element with exact text "Select"
                const selectClicked = await page.evaluate(() => {
                    const allElements = Array.from(document.querySelectorAll('button, div[role="button"]'));
                    for (const el of allElements) {
                        if (el.innerText.trim() === 'Select') {
                            el.click();
                            return true;
                        }
                    }
                    return false;
                });

                if (!selectClicked) {
                    // Fallback: click by coordinate area (top right, near Publish)
                    await page.mouse.click(850, 184);
                }

                console.log('  ✅ Board dropdown clicked');
                await delay(2000);

                // Take screenshot to see dropdown state
                await page.screenshot({ path: path.join(process.cwd(), 'automation_output', `v3_board_dropdown_${i}.png`) });

                // Check if "Create board" is the only option (no boards exist)
                const createBoardVisible = await page.evaluate(() => {
                    const allText = document.body.innerText;
                    return allText.includes('Create board');
                });

                if (createBoardVisible) {
                    console.log('  🆕 Clicking "Create board"...');

                    // Click "Create board" text/button
                    await page.evaluate(() => {
                        const allElements = Array.from(document.querySelectorAll('*'));
                        for (const el of allElements) {
                            if (el.childElementCount === 0 && el.innerText && el.innerText.trim() === 'Create board') {
                                el.click();
                                return;
                            }
                        }
                        // Fallback: click parent element
                        for (const el of allElements) {
                            if (el.innerText && el.innerText.trim() === 'Create board' && el.offsetParent !== null) {
                                el.click();
                                return;
                            }
                        }
                    });
                    await delay(2000);

                    // Take screenshot of create board dialog
                    await page.screenshot({ path: path.join(process.cwd(), 'automation_output', `v3_create_board_${i}.png`) });

                    // Type the board name using keyboard by clicking the exact coordinates of the input box
                    // The input box is in the center of the Create Board modal
                    console.log('  🆕 Typing board name...');

                    // Native React Bypass: Inject value directly using JS setter
                    console.log('  🆕 Injecting board name directly into React state...');

                    const injected = await page.evaluate((boardName) => {
                        const input = document.querySelector('input[placeholder*="Places to go"]') ||
                            document.querySelector('input[type="text"]') ||
                            document.querySelector('input');

                        if (!input) return false;

                        // React 16+ intercepts value setters. We must use the native descriptor
                        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                        nativeInputValueSetter.call(input, boardName);

                        // Dispatch a real input event to trigger React's onChange
                        const ev = new Event('input', { bubbles: true });
                        input.dispatchEvent(ev);

                        return true;
                    }, BOARD_NAME);

                    if (injected) {
                        console.log(`  ✅ Board name "${BOARD_NAME}" injected!`);
                    } else {
                        console.error('  ❌ Failed to find input for injection');
                    }
                    await delay(1000);

                    // Press ENTER to submit the modal (most reliable way)
                    console.log('  ⏎ Pressing Enter to create board...');
                    await page.keyboard.press('Enter');

                    // Also try clicking the actual Create button just in case Enter is blocked
                    await page.evaluate(() => {
                        const buttons = Array.from(document.querySelectorAll('button'));
                        const createBtn = buttons.find(b => b.innerText.trim() === 'Create' && !b.disabled);
                        if (createBtn) createBtn.click();
                    });

                    await delay(3000);
                    console.log('  ✅ Board creation submitted via Enter!');

                } else {
                    // Board exists, select first one
                    console.log('  📋 Selecting existing board...');
                    await page.evaluate(() => {
                        const options = Array.from(document.querySelectorAll('div[role="option"], li, div[data-test-id]'));
                        const board = options.find(o => o.innerText && o.innerText.length > 0 && !o.innerText.includes('Create'));
                        if (board) board.click();
                    });
                    await delay(1000);
                    console.log('  ✅ Board selected');
                }
            } catch (e) {
                console.error(`  ⚠️ Board error: ${e.message}`);
            }

            await delay(2000);

            // Take pre-publish screenshot
            await page.screenshot({ path: path.join(process.cwd(), 'automation_output', `v3_ready_${i}.png`) });

            // === STEP 6: Click Publish ===
            console.log('  🚀 Step 6: Publishing...');
            await page.evaluate(() => {
                const buttons = Array.from(document.querySelectorAll('button, div[role="button"]'));
                const pub = buttons.find(b => b.innerText.trim() === 'Publish');
                if (pub) pub.click();
            });

            await delay(5000);

            // Take post-publish screenshot
            await page.screenshot({ path: path.join(process.cwd(), 'automation_output', `v3_after_${i}.png`) });

            // Verify: check if we're redirected away from pin-builder (successful publish)
            const currentUrl = page.url();
            if (!currentUrl.includes('pin-builder')) {
                console.log(`  ✅✅ VERIFIED PUBLISHED: ${pin.title}`);
                console.log(`  📍 Redirected to: ${currentUrl}`);
                publishedCount++;
            } else {
                console.log(`  ⚠️ May not have published (still on pin-builder)`);
                // Check for any error messages
                const error = await page.evaluate(() => {
                    const alerts = Array.from(document.querySelectorAll('div[role="alert"], .error'));
                    return alerts.map(a => a.innerText).join(', ');
                });
                if (error) console.log(`  ❌ Error on page: ${error}`);
            }

            await delay(5000);

        } catch (error) {
            console.error(`  ❌ Fatal Error: ${error.message}`);
            await page.screenshot({ path: path.join(process.cwd(), 'automation_output', `v3_error_${i}.png`) });
        }
    }

    console.log(`\n🎉 FINAL RESULT: ${publishedCount}/${pins.length} pins VERIFIED published.`);
    await delay(30000);
    await browser.close();
}

runPinner().catch(console.error);
