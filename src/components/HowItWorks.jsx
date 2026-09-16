import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Sparkles, UserCheck, HeartPulse, ArrowRight } from 'lucide-react';

/**
 * Sección Cómo Funciona con 4 pasos claros, cercanos y sin tecnicismos
 */
export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Escribes un mensaje por WhatsApp",
      description: "Sin instalar nuevas aplicaciones, sin formularios pesados. Un 'Hola' basta para iniciar tu proceso en la app que ya usas todos los días.",
      highlight: "Directo y sin fricción"
    },
    {
      number: "02",
      icon: Sparkles,
      title: "Triaje empático y breve",
      description: "A través de preguntas guiadas y respetuosas, identificamos tu motivo de consulta (estrés laboral, ansiedad, duelo, pareja o crecimiento personal).",
      highlight: "100% Confidencial"
    },
    {
      number: "03",
      icon: UserCheck,
      title: "Conexión con tu profesional ideal",
      description: "Te asignamos un psicólogo verificado con colegiatura (CPsP) o un practicante supervisado de últimos ciclos, según tu preferencia y presupuesto.",
      highlight: "Criterio ético CPsP"
    },
    {
      number: "04",
      icon: HeartPulse,
      title: "Acompañamiento continuo a tu ritmo",
      description: "Comparte tus dudas, textos o audios cuando lo sientas necesario. Recibes devoluciones clínicas profundas, tareas reflexivas y apoyo sostenido.",
      highlight: "Sin presión de cámara"
    }
  ];

  return (
    <section id="como-funciona" className="py-28 md:py-36 bg-warm-cream dark:bg-sand-950 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado con Jerarquía Tipográfica Clara */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sage-100 dark:bg-sage-900/60 text-xs font-semibold text-sage-800 dark:text-sage-300 uppercase tracking-wider mb-4"
          >
            Sencillo y sin barreras
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-5xl md:text-5xl lg:text-6xl text-sand-900 dark:text-sand-50 mb-5 tracking-tight"
          >
            Cuidar tu bienestar en 4 pasos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-sand-700 dark:text-sand-300 font-normal leading-relaxed"
          >
            Diseñado para personas que valoran la privacidad, tienen horarios demandantes o prefieren expresarse escribiendo.
          </motion.p>
        </div>

        {/* Grid de Pasos con Conector Visual */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="relative bg-white/95 dark:bg-sand-900/60 backdrop-blur-xs p-7 rounded-3xl border border-sand-200/90 dark:border-sand-800 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Número y Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-black text-2xl text-sage-600/40 dark:text-sage-400/30 group-hover:text-sage-600 transition-colors">
                      {step.number}
                    </span>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-sand-100 dark:bg-sand-800 text-sand-800 dark:text-sand-300 border border-sand-200 dark:border-sand-700">
                      {step.highlight}
                    </span>
                  </div>

                  {/* Icono */}
                  <div className="w-12 h-12 rounded-2xl bg-sage-50 dark:bg-sage-950/70 border border-sage-100 dark:border-sage-800 text-sage-600 dark:text-sage-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-sage-500 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Título y Descripción */}
                  <h3 className="font-display font-bold text-lg text-sand-900 dark:text-sand-50 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-sand-800 dark:text-sand-300 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Microindicador inferior */}
                <div className="pt-5 mt-5 border-t border-sand-100 dark:border-sand-800/80 flex items-center text-xs text-sage-700 dark:text-sage-400 font-medium">
                  <span>Paso {index + 1} de 4</span>
                  {index < 3 && <ArrowRight className="w-3.5 h-3.5 ml-auto opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Banner de confort psicológico */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-14 p-5 rounded-2xl bg-lavender-50/80 dark:bg-lavender-950/30 border border-lavender-200 dark:border-lavender-900/60 text-center max-w-3xl mx-auto"
        >
          <p className="text-sm text-lavender-900 dark:text-lavender-200">
            🌿 <strong>¿Prefieres notas de voz?</strong> Muchos usuarios en regiones envían audios mientras caminan o al terminar su jornada laboral. Tu terapeuta escucha con atención y responde de forma estructurada.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
