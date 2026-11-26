import { chromium } from "npm:playwright";

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1024, height: 900 } });
  await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);

  const overflowElements = await page.evaluate(() => {
    const docWidth = document.documentElement.clientWidth;
    const elements = document.querySelectorAll("*");
    const culprits: { tag: string; id: string; className: string; right: number; width: number }[] = [];

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.right > docWidth + 1) {
        culprits.push({
          tag: el.tagName,
          id: el.id,
          className: el.className?.toString().slice(0, 100) || "",
          right: Math.round(rect.right),
          width: Math.round(rect.width),
        });
      }
    });

    return culprits;
  });

  console.log("Elementos que desbordan a 1024px:", overflowElements);
  await browser.close();
}

main().catch(console.error);
