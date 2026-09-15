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
      description: "Cada psicólogo titulado pasa por una verificación rigurosa de su número de colegiatura activa en el Colegio de Psicólogos del Perú antes de atender a cualquier usuario.",
      tag: "100% Colegiados Habilitados"
    },
    {
      icon: GraduationCap,
      title: "Supervisión Clínica para Practicantes",
      description: "Nuestros practicantes son estudiantes de últimos ciclos de facultades acreditadas. Cada caso es revisado semanalmente en comités clínicos con un psicólogo senior supervisor.",
      tag: "Acompañamiento Ético Guiado"
    },
    {
      icon: Lock,
      title: "Privacidad y Cifrado WhatsApp",
      description: "Aprovechamos la infraestructura de WhatsApp con encriptación de extremo a extremo. Ni terceros, ni operadoras, ni nosotros podemos intervenir o comercializar tus conversaciones.",
      tag: "Confidencialidad Médica"
    },
    {
      icon: FileText,
      title: "Consentimiento Claro desde el Día 1",
      description: "Antes de iniciar, recibes un resumen sencillo sobre el alcance del acompañamiento, horarios de respuesta acordados y límites del servicio, sin letras chicas engañosas.",
      tag: "Transparencia Total"
    }
  ];

  return (
    <section id="seguridad" className="py-24 relative bg-sand-50 dark:bg-sand-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-100 dark:bg-sage-900/50 text-xs font-semibold text-sage-800 dark:text-sage-300 uppercase tracking-wider mb-3">
            <HeartHandshake className="w-3.5 h-3.5" />
            Rigurosidad Ética y Humana
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-sand-900 dark:text-sand-50 mb-4">
            Tu tranquilidad y confianza están en manos protegidas
          </h2>
          <p className="text-base sm:text-lg text-sand-800 dark:text-sand-300">
            Hacer la salud mental accesible no significa recortar en calidad clínica. Cuidamos cada interacción con los más altos estándares profesionales del Perú.
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
                className="bg-white/80 dark:bg-sand-900/60 p-8 rounded-3xl border border-sand-200/80 dark:border-sand-800 shadow-xs flex flex-col justify-between"
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

        {/* Cita de Compromiso Profesional */}
        <div className="bg-sage-50/70 dark:bg-sage-950/40 rounded-3xl p-6 sm:p-8 border border-sage-200/70 dark:border-sage-900 flex flex-col sm:flex-row items-center gap-6 max-w-4xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-sage-600 text-white flex items-center justify-center shrink-0 shadow-md">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-base text-sand-900 dark:text-sand-100 mb-1">
              Código de Ética y Deontología Profesional
            </h4>
            <p className="text-xs sm:text-sm text-sand-800 dark:text-sand-300 leading-relaxed">
              Todos los profesionales adscritos a Mente en Línea operan bajo los lineamientos del Colegio de Psicólogos del Perú y la Ley de Salud Mental N° 30947, garantizando el respeto irrestricto al secreto profesional y la dignidad del usuario.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
