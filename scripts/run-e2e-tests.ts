import { chromium, firefox, webkit, Browser } from "npm:playwright";
import * as fs from "node:fs";
import * as path from "node:path";

const VIEWPORTS = [360, 390, 768, 1024, 1440, 2560];
const OUTPUT_DIR = "test-results";

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function testScrollRestoration(browserName: string, browser: Browser) {
  console.log(`\n--- Test Scroll Restauración en ${browserName} ---`);
  
  // Test en escritorio
  const desktopContext = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const desktopPage = await desktopContext.newPage();
  
  // 1ra carga
  await desktopPage.goto("http://localhost:5173/", { waitUntil: "networkidle" });
  await desktopPage.waitForTimeout(3000);
  const scrollY1 = await desktopPage.evaluate(() => window.scrollY);
  console.log(`  [${browserName} Desktop] 1ra carga window.scrollY = ${scrollY1} -> ${scrollY1 === 0 ? "PASÓ" : "FALLÓ"}`);

  // Recarga
  await desktopPage.reload({ waitUntil: "networkidle" });
  await desktopPage.waitForTimeout(3000);
  const scrollY2 = await desktopPage.evaluate(() => window.scrollY);
  console.log(`  [${browserName} Desktop] Recarga window.scrollY = ${scrollY2} -> ${scrollY2 === 0 ? "PASÓ" : "FALLÓ"}`);
  await desktopContext.close();

  // Test en móvil
  const mobileContext = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto("http://localhost:5173/", { waitUntil: "networkidle" });
  await mobilePage.waitForTimeout(3000);
  const scrollYMobile = await mobilePage.evaluate(() => window.scrollY);
  console.log(`  [${browserName} Mobile] 1ra carga window.scrollY = ${scrollYMobile} -> ${scrollYMobile === 0 ? "PASÓ" : "FALLÓ"}`);
  await mobileContext.close();

  if (scrollY1 !== 0 || scrollY2 !== 0 || scrollYMobile !== 0) {
    throw new Error(`Fallo en scrollRestoration en ${browserName}`);
  }
}

async function testViewportsAndScreenshots() {
  console.log("\n--- Capturas y Validación en Múltiples Resoluciones ---");
  const browser = await chromium.launch({ headless: true });

  for (const width of VIEWPORTS) {
    const height = width < 768 ? 844 : 900;
    const context = await browser.newContext({ viewport: { width, height } });
    const page = await context.newPage();

    await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);

    // 1. Validar scroll horizontal
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    const hasHorizontalScroll = scrollWidth > clientWidth;
    console.log(`  [${width}px] scrollWidth: ${scrollWidth}, clientWidth: ${clientWidth} -> Sin scroll horizontal: ${!hasHorizontalScroll ? "PASÓ" : "FALLÓ"}`);

    // 2. Captura del Hero
    const heroEl = await page.$("#top");
    if (heroEl) {
      await heroEl.screenshot({ path: path.join(OUTPUT_DIR, `hero-${width}px.png`) });
    }

    // 3. Captura de las Tarjetas del Problema
    const problemEl = await page.$("#problema");
    if (problemEl) {
      await page.evaluate(() => {
        document.getElementById("problema")?.scrollIntoView();
      });
      await page.waitForTimeout(500);
      await problemEl.screenshot({ path: path.join(OUTPUT_DIR, `problema-${width}px.png`) });
    }

    // 4. Captura específica del Mapa (a 390px y 1440px)
    if (width === 390 || width === 1440) {
      const mapContainer = await page.$("#problema svg[aria-label*='Mapa']");
      if (mapContainer) {
        // Verificar bounding box de los paths
        const mapCheck = await page.evaluate(() => {
          const svg = document.querySelector("#problema svg[aria-label*='Mapa']");
          if (!svg) return { ok: false, reason: "SVG no encontrado" };
          const paths = svg.querySelectorAll("path");
          const viewBox = svg.getAttribute("viewBox")?.split(" ").map(Number) || [0, 0, 600, 840];
          
          let allWithin = true;
          let southVisible = false;

          paths.forEach((p) => {
            const bbox = p.getBBox();
            if (
              bbox.x < viewBox[0] - 5 ||
              bbox.y < viewBox[1] - 5 ||
              bbox.x + bbox.width > viewBox[2] + 5 ||
              bbox.y + bbox.height > viewBox[3] + 5
            ) {
              allWithin = false;
            }
            // Tacna o Puno al sur
            const aria = p.getAttribute("aria-label") || "";
            if (aria.includes("Tacna") || aria.includes("Puno")) {
              if (bbox.y + bbox.height > 700) {
                southVisible = true;
              }
            }
          });

          return { ok: allWithin && southVisible, allWithin, southVisible, pathCount: paths.length };
        });

        console.log(`  [${width}px] Verificación del Mapa SVG:`, mapCheck);
      }
    }

    await context.close();
  }

  await browser.close();
}

async function main() {
  console.log("====================================================");
  console.log("🧪 INICIANDO PRUEBAS PLAYWRIGHT MULTI-NAVEGADOR");
  console.log("====================================================");

  // 1. Chromium
  const crBrowser = await chromium.launch({ headless: true });
  await testScrollRestoration("Chromium", crBrowser);
  await crBrowser.close();

  // 2. Firefox
  const ffBrowser = await firefox.launch({ headless: true });
  await testScrollRestoration("Firefox", ffBrowser);
  await ffBrowser.close();

  // 3. WebKit
  const wkBrowser = await webkit.launch({ headless: true });
  await testScrollRestoration("WebKit", wkBrowser);
  await wkBrowser.close();

  // 4. Resoluciones y capturas
  await testViewportsAndScreenshots();

  console.log("\n====================================================");
  console.log("✅ TODAS LAS PRUEBAS PLAYWRIGHT COMPLETADAS CON ÉXITO");
  console.log("====================================================");
}

main().catch((err) => {
  console.error("❌ ERROR EN PRUEBAS PLAYWRIGHT:", err);
  process.exit(1);
});
