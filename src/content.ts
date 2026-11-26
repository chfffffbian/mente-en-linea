/**
 * FUENTE ÚNICA DE VERDAD - MENTE EN LÍNEA
 * Edita este archivo para modificar textos, precios, preguntas, constantes de contacto y configuraciones.
 */

// Constantes de contacto
export const WHATSAPP_NUMBER = "+51999999999"; // Reemplazar con el número oficial de recepción
export const WHATSAPP_DISPLAY = "(+51) 999 999 999";
export const CONTACT_EMAIL = ""; // Vacío hasta contar con el dominio propio; si está vacío, la fila de email se oculta.
export const MINSA_113_ROUTE = "opción 5"; // Ruta de marcado MINSA (salud mental)
export const MINSA_INFOSALUD_1 = "955 557 000";
export const MINSA_INFOSALUD_2 = "952 842 623";

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
    subtitle: "Acompañamiento por WhatsApp",
    instagram: "@menteenlineaperu",
    tiktok: "@menteenlineaperu",
    instagramUrl: "https://instagram.com/menteenlineaperu",
    tiktokUrl: "https://tiktok.com/@menteenlineaperu",
  },

  navbar: {
    announcement: "Respuesta garantizada en 24 h o te regalamos un día de servicio.",
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
    },
    b2b: {
      badge: "Bienestar laboral y SST para empresas",
      titlePart1: "Cuidamos la salud mental de tu equipo, ",
      titleHighlight: "estén donde estén.",
      subtitle: "Beneficio de orientación psicológica confidencial por WhatsApp para colaboradores en Lima y regiones. Complemento a tu prevención de riesgos psicosociales (Ley 29783).",
      primaryCta: "Solicitar piloto para mi empresa",
      secondaryCta: "Calcular inversión empresarial",
      microcopy: "S/ 20 por colaborador/mes + IGV · Mínimo 50 trabajadores · Piloto de 30 a 60 días",
      chatBadge: "Conversación de ejemplo",
      floatingChat: {
        userMsg: "Hola, ingresé con el código de mi empresa.",
        userTime: "12:30",
        therapistMsg: "¡Hola! Tu espacio es 100% privado y confidencial. ¿Cómo estás hoy?",
        therapistTime: "12:32",
      },
    },
    trustItems: [
      {
        icon: "ShieldCheck",
        title: "Confidencialidad cuidada",
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
    description: "En el Perú, casi la mitad de los psicólogos está en Lima. Fuera de la capital, pedir ayuda puede significar viajar horas, pagar de más o callarse. Y en Lima también hay barreras: el tiempo, el costo y el miedo a ser juzgado.",
    closing: "Por eso creamos Mente en Línea: acompañamiento profesional que llega a ti, no al revés.",
    stats: [
      {
        value: "80%+",
        label: "Brecha de atención en regiones como Loreto, Puno y Piura",
        description: "",
        note: "Cifra referencial; hasta cerca de 89% en Loreto y Puno.",
        source: "",
      },
      {
        value: "9 de cada 10",
        label: "Personas con un problema de salud mental no reciben ayuda profesional",
        description: "",
        note: "Estimación referencial.",
        source: "",
      },
      {
        value: "S/ 100 – S/ 300",
        label: "Cuesta una sesión privada",
        description: "Cuatro sesiones al mes pueden superar los S/ 400.",
        note: "",
        source: "Gestión, 2026.",
      },
      {
        value: "10 psicólogos",
        label: "Por cada 100 mil habitantes",
        description: "",
        note: "",
        source: "OMS, citado por Caretas, 2023.",
      },
    ],
  },

  howItWorks: {
    eyebrow: "Paso a paso",
    title: "Cuidar tu bienestar en 4 pasos",
    subtitle: "Sin citas rígidas ni instalaciones pesadas. Todo ocurre en la app que ya tienes en el bolsillo.",
    guaranteeNote: "Si no respondemos en 24 horas (de lunes a sábado), te regalamos un día de servicio.",
    steps: [
      {
        number: "01",
        title: "Escríbenos por WhatsApp",
        description: "Te contamos cómo funciona, el precio y el alcance del servicio. Respuesta en menos de una hora.",
        tag: "Primer contacto",
      },
      {
        number: "02",
        title: "Cuéntanos cómo estás",
        description: "Aceptas el consentimiento informado y completas un triaje breve. Un psicólogo colegiado lo revisa en máximo 24 horas para asegurarnos de que este es el apoyo adecuado para ti.",
        tag: "Triaje y consentimiento",
      },
      {
        number: "03",
        title: "Conoce a tu psicólogo",
        description: "Te asignamos un psicólogo colegiado fijo. Es siempre la misma persona, nunca un bot.",
        tag: "Asignación fija",
      },
      {
        number: "04",
        title: "Conversa a tu ritmo",
        description: "Escribe o manda notas de voz a cualquier hora. Tu psicólogo colegiado responde de lunes a sábado.",
        tag: "Acompañamiento continuo",
      },
    ],
  },

  chatDemo: {
    eyebrow: "Experiencia interactiva",
    title: "Así de natural y seguro se siente usar Mente en Línea",
    subtitle: "Es como escribirle a alguien de confianza, pero con un profesional colegiado que sabe cómo ayudarte.",
    disclaimer: "Conversación de ejemplo con fines ilustrativos.",
    featureCardTitle: "Sin cámara ni consultorio frío",
    featureCardText: "Escribes cuando te sientas listo.",
    conversations: [
      {
        id: "estres",
        tabLabel: "Sobrecarga laboral",
        userPrompt: "Me siento muy abrumado con el trabajo y no sé cómo frenar.",
        therapistReply: "Te leo con atención. Sentir sobrecarga constante desgasta mucho. Esta semana podemos empezar ordenando tus prioridades del día y marcando una pausa breve para respirar. ¿En qué momento del día sientes el mayor pico de tensión?",
        audioDuration: "1:42",
        exerciseNote: "Pauta sugerida: pausa breve al mediodía para regular la respiración.",
      },
      {
        id: "insomnio",
        tabLabel: "Dificultad para dormir",
        userPrompt: "Me cuesta mucho dormir pensando en mis pendientes y el futuro.",
        therapistReply: "Es comprensible que tu mente siga activa si no ha tenido un momento de cierre. Te propongo anotar tus pendientes en un papel antes de acostarte para sacarlos de la cabeza. Vamos a probarlo esta noche con calma.",
        audioDuration: "2:10",
        exerciseNote: "Pauta sugerida: descarga de pendientes en cuaderno físico antes de dormir.",
      },
      {
        id: "dinamica",
        tabLabel: "Dinámica del servicio",
        userPrompt: "¿Cómo es la dinámica de los audios y los horarios de respuesta?",
        therapistReply: "Puedes escribirme o enviarme notas de voz a cualquier hora. Reviso y respondo de lunes a sábado con atención y sin prisas, para que reflexiones a tu propio ritmo.",
        audioDuration: "1:15",
        exerciseNote: "Pauta sugerida: escribe o graba cuando lo necesites, sin citas fijas.",
      },
    ],
  },

  benefits: {
    eyebrow: "Ventajas reales",
    title: "Acompañamiento pensado para tu vida real",
    subtitle: "Diseñado para adaptarse a tus horarios, tu presupuesto y tu privacidad.",
    items: [
      {
        title: "Un psicólogo fijo",
        description: "Siempre la misma persona. No tienes que contar tu historia desde cero.",
        result: "Continuidad",
        icon: "UserCheck",
      },
      {
        title: "Respuesta en 24 h",
        description: "Escribe cuando puedas; te respondemos de lunes a sábado. Si no cumplimos, te regalamos un día.",
        result: "Compromiso",
        icon: "Clock",
      },
      {
        title: "Sin cámara, sin cita, sin app nueva",
        description: "Todo ocurre en WhatsApp, la app que ya usas cada día.",
        result: "Cero fricción",
        icon: "Smartphone",
      },
      {
        title: "S/ 89 al mes, precio claro",
        description: "Menos de lo que cuesta una sola sesión privada de rango medio.",
        result: "Accesible",
        icon: "PiggyBank",
      },
      {
        title: "Audio-resumen mensual",
        description: "Cada mes recibes un audio con tus avances y objetivos.",
        result: "Seguimiento",
        icon: "FileAudio",
      },
      {
        title: "Tu seguridad primero",
        description: "Revisamos tu caso desde el inicio. Si hace falta más apoyo, te orientamos a una sesión en vivo o a la Línea 113.",
        result: "Cuidado responsable",
        icon: "ShieldAlert",
      },
    ],
  },

  quiz: {
    eyebrow: "Guía de inicio rápido",
    title: "¿Por dónde empezar? Descúbrelo en 1 minuto",
    subtitle: "Responde 4 preguntas breves y te orientamos sobre el acompañamiento ideal para tu situación.",
    disclaimer: "Este test es una guía para empezar, no un diagnóstico ni una evaluación psicológica.",
    questions: [
      {
        id: 1,
        question: "¿Qué te gustaría trabajar principalmente en este momento?",
        options: [
          { text: "Estrés, ansiedad o sobrecarga mental" },
          { text: "Bajo estado de ánimo, desmotivación o tristeza" },
          { text: "Dificultades en relaciones personales o familiares" },
          { text: "Agotamiento laboral o sobrecarga" },
          { text: "Necesito desahogarme con un profesional neutral" },
        ],
      },
      {
        id: 2,
        question: "¿En qué momentos del día sueles tener espacio para escribir?",
        options: [
          { text: "Por las mañanas, antes de empezar mis actividades" },
          { text: "A la hora de almuerzo o pausas del día" },
          { text: "Por las noches, antes de dormir" },
          { text: "A cualquier hora en que tenga un momento libre" },
        ],
      },
      {
        id: 3,
        question: "¿Habías tenido experiencia en terapia antes?",
        options: [
          { text: "Es mi primera vez buscando apoyo psicológico" },
          { text: "Sí, pero la dejé por tiempo, costo o incomodidad" },
          { text: "Nunca me sentí cómodo con citas presenciales o videollamadas" },
        ],
      },
      {
        id: 4,
        question: "¿En qué región del Perú te encuentras?",
        options: [
          { text: "Lima o Callao" },
          { text: "Selva (Loreto, Ucayali, San Martín, Madre de Dios)" },
          { text: "Sierra (Puno, Cusco, Arequipa, Junín, etc.)" },
          { text: "Costa norte (Piura, Lambayeque, La Libertad, etc.)" },
          { text: "Otra región del interior del país" },
        ],
      },
    ],
  },

  calculatorB2C: {
    eyebrow: "Calculadora de ahorro",
    title: "Cuidarte cuesta menos de lo que crees",
    subtitle: "Compara cuánto gastarías en 4 sesiones al mes con tu acompañamiento mensual.",
    sessionCostMin: 40,
    sessionCostMax: 180,
    sessionCostDefault: 90,
    monthlySessions: 4,
    menteEnLineaMonthly: 89,
    referenceText: "Sesión presencial: unos S/ 90 la hora; en línea, desde S/ 40 hasta cerca de S/ 180 (Gestión, 2026; Psicología y Mente).",
    row2Text: "Mente en Línea: acompañamiento diario por WhatsApp — S/ 89 al mes",
    mandatoryNote: "Mente en Línea es orientación y acompañamiento por chat; no equivale a una sesión de psicoterapia presencial.",
    ctaText: "Empezar a cuidarme",
  },

  promises: {
    eyebrow: "Nuestras promesas",
    title: "La tranquilidad de sentirse escuchado",
    subtitle: "Lo que puedes esperar de nosotros desde tu primer mensaje.",
    cards: [
      {
        title: "Te escuchamos sin juzgarte",
        desc: "Un espacio seguro donde hablar con naturalidad.",
        icon: "Smile",
      },
      {
        title: "Tu información es tuya",
        desc: "Chats cifrados por WhatsApp y trato de datos según la Ley 29733.",
        icon: "Lock",
      },
      {
        title: "Cumplimos lo que prometemos",
        desc: "Psicólogo colegiado asignado, respuesta en 24 h y devolución en la primera semana.",
        icon: "Award",
      },
    ],
  },

  b2b: {
    eyebrow: "Bienestar emocional para empresas",
    title: "Bienestar emocional para equipos en cualquier rincón del Perú",
    subtitle: "El 82% de los trabajadores peruanos reporta estrés laboral o burnout (Bumeran, 2024). Ofrece a tu equipo un beneficio accesible, confidencial y fácil de implementar, sin importar en qué región trabaje.",
    pricePerCollab: 20,
    igvRate: 0.18,
    minCollaborators: 50,
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
        title: "Complemento a tu prevención de riesgos psicosociales (Ley 29783)",
        description: "Suma a tu programa; no lo reemplaza.",
        icon: "Scale",
      },
      {
        title: "Piloto de 30 a 60 días",
        description: "Prueba el servicio con un grupo y mide satisfacción antes de ampliar.",
        icon: "Zap",
      },
    ],
    calculatorTitle: "Calcula la inversión para tu equipo",
    benefitsList: [
      "Reportes trimestrales agregados para RR. HH.",
      "Privacidad individual cuidada",
      "Coordinamos contigo el inicio del piloto",
    ],
    cta: "Solicitar piloto para mi empresa",
  },

  trustPrivacy: {
    eyebrow: "Seguridad y ética",
    title: "Tu tranquilidad y confianza están en manos protegidas",
    subtitle: "Conoce los estándares éticos, legales y profesionales bajo los cuales operamos.",
    pillars: [
      {
        title: "Psicólogos titulados y colegiados",
        desc: "Verificamos su colegiatura y habilitación en el registro del Colegio de Psicólogos del Perú (CPsP).",
        icon: "GraduationCap",
      },
      {
        title: "Consentimiento informado",
        desc: "Conoces el alcance y los límites del servicio antes de pagar.",
        icon: "FileCheck",
      },
      {
        title: "Datos mínimos",
        desc: "Chats cifrados por WhatsApp. No tomamos capturas de tus conversaciones y solo guardamos lo necesario para atenderte.",
        icon: "LockKeyhole",
      },
      {
        title: "Ley de Protección de Datos Personales (Ley 29733)",
        desc: "Tratamos tus datos de forma responsable y según la ley peruana.",
        icon: "FileSpreadsheet",
      },
    ],
    limitsBox: {
      title: "Lo que es Mente en Línea y lo que no",
      subtitle: "Te decimos con claridad qué puedes esperar.",
      whatWeAre: [
        "Orientación y acompañamiento psicológico por chat para manejar estrés, ansiedad y situaciones del día a día.",
        "Un espacio de escucha profesional y continuo con tu psicólogo colegiado.",
        "Herramientas de autocuidado y objetivos semanales.",
      ],
      whatWeAreNot: [
        "No es un servicio de emergencias.",
        "No emite diagnósticos ni recetas.",
        "No reemplaza un tratamiento clínico.",
        "No atiende a menores de 18 años.",
      ],
      emergencyHelpText: "Si estás en crisis, piensas en hacerte daño o estás en peligro, no esperes: llama gratis a la Línea 113 Salud, opción 5 (salud mental), las 24 horas, o escribe por WhatsApp o Telegram a MINSA Infosalud: 955 557 000 / 952 842 623. También puedes acudir al centro de salud o Centro de Salud Mental Comunitario más cercano.",
    },
  },

  pricing: {
    eyebrow: "Planes transparentes",
    title: "Salud mental al alcance de tu ritmo de vida",
    subtitle: "Elige la opción que mejor se adapte a ti. Sin contratos de permanencia ni cobros ocultos.",
    plans: [
      {
        id: "prueba",
        name: "Semana de prueba",
        price: 25,
        period: "por 7 días",
        description: "Conoce la dinámica con tu psicólogo antes de suscribirte.",
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
      },
      {
        id: "mensual",
        name: "Acompañamiento mensual",
        price: 89,
        period: "/ mes (IGV incluido)",
        description: "El plan más elegido para cuidar tu bienestar día a día con tu psicólogo colegiado.",
        badge: "Más elegido",
        features: [
          "Psicólogo colegiado fijo",
          "Respuesta cada día de lunes a sábado",
          "Notas de voz de hasta 5 minutos",
          "Audio-resumen mensual",
          "Derivación a sesión en vivo si hace falta",
          "Devolución en la primera semana",
        ],
        ctaText: "Elegir plan mensual · S/ 89",
        whatsappMessage: "Hola, deseo suscribirme al plan Acompañamiento Mensual de S/ 89 en Mente en Línea.",
        highlighted: true,
      },
      {
        id: "trimestral",
        name: "Prepago trimestral",
        price: 239,
        period: "/ 3 meses (unos S/ 79.67 al mes)",
        description: "Compromiso de mediano plazo para consolidar tu bienestar.",
        badge: "Ahorras S/ 28",
        features: [
          "Todo lo del plan mensual",
          "Un solo pago por 3 meses",
        ],
        ctaText: "Elegir prepago trimestral · S/ 239",
        whatsappMessage: "Hola, deseo adquirir el Prepago Trimestral de S/ 239 en Mente en Línea.",
        highlighted: false,
      },
      {
        id: "plus",
        name: "Plan Plus",
        price: null,
        period: "",
        description: "Pronto: acompañamiento por chat más una sesión en vivo al mes. Déjanos tu WhatsApp para avisarte.",
        badge: "Próximamente",
        features: [],
        ctaText: "Avisarme cuando esté disponible",
        whatsappMessage: "Hola, quisiera anotarme en la lista de espera para el Plan Plus de Mente en Línea.",
        highlighted: false,
        disabled: false,
        isWaitlist: true,
      },
    ],
    b2bPlan: {
      name: "Plan Empresas (B2B)",
      price: 20,
      period: "por colaborador al mes (+ IGV)",
      description: "Beneficio de salud emocional para equipos a partir de 50 colaboradores en todo el Perú.",
      features: [
        "Acompañamiento confidencial para cada colaborador",
        "Reportes trimestrales agregados para RR. HH. (min. 10 colaboradores)",
        "Complemento a tu prevención de riesgos psicosociales (Ley 29783)",
        "Piloto flexible de 30 a 60 días",
      ],
      ctaText: "Solicitar piloto para mi empresa",
      whatsappMessage: "Hola, deseo coordinar una propuesta corporativa de Mente en Línea para mi empresa.",
    },
    paymentMethods: "Pagas por Yape, Plin o transferencia · Sin cargos ocultos · Cancela cuando quieras; tu servicio sigue hasta el final del periodo pagado.",
  },

  faq: {
    eyebrow: "Resolvemos tus dudas",
    title: "Preguntas frecuentes",
    subtitle: "Respuestas directas y honestas para que tomes una decisión informada.",
    items: [
      {
        question: "¿Es terapia psicológica?",
        answer: "Es orientación y acompañamiento psicológico por chat con un psicólogo colegiado: escucha, contención emocional, pautas prácticas y seguimiento a tu ritmo. No reemplaza un tratamiento clínico.",
      },
      {
        question: "¿Mi psicólogo es una persona real y está colegiado?",
        answer: "Sí. Es una persona real, nunca un bot, y siempre es la misma. Verificamos su colegiatura y habilitación en el registro del Colegio de Psicólogos del Perú (CPsP).",
      },
      {
        question: "¿Quién ve lo que escribo o grabo?",
        answer: "Solo tú y tu psicólogo. Tus chats van cifrados por WhatsApp, no tomamos capturas y guardamos solo los datos mínimos. Si tu empresa contrata el servicio, nunca ve tus mensajes.",
      },
      {
        question: "¿Qué pasa si estoy en crisis?",
        answer: "Mente en Línea no es un servicio de emergencias. Si estás en peligro o piensas en hacerte daño, llama gratis a la Línea 113 (salud mental) o acude al centro de salud más cercano. Si en tu evaluación detectamos riesgo, tu psicólogo te orienta a una sesión en vivo o a esas líneas.",
      },
      {
        question: "¿Qué pasa si no me gusta?",
        answer: "Si en tu primera semana no estás conforme, te devolvemos tu dinero por el mismo medio de pago.",
      },
      {
        question: "¿Y si no me responden en 24 horas?",
        answer: "Te regalamos un día de servicio.",
      },
      {
        question: "¿Cómo pago?",
        answer: "Por Yape, Plin o transferencia, por adelantado, antes de activar tu chat. Te avisamos 3 días antes de renovar y puedes cancelar cuando quieras.",
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
  },

  finalCta: {
    title: "Tu bienestar está más cerca de lo que piensas.",
    subtitle: "Da el primer paso hoy. Con un mensaje es suficiente.",
    buttonText: "Escríbenos por WhatsApp",
    mascotNote: "MENTI y nuestro equipo te damos la bienvenida.",
  },

  footer: {
    description: "Orientación y acompañamiento psicológico por WhatsApp con psicólogos colegiados, para todo el Perú.",
    emergencyNotice: "Mente en Línea no atiende emergencias. Si necesitas ayuda urgente: Línea 113, opción 5 (gratis, 24 h).",
    copyright: `© ${new Date().getFullYear()} Mente en Línea. Todos los derechos reservados.`,
    navLinks: [
      { label: "Cómo funciona", href: "#como-funciona" },
      { label: "Beneficios", href: "#beneficios" },
      { label: "Empresas", href: "#empresas" },
      { label: "Planes", href: "#precios" },
      { label: "Preguntas frecuentes", href: "#faq" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
};
