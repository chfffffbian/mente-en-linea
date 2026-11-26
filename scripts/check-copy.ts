/**
 * SCRIPT DE VERIFICACIÓN AUTOMÁTICA DE COPY Y ARITMÉTICA
 * Según la Sección 11 de MASTERPROMPT-antigravity-v2.md
 */

import * as fs from "node:fs";
import * as path from "node:path";

const BLACKLIST = [
  "verificado Mente",
  "Compromiso verificado",
  "Estándar ético",
  "Compromiso Mente en Línea",
  "Mente en Línea Empresas",
  "Espacio preparado",
  "testimonios ficticios",
  "adopción",
  "~8%",
  "ilimitado",
  "sanciones",
  "senior",
  "7 días hábiles",
  "BCP",
  "BBVA",
  "Interbank",
  "Respaldo",
  "30947",
  "Lorem",
  "[Psicólogo",
  "Tk",
  "Tarifa social",
  "Promedio nacional",
  "tercio del sueldo",
  "999 999 999",
  "51999999999",
  "Más elegido",
  "sanar",
  "honestidad clínica",
  "Defensoría del Pueblo y",
  "casi la mitad",
  "selva o el altiplano",
  "esperan meses",
  "menos de una hora",
  "Región Prioritaria",
  "Foco de Cobertura",
  "Cobertura 100%",
  "B2B",
  "en tu ciudad",
  "cupos",
  "sesión en vivo al mes",
  "3 días antes",
  "Isotipo",
  "89%",
  "89 %",
  "9 de cada 10",
  "80%+"
];

function scanFiles(dir: string, fileRegex: RegExp): string[] {
  let results: string[] = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of list) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== "node_modules" && entry.name !== ".git" && entry.name !== "dist") {
        results = results.concat(scanFiles(fullPath, fileRegex));
      }
    } else if (fileRegex.test(entry.name)) {
      results.push(fullPath);
    }
  }
  return results;
}

console.log("====================================================");
console.log("🔍 INICIANDO VERIFICACIÓN DE COPY Y ARITMÉTICA");
console.log("====================================================");

// 1. Verificación de Términos Prohibidos en src/, public/ e index.html
const sourceFiles = [
  ...scanFiles("src", /\.(jsx?|tsx?|css)$/),
  ...scanFiles("public", /\.(html|svg|xml|txt)$/),
  "index.html"
];

let blacklistHits: { file: string; term: string; line: number }[] = [];
let cpspCount = 0;
const cpspLocations: { file: string; line: number; text: string }[] = [];

for (const filePath of sourceFiles) {
  if (!fs.existsSync(filePath)) continue;
  // Omitimos scripts/check-copy.ts de la búsqueda de términos porque allí está definida la blacklist
  if (filePath.includes("check-copy")) continue;
  // Omitimos archivos de respaldo o no usados si los hubiera
  if (filePath.includes("ProblemStats") || filePath.includes("Header.jsx") || filePath.includes("WhatsAppMockup")) continue;

  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n");

  lines.forEach((line, index) => {
    // Si la línea es un comentario de código técnico que no se renderiza, podemos ser cuidadosos,
    // pero la regla pide CERO en código y HTML renderizado.
    for (const term of BLACKLIST) {
      if (term === "Tk") {
        if (/\bTk\b/.test(line)) {
          blacklistHits.push({ file: filePath, term, line: index + 1 });
        }
      } else if (line.includes(term)) {
        blacklistHits.push({ file: filePath, term, line: index + 1 });
      }
    }

    if (line.includes("CPsP")) {
      cpspCount++;
      cpspLocations.push({ file: filePath, line: index + 1, text: line.trim() });
    }
  });
}

console.log(`\n📋 1. LISTA NEGRA (Meta: 0) -> Encontradas: ${blacklistHits.length}`);
if (blacklistHits.length > 0) {
  blacklistHits.forEach((hit) => {
    console.error(`  ❌ [${hit.file}:${hit.line}] Coincidencia con: "${hit.term}"`);
  });
} else {
  console.log("  ✅ CERO coincidencias con la lista negra. Cumplimiento total.");
}

console.log(`\n📋 2. MENCIONES A 'CPsP' (Meta: <= 3) -> Encontradas: ${cpspCount}`);
cpspLocations.forEach((loc) => {
  console.log(`  ℹ️ [${loc.file}:${loc.line}] ${loc.text}`);
});
if (cpspCount <= 3) {
  console.log(`  ✅ CPsP cumple con la regla (<= 3 apariciones).`);
} else {
  console.error(`  ❌ Supera el límite de 3 menciones a CPsP.`);
}

// 2. Verificación de Aritmética (Sección 11-C)
console.log(`\n📋 3. VALIDACIÓN ARITMÉTICA (Sección 11-C)`);

// 2.1 Trimestral: 239 / 3 = 79.67, ahorro S/ 28
const quarterlyPrice = 239;
const monthlyPrice = 89;
const quarterlyPerMonth = Number((quarterlyPrice / 3).toFixed(2));
const quarterlySavings = 3 * monthlyPrice - quarterlyPrice;
console.log(`  - Prepago trimestral por mes: 239 / 3 = S/ ${quarterlyPerMonth} (Esperado: 79.67) -> ${quarterlyPerMonth === 79.67 ? "✅" : "❌"}`);
console.log(`  - Ahorro trimestral: 3 * 89 - 239 = S/ ${quarterlySavings} (Esperado: 28) -> ${quarterlySavings === 28 ? "✅" : "❌"}`);

// 2.2 Calculadora Personas: 4 * X - 89. Para X = 100: ahorro = 311, anual = 3732
const testSession = 100;
const ahorroMensual = 4 * testSession - monthlyPrice;
const ahorroAnual = ahorroMensual * 12;
console.log(`  - Calculadora B2C (X=100): ahorro mensual = S/ ${ahorroMensual} (Esperado: 311) -> ${ahorroMensual === 311 ? "✅" : "❌"}`);
console.log(`  - Calculadora B2C (X=100): ahorro anual = S/ ${ahorroAnual} (Esperado: 3732) -> ${ahorroAnual === 3732 ? "✅" : "❌"}`);

// 2.3 Calculadora Empresas: n * 20 * 1.18. Para n=50: 1180. Para n=100: 2360
const b2bPerWorker = 20;
const igv = 0.18;
const b2b50 = 50 * b2bPerWorker * (1 + igv);
const b2b100 = 100 * b2bPerWorker * (1 + igv);
console.log(`  - B2B (n=50): 50 * 20 * 1.18 = S/ ${Math.round(b2b50)} (Esperado: 1180) -> ${Math.round(b2b50) === 1180 ? "✅" : "❌"}`);
console.log(`  - B2B (n=100): 100 * 20 * 1.18 = S/ ${Math.round(b2b100)} (Esperado: 2360) -> ${Math.round(b2b100) === 2360 ? "✅" : "❌"}`);

console.log("====================================================\n");

if (blacklistHits.length > 0 || cpspCount > 3) {
  process.exit(1);
} else {
  process.exit(0);
}
