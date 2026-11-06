const puppeteer = require("puppeteer-core");
const fs = require("fs");
const path = require("path");

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const OUTPUT_DIR = path.join(__dirname, "screenshots");

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function run() {
  console.log("Launching Chrome from:", CHROME_PATH);
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
  });

  const page = await browser.newPage();

  // Test 1: Desktop Landing Page (1440x900)
  console.log("Testing Desktop 1440px Landing Page...");
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });
  await page.waitForSelector("header");
  await new Promise((r) => setTimeout(r, 1000));

  await page.screenshot({
    path: path.join(OUTPUT_DIR, "desktop-home-full.png"),
    fullPage: true,
  });
  await page.screenshot({
    path: path.join(OUTPUT_DIR, "desktop-home-hero.png"),
    fullPage: false,
  });
  console.log("✓ Saved desktop-home-full.png & desktop-home-hero.png");

  // Test 2: Mobile Landing Page (375x812)
  console.log("Testing Mobile 375px Landing Page...");
  await page.setViewport({ width: 375, height: 812, deviceScaleFactor: 2, isMobile: true });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 1000));

  await page.screenshot({
    path: path.join(OUTPUT_DIR, "mobile-home-full.png"),
    fullPage: true,
  });
  await page.screenshot({
    path: path.join(OUTPUT_DIR, "mobile-home-hero.png"),
    fullPage: false,
  });
  console.log("✓ Saved mobile-home-full.png & mobile-home-hero.png");

  // Test 3: Tablet (768x1024)
  console.log("Testing Tablet 768px Landing Page...");
  await page.setViewport({ width: 768, height: 1024, deviceScaleFactor: 2 });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 800));
  await page.screenshot({
    path: path.join(OUTPUT_DIR, "tablet-home-full.png"),
    fullPage: true,
  });
  console.log("✓ Saved tablet-home-full.png");

  // Test 4: Login Page
  console.log("Testing Login Page...");
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto("http://localhost:3000/login", { waitUntil: "networkidle0" });
  await page.screenshot({
    path: path.join(OUTPUT_DIR, "desktop-login.png"),
    fullPage: false,
  });

  // Test 5: Signup Page
  console.log("Testing Signup Page...");
  await page.goto("http://localhost:3000/signup", { waitUntil: "networkidle0" });
  await page.screenshot({
    path: path.join(OUTPUT_DIR, "desktop-signup.png"),
    fullPage: true,
  });

  // Test 6: Agent Benefits Page
  console.log("Testing Agent Benefits Page...");
  await page.goto("http://localhost:3000/agent-benefits", { waitUntil: "networkidle0" });
  await page.screenshot({
    path: path.join(OUTPUT_DIR, "desktop-agent-benefits.png"),
    fullPage: true,
  });

  await browser.close();
  console.log("All screenshots captured successfully!");
}

run().catch((err) => {
  console.error("Screenshot error:", err);
  process.exit(1);
});
