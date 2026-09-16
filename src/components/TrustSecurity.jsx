import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, GraduationCap, Lock, FileText, CheckCircle, HeartHandshake } from 'lucide-react';

/**
 * Sección de Confianza, Ética y Supervisión Profesional (CPsP)
 */
export default function TrustSecurity() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Verificación en el CPsP",
      description: "Verificamos la colegiatura y habilitación vigente de cada psicólogo en el CPsP.",
      tag: "100% Colegiados Habilitados"
    },
    {
      icon: GraduationCap,
      title: "Practicantes Supervisados",
      description: "Cada practicante trabaja bajo supervisión semanal de un psicólogo colegiado.",
      tag: "Formación Supervisada"
    },
    {
      icon: Lock,
      title: "Privacidad y Cifrado WhatsApp",
      description: "Conversaciones protegidas con cifrado de extremo a extremo por WhatsApp. 100% privadas.",
      tag: "Confidencialidad Médica"
    },
    {
      icon: FileText,
      title: "Consentimiento Claro desde el Día 1",
      description: "Alcances, acuerdos y tiempos de respuesta claros desde el primer mensaje, sin sorpresas.",
      tag: "Transparencia Total"
    }
  ];

  return (
    <section id="seguridad" className="py-28 md:py-36 relative bg-warm-cream dark:bg-sand-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado con Jerarquía Tipográfica Clara */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-100 dark:bg-sage-900/50 text-xs font-semibold text-sage-800 dark:text-sage-300 uppercase tracking-wider mb-4">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Rigurosidad Ética y Humana</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-5xl lg:text-6xl text-sand-900 dark:text-sand-50 mb-5 tracking-tight">
            Tu tranquilidad y confianza están en manos protegidas
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-sand-700 dark:text-sand-300 font-normal leading-relaxed">
            Atención profesional y confidencial con los más altos estándares éticos del país.
          </p>
        </div>

        {/* Grid de 4 Pilares de Seguridad */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/95 dark:bg-sand-900/60 p-8 rounded-3xl border border-sand-200/90 dark:border-sand-800 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-sage-100 dark:bg-sage-950 text-sage-600 dark:text-sage-400 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-sand-100 dark:bg-sand-800 text-sand-800 dark:text-sand-300 border border-sand-200 dark:border-sand-700">
                      {pillar.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-sand-900 dark:text-sand-100 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-sand-800 dark:text-sand-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Cita de Compromiso Profesional con Fotografía Cálida */}
        <div className="bg-sage-50/70 dark:bg-sage-950/40 rounded-3xl p-6 sm:p-8 border border-sage-200/70 dark:border-sage-900 flex flex-col md:flex-row items-center gap-6 max-w-4xl mx-auto overflow-hidden">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 shadow-xs border border-sage-200/60 dark:border-sage-800/60">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
              alt="Especialista colegiada en consulta empática"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-sage-800 dark:text-sage-300 uppercase tracking-wider mb-1.5">
              <ShieldCheck className="w-4 h-4 text-sage-600 dark:text-sage-400" />
              <span>Código de Ética y Deontología Profesional</span>
            </div>
            <p className="text-xs sm:text-sm text-sand-800 dark:text-sand-300 leading-relaxed font-normal">
              Atención regida por el Colegio de Psicólogos del Perú y la Ley de Salud Mental N° 30947, con estricto secreto profesional.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
