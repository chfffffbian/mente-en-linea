/**
 * FUENTE ÚNICA DE VERDAD - MENTE EN LÍNEA
 * Edita este archivo para modificar textos, precios, preguntas, constantes de contacto y configuraciones.
 */

export const WHATSAPP_NUMBER = "+51999999999"; // Reemplazar con el número oficial de recepción
export const WHATSAPP_DISPLAY = "(+51) 999 999 999";
export const DEFAULT_WHATSAPP_MESSAGE = "Hola, quiero información sobre el acompañamiento psicológico por WhatsApp.";

export function getWhatsAppUrl(customMessage: string = DEFAULT_WHATSAPP_MESSAGE): string {
  const cleanNumber = WHATSAPP_NUMBER.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(customMessage);
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

export const CONTENT = {
  brand: {
    name: "Mente en Línea",
    tagline: "Habla, desahógate, cuídate.",
    instagram: "@menteenlineaperu",
    tiktok: "@menteenlineaperu",
    instagramUrl: "https://instagram.com/menteenlineaperu",
    tiktokUrl: "https://tiktok.com/@menteenlineaperu",
    legalNotice: "Mente en Línea ofrece orientación y acompañamiento psicológico por WhatsApp; no atiende emergencias ni prescribe medicamentos. Si estás en crisis, comunícate gratuitamente a la Línea 113 del MINSA.",
  },

  navbar: {
    announcement: "⚡ Respuesta garantizada en máximo 24 horas o te regalamos un día de servicio.",
    links: [
      { label: "Cómo funciona", href: "#como-funciona" },
      { label: "El problema", href: "#problema" },
      { label: "Beneficios", href: "#beneficios" },
      { label: "Test interactivo", href: "#quiz" },
      { label: "Planes", href: "#precios" },
      { label: "Empresas", href: "#empresas" },
      { label: "Preguntas frecuentes", href: "#faq" },
    ],
    cta: "Escríbenos por WhatsApp",
  },

  hero: {
    b2c: {
      badge: "Disponible en todo el Perú",
      titlePart1: "Habla, desahógate, ",
      titleHighlight: "cuídate.",
      subtitle: "Acompañamiento psicológico por WhatsApp con un psicólogo colegiado que es solo tuyo. Sin cámara, sin citas, sin salas de espera. Escribe cuando puedas, te respondemos en máximo 24 horas.",
      primaryCta: "Hablar con un psicólogo por WhatsApp",
      secondaryCta: "Ver cómo funciona el chat",
      microcopy: "Desde S/ 89 al mes · Cancela cuando quieras · Devolución en la primera semana",
      floatingChat: {
        userMsg: "Hoy fue un día muy pesado en el trabajo…",
        userTime: "20:14",
        therapistMsg: "Te leo. Cuéntame con calma, aquí estoy para escucharte.",
        therapistTime: "20:16",
      },
    },
    b2b: {
      badge: "Bienestar laboral y SST para empresas",
      titlePart1: "Cuidamos la salud mental de tu equipo, ",
      titleHighlight: "estén donde estén.",
      subtitle: "Beneficio de orientación psicológica confidencial por WhatsApp para colaboradores en Lima y regiones. Cumplimiento de la Ley 29783 con reportes anónimos agregados.",
      primaryCta: "Solicitar piloto de 30 días",
      secondaryCta: "Calcular inversión empresarial",
      microcopy: "S/ 20 por colaborador/mes + IGV · Mínimo 50 trabajadores · Sin contratos abusivos",
      floatingChat: {
        userMsg: "Hola, ingresé con el código corporativo de mi empresa.",
        userTime: "12:30",
        therapistMsg: "¡Bienvenido! Tu espacio es 100% privado y confidencial. ¿Cómo estás hoy?",
        therapistTime: "12:32",
      },
    },
    trustItems: [
      {
        icon: "ShieldCheck",
        title: "Confidencialidad garantizada",
        desc: "Cifrado de WhatsApp y Ley 29733",
      },
      {
        icon: "UserCheck",
        title: "Psicólogo colegiado fijo",
        desc: "Siempre la misma persona (CPsP)",
      },
      {
        icon: "Clock",
        title: "Horarios flexibles",
        desc: "Escribe a cualquier hora, sin citas",
      },
      {
        icon: "HeartHandshake",
        title: "Bienestar emocional",
        desc: "Acompañamiento cálido sin juicios",
      },
    ],
  },

  problem: {
    eyebrow: "Una urgencia nacional",
    title: "Encontrar un psicólogo de confianza no debería ser tan difícil, estés donde estés.",
    description: "En el Perú, casi la mitad de los psicólogos está concentrada en Lima. Fuera de la capital, pedir ayuda significa viajar horas, pagar tarifas inaccesibles o simplemente callarse. Y en Lima también hay barreras: el tráfico, el costo y el miedo a ser juzgado.",
    closing: "Por eso creamos Mente en Línea: acompañamiento profesional que llega a ti, no al revés.",
    stats: [
      {
        value: "80%+",
        label: "Brecha en regiones",
        description: "En Loreto, Puno y Piura la desatención alcanza hasta el 89% de personas con necesidad de apoyo.",
        source: "Defensoría del Pueblo / MINSA 2024",
      },
      {
        value: "9 de cada 10",
        label: "Sin atención a tiempo",
        description: "Cerca del 90% de peruanos con problemas de salud mental no reciben atención profesional oportuna.",
        source: "Reporte Nacional de Salud Mental, MINSA",
      },
      {
        value: "S/ 100 – S/ 300",
        label: "Costo por sesión privada",
        description: "Una sola consulta presencial representa hasta un tercio del sueldo mínimo vital (S/ 1,130).",
        source: "Tarifario promedio de consulta clínica privada en Perú",
      },
      {
        value: "10 psicólogos",
        label: "Por cada 100k habitantes",
        description: "Promedio nacional crítico, con una escasez aún más severa en zonas rurales e intermedias.",
        source: "Organización Mundial de la Salud (OMS)",
      },
    ],
    peruRegions: [
      { id: "loreto", name: "Loreto", gap: "89% brecha", detail: "Escasez crítica de psicólogos clínicos en la Amazonía." },
      { id: "puno", name: "Puno", gap: "89% brecha", detail: "Altiplano sur con menos de 4 especialistas por cada 100 mil hab." },
      { id: "piura", name: "Piura", gap: "82% brecha", detail: "Alta demanda de apoyo psicológico tras emergencias climáticas." },
      { id: "lambayeque", name: "Lambayeque", gap: "80% brecha", detail: "Largas listas de espera en centros de salud comunitarios." },
      { id: "ucayali", name: "Ucayali", gap: "85% brecha", detail: "Comunidades alejadas sin acceso a consultorios físicos." },
      { id: "madrededios", name: "Madre de Dios", gap: "87% brecha", detail: "Cobertura de salud mental extremadamente limitada." },
      { id: "lima", name: "Lima y Callao", gap: "Concentra 65% psicólogos", detail: "Mayor oferta, pero barreras graves de tráfico (2 h), costo y estigma." },
    ],
  },

  howItWorks: {
    eyebrow: "Paso a paso",
    title: "Cuidar tu bienestar en 4 pasos",
    subtitle: "Sin citas rígidas ni instalaciones pesadas. Todo ocurre en la app que ya tienes en el bolsillo.",
    guaranteeNote: "Si tu psicólogo no responde en 24 horas en días hábiles, te regalamos un día de servicio.",
    steps: [
      {
        number: "01",
        title: "Escríbenos por WhatsApp",
        description: "Te contamos cómo funciona, el precio y el alcance del servicio. Respuesta en menos de una hora.",
        highlight: "Respuesta en < 1 hora",
        tag: "Primer contacto",
      },
      {
        number: "02",
        title: "Cuéntanos cómo estás",
        description: "Aceptas el consentimiento informado y llenas un triaje breve. Un psicólogo lo revisa en máximo 24 horas para asegurarnos de que este es el apoyo adecuado para ti.",
        highlight: "Filtro ético de seguridad",
        tag: "Triaje y consentimiento",
      },
      {
        number: "03",
        title: "Conoce a tu psicólogo",
        description: "Te asignamos un psicólogo colegiado fijo (CPsP verificado). Es siempre la misma persona, nunca un bot.",
        highlight: "Profesional colegiado CPsP",
        tag: "Asignación fija",
      },
      {
        number: "04",
        title: "Conversa a tu ritmo",
        description: "Escribe o manda audios de hasta 5 minutos a cualquier hora. Tu psicólogo responde de lunes a sábado en dos bloques diarios (12:00–14:00 y 20:00–22:00).",
        highlight: "Texto y audios diarios",
        tag: "Acompañamiento continuo",
      },
    ],
  },

  chatDemo: {
    eyebrow: "Experiencia interactiva",
    title: "Así de natural y seguro se siente usar Mente en Línea",
    subtitle: "Es como escribirle a alguien de confianza, pero con un profesional colegiado que sabe cómo ayudarte.",
    disclaimer: "Conversación de ejemplo ilustrativa · Respuestas redactadas por psicólogos colegiados",
    conversations: [
      {
        id: "estres",
        tabLabel: "Sobrecarga laboral",
        userPrompt: "Me siento muy abrumado con el trabajo y no sé cómo frenar.",
        therapistReply: "Te leo con mucha atención. Sentir que no puedes parar es agotador física y mentalmente. Esta semana empezaremos con una pausa de 5 minutos al mediodía para regular la respiración. Cuéntame, ¿en qué momento del día sientes el mayor pico de tensión?",
        audioDuration: "1:42",
        exerciseNote: "Ejercicio recomendado: respiración diafragmática (4-6).",
      },
      {
        id: "insomnio",
        tabLabel: "Dificultad para dormir",
        userPrompt: "Me cuesta mucho dormir pensando en mis pendientes y el futuro.",
        therapistReply: "Es comprensible que tu mente siga activa si no ha tenido un cierre claro en el día. Te propongo que 30 minutos antes de acostarte anotes tus pendientes en un cuaderno físico para 'sacarlos de la cabeza'. Esta noche probemos esa descarga y mañana me cuentas cómo te sentiste.",
        audioDuration: "2:10",
        exerciseNote: "Técnica recomendada: vaciado mental previo al descanso.",
      },
      {
        id: "dinamica",
        tabLabel: "Dinámica del servicio",
        userPrompt: "¿Cómo es la dinámica de los audios y los horarios de respuesta?",
        therapistReply: "Puedes escribirme o enviarme audios de hasta 5 minutos a cualquier hora del día. Yo reviso y respondo de lunes a sábado en dos bloques: 12:00 a 14:00 y 20:00 a 22:00. Así tienes un espacio reflexivo sin la presión de una videollamada rígida.",
        audioDuration: "1:15",
        exerciseNote: "Sin citas fijas: reflexiona a tus tiempos.",
      },
    ],
  },

  benefits: {
    eyebrow: "Ventajas reales",
    title: "Terapia pensada para tu vida real",
    subtitle: "Diseñado para adaptarse a tus horarios, tu presupuesto y tu privacidad.",
    items: [
      {
        title: "Un psicólogo fijo",
        description: "Continuidad y confianza: hablas siempre con el mismo profesional. No tienes que volver a contar tu historia desde cero.",
        badge: "Continuidad",
        icon: "UserHeart",
      },
      {
        title: "Respuesta garantizada en 24 h",
        description: "Compromiso de atención de lunes a sábado. Y si no cumplimos el plazo, te regalamos un día completo de servicio.",
        badge: "Garantía",
        icon: "ShieldAlert",
      },
      {
        title: "Sin cámara, sin cita, sin app nueva",
        description: "Todo ocurre en WhatsApp, la aplicación que ya tienes y sabes usar. Sin descargar nada ni arreglarte para una videollamada.",
        badge: "Cero fricción",
        icon: "Smartphone",
      },
      {
        title: "Precio claro: S/ 89 al mes",
        description: "Acompañamiento mensual completo por menos de lo que cuesta una sola sesión privada tradicional de rango medio.",
        badge: "Accesible",
        icon: "PiggyBank",
      },
      {
        title: "Audio-resumen mensual",
        description: "Hacia el final de tu mes (día 28–30), tu psicólogo te envía un audio personalizado con tus avances y objetivos para consolidar tu progreso.",
        badge: "Seguimiento",
        icon: "FileAudio",
      },
      {
        title: "Seguridad primero",
        description: "Filtro ético de riesgo desde el triaje inicial. Si detectamos una situación de crisis grave, derivamos de inmediato a sesión en vivo o a la Línea 113.",
        badge: "Ética profesional",
        icon: "HeartPulse",
      },
    ],
  },

  quiz: {
    eyebrow: "Guía de inicio rápido",
    title: "¿Por dónde empezar? Descúbrelo en 1 minuto",
    subtitle: "Responde 4 preguntas breves y te orientamos sobre el acompañamiento ideal para tu situación.",
    disclaimer: "Este test no constituye un diagnóstico clínico ni una evaluación psicológica formal. Es una herramienta de orientación para dar el primer paso con tranquilidad.",
    questions: [
      {
        id: 1,
        question: "¿Qué te gustaría trabajar principalmente en este momento?",
        options: [
          { text: "Estrés, ansiedad o sobrecarga mental", category: "ansiedad" },
          { text: "Bajo estado de ánimo, desmotivación o tristeza", category: "animo" },
          { text: "Dificultades en relaciones personales o familiares", category: "relaciones" },
          { text: "Agotamiento laboral o burnout", category: "burnout" },
          { text: "Necesito desahogarme con alguien neutral y profesional", category: "desahogo" },
        ],
      },
      {
        id: 2,
        question: "¿En qué momentos del día sueles tener espacio para escribir?",
        options: [
          { text: "Por las mañanas, antes de empezar mis actividades", time: "mañana" },
          { text: "A la hora de almuerzo o pausas del día", time: "tarde" },
          { text: "Por las noches, antes de dormir", time: "noche" },
          { text: "A cualquier hora en que tenga un momento libre", time: "flexible" },
        ],
      },
      {
        id: 3,
        question: "¿Habías tenido experiencia en terapia antes?",
        options: [
          { text: "Es mi primera vez buscando apoyo psicológico", exp: "primera" },
          { text: "Sí, pero la dejé por tiempo, costo o incomodidad", exp: "retomando" },
          { text: "Nunca me sentí cómodo con citas presenciales o videollamadas", exp: "online" },
        ],
      },
      {
        id: 4,
        question: "¿En qué región del Perú te encuentras?",
        options: [
          { text: "Lima o Callao", region: "Lima" },
          { text: "Selva (Loreto, Ucayali, San Martín, Madre de Dios)", region: "Selva" },
          { text: "Sierra (Puno, Cusco, Arequipa, Junín, etc.)", region: "Sierra" },
          { text: "Costa norte (Piura, Lambayeque, La Libertad, etc.)", region: "Costa Norte" },
          { text: "Otra región del interior del país", region: "Provincias" },
        ],
      },
    ],
  },

  calculatorB2C: {
    eyebrow: "Calculadora de ahorro",
    title: "Cuidarte cuesta menos de lo que crees",
    subtitle: "Compara cuánto gastarías en 4 sesiones presenciales al mes frente a tu acompañamiento mensual en Mente en Línea.",
    sessionCostMin: 40,
    sessionCostMax: 200,
    sessionCostDefault: 120,
    monthlySessions: 4,
    menteEnLineaMonthly: 89,
    disclaimer: "Basado en 4 consultas privadas al mes frente a la suscripción mensual de S/ 89 con psicólogo colegiado fijo.",
  },

  testimonials: {
    eyebrow: "Nuestro compromiso ético",
    title: "La tranquilidad de sentirse escuchado",
    subtitle: "No mostramos testimonios ficticios ni promesas exageradas. Esta es nuestra política de transparencia y ética humana.",
    commitments: [
      {
        title: "Te escuchamos sin juzgarte",
        desc: "Un espacio seguro y libre de prejuicios donde puedes hablar con total naturalidad.",
        icon: "Smile",
      },
      {
        title: "Tu información es tuya",
        desc: "Conversaciones privadas con cifrado de WhatsApp y estricto apego a la Ley 29733 de Datos Personales.",
        icon: "Lock",
      },
      {
        title: "Cumplimos lo que prometemos",
        desc: "Psicólogo colegiado asignado, respuesta en máximo 24 horas y garantía de devolución la primera semana.",
        icon: "Award",
      },
    ],
    note: "Espacio preparado para testimonios verificados de usuarios que otorguen su consentimiento explícito por escrito.",
  },

  b2b: {
    eyebrow: "Bienestar emocional para empresas",
    title: "Bienestar emocional para equipos en cualquier rincón del Perú",
    subtitle: "El 82% de los trabajadores peruanos reporta estrés o burnout (Bumeran 2024). Ofrece a tu equipo un beneficio accesible, confidencial y listo en días, sin importar en qué región trabajen.",
    pricePerCollab: 20,
    igvRate: 0.18,
    minCollaborators: 50,
    cards: [
      {
        title: "Cobertura nacional inmediata",
        description: "Llega con la misma calidad a trabajadores en planta, operaciones mineras, almacenes o teletrabajo.",
        icon: "Globe",
      },
      {
        title: "100% Confidencial para el colaborador",
        description: "RR. HH. solo recibe reportes agregados y anonimizados de grupos de mínimo 10 personas. Nunca nombres, chats ni diagnósticos.",
        icon: "Shield",
      },
      {
        title: "Apoyo a la Ley 29783 (SST)",
        description: "Contribuye a la prevención de riesgos psicosociales en el trabajo de forma ágil y como complemento preventivo no invasivo.",
        icon: "Scale",
      },
      {
        title: "Piloto flexible de 30 a 60 días",
        description: "Prueba el servicio con un grupo piloto sin contratos de permanencia a largo plazo para medir satisfacción y adopción.",
        icon: "Zap",
      },
    ],
    calculatorTitle: "Calcula la inversión para tu planilla",
    calculatorSubtitle: "S/ 20 por trabajador al mes + IGV (mínimo 50 trabajadores).",
    cta: "Solicitar propuesta y piloto de 30 días",
  },

  trustPrivacy: {
    eyebrow: "Seguridad y ética",
    title: "Tu tranquilidad y confianza están en manos protegidas",
    subtitle: "Conoce los estándares éticos, legales y profesionales bajo los cuales operamos.",
    pillars: [
      {
        title: "Psicólogos titulados y colegiados (CPsP)",
        desc: "Profesionales verificados con colegiatura activa y habilitada ante el Colegio de Psicólogos del Perú.",
        icon: "GraduationCap",
      },
      {
        title: "Consentimiento informado transparente",
        desc: "Conoces los alcances, dinámica y límites del servicio antes de realizar cualquier pago.",
        icon: "FileCheck",
      },
      {
        title: "Datos mínimos y conversaciones protegidas",
        desc: "Cifrado de extremo a extremo de WhatsApp. No guardamos capturas ni compartimos tu información con terceros.",
        icon: "LockKeyhole",
      },
      {
        title: "Cumplimiento de la Ley 29733",
        desc: "Tratamiento responsable y seguro de datos personales de acuerdo con la legislación peruana vigente.",
        icon: "FileSpreadsheet",
      },
    ],
    limitsBox: {
      title: "Lo que somos y lo que NO somos",
      whatWeAre: [
        "Orientación y acompañamiento psicológico asincrónico para el manejo del estrés, bienestar y situaciones cotidianas.",
        "Espacio de escucha profesional, continuo y humano con un psicólogo colegiado asignado.",
        "Herramientas de autocuidado, regulación emocional y objetivos semanales.",
      ],
      whatWeAreNot: [
        "NO atendemos emergencias médicas ni crisis psiquiátricas agudas.",
        "NO emitimos diagnósticos clínicos psiquiátricos formales ni recetas farmacológicas.",
        "NO reemplazamos una psicoterapia clínica presencial profunda de alta complejidad.",
        "NO atendemos a menores de 18 años.",
      ],
      emergencyWarning: "Si estás atravesando una crisis severa, tienes pensamientos de hacerte daño o estás en peligro, comunícate de inmediato y sin costo a la Línea 113 opción 5 del Ministerio de Salud (MINSA) o acude al centro de salud o Centro de Salud Mental Comunitario más cercano.",
    },
  },

  pricing: {
    eyebrow: "Planes transparentes",
    title: "Salud mental de calidad al alcance de tu bolsillo",
    subtitle: "Elige la opción que mejor se adapte a tu ritmo. Sin contratos de permanencia ni cobros ocultos.",
    plans: [
      {
        id: "prueba",
        name: "Semana de prueba",
        price: 25,
        period: "por 7 días",
        description: "Ideal para conocer la dinámica del chat con tu psicólogo colegiado antes de suscribirte.",
        badge: null,
        features: [
          "7 días de acompañamiento continuo",
          "Psicólogo colegiado asignado",
          "Respuestas diarias de lunes a sábado",
          "Mensajes de texto y notas de voz",
          "Garantía de respuesta en 24 h",
        ],
        ctaText: "Probar por S/ 25",
        whatsappMessage: "Hola, me gustaría empezar con la Semana de prueba de S/ 25 en Mente en Línea.",
        highlighted: false,
      },
      {
        id: "mensual",
        name: "Acompañamiento mensual",
        price: 89,
        period: "/ mes (IGV incluido)",
        description: "El plan más elegido para construir hábitos emocionales sostenibles con tu psicólogo fijo.",
        badge: "Más elegido",
        features: [
          "Psicólogo colegiado fijo (CPsP)",
          "Atención de lunes a sábado en 2 bloques",
          "Notas de voz de hasta 5 minutos",
          "Audio-resumen mensual de avances (día 28-30)",
          "Derivación prioritaria a sesión en vivo si hace falta",
          "Garantía de devolución en la primera semana",
        ],
        ctaText: "Elegir plan mensual · S/ 89",
        whatsappMessage: "Hola, deseo suscribirme al plan Acompañamiento Mensual de S/ 89 en Mente en Línea.",
        highlighted: true,
      },
      {
        id: "trimestral",
        name: "Prepago trimestral",
        price: 239,
        period: "/ 3 meses (equivale a S/ 79.60/mes)",
        description: "Compromiso de mediano plazo para consolidar tu bienestar con ahorro significativo.",
        badge: "Ahorro del 11%",
        features: [
          "Todo lo incluido en el plan mensual",
          "Ahorro de S/ 28 frente a pago mensual",
          "Prioridad en asignación de horarios",
          "Evaluación de progreso al mes 1, 2 y 3",
          "Congelamiento de plan hasta 14 días",
        ],
        ctaText: "Elegir prepago trimestral · S/ 239",
        whatsappMessage: "Hola, deseo adquirir el Prepago Trimestral de S/ 239 en Mente en Línea.",
        highlighted: false,
      },
      {
        id: "plus",
        name: "Plan Plus",
        price: 149,
        period: "/ mes",
        description: "Acompañamiento por chat + 1 sesión en vivo de 45 minutos al mes.",
        badge: "Próximamente",
        features: [
          "Acompañamiento diario por WhatsApp",
          "1 videollamada / llamada mensual de 45 min",
          "Psicólogo colegiado senior",
          "Resumen ejecutivo de tu sesión",
        ],
        ctaText: "Anotarme en lista de espera",
        whatsappMessage: "Hola, quisiera anotarme en la lista de espera para el Plan Plus de Mente en Línea.",
        highlighted: false,
        disabled: true,
      },
    ],
    b2bPlan: {
      name: "Plan Empresas (B2B)",
      price: 20,
      period: "por colaborador al mes (+ IGV)",
      description: "Beneficio de salud emocional para equipos de 50 a 250+ colaboradores en todo el Perú.",
      features: [
        "Acompañamiento confidencial para cada trabajador",
        "Reportes trimestrales anónimos y agregados (min. 10 colaboradores)",
        "Apoyo en cumplimiento de la Ley 29783",
        "Activación ágil en menos de 7 días hábiles",
        "Piloto sin ataduras de 30 a 60 días",
      ],
      ctaText: "Solicitar propuesta B2B",
      whatsappMessage: "Hola, deseo coordinar una propuesta corporativa de Mente en Línea para mi empresa.",
    },
    paymentMethods: "Aceptamos Yape, Plin y transferencia bancaria directa (BCP, BBVA, Interbank) · Sin comisiones sorpresa · Cancelación sin penalidad",
  },

  faq: {
    eyebrow: "Resolvemos tus dudas",
    title: "Preguntas frecuentes",
    subtitle: "Respuestas directas y honestas para que tomes una decisión informada.",
    items: [
      {
        question: "¿Es terapia psicológica tradicional?",
        answer: "Es orientación y acompañamiento psicológico asincrónico realizado exclusivamente por psicólogos titulados y colegiados (CPsP). Está enfocado en brindar escucha empática, contención emocional, pautas prácticas y seguimiento a tu ritmo. No reemplaza un tratamiento psiquiátrico de alta complejidad ni psicoterapia clínica intensiva presencial.",
      },
      {
        question: "¿Mi psicólogo es una persona real y está colegiado?",
        answer: "Sí, absolutamente. No utilizamos chatbots de inteligencia artificial para responder tus mensajes. Tu psicólogo es un profesional humano titulado y colegiado en el Colegio de Psicólogos del Perú (CPsP), con número de registro que puedes verificar en cualquier momento.",
      },
      {
        question: "¿Quién tiene acceso a lo que escribo o grabo?",
        answer: "Únicamente tú y tu psicólogo asignado. Las conversaciones están protegidas por el cifrado de extremo a extremo de WhatsApp. Mente en Línea no almacena capturas ni comparte tus datos con terceros, respetando rigurosamente la Ley de Protección de Datos Personales (Ley 29733).",
      },
      {
        question: "¿Qué pasa si estoy pasando por una crisis o emergencia?",
        answer: "Mente en Línea NO es un servicio de urgencias médicas. Si estás en peligro, sufres violencia o tienes pensamientos de hacerte daño, debes llamar inmediatamente a la Línea 113 opción 5 del MINSA (gratuita las 24 horas) o acudir al centro de salud o Centro de Salud Mental Comunitario más cercano.",
      },
      {
        question: "¿Cómo funciona la garantía si el servicio no es lo que esperaba?",
        answer: "Si durante los primeros 7 días de tu plan mensual sientes que este formato no se adapta a lo que necesitas, puedes solicitar la devolución total de tu dinero sin trámites engorrosos ni penalidades.",
      },
      {
        question: "¿Qué pasa si mi psicólogo no me responde en 24 horas?",
        answer: "Nuestro compromiso es responderte en días hábiles (de lunes a sábado) en un plazo no mayor a 24 horas. Si por alguna razón imputable a nuestro equipo no recibes respuesta en ese lapso, te regalamos automáticamente 1 día adicional de servicio sin costo.",
      },
      {
        question: "¿Cómo realizo el pago?",
        answer: "Puedes pagar de forma rápida y segura mediante Yape, Plin o transferencia bancaria directa a las cuentas oficiales del proyecto. Antes de pagar, completarás el triaje breve para confirmar que el servicio es adecuado para ti.",
      },
      {
        question: "¿Atienden a menores de 18 años?",
        answer: "No. Por políticas de responsabilidad legal y consentimiento informado, el servicio está dirigido exclusivamente a personas mayores de 18 años.",
      },
      {
        question: "Si mi empresa contrata el servicio, ¿podrá leer mis mensajes?",
        answer: "Jamás. La confidencialidad es absoluta. Tu empleador solo recibe estadísticas agregadas (por ejemplo: 'el 75% de los usuarios inscritos ha interactuado este mes') siempre que el grupo sea de mínimo 10 colaboradores. Nadie en tu empresa sabrá qué conversas, tus motivos de consulta ni tu diagnóstico.",
      },
    ],
  },

  finalCta: {
    title: "Tu bienestar está más cerca de lo que piensas.",
    subtitle: "No postergues más tu tranquilidad. Da el primer paso hoy con un mensaje simple y a tu ritmo.",
    buttonText: "Escríbenos por WhatsApp",
    mascotNote: "MENTI y nuestro equipo de psicólogos colegiados te damos la bienvenida.",
  },

  footer: {
    description: "Plataforma peruana de orientación y acompañamiento psicológico asincrónico por WhatsApp con psicólogos colegiados (CPsP). Alcance nacional en Lima y todas las regiones del Perú.",
    contact: {
      whatsapp: WHATSAPP_DISPLAY,
      email: "contacto@menteenlinea.pe",
      instagram: "@menteenlineaperu",
      tiktok: "@menteenlineaperu",
    },
    emergencyNotice: "Mente en Línea no atiende emergencias médicas ni crisis de riesgo vital. Si necesitas ayuda urgente, comunícate gratis a la Línea 113 opción 5 (MINSA).",
    copyright: `© ${new Date().getFullYear()} Mente en Línea. Todos los derechos reservados. Hecho con calidez humana para el Perú.`,
  },
};
