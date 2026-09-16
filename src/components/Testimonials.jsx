import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, MessageCircle, MapPin, Heart } from 'lucide-react';

/**
 * Sección de Testimonios y Prueba Social
 * Diseñado con avatares tipográficos sin fotos de stock y aviso de fines de presentación.
 */
export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "María T.",
      location: "Iquitos, Loreto",
      service: "Acompañamiento Integral (CPsP)",
      tag: "Ansiedad y Estrés",
      text: "En Iquitos es muy difícil conseguir una cita con un psicólogo clínico sin esperar semanas en el hospital. Poder escribir por WhatsApp cuando me daban los picos de angustia y recibir respuestas tan empáticas y profundas de mi terapeuta me cambió la vida.",
      initials: "MT",
      avatarBg: "bg-sage-100 dark:bg-sage-950 text-sage-700 dark:text-sage-300 border-sage-200 dark:border-sage-800"
    },
    {
      id: 2,
      name: "Jorge R.",
      location: "Juliaca, Puno",
      service: "Plan Social Supervisado",
      tag: "Duelo Familiar",
      text: "En mi entorno aún hay mucho prejuicio: si vas al psicólogo, la gente piensa que estás mal. Con Mente en Línea todo es 100% privado en mi WhatsApp. Respondí a mi tiempo desde mi taller y el practicante supervisado me dio herramientas que de verdad me ayudaron.",
      initials: "JR",
      avatarBg: "bg-lavender-100 dark:bg-lavender-950 text-lavender-700 dark:text-lavender-300 border-lavender-200 dark:border-lavender-800"
    },
    {
      id: 3,
      name: "Camila S.",
      location: "San Juan de Lurigancho, Lima",
      service: "Acompañamiento Integral (CPsP)",
      tag: "Sobrecarga Laboral",
      text: "Vivo en Lima pero entre el trabajo y las 2 horas de tráfico me era imposible sostener una terapia presencial de S/ 150 por sesión. Los mensajes y notas de voz me permitieron reflexionar en mis propios tiempos sin la presión de una videollamada rígida.",
      initials: "CS",
      avatarBg: "bg-calmblue-100 dark:bg-calmblue-950 text-calmblue-700 dark:text-calmblue-300 border-calmblue-200 dark:border-calmblue-800"
    }
  ];

  return (
    <section id="testimonios" className="py-28 md:py-36 bg-warm-cream dark:bg-sand-950 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado con Jerarquía Tipográfica Clara */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sage-100 dark:bg-sage-900/60 text-xs font-semibold text-sage-800 dark:text-sage-300 uppercase tracking-wider mb-4"
          >
            <Heart className="w-3.5 h-3.5 text-sage-600" />
            <span>Historias de Acompañamiento</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-5xl md:text-5xl lg:text-6xl text-sand-900 dark:text-sand-50 mb-4 tracking-tight"
          >
            La tranquilidad de sentirse escuchado
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-sand-700 dark:text-sand-300 font-normal leading-relaxed"
          >
            Conectamos a personas de la selva, la sierra y la costa con un espacio seguro, cercano y sin barreras.
          </motion.p>

          {/* Texto discreto de transparencia académica */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-3 text-xs text-sand-500 dark:text-sand-400 italic"
          >
            Testimonios ilustrativos con fines de presentación
          </motion.div>
        </div>

        {/* Grid de 3 Tarjetas de Testimonio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white/95 dark:bg-sand-900/80 rounded-3xl p-8 border border-sand-200/90 dark:border-sand-800 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Cabecera de la tarjeta: Estrellas + Badge de motivo */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-sand-100 dark:bg-sand-800 text-sand-800 dark:text-sand-200 border border-sand-200 dark:border-sand-700">
                    {item.tag}
                  </span>
                </div>

                {/* Ícono de comilla suave */}
                <Quote className="w-8 h-8 text-sage-400/40 mb-3" />

                {/* Texto del testimonio */}
                <p className="text-sm text-sand-700 dark:text-sand-300 leading-relaxed font-normal mb-8">
                  "{item.text}"
                </p>
              </div>

              {/* Pie con Avatar de Iniciales y Ciudad */}
              <div className="pt-5 border-t border-sand-100 dark:border-sand-800/80 flex items-center gap-3.5">
                {/* Avatar con iniciales */}
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-display font-bold text-sm border ${item.avatarBg} shadow-xs shrink-0`}>
                  {item.initials}
                </div>
                
                <div className="flex flex-col min-w-0">
                  <span className="font-display font-bold text-sm text-sand-900 dark:text-sand-50 truncate">
                    {item.name}
                  </span>
                  <span className="text-xs text-sand-600 dark:text-sand-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-sage-600" />
                    {item.location}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
