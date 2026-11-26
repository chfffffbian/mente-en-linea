# Registro de Cambios y Decisiones de Diseño (CHANGELOG)

Este documento registra cada decisión técnica, de contenido y de diseño tomada durante la implementación de las especificaciones maestras (MASTERPROMPT v2) para Mente en Línea. Cada decisión se detalla en una sola línea por sección.

---

### Global, Tokens y Assets
- Se unificó la paleta de tokens en `:root` (`--cream`, `--cream-2`, `--sage`, `--forest`, `--brand`, `--mint`, `--ink`, `--ink-2`, `--wa`, `--danger`, `--danger-bg`, `--dark`, `--dark-card`, `--dark-accent`, `--border`).
- Se estableció el desplazamiento suave y `scroll-margin-top: 88px` en todas las anclas para evitar que la navbar sticky tape encabezados.
- Se configuró la animación de MENTI (`mentiFloat`) a 6 segundos con desplazamiento de ±6px, desactivándola en `@media (prefers-reduced-motion: reduce)`.
- Se prohibió cualquier valor negativo de `letter-spacing` o `word-spacing` en textos menores a 24 px para garantizar legibilidad.
- Se migraron los isotipos y vectores gráficos a SVG de alta fidelidad (`/assets/logo-icon-hq.svg`, `/assets/logo-icon-hq-verde.svg`, `/assets/menti-hq.svg`).
- Se optimizó y recortó la fotografía hero a `/assets/hero-mujer.jpg` y la textura cultural de fondo a `/assets/machu-picchu.jpg`.
- Se eliminó la sección duplicada "Nuestras promesas" y los componentes obsoletos (`Testimonials.jsx`, `Header.jsx`, `ProblemStats.jsx`, `WhatsAppMockup.jsx`, `B2BModal.jsx`).

---

### Topbar
- Se fijó la barra superior con el texto exacto: "Te respondemos en máximo 24 h (lunes a sábado) o te regalamos un día de servicio."

---

### Navbar
- Se fijó la altura en 72 px translúcida con `backdrop-blur` y borde inferior sutil con `--border`.
- Se colocó el logotipo vectorial en verde profundo (`#0B4A24`) junto al texto "Mente en Línea" en 1 sola línea (peso 700) sin tagline visible.
- Se configuraron los 5 enlaces principales (Cómo funciona, Beneficios, Planes, Preguntas frecuentes, Para empresas) estilizando `#empresas` con distinción visual secundaria.
- Se eliminó el selector segmentado Personas/Empresas de la barra de navegación para evitar redundancia con el enlace directo.
- Se implementó el menú accesible "Aa" con selector de tamaño de fuente (A− / 100% / A+) con persistencia en estado y `aria-label`.
- Se configuró el botón primario "Escríbenos por WhatsApp" con enlace predeterminado a la API de WhatsApp.
- Se preservó el menú hamburguesa accesible para dispositivos móviles con botón CTA siempre visible.

---

### Hero
- Se implementó el H1 exacto "Habla, desahógate, **cuídate.**" destacando "cuídate." con color `--sage`.
- Se incluyó el subtítulo exacto con promesa clara de respuesta máxima en 24 horas y sin cámara ni citas fijas.
- Se configuró el botón primario "Hablar con un psicólogo por WhatsApp" y el botón secundario "Ver cómo funciona el chat" anclado a `#como-funciona`.
- Se ajustó el microtexto legal y de garantías a 14 px para cumplir estrictamente con los estándares de accesibilidad WCAG.
- Se ubicó la fotografía en contenedor con radio de 40 px y blob `--mint` con Machupicchu sutil en segundo plano.
- Se montó la burbuja de chat de ejemplo (20:14 y 20:16) con etiqueta explícita "Conversación de ejemplo".
- Se desplegó la franja de 4 pilares de confianza (Privacidad cuidada, Psicólogo colegiado fijo, Horarios flexibles, Sin juicios).

---

### Bento del Problema y Mapa del Perú (`ProblemBento` & `PeruMap`)
- Se incluyeron únicamente las 4 estadísticas verificadas ("8 de cada 10", "12 %", "S/ 100–300", "10 por 100 mil") con sus fuentes oficiales citadas.
- Se diseñó la distribución en dos columnas: columna izquierda con chips regionales táctiles (≥44 px) y columna derecha con el mapa interactivo del Perú.
- Se utilizó el SVG oficial y geográficamente fiel del territorio peruano con `viewBox` balanceado y sin cortes territoriales.
- Se asignaron los colores exactos por departamento: Loreto (`--forest`), Lima y Callao (`--mint`), regiones destacadas (`--sage`), y resto del país en neutro (`#EFE9DE`).
- Se mantuvieron las etiquetas de departamentos visibles exclusivamente en interacción (hover/focus/select) para evitar sobrecarga visual.
- Se agregó la leyenda inferior de 3 elementos con la nota aclaratoria de 14 px al pie del mapa.
- Se eliminaron por completo cifras y términos no contrastados de la lista negra.

