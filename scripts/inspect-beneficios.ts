import { chromium } from "npm:playwright";

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);

  // Verificamos elementos entre #chat-demo y #beneficios
  const info = await page.evaluate(() => {
    const chatDemo = document.getElementById("chat-demo");
    const beneficios = document.getElementById("beneficios");

    const getBg = (el: Element) => window.getComputedStyle(el).backgroundColor;
    const getRect = (el: Element) => el.getBoundingClientRect();

    return {
      chatDemoBg: chatDemo ? getBg(chatDemo) : null,
      chatDemoRect: chatDemo ? getRect(chatDemo) : null,
      beneficiosBg: beneficios ? getBg(beneficios) : null,
      beneficiosRect: beneficios ? getRect(beneficios) : null,
      parentBg: chatDemo?.parentElement ? getBg(chatDemo.parentElement) : null,
    };
  });

  console.log("Información de fondo:", info);

  // Capturamos el área de transición entre chat-demo y beneficios
  const chatDemoEl = await page.$("#chat-demo");
  const beneficiosEl = await page.$("#beneficios");
  if (chatDemoEl && beneficiosEl) {
    await page.evaluate(() => {
      document.getElementById("chat-demo")?.scrollIntoView();
    });
    await page.screenshot({ path: "test-chat-demo-beneficios.png" });
    console.log("Screenshot guardado en test-chat-demo-beneficios.png");
  }

  await browser.close();
}

main().catch(console.error);
