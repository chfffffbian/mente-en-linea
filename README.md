# 🌿 Mente en Línea - Landing Page Oficial

Plataforma peruana de orientación y acompañamiento psicológico asincrónico por WhatsApp con psicólogos colegiados (CPsP). Diseñada con enfoque de salud mental accesible, cálido y sin barreras geográficas para todo el Perú (Lima y regiones).

- 🌐 **Sitio web en producción:** [https://mente-en-linea.vercel.app/](https://mente-en-linea.vercel.app/)
- 📦 **Repositorio GitHub:** [https://github.com/chfffffbian/mente-en-linea](https://github.com/chfffffbian/mente-en-linea)

---

## 🎨 Dirección de Arte y Filosofía de Diseño

- **Paleta de Color Terapéutica y Cálida:**
  - `Crema suave (#F7F1E8)` y `Crema card (#FBF8F3)`: Base luminosa que reemplaza los blancos clínicos fríos de hospital.
  - `Verde Salvia (#5E7F63)` y `Verde Bosque (#1F4D3A)`: Transmiten serenidad, confianza profesional y estabilidad emocional.
  - `Menta Suave (#DCE9DD)` y `Arena (#EDE5D8)`: Contrastes sutiles para microinteracciones y tarjetas bento.
  - `Modo Oscuro Sofisticado (#12201A)`: Reservado exclusivamente para la sección B2B corporativa.
- **Tipografía Editorial y Humana:**
  - Titulares: *Plus Jakarta Sans* y *League Spartan*.
  - Lectura en párrafos: *Inter* y *DM Sans*.
  - Ajuste tipográfico de accesibilidad en vivo (A- / A+ en la barra de navegación).
- **Mascota Oficial MENTI:** Personaje empático de la marca ilustrado y optimizado en formato PNG transparente.
- **Fotografía de Identidad:** Textura sutil de fondo con Machu Picchu y fotografía cálida de consulta psicológica.

---

## 🛠️ Stack Tecnológico

- **Framework:** React 18 + Vite + TypeScript / JSX
- **Motor de Estilos:** Tailwind CSS 3.4 con tokens personalizados
- **Animaciones & Scrollytelling:** Framer Motion (aceleración por GPU y respeto a `prefers-reduced-motion`)
- **Iconografía:** Lucide React
- **SEO & Datos Estructurados:** JSON-LD (`MedicalBusiness` y `FAQPage`), OpenGraph, Twitter Cards, `sitemap.xml` y `robots.txt`
- **Despliegue:** Optimizado para **Vercel** y **Cloudflare Pages** (dist 100% estático).

---

## ✨ Características y Módulos Interactivos

1. **Barra de Anuncio & Navbar con Sticky Blur:** Anuncio de garantía de respuesta en 24h, toggle de segmento (*Personas* / *Empresas*), selector A-/A+ y botón directo a WhatsApp.
2. **Hero con Tipografía Cinética:** Aparición palabra por palabra con énfasis en *"cuídate."*, fondo con textura sutil de Machu Picchu, mockup de laptop y burbujas de chat flotantes.
3. **Bento Grid del Problema Nacional:** 4 tarjetas con cifras verificadas (Defensoría del Pueblo, MINSA, OMS) y contenedor con el **Mapa Geográfico del Perú** interactivo.
4. **Scrollytelling en 4 Pasos:** Recorrido visual del acompañamiento (Escribe, Triaje ético, Psicólogo colegiado fijo y Conversa a tu ritmo).
5. **Simulador Interactivo de WhatsApp:** Experiencia real con 3 pestañas temáticas, indicador de *"escribiendo..."*, reproducción simulada de nota de voz de 1:42 y aclaración de muestra ilustrativa.
6. **Bento Grid de Beneficios:** 6 tarjetas con badges (*Continuidad*, *Garantía*, *Cero fricción*, *Accesible*, *Seguimiento*, *Ética*).
7. **Test de Orientación en 1 Minuto (Quiz):** 4 preguntas interactivas, recomendación personalizada con MENTI y botón para enviar el resumen pre-llenado a WhatsApp sin cookies ni rastreo invasivo.
8. **Calculadora de Ahorro B2C:** Slider de S/ 40 a S/ 200 para comparar el gasto en 4 sesiones presenciales frente a los S/ 89 al mes de Mente en Línea.
9. **Compromiso Ético y Transparencia:** Declaración de principios sin testimonios falsos, preparado para reseñas verificadas con consentimiento expreso.
10. **Sección Empresas (B2B EAP en Modo Oscuro):** 4 tarjetas de beneficios laborales, apoyo a la Ley 29783 de SST y simulador interactivo para calcular la inversión de planilla (S/ 20 por colaborador/mes + IGV).
11. **Marco Ético, Legal y Límites Claros:** Colegiatura CPsP, Ley 29733 de Datos Personales, bloque honesto de *"Lo que somos y lo que NO somos"* y caja de crisis con la **Línea 113 Opción 5 del MINSA**.
12. **Planes Transparentes:** Semana de prueba (S/ 25), Acompañamiento mensual (S/ 89 - destacado), Prepago trimestral (S/ 239) y Plan Plus (S/ 149 - Próximamente).
13. **Preguntas Frecuentes (FAQ):** Acordeón accesible con 9 respuestas directas sincronizadas con el esquema JSON-LD.
14. **Final CTA:** Tarjeta acogedora con MENTI y botón directo para comenzar.
15. **Botón Flotante de WhatsApp:** Con badge pulsante *"En línea"* y aparición a partir de 300px de scroll.

---

## ⚙️ Fuente Única de Verdad (`src/content.ts`)

Todos los textos, tarifas, preguntas del test, enlaces de WhatsApp y números de contacto están centralizados en **`src/content.ts`**. Para actualizar cualquier dato del negocio:

```typescript
// src/content.ts

// 1. Cambiar número de recepción de WhatsApp
export const WHATSAPP_NUMBER = "+51999999999"; // Coloca aquí el número oficial
export const WHATSAPP_DISPLAY = "(+51) 999 999 999";

// 2. Modificar precios de los planes
export const CONTENT = {
  pricing: {
    plans: [
      { id: "prueba", price: 25, ... },
      { id: "mensual", price: 89, ... },
      { id: "trimestral", price: 239, ... },
    ],
    b2bPlan: { price: 20, ... }
  }
};
```

---

## 🚀 Comandos de Desarrollo y Compilación

### Requisitos
- **Deno** (instalado en el sistema) o **Node.js 18+** / **npm**.

### 1. Iniciar servidor de desarrollo local
```bash
deno task dev
# o con npm:
npm run dev
```

### 2. Compilar para producción
```bash
deno task build
# o con npm:
npm run build
```

Genera la carpeta optimizada y minificada `/dist`.

### 3. Previsualizar la compilación
```bash
deno task preview
# o con npm:
npm run preview
```

---

## 📋 Lista de Verificación para el Lanzamiento

- [x] **Arquitectura y responsive:** Probado y adaptado para móviles, tablets y monitores ultrawide.
- [x] **Accesibilidad WCAG AA:** Selector de tamaño tipográfico, contraste de color verificado, navegación completa por teclado y soporte para `prefers-reduced-motion`.
- [x] **SEO y Open Graph:** Meta tags completos, JSON-LD estructurado, imagen OG y favicon SVG vectorizado.
- [x] **Límites clínicos y éticos destacados:** Aviso claro de no atención de emergencias, referencia a la Línea 113 MINSA en Hero, Trust, Pricing, Footer y banner persistente.
- [ ] **Configuración previa al tráfico masivo:** Reemplazar `+51999999999` en `src/content.ts` por la línea oficial de WhatsApp Business del proyecto.
- [ ] **Dominio personalizado:** Vincular `menteenlinea.pe` en la configuración de dominios de Vercel / Cloudflare.