---

### Cómo Funciona (`HowItWorks`)
- Se implementaron los 4 pasos secuenciales con diseño de scrollytelling y barra de progreso vertical en pantallas de escritorio.
- Se incluyó la nota de garantía de 24 horas al inicio del módulo.
- Se optimizaron las ilustraciones de cada paso con carga diferida (`loading="lazy"`) y esquinas redondeadas.

---

### Demo del Chat de WhatsApp (`ChatDemo`)
- Se integró la tarjeta de bienvenida con la mascota MENTI a 96 px.
- Se configuró el selector de las 3 situaciones con botones accesibles de altura táctil ≥44 px.
- Se delimitó el marco del teléfono inteligente a 640 px con área de scroll interna independiente.
- Se ubicó el botón CTA de acción fuera de la zona de desplazamiento para asegurar visibilidad permanente.
- Se eliminó el reproductor de notas de voz ficticio y cualquier etiqueta que simule actividades clínicas no verificadas.
- Se programó el indicador de escritura simulada con una espera natural de 900 ms.

---

### Bento de Beneficios (`BenefitsBento`)
- Se construyó una retícula bento de 12 columnas con distribución de anchos 7, 5, 4, 4, 4 y 12.
- Se estandarizó la iconografía a un tamaño consistente de 48 px.
- Se eliminaron chips inferiores y etiquetas redundantes para mantener la jerarquía limpia.

---

### Test de Orientación (`Quiz`)
- Se estructuró el flujo en 4 preguntas con encabezado "Pregunta X de 4", retirando la etiqueta de porcentaje anterior.
- Se incorporó un botón de retroceso a partir de la segunda pregunta para facilitar la navegación del usuario.
- Se configuraron los elementos de selección como radiogroup accesible con altura táctil mínima de 48 px.
- Se agregó retroalimentación y validación en vivo para alertar si el usuario no ha seleccionado una opción antes de continuar.
- Se diseñó la tarjeta de resultados con MENTI a 140 px y lógica de recomendación (P3 "No" / "Prefiero no decirlo" recomienda Semana de prueba S/ 25; P3 "Sí" recomienda Mensual S/ 89).
- Se añadió el botón para exportar el resumen de respuestas directamente a WhatsApp y el descargo de responsabilidad con enlace directo a `#crisis`.

---

### Calculadora B2C (`CalculatorB2C`)
- Se implementó el control deslizable con rango de S/ 40 a S/ 300 (paso de 10, valor inicial S/ 100) junto con campo de entrada numérica sincronizado.
- Se ubicaron marcas visuales en 40 (0%), 100 (23%) y 300 (100%).
- Se aplicó la fórmula aritmética dinámica de ahorro `4 * X - 89` mensual y `* 12` anual (para X=100: S/ 311 de ahorro al mes y S/ 3,732 al año).
- Se redactó la nota al pie obligatoria de 14 px indicando el costo de referencia de una sesión privada presencial.

---

### Tarifas y Planes (`Pricing`)
- Se fijó el ancla oficial `#planes` y se incorporó a MENTI en el encabezado a 140 px.
- Se implementó el selector segmentado "Para personas | Para empresas".
- Se estructuraron los 4 planes: Semana de prueba (S/ 25), Mensual (S/ 89 con distintivo "Recomendado"), Trimestral (S/ 239 con distintivo "Ahorras S/ 28") y Plan Plus (distintivo "Próximamente" sin precio visible y botón para unirse a lista de espera).
- Se formatearon todos los precios con `white-space: nowrap` forzado para impedir que el símbolo de moneda y el número se quiebren en dos líneas.
- Se anclaron todos los botones de acción en la parte inferior de las tarjetas mediante `margin-top: auto` en la retícula flexible.

---

### Confianza, Privacidad y Crisis (`TrustPrivacy`)
- Se asignaron las anclas `#confianza` y `#crisis`.
- Se mostraron los 3 pilares verificados activos, ocultando condicionalmente la verificación externa mientras `VERIFICACION_COLEGIATURA = false`.
- Se diseñó el bloque comparativo de alcances usando verde menta para lo que sí se hace y fondo neutro (`#EFE9DE`) para lo que no, descartando rojos o rosas alarmistas.
- Se diseñó el bloque único de crisis bajo fondo `--danger-bg` y borde `--danger` con las líneas oficiales del MINSA (113 opción 5 e Infosalud).
- Se implementó el botón accesible de marcación directa "Llamar al 113" con protocolo `tel:113` y altura táctil de 52 px.

