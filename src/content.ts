/**
 * FUENTE ÚNICA DE VERDAD - MENTE EN LÍNEA
 * Según MASTERPROMPT-antigravity-v2.md
 */

import {
  WHATSAPP_NUMBER,
  WHATSAPP_DISPLAY,
  CONTACT_EMAIL,
  MINSA_113_ROUTE,
  MINSA_PHONES,
  VERIFICACION_COLEGIATURA,
  PRICES,
  quarterlyPerMonth,
  quarterlySavings,
  PRIVACY_URL,
  TERMS_URL,
  COMPLAINTS_URL,
  INSTAGRAM_URL,
  TIKTOK_URL,
  DEFAULT_WHATSAPP_MESSAGE,
  getWhatsAppUrl
} from './constants';

export {
  WHATSAPP_NUMBER,
  WHATSAPP_DISPLAY,
  CONTACT_EMAIL,
  MINSA_113_ROUTE,
  MINSA_PHONES,
  VERIFICACION_COLEGIATURA,
  PRICES,
  quarterlyPerMonth,
  quarterlySavings,
  PRIVACY_URL,
  TERMS_URL,
  COMPLAINTS_URL,
  INSTAGRAM_URL,
  TIKTOK_URL,
  DEFAULT_WHATSAPP_MESSAGE,
  getWhatsAppUrl
};

