const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));

  console.log('Navigating to https://www.nevy.in ...');
  await page.goto('https://www.nevy.in');
  await page.waitForTimeout(5000);
  
  console.log('Navigating to https://www.nevy.in/all-tools/ ...');
  await page.goto('https://www.nevy.in/all-tools/');
  await page.waitForTimeout(5000);

  await browser.close();
})();