---

### Preguntas Frecuentes (`FAQ`)
- Se ordenaron las 9 preguntas de acuerdo con el esquema oficial de la marca.
- Se implementó el acordeón nativo con soporte estricto de accesibilidad (`aria-expanded` y `aria-controls`).
- Se definió el área de clic de cada pregunta en fila completa con altura mínima de 56 px.
- Se cerró el módulo con la invitación directa "¿Tienes otra duda? Pregúntanos por WhatsApp →".

---

### Empresas (`ForBusiness`)
- Se configuró la sección en tema oscuro (`#12201A`) con ancla `#empresas`.
- Se presentaron las 4 tarjetas de valor corporativo destacando la confidencialidad absoluta (reportes agregados de mínimo 10 colaboradores).
- Se diseñó el simulador de inversión para planilla con control de 50 a 500 colaboradores (bloqueando valores menores a 50).
- Se implementó la fórmula exacta de cálculo `colaboradores * 20 * 1.18` (ej. 50 trabajadores = S/ 1,180; 100 trabajadores = S/ 2,360 al mes con IGV).
- Se incorporó el botón de contacto corporativo con mensaje precargado para solicitar un piloto de 30 a 60 días.

---

### CTA Final (`FinalCTA`)
- Se delimitó el ancho a un contenedor medio (`max-w-4xl`) para evitar distorsiones visuales en pantallas ultra-anchas.
- Se incluyó el chip "Estamos listos para escucharte", el H2 oficial y la invitación al primer paso.
- Se desplegó el trío de garantías en 14 px ("Psicólogo colegiado · Respuesta en máx. 24 h · Devolución la primera semana").
- Se colocó la ilustración de MENTI a 190 px sin ningún texto al pie.

---

### Pie de Página y Botón Flotante (`Footer` & `FloatingWhatsApp`)
- Se colocó el aviso breve único de emergencias con acceso directo a la línea telefónica gratuita 113.
- Se redactó la descripción del servicio eliminando cualquier repetición innecesaria del lema de marca.
- Se ordenaron los 6 enlaces de navegación rápida en una columna dedicada.
- Se reemplazó la columna anterior por "Información", mostrando enlaces legales (Privacidad, Términos, Libro de Reclamaciones) únicamente si sus URLs están configuradas en `constants.ts`.
- Se definieron los canales oficiales de contacto (WhatsApp con número verificado y cobertura en todo el territorio nacional).
- Se ampliaron los iconos de redes sociales (Instagram y TikTok) a un área táctil mínima de 44×44 px con sus etiquetas accesibles (`aria-label`).
- Se imprimió la línea de derechos reservados oficial: "© 2026 Mente en Línea. Todos los derechos reservados."
- Se rediseñó el botón flotante de WhatsApp a 56 px de diámetro, programado para mostrarse solo tras superar el 25% de desplazamiento de página, retirando la ventana emergente (*popover*) y el punto animado de notificación.

---

### SEO, Datos Estructurados y Auditoría Automática
- Se fijó el título de la página en `index.html` como `Mente en Línea: acompañamiento psicológico por WhatsApp`.
- Se actualizó la meta descripción a la versión oficial y se configuraron las etiquetas Open Graph y Twitter Cards a 1200×630 px.
- Se estableció el tipo de Schema.org en `"Organization"` con el teléfono oficial `+51977162440`, excluyendo categorizaciones médicas no aplicables.
- Se sincronizaron las 9 preguntas y respuestas de preguntas frecuentes en el esquema `FAQPage`.
- Se creó la herramienta automatizada `scripts/check-copy.ts` para auditar la ausencia de términos no permitidos, limitar la sigla CPsP a un máximo de 3 apariciones y comprobar los cálculos matemáticos del sistema.
- Se validó la compilación de producción con 0 errores y 0 advertencias en Deno y Vite.

---

## Corrección de los 6 Problemas Específicos (V2.1 - QA, Estabilidad & Geodatos)

