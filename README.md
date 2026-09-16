# 🌿 Mente en Línea - Landing Page

Plataforma peruana de apoyo psicológico por WhatsApp que conecta a personas fuera de Lima con psicólogos colegiados (CPsP) y practicantes supervisados, sin videollamadas ni consultorio presencial. Cuenta además con un programa de bienestar laboral (B2B/EAP) para organizaciones con equipos en regiones (minería, agroindustria, retail y logística).

---

## 🛠️ Stack Tecnológico

- **Framework:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) (Rápido, modular y optimizado para sitios estáticos).
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) con paleta personalizada (*Sage Green*, *Pastel Sky*, *Warm Sand*, *Lavender* y colores nativos de WhatsApp).
- **Animaciones:** [Framer Motion](https://www.framer.com/motion/) para scroll-reveal, contadores numéricos de impacto (*count-up*) y transiciones de chat.
- **Iconografía:** [Lucide React](https://lucide.dev/) (iconos SVG limpios, cálidos y no clínicos).
- **Tipografías:** *Plus Jakarta Sans* y *Quicksand* para titulares amigables + *Inter* para lectura cómoda en dispositivos móviles.
- **Despliegue:** 100% estático (0 dependencias de backend), ideal para **Cloudflare Pages**, Vercel o GitHub Pages.

---

## ✨ Características y Efectos Especiales

1. **Hero con Fondo Aurora Animado:** Mesh gradient con blobs orgánicos flotando suavemente y acelerados por GPU.
2. **Scroll-Reveal:** Aparición secuencial con fade-in y slide-up al hacer scroll.
3. **Contadores de Impacto Animados:** Cifras de brecha en salud mental validadas por la **Defensoría del Pueblo** y el **MINSA**.
4. **Mockup Interactivo de WhatsApp en Tiempo Real:** Simula una conversación real entre un usuario de provincia y una psicóloga verificada (CPsP), con indicador de "escribiendo...", notas de voz y botones de reinicio.
5. **Sección B2B / Bienestar Laboral:** Simulador interactivo de inversión para líderes de Gestión Humana y Recursos Humanos.
6. **Modo Oscuro / Claro:** Con botón accesible y persistencia en `localStorage`.
7. **Banner de Emergencia Oficial Verificado:** Enlace y teléfono directo a la **Línea 113 (Opción 5)** del Ministerio de Salud (MINSA Perú) disponible las 24 horas.

---

## 🚀 Cómo Correr el Proyecto Localmente

### Requisitos Previos
Tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior recomendada) o [Deno](https://deno.com/).

### 1. Clonar o descargar el repositorio
```bash
git clone https://github.com/tu-usuario/mente-en-linea.git
cd mente-en-linea
```

### 2. Instalar dependencias
Con npm:
```bash
npm install
```
*(O si usas Deno: `deno install`)*

### 3. Iniciar el servidor de desarrollo
Con npm:
```bash
npm run dev
```
*(O con Deno: `deno task dev`)*

Abre en tu navegador la dirección local que aparece en la consola (por defecto: `http://localhost:3000` o `http://localhost:5173`).

---

## 📦 Construcción para Producción

Para compilar los archivos estáticos listos para subir a producción:

```bash
npm run build
```
*(O con Deno: `deno task build`)*

Esto creará la carpeta optimizada y minificada `/dist`.

Para probar el build localmente:
```bash
npm run preview
```

---

## ☁️ Guía de Despliegue en Cloudflare Pages

1. **Subir a GitHub:**
   Crea un repositorio en GitHub y sube el proyecto:
   ```bash
   git add .
   git commit -m "feat: landing page completa Mente en Línea"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git push -u origin main
   ```

2. **Conectar con Cloudflare Pages:**
   - Inicia sesión en el panel de [Cloudflare Dashboard](https://dash.cloudflare.com/).
   - Ve a la sección **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
   - Selecciona tu repositorio de GitHub `mente-en-linea`.

3. **Configuración de Build:**
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version (opcional en Variables de entorno):** `NODE_VERSION = 20`

4. **Desplegar:**
   - Haz clic en **Save and Deploy**. En menos de 1 minuto tendrás tu enlace `.pages.dev` activo con HTTPS gratis, CDN global de baja latencia y caché en los servidores peruanos de Cloudflare.

---

## 🏛️ Estructura del Código

```text
mente-en-linea/
├── public/
│   ├── favicon.svg          # Isotipo de calma en SVG
│   └── og-preview.svg       # Banner para redes sociales
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Barra fija, navegación, dark mode, WhatsApp CTA
│   │   ├── Hero.jsx         # Titular emocional, fondo Aurora y badges
│   │   ├── ProblemStats.jsx # Contadores animados y datos de brecha nacional
│   │   ├── HowItWorks.jsx   # 4 pasos ilustrados y conector de proceso
│   │   ├── WhatsAppMockup.jsx # Simulación en vivo de WhatsApp (texto + audio)
│   │   ├── ForBusiness.jsx  # Sección B2B corporativa con estimador de RRHH
│   │   ├── TrustSecurity.jsx # Verificación CPsP, supervisión y privacidad
│   │   ├── Pricing.jsx      # Planes B2C (S/ 89, S/ 49) y B2B (S/ 25-35)
│   │   ├── Footer.jsx       # Enlaces y banner de emergencia Línea 113 MINSA
│   │   └── B2BModal.jsx     # Modal de contacto para empresas
│   ├── App.jsx              # Ensamblador principal de la landing
│   ├── index.css            # Directivas Tailwind, animaciones Aurora y ondas
│   └── main.jsx             # Punto de entrada de React
├── index.html               # Plantilla HTML, SEO y tipografías
├── tailwind.config.js       # Configuración cromática y temas
├── vite.config.js           # Configuración de empaquetado de Vite
├── package.json             # Dependencias y scripts de npm
└── README.md                # Documentación del proyecto
```

---

## 🌿 Identidad y Valores

- **Mente en Línea** no sustituye la atención hospitalaria ni urgencias psiquiátricas inmediatas.
- Promueve el acceso equitativo a la salud mental, el apego estricto al código deontológico del **Colegio de Psicólogos del Perú (CPsP)** y la eliminación del estigma hacia el bienestar emocional en nuestras regiones.
