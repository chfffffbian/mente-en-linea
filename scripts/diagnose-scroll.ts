import { chromium } from "npm:playwright";

async function main() {
  console.log("=== INICIANDO DIAGNÓSTICO DE SCROLL ===");
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.addInitScript(() => {
    (window as any).__scrollEvents = [];
    const record = (type: string, target: any, args: any) => {
      const err = new Error();
      const stack = err.stack || "";
      (window as any).__scrollEvents.push({
        time: Date.now(),
        type,
        target: target ? target.tagName || target.id || String(target) : "window",
        args: JSON.stringify(args),
        stack,
      });
      console.log(`[SCROLL_INTERCEPT] ${type} on ${target} at ${new Date().toISOString()}`);
    };

    const origScrollTo = window.scrollTo;
    window.scrollTo = function (...args: any[]) {
      record("window.scrollTo", "window", args);
      return origScrollTo.apply(this, args as any);
    };

    const origScrollBy = window.scrollBy;
    window.scrollBy = function (...args: any[]) {
      record("window.scrollBy", "window", args);
      return origScrollBy.apply(this, args as any);
    };

    const origSIV = Element.prototype.scrollIntoView;
    Element.prototype.scrollIntoView = function (...args: any[]) {
      record("scrollIntoView", this, args);
      return origSIV.apply(this, args as any);
    };

    const origFocus = HTMLElement.prototype.focus;
    HTMLElement.prototype.focus = function (...args: any[]) {
      record("focus", this, args);
      return origFocus.apply(this, args as any);
    };
  });

  page.on("console", (msg) => {
    console.log(`[CONSOLE ${msg.type()}]: ${msg.text()}`);
  });

  await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });
  await page.waitForTimeout(3000);

  const scrollEvents = await page.evaluate(() => (window as any).__scrollEvents);
  const scrollY = await page.evaluate(() => window.scrollY);

  console.log("\n=========================================");
  console.log("EVENTOS DE SCROLL / FOCUS REGISTRADOS:");
  console.log("=========================================");
  for (const ev of scrollEvents) {
    console.log(`\nTipo: ${ev.type} | Target: ${ev.target} | Args: ${ev.args}`);
    console.log(`Stack trace:\n${ev.stack}`);
  }
  console.log(`\nFinal window.scrollY: ${scrollY}`);

  await browser.close();
}

main().catch(console.error);