### 1. Desplazamiento Inicial (`ChatDemo` y `App`)
- Se interceptaron `window.scrollTo`, `scrollIntoView`, `scrollBy` y `focus` identificando que `ChatDemo.jsx` llamaba a `scrollIntoView()` al montar forzando el scroll a 4960 px.
- Se eliminó `scrollIntoView` de `ChatDemo.jsx` y se confinó el auto-scroll al contenedor interno del teléfono (`chatContainerRef.current.scrollTo`) únicamente tras la interacción explícita del usuario.
- Se implementó en `App.jsx` `history.scrollRestoration = 'manual'` y `window.scrollTo(0, 0)` en montaje inicial si `location.hash` está vacío, respetando el anclaje si existe hash.
- Se validó con suite automatizada Playwright en Chromium, Firefox y WebKit que `window.scrollY === 0` al cargar y tras recargar.

### 2. Encabezado Principal (`Hero`)
- Se retiró el mockup digital de laptop y celular que distraía de la propuesta de valor.
- Se incorporó la fotografía `/assets/hero-mujer.jpg` recortada en contenedor con proporción 4:5 en escritorio y 1:1 en móvil con radio de 40 px sobre fondo blob `--mint`.
- Se superpuso la tarjeta flotante de conversación de ejemplo (20:14 y 20:16) con desenfoque de fondo y se aplicó `text-wrap: balance` en el microtexto de garantías.

### 3. Tarjetas de Estadísticas del Problema (`ProblemBento`)
- Se dimensionó la tipografía de las cifras con `clamp(26px, 2.4vw, 36px)` y `line-height: 1.1` para asegurar jerarquía sin desbordamiento.
- Se aplicó `whitespace-nowrap` únicamente a los tokens cuantitativos ("S/ 100–300", "12 %") permitiendo salto de línea controlado en "8 de cada 10" y "10 por 100 mil".
- Se configuró la cuadrícula flexible con `grid-cols-[repeat(auto-fit,minmax(240px,1fr))]`, tarjetas con `min-w-0`, `overflow-hidden` y `overflow-wrap: anywhere` en texto descriptivo, garantizando un margen mínimo de 16 px respecto a los bordes en 1024 px y 1440 px.

### 4. Cartografía Georreferenciada del Perú (`PeruMap`)
- Se reemplazó el trazado vectorial aproximado por el GeoJSON oficial de los 25 departamentos del Perú (INEI / IGN bajo licencia ODbL).
- Se proyectaron las coordenadas geográficas a SVG usando `d3-geo` (Mercator `fitExtent([[20,20],[580,820]])`, W=600, H=840, ratio 0.714) compiladas en `src/components/peruMapPaths.js` (55 KB).
- Se garantizó la visibilidad total del territorio nacional incluyendo los departamentos del sur (Tacna, Puno y Madre de Dios) en un contenedor con `aspect-[600/840]` y alturas mínimas de 360 px en móvil y 460 px en escritorio.
- Se asignaron roles de accesibilidad (`tabIndex={0}`, `role="button"`, `aria-label="{región}: {texto}"`), interactividad mediante tooltip al pasar el cursor o hacer clic, y leyenda inferior en 3 bloques sin truncamiento.
- Se documentó la fuente geográfica oficial y la licencia ODbL en `README.md`.

### 5. Tipografía y Espaciado de Encabezados
- Se añadió la regla global en `index.css` para `h1, h2, h3` fijando `letter-spacing: -0.01em !important` y `word-spacing: 0.06em !important`.
- Se removieron todas las clases de tracking negativo (`tracking-tight` y `tracking-tighter`) en textos menores a 24 px en todos los componentes del proyecto.
- Se verificó la separación y legibilidad en titulares sensibles como "Audio-resumen mensual", "S/ 89 al mes, precio claro" y "Cuidar tu bienestar en 4 pasos".

### 6. Continuidad Cromática y Fondos Alternados
- Se eliminó la franja visual intermedia detectada entre el demo del chat y beneficios, cuya causa raíz era el posicionamiento erróneo del scroll.
- Se unificó la alternancia estricta y sin gradientes entre `--cream` (`#F7F1E8`) y `--cream-2` (`#FBF8F3`) a lo largo de las 13 secciones consecutivas, con contraste inverso en tarjetas interiores.
- Se retiró el gradiente inferior en `FinalCTA` y el fondo residual de arena en `Footer`, logrando una transición cromática limpia y homogénea en toda la página.

### Pruebas E2E Multi-Viewport y Cero Desbordamiento Horizontal
- Se corrigió el desbordamiento horizontal en 1024 px en la barra de navegación compactando padding y tamaño de texto entre `lg` y `xl`.
- Se certificó que en todos los viewports (360, 390, 768, 1024, 1440 y 2560 px) `scrollWidth === clientWidth` con 0 px de scroll horizontal.
- Se guardaron las capturas automáticas de validación visual para Hero y ProblemBento en `test-results/`.

