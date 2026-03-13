const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://127.0.0.1:3002', { waitUntil: 'networkidle', timeout: 30000 });
  
  // Wait for hero animations to complete
  await page.waitForTimeout(3000);
  
  // Slowly scroll through the entire page to trigger all scroll-based animations
  const height = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < height; y += 200) {
    await page.evaluate((scrollY) => window.scrollTo({ top: scrollY, behavior: 'instant' }), y);
    await page.waitForTimeout(400);
  }
  
  // Scroll to bottom and wait for final animations
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(2000);
  
  // Scroll back to top
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000);
  
  // Take full page screenshot
  await page.screenshot({ 
    path: 'full-page-screenshot.png', 
    fullPage: true 
  });
  
  console.log('Screenshot saved');
  await browser.close();
})();