export const CONTENT = {
  brand: {
    name: "Mente en Línea",
    tagline: "Habla, desahógate, cuídate.",
    subtitle: "Acompañamiento por WhatsApp",
    instagram: "@menteenlineaperu",
    tiktok: "@menteenlineaperu",
    instagramUrl: INSTAGRAM_URL,
    tiktokUrl: TIKTOK_URL,
  },

  navbar: {
    topbar: "Te respondemos en máximo 24 h (lunes a sábado) o te regalamos un día de servicio.",
    links: [
      { label: "Cómo funciona", href: "#como-funciona" },
      { label: "Beneficios", href: "#beneficios" },
      { label: "Planes", href: "#planes" },
      { label: "Preguntas frecuentes", href: "#faq" },
      { label: "Para empresas", href: "#empresas", isSecondary: true },
    ],
    cta: "Escríbenos por WhatsApp",
  },

  hero: {
    badge: "Disponible en todo el Perú",
    titlePart1: "Habla, desahógate, ",
    titleHighlight: "cuídate.",
    subtitle: "Acompañamiento psicológico por WhatsApp con un psicólogo colegiado que es solo tuyo. Sin cámara, sin citas, sin salas de espera. Escribe cuando puedas; te respondemos en máximo 24 horas.",
    primaryCta: "Hablar con un psicólogo por WhatsApp",
    secondaryCta: "Ver cómo funciona el chat",
    microcopy: "Desde S/ 89 al mes · Semana de prueba S/ 25 · Cancela cuando quieras · Devolución en la primera semana",
    chatBadge: "Conversación de ejemplo",
    floatingChat: {
      userMsg: "Hoy fue un día muy pesado en el trabajo…",
      userTime: "20:14",
      therapistMsg: "Te leo. Cuéntame con calma, aquí estoy para escucharte.",
      therapistTime: "20:16",
    },
    trustItems: [
      {
        icon: "ShieldCheck",
        title: "Privacidad cuidada",
        desc: "Chats cifrados por WhatsApp",
      },
      {
        icon: "UserCheck",
        title: "Psicólogo colegiado fijo",
        desc: "Siempre la misma persona",
      },
      {
        icon: "Clock",
        title: "Horarios flexibles",
        desc: "Escribe cuando puedas",
      },
      {
        icon: "HeartHandshake",
        title: "Sin juicios",
        desc: "Un espacio para ti",
      },
    ],
  },

  problem: {
    eyebrow: "Una urgencia nacional",
    title: "Encontrar un psicólogo de confianza no debería ser tan difícil, estés donde estés.",
    description: "Pedir ayuda puede significar viajar horas, pagar de más o callarse. Y en Lima también hay barreras: el tiempo, el costo y el miedo a ser juzgado.",
    stats: [
      {
        value: "8 de cada 10",
        label: "Personas que necesitan atención en salud mental no reciben un tratamiento adecuado.",
        source: "Defensoría del Pueblo (Andina, 2022)",
      },
      {
        value: "12 %",
        label: "De las personas con algún trastorno mental logra acceder a servicios de salud mental.",
        source: "INSM, 2021, citado por la PUCP",
      },
      {
        value: "S/ 100–300",
        label: "Cuesta una sesión privada. Cuatro sesiones al mes pueden superar los S/ 400.",
        source: "Gestión, 2026",
      },
      {
        value: "10 por 100 mil",
        label: "Psicólogos por cada 100 mil habitantes.",
        source: "OMS, citado por Diario Correo",
      },
    ],
    map: {
      title: "La distancia no debería ser un obstáculo para cuidarte.",
      instruction: "Toca o pasa el cursor por cada región para ver qué sabemos.",
      quote: "Por eso creamos Mente en Línea: acompañamiento profesional que llega a ti, no al revés.",
      footnote: "Cifras del Minsa difundidas por Andina; año por confirmar. Mente en Línea está disponible por WhatsApp en todo el Perú.",
      regions: [
        {
          id: "loreto",
          name: "Loreto",
          text: "Según el director de Salud Mental del Minsa, cerca del 95 % no podría acceder a atención en salud mental.",
          color: "forest",
        },
        {
          id: "lima",
          name: "Lima y Callao",
          text: "En Lima, 70 % no tiene acceso a servicios de salud mental.",
          color: "mint",
        },
        {
          id: "piura",
          name: "Piura",
          text: "Sin dato regional publicado. Mente en Línea llega por WhatsApp.",
          color: "sage",
        },
        {
          id: "lambayeque",
          name: "Lambayeque",
          text: "Sin dato regional publicado. Mente en Línea llega por WhatsApp.",
          color: "sage",
        },
        {
          id: "ucayali",
          name: "Ucayali",
          text: "Sin dato regional publicado. Mente en Línea llega por WhatsApp.",
          color: "sage",
        },
        {
          id: "madrededios",
          name: "Madre de Dios",
          text: "Sin dato regional publicado. Mente en Línea llega por WhatsApp.",
          color: "sage",
        },
        {
          id: "puno",
          name: "Puno",
          text: "Sin dato regional publicado. Mente en Línea llega por WhatsApp.",
          color: "sage",
        },
      ]
    }
  },

  howItWorks: {
    eyebrow: "Paso a paso",
    title: "Cuidar tu bienestar en 4 pasos",
    subtitle: "Sin citas rígidas ni apps nuevas. Todo ocurre en WhatsApp, la app que ya usas.",
    guaranteeNote: "Si no respondemos en 24 horas (de lunes a sábado), te regalamos un día de servicio.",
    steps: [
      {
        number: "01",
        title: "Escríbenos por WhatsApp",
        description: "Te contamos cómo funciona, el precio y el alcance del servicio.",
      },
      {
        number: "02",
        title: "Cuéntanos cómo estás",
        description: "Aceptas el consentimiento informado y completas un triaje breve. Un psicólogo colegiado lo revisa en máximo 24 horas para asegurarnos de que este es el apoyo adecuado para ti.",
      },
      {
        number: "03",
        title: "Conoce a tu psicólogo",
        description: "Te asignamos un psicólogo colegiado fijo. Es siempre la misma persona, nunca un bot.",
      },
      {
        number: "04",
        title: "Conversa a tu ritmo",
        description: "Escribe o manda notas de voz de hasta 5 minutos a cualquier hora. Tu psicólogo responde de lunes a sábado, en dos bloques: de 12:00 a 14:00 y de 20:00 a 22:00.",
      },
    ],
  },

  chatDemo: {
    eyebrow: "Así se siente",
    title: "Así de natural y seguro se siente usar Mente en Línea",
    subtitle: "Es como escribirle a alguien de confianza, pero con un psicólogo colegiado que sabe cómo ayudarte.",
    mentiWelcome: "¡Hola! Soy MENTI, la mascota de Mente en Línea. Elige una situación para ver cómo podría ser una conversación.",
    headerTitle: "Tu psicólogo · Colegiado",
    headerStatus: "en línea · Lun a Sáb",
    headerBadge: "Ejemplo",
    ctaButton: "Empezar mi chat en WhatsApp",
    footnote: "Conversación de ejemplo con fines ilustrativos.",
    situations: [
      {
        id: "sobrecarga",
        label: "Sobrecarga laboral",
        userMsg: "Siento que el trabajo me sobrepasa y no sé cómo frenar.",
        psychologistReply: "Te leo con atención. Sentir sobrecarga constante desgasta mucho. Si te parece, esta semana podemos empezar ordenando tus prioridades del día y marcando una pausa breve para respirar. ¿En qué momento del día sientes más tensión?",
      },
      {
        id: "dormir",
        label: "Dificultad para dormir",
        userMsg: "Me cuesta dormir pensando en mis pendientes y en el futuro.",
        psychologistReply: "Gracias por contármelo. Cuando la mente no para, dormir se complica. Podemos ir viendo qué pensamientos aparecen a esa hora y probar una rutina suave antes de dormir. ¿Qué es lo que más te da vueltas por las noches?",
      },
      {
        id: "servicio",
        label: "Cómo funciona el servicio",
        userMsg: "¿Cómo son las notas de voz y los horarios de respuesta?",
        psychologistReply: "Puedes escribirme o mandarme notas de voz de hasta 5 minutos a cualquier hora. Respondo de lunes a sábado, en dos bloques: de 12:00 a 14:00 y de 20:00 a 22:00. Así tienes un espacio para pensar a tu ritmo, sin la presión de una videollamada.",
      },
    ],
  },

  benefits: {
    eyebrow: "Qué incluye",
    title: "Acompañamiento pensado para tu vida real",
    subtitle: "Diseñado para adaptarse a tus horarios, tu presupuesto y tu privacidad.",
    items: [
      {
        span: 7,
        title: "Un psicólogo fijo",
        description: "Siempre la misma persona. No tienes que contar tu historia desde cero.",
        icon: "UserCheck",
      },
      {
        span: 5,
        title: "Respuesta en 24 h",
        description: "Escribe cuando puedas; te respondemos de lunes a sábado. Si no cumplimos, te regalamos un día.",
        icon: "Clock",
      },
      {
        span: 4,
        title: "Sin cámara, sin cita, sin app nueva",
        description: "Todo ocurre en WhatsApp, la app que ya usas cada día.",
        icon: "Smartphone",
      },
      {
        span: 4,
        title: "S/ 89 al mes, precio claro",
        description: "Cuesta menos que una sola sesión privada (S/ 100 a S/ 300, Gestión 2026).",
        icon: "PiggyBank",
      },
      {
        span: 4,
        title: "Audio-resumen mensual",
        description: "Cada mes recibes un audio con tus avances y objetivos.",
        icon: "FileAudio",
      },
      {
        span: 12,
        title: "Tu seguridad primero",
        description: "Revisamos tu caso desde el inicio. Si hace falta más apoyo, te orientamos a una sesión en vivo o a la Línea 113.",
        icon: "ShieldAlert",
      },
    ],
  },

  quiz: {
    eyebrow: "Guía de inicio rápido",
    title: "¿Por dónde empezar? Descúbrelo en 1 minuto",
    subtitle: "Responde 4 preguntas breves y te sugerimos cómo empezar.",
    notice: "Este test es una guía para empezar, no un diagnóstico ni una evaluación psicológica. Tus respuestas no se guardan; solo se envían si tú tocas el botón.",
    urgentLinkText: "¿Es urgente? Ver ayuda inmediata",
    urgentAnchor: "#crisis",
    questions: [
      {
        id: 1,
        question: "¿Qué te gustaría trabajar principalmente en este momento?",
        options: [
          "Estrés o ansiedad",
          "Ánimo bajo o desmotivación",
          "Relaciones personales o familiares",
          "Cansancio por el trabajo",
          "Quiero desahogarme con un profesional",
        ],
      },
      {
        id: 2,
        question: "¿Cuándo sueles poder escribir?",
        options: [
          "En las mañanas",
          "A mediodía",
          "En las noches",
          "Depende del día",
        ],
      },
      {
        id: 3,
        question: "¿Has tenido acompañamiento psicológico antes?",
        options: [
          "Sí",
          "No",
          "Prefiero no decirlo",
        ],
      },
      {
        id: 4,
        question: "¿Desde dónde nos escribes?",
        options: [
          "Lima y Callao",
          "Costa (otras regiones)",
          "Sierra",
          "Selva",
          "Prefiero no decirlo",
        ],
      },
    ],
  },

  calculatorB2C: {
    eyebrow: "Calculadora de ahorro",
    title: "Cuidarte cuesta menos de lo que crees",
    subtitle: "Compara cuánto gastarías en 4 sesiones al mes con tu acompañamiento mensual.",
    controlLabel: "Costo por sesión presencial",
    min: 40,
    max: 300,
    step: 10,
    defaultVal: 100,
    errorMsg: "Ingresa un valor entre S/ 40 y S/ 300.",
    row1Label: "4 sesiones presenciales al mes",
    row2Label: "Mente en Línea, por chat de lunes a sábado — S/ 89 al mes",
    badgeLabel: "Tu ahorro estimado",
    monthlyLabel: "al mes",
    comparisonLabel: "frente a sesiones presenciales",
    annualPrefix: "Ahorro al año: S/",
    noSavingsText: "Con este valor no hay ahorro mensual.",
    referenceText: "Referencia: sesión privada S/ 100–300 (Gestión, 2026); en línea, desde S/ 40 (Psicología y Mente).",
    noteText: "Mente en Línea es orientación y acompañamiento por chat; no equivale a una sesión de psicoterapia presencial.",
    ctaText: "Empezar a cuidarme",
  },

  pricing: {
    eyebrow: "Planes claros",
    title: "Elige cómo quieres empezar",
    subtitle: "Sin contratos de permanencia ni cobros ocultos.",
    b2bBanner: {
      text: "S/ 20 por colaborador al mes + IGV · Mínimo 50 colaboradores · Piloto de 30 a 60 días",
      cta: "Solicitar piloto para mi empresa",
    },
    plans: [
      {
        id: "prueba",
        name: "Semana de prueba",
        description: "Conoce cómo es el chat con tu psicólogo antes de suscribirte.",
        priceText: "S/ 25",
        periodText: "por 7 días",
        badge: null,
        features: [
          "7 días de acompañamiento",
          "Psicólogo colegiado asignado",
          "Respuesta de lunes a sábado",
          "Texto y notas de voz",
          "Garantía de respuesta en 24 h",
        ],
        ctaText: "Probar por S/ 25",
        whatsappMessage: "Hola, me gustaría empezar con la Semana de prueba de S/ 25 en Mente en Línea.",
        highlighted: false,
        isWaitlist: false,
      },
      {
        id: "mensual",
        name: "Acompañamiento mensual",
        description: "Para cuidar tu bienestar día a día con tu psicólogo colegiado.",
        priceText: "S/ 89",
        periodText: "al mes · IGV incluido",
        badge: "Recomendado",
        features: [
          "Psicólogo colegiado fijo",
          "Respuesta cada día de lunes a sábado",
          "Notas de voz de hasta 5 minutos",
          "Audio-resumen mensual",
          "Derivación a sesión en vivo si hace falta",
          "Devolución en la primera semana",
        ],
        ctaText: "Elegir plan mensual",
        whatsappMessage: "Hola, deseo suscribirme al plan Acompañamiento Mensual de S/ 89 en Mente en Línea.",
        highlighted: true,
        isWaitlist: false,
      },
      {
        id: "trimestral",
        name: "Prepago trimestral",
        description: "Un solo pago y tres meses de acompañamiento.",
        priceText: "S/ 239",
        periodText: "por 3 meses · unos S/ 79.67 al mes",
        badge: "Ahorras S/ 28",
        features: [
          "Todo lo del plan mensual",
          "Un solo pago por 3 meses",
        ],
        ctaText: "Elegir trimestral",
        whatsappMessage: "Hola, deseo adquirir el Prepago Trimestral de S/ 239 en Mente en Línea.",
        highlighted: false,
        isWaitlist: false,
      },
      {
        id: "plus",
        name: "Plan Plus",
        description: "Estamos preparando un nuevo plan. Déjanos tu aviso por WhatsApp y te contamos cuando esté disponible.",
        priceText: null,
        periodText: null,
        badge: "Próximamente",
        features: [],
        ctaText: "Avisarme cuando esté disponible",
        whatsappMessage: "Hola, quisiera anotarme en la lista de espera para el Plan Plus de Mente en Línea.",
        highlighted: false,
        isWaitlist: true,
      },
    ],
    footnote: "Pagas por Yape, Plin o transferencia · Sin cargos ocultos · Cancela cuando quieras; tu servicio sigue hasta el final del periodo pagado.",
  },

  trustPrivacy: {
    eyebrow: "Seguridad y confianza",
    title: "Tu confianza y tu privacidad, bien cuidadas",
    subtitle: "Así cuidamos tu proceso, desde el primer mensaje.",
    pillars: [
      {
        title: "Psicólogos titulados y colegiados",
        desc: "Verificamos su colegiatura y habilitación en el registro del Colegio de Psicólogos del Perú (CPsP).",
        icon: "GraduationCap",
        requiresVerification: true,
      },
      {
        title: "Consentimiento informado",
        desc: "Conoces el alcance y los límites del servicio antes de pagar.",
        icon: "FileCheck",
        requiresVerification: false,
      },
      {
        title: "Datos mínimos",
        desc: "Chats cifrados por WhatsApp. No tomamos capturas de tus conversaciones y solo guardamos lo necesario para atenderte.",
        icon: "LockKeyhole",
        requiresVerification: false,
      },
      {
        title: "Protección de datos personales",
        desc: "Tratamos tus datos de forma responsable y según la Ley 29733.",
        icon: "FileSpreadsheet",
        requiresVerification: false,
      },
    ],
    limits: {
      title: "Lo que sí hacemos y lo que no",
      subtitle: "Te decimos con claridad qué puedes esperar.",
      yes: [
        "Orientación y acompañamiento psicológico por chat para manejar el estrés, la ansiedad y las situaciones del día a día.",
        "Escucha profesional y continua con tu psicólogo colegiado.",
        "Herramientas de autocuidado y objetivos semanales.",
      ],
      no: [
        "No somos un servicio de emergencias.",
        "No damos diagnósticos ni recetas.",
        "No reemplazamos un tratamiento clínico.",
        "No atendemos a menores de 18 años.",
      ],
    },
    crisis: {
      title: "¿Estás en crisis o en peligro?",
      text1: "Si piensas en hacerte daño o estás en peligro, no esperes: llama gratis a la Línea 113 Salud, opción 5 (salud mental), las 24 horas.",
      textPhonesPrefix: "WhatsApp o Telegram de MINSA Infosalud:",
      phones: ["955 557 000", "952 842 623"],
      text2: "También puedes acudir al centro de salud o al Centro de Salud Mental Comunitario más cercano.",
      buttonText: "Llamar al 113",
      buttonTel: "tel:113",
    },
  },

  faq: {
    eyebrow: "Resolvemos tus dudas",
    title: "Preguntas frecuentes",
    subtitle: "Respuestas directas y honestas para que tomes una decisión informada.",
    items: [
      {
        question: "¿Mi psicólogo es una persona real y está colegiado?",
        answer: VERIFICACION_COLEGIATURA
          ? "Sí. Es una persona real, nunca un bot, y siempre es la misma. Verificamos su colegiatura y habilitación en el registro del Colegio de Psicólogos del Perú."
          : "Sí. Es una persona real, nunca un bot, y siempre es la misma. Nuestro equipo está formado exclusivamente por psicólogos titulados y colegiados.",
      },
      {
        question: "¿Es terapia psicológica?",
        answer: "Es orientación y acompañamiento psicológico por chat con un psicólogo colegiado: escucha, contención emocional, pautas prácticas y seguimiento a tu ritmo. No reemplaza un tratamiento clínico.",
      },
      {
        question: "¿Quién ve lo que escribo o grabo?",
        answer: "Tu conversación es entre tú y tu psicólogo. Tus chats van cifrados por WhatsApp, no tomamos capturas y guardamos solo los datos mínimos. Si tu empresa contrata el servicio, nunca ve tus mensajes.",
      },
      {
        question: "¿Qué pasa si estoy en crisis?",
        answer: "Mente en Línea no es un servicio de emergencias. Si estás en peligro o piensas en hacerte daño, llama gratis a la Línea 113 (salud mental) o acude al centro de salud más cercano. Si al evaluar tu caso detectamos riesgo, tu psicólogo te orienta a una sesión en vivo o a esas líneas.",
      },
      {
        question: "¿Cómo pago?",
        answer: "Por Yape, Plin o transferencia, por adelantado, antes de activar tu chat. Puedes cancelar cuando quieras; tu servicio sigue hasta el final del periodo pagado.",
      },
      {
        question: "¿Qué pasa si no me gusta?",
        answer: "Si en tu primera semana no estás conforme, te devolvemos tu dinero por el mismo medio de pago.",
      },
      {
        question: "¿Y si no me responden en 24 horas?",
        answer: "Si no te respondemos en 24 horas (de lunes a sábado), te regalamos un día de servicio.",
      },
      {
        question: "¿Atienden a menores de 18 años?",
        answer: "No. El servicio es solo para mayores de 18 años.",
      },
      {
        question: "Si mi empresa lo contrata, ¿puede leer mis mensajes?",
        answer: "No. Recursos Humanos solo recibe reportes agregados de grupos de al menos 10 personas, sin nombres, chats ni diagnósticos.",
      },
    ],
    contactPrompt: "¿Tienes otra duda? Pregúntanos por WhatsApp →",
  },

  forBusiness: {
    eyebrow: "Bienestar emocional para empresas",
    title: "Bienestar emocional para equipos en cualquier rincón del Perú",
    description: "El 82 % de los trabajadores peruanos reporta estrés laboral o burnout (Bumeran, 2024). Ofrece a tu equipo un beneficio accesible, confidencial y fácil de implementar, sin importar en qué región trabaje.",
    cards: [
      {
        title: "Cobertura nacional",
        description: "La misma calidad para tu personal en planta, minas, almacenes o teletrabajo.",
        icon: "Globe",
      },
      {
        title: "100% confidencial",
        description: "RR. HH. solo recibe reportes de grupos de mínimo 10 personas. Nunca nombres, chats ni diagnósticos.",
        icon: "Shield",
      },
      {
        title: "Complemento a tu prevención de riesgos psicosociales",
        description: "Suma a tu programa (Ley 29783); no lo reemplaza.",
        icon: "Scale",
      },
      {
        title: "Piloto de 30 a 60 días",
        description: "Prueba el servicio con un grupo y mide satisfacción antes de ampliar.",
        icon: "Zap",
      },
    ],
    simulator: {
      title: "Calcula la inversión para tu equipo",
      label: "Nº de colaboradores",
      min: 50,
      max: 500,
      step: 10,
      defaultVal: 100,
      pricePerWorker: 20,
      igvRate: 0.18,
      minError: "El mínimo es de 50 colaboradores.",
      marks: [
        { val: 50, label: "50 (mínimo)" },
        { val: 150, label: "150" },
        { val: 500, label: "500+" },
      ],
      resultHeader: "Inversión mensual estimada",
      rateText: "S/ 20 + IGV por colaborador al mes",
      bullets: [
        "Reportes trimestrales agregados para RR. HH.",
        "Privacidad individual cuidada",
        "Coordinamos contigo el inicio del piloto",
      ],
      note: "Precio: S/ 20 por colaborador al mes + IGV. Mínimo 50 colaboradores.",
      cta: "Solicitar piloto para mi empresa",
    },
  },

  finalCta: {
    chip: "Estamos listos para escucharte",
    title: "Tu bienestar está más cerca de lo que piensas.",
    subtitle: "Da el primer paso hoy. Con un mensaje es suficiente.",
    buttonText: "Escríbenos por WhatsApp",
    trio: [
      "Psicólogo colegiado",
      "Respuesta en máx. 24 h",
      "Devolución la primera semana",
    ],
  },

  footer: {
    emergencyNotice: "Mente en Línea no atiende emergencias. Si necesitas ayuda urgente: Línea 113, opción 5 (gratis, 24 h).",
    emergencyButton: "Llamar al 113",
    description: "Orientación y acompañamiento psicológico por WhatsApp con psicólogos colegiados, para todo el Perú.",
    navLinks: [
      { label: "Cómo funciona", href: "#como-funciona" },
      { label: "Beneficios", href: "#beneficios" },
      { label: "Planes", href: "#planes" },
      { label: "Preguntas frecuentes", href: "#faq" },
      { label: "Para empresas", href: "#empresas" },
      { label: "Contacto", href: "#contacto" },
    ],
    copyright: "© 2026 Mente en Línea. Todos los derechos reservados.",
    whatsappDisplay: "+51 977 162 440",
    coverageNotice: "Disponible por WhatsApp en todo el Perú",
  },
};
