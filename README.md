# 🌿 Mente en Línea - Landing Page Oficial

Plataforma peruana de orientación y acompañamiento psicológico asincrónico por WhatsApp con psicólogos colegiados (CPsP). Diseñada con un enfoque de salud mental accesible, cálido y sin barreras geográficas para todo el Perú (Lima y regiones).

- 🌐 **Sitio web en producción:** [https://mente-en-linea.vercel.app/](https://mente-en-linea.vercel.app/)
- 📦 **Repositorio GitHub:** [https://github.com/chfffffbian/mente-en-linea](https://github.com/chfffffbian/mente-en-linea)

---

## 🛠️ Stack Tecnológico

- **Framework:** React 18 + Vite + TypeScript / JSX
- **Runtime:** Deno o Node.js 18+
- **Motor de Estilos:** Tailwind CSS 3.4 con variables de diseño personalizadas en `:root`
- **Animaciones & Scrollytelling:** Framer Motion (con aceleración por GPU y soporte a `prefers-reduced-motion`)
- **Iconografía:** Lucide React + SVGs vectoriales optimizados
- **SEO & Datos Estructurados:** JSON-LD (`Organization` y `FAQPage`), Open Graph (1200×630), Twitter Cards, `sitemap.xml` y `robots.txt`
- **Despliegue:** Optimizado para **Vercel**

---

## 🗺️ Cartografía y Geodatos del Mapa del Perú

Los límites departamentales del mapa del Perú provienen de la cartografía oficial del **Instituto Geográfico Nacional (IGN)** y del **Instituto Nacional de Estadística e Informática (INEI)**, compilados bajo licencia abierta **Open Database License (ODbL)** / Open Data Commons en el dataset público `juaneladio/peru-geojson`.

La proyección cartográfica y simplificación geométrica fue generada mediante **d3-geo** (`geoMercator().fitExtent(...)`), asegurando:
- Proporción fiel de aspecto (~0.71 ancho/alto) y coordenadas 100% integradas en un único `viewBox: 0 0 600 840`.
- Inclusión completa del norte (Tumbes/Loreto) y del sur (Tacna, Puno, Madre de Dios).
- Peso optimizado a ~55 KB (muy inferior al límite de 150 KB).

---

## ⚙️ Guía de Configuración y Edición

Toda la configuración del negocio, números de contacto, precios y copys principales se gestionan en dos archivos centrales para evitar dispersión:

### 1. Cambiar el número de WhatsApp, correo y redes (`src/constants.ts`)

En `src/constants.ts` se definen las variables globales de contacto y enlaces legales:

```typescript
// src/constants.ts

// Número oficial para recepción de chats (código de país 51 sin símbolos)
export const WHATSAPP_NUMBER = "51977162440";
export const WHATSAPP_DISPLAY = "(+51) 977 162 440";

// Correo de atención al cliente (dejar vacío si aún no está activo)
export const CONTACT_EMAIL = "contacto@menteenlinea.pe";

// Enlaces a documentos legales y redes sociales
export const PRIVACY_URL = "https://menteenlinea.pe/privacidad";
export const TERMS_URL = "https://menteenlinea.pe/terminos";
export const COMPLAINTS_URL = "https://menteenlinea.pe/reclamaciones";
export const INSTAGRAM_URL = "https://instagram.com/menteenlineaperu";
export const TIKTOK_URL = "https://tiktok.com/@menteenlineaperu";
```

> **Nota:** Si las URLs de Privacidad, Términos o Libro de Reclamaciones están vacías (`""`), los enlaces se ocultan automáticamente en el pie de página para no mostrar enlaces rotos a los usuarios.

### 2. Modificar precios y tarifas (`src/constants.ts`)

Las tarifas de los planes B2C y B2B están centralizadas en el objeto `PRICES`. Las fórmulas de ahorro y cálculo por colaborador se derivan automáticamente:

```typescript
// src/constants.ts

export const PRICES = {
  trial: 25,         // Semana de prueba: S/ 25
  monthly: 89,       // Plan mensual: S/ 89 (incluye IGV)
  quarterly: 239,    // Prepago trimestral: S/ 239 (equivale a S/ 79.67/mes; ahorra S/ 28)
  b2bPerWorker: 20,  // Tarifa corporativa: S/ 20 por colaborador/mes
  b2bMin: 50,        // Mínimo de colaboradores: 50
  igv: 0.18,         // Tasa de IGV (18%)
};
```

### 3. Modificar textos, preguntas frecuentes y contenidos (`src/content.ts`)

Todo el contenido textual de la landing está organizado por secciones dentro del objeto `CONTENT` en `src/content.ts`:

- `CONTENT.hero`: Título principal, subtítulo y textos de llamada a la acción.
- `CONTENT.problem`: Cifras estadísticas oficiales y datos del mapa departamental.
- `CONTENT.howItWorks`: Textos de los 4 pasos del proceso.
- `CONTENT.chatDemo`: Escenarios y mensajes de la conversación interactiva de WhatsApp.
- `CONTENT.benefits`: Tarjetas de la retícula de beneficios.
- `CONTENT.quiz`: Preguntas del test interactivo y recomendaciones.
- `CONTENT.pricing`: Descripción de cada plan, características y distintivos.
- `CONTENT.trustPrivacy`: Pilares de seguridad, tabla comparativa de límites éticos y líneas de crisis (MINSA 113).
- `CONTENT.faq`: Las 9 preguntas frecuentes oficiales y sus respuestas.
- `CONTENT.forBusiness`: Textos del módulo corporativo y simulador de planilla.
- `CONTENT.finalCta`: Bloque de cierre con llamada a la acción.
- `CONTENT.footer`: Textos informativos y avisos legales del pie de página.

---

## 🔍 Verificación Automática de Calidad y Copys

El proyecto incluye un script de auditoría que verifica:
1. **0 coincidencias** con la lista negra de términos prohibidos, métricas internas y placeholders.
2. **Máximo 3 apariciones** de la sigla "CPsP" en todo el proyecto.
3. **Exactitud aritmética** de los cálculos del plan trimestral, calculadora B2C y simulador B2B.

Para ejecutar la verificación:

```bash
deno run --allow-read scripts/check-copy.ts
```

---

## 🚀 Comandos de Desarrollo y Compilación

### Requisitos previos
- **Deno** (o alternativamente **Node.js 18+** y **npm**).

### 1. Iniciar servidor de desarrollo local
```bash
deno task dev
# o con npm:
npm run dev
```
La aplicación iniciará en `http://localhost:5173`.

### 2. Compilar para producción
```bash
deno task build
# o con npm:
npm run build
```
Los archivos optimizados y estáticos se generarán en la carpeta `dist/`.

---

## 🌐 Despliegue en Vercel

El proyecto está listo para desplegarse en Vercel de manera continua mediante Git o mediante el CLI de Vercel:

### Opción A: Despliegue Automático mediante GitHub (Recomendado)
1. Haz push de tus cambios a la rama principal:
   ```bash
   git add .
   git commit -m "fix: actualizacion de contenidos y verificacion"
   git push origin main
   ```
2. Vercel detectará el commit en `https://github.com/chfffffbian/mente-en-linea` e iniciará automáticamente el build.
3. El comando de compilación configurado en el dashboard de Vercel debe ser:
   - **Build Command:** `vite build` (o `npm run build`)
   - **Output Directory:** `dist`
   - **Install Command:** `npm install` (si el entorno de Vercel usa Node.js)

### Opción B: Despliegue Manual con Vercel CLI
```bash
# 1. Instalar Vercel CLI si no está instalado
npm i -g vercel

# 2. Desplegar a producción
vercel --prod
```

---

## 📋 Lista de Pendientes (Decisiones del Cliente)

Consulte la sección final de entrega para los puntos específicos a confirmar por el equipo comercial y legal (número final de WhatsApp, alta de dominios de correos corporativos y habilitación de URLs de privacidad).
