import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, MessageCircle, Sparkles, Building2, HelpCircle, Shield } from 'lucide-react';

export default function Pricing({ onOpenB2BModal }) {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'weekly'
  const [planType, setPlanType] = useState('b2c'); // 'b2c' | 'b2b'

  const b2cPlans = [
    {
      name: "Plan Social Guiado",
      tagline: "Para estudiantes o quienes buscan dar su primer paso con apoyo accesible.",
      badge: "Tarifa Solidaria",
      priceMonthly: 49,
      priceWeekly: 15,
      practitioner: "Practicante de últimos ciclos supervisado por un psicólogo senior",
      features: [
        "Acompañamiento 100% por WhatsApp",
        "Mensajes de texto y notas de voz",
        "Respuestas estructuradas 3 veces por semana",
        "Supervisión clínica continua de cada caso",
        "Sin permanencia: cancelas cuando quieras",
      ],
      ctaText: "Elegir Plan Social por WhatsApp",
      waMessage: "Hola, quisiera iniciar con el Plan Social de S/ 49/mes con practicante supervisado.",
      popular: false,
    },
    {
      name: "Plan Acompañamiento Integral",
      tagline: "Nuestro servicio más elegido. Acompañamiento profesional personalizado continuo.",
      badge: "Más Recomendado",
      priceMonthly: 89,
      priceWeekly: 25,
      practitioner: "Psicólogo(a) Colegiado(a) habilitado(a) en el CPsP",
      features: [
        "Acompañamiento prioritario por WhatsApp",
        "Mensajes de texto y audios sin límite",
        "Respuestas y seguimiento clínico diario (lun a vie)",
        "Herramientas y ejercicios de gestión emocional",
        "Evaluación periódica de evolución emocional",
        "Totalmente privado y confidencial",
      ],
      ctaText: "Elegir Plan Integral por WhatsApp",
      waMessage: "Hola, me interesa el Plan Acompañamiento Integral de S/ 89/mes con psicólogo colegiado CPsP.",
      popular: true,
    }
  ];

  return (
    <section id="precios" className="py-24 bg-sand-100/40 dark:bg-sand-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-100 dark:bg-sage-900/60 text-xs font-semibold text-sage-800 dark:text-sage-300 uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Precios Claros y Transparentes
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-sand-900 dark:text-sand-50 mb-4">
            Salud mental de calidad al alcance de tu bolsillo
          </h2>
          <p className="text-base sm:text-lg text-sand-800 dark:text-sand-300">
            Compara el costo de una sola sesión presencial tradicional (S/ 150) con un mes entero de acompañamiento continuo.
          </p>

          {/* Selector de audiencia: Individual vs Empresa */}
          <div className="inline-flex p-1.5 rounded-2xl bg-sand-200/80 dark:bg-sand-800/80 mt-8 border border-sand-300/60 dark:border-sand-700/60">
            <button
              onClick={() => setPlanType('b2c')}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${
                planType === 'b2c'
                  ? 'bg-white dark:bg-sand-900 text-sand-900 dark:text-sand-50 shadow-sm'
                  : 'text-sand-800 dark:text-sand-300 hover:text-sand-900'
              }`}
            >
              Para Personas (B2C)
            </button>
            <button
              onClick={() => setPlanType('b2b')}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5 ${
                planType === 'b2b'
                  ? 'bg-white dark:bg-sand-900 text-sand-900 dark:text-sand-50 shadow-sm'
                  : 'text-sand-800 dark:text-sand-300 hover:text-sand-900'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Para Empresas (B2B)</span>
            </button>
          </div>
        </div>

        {/* Vista B2C: Personas */}
        {planType === 'b2c' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            {b2cPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-200 ${
                  plan.popular
                    ? 'bg-white dark:bg-sand-900 border-2 border-sage-500 shadow-xl'
                    : 'bg-white/80 dark:bg-sand-900/60 border border-sand-200 dark:border-sand-800 shadow-xs'
                }`}
              >
                {/* Badge de Plan Destacado */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-sage-600 text-white text-xs font-bold tracking-wide shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display font-bold text-xl text-sand-900 dark:text-sand-50">
                      {plan.name}
                    </h3>
                    {!plan.popular && (
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-sand-100 dark:bg-sand-800 text-sand-800 dark:text-sand-300 font-medium">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-sand-800 dark:text-sand-300 mb-6 leading-relaxed">
                    {plan.tagline}
                  </p>

                  {/* Bloque de Precio */}
                  <div className="mb-6 p-4 rounded-2xl bg-sand-50 dark:bg-sand-950/60 border border-sand-100 dark:border-sand-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-display font-extrabold text-sand-900 dark:text-sand-50">
                        S/ {plan.priceMonthly}
                      </span>
                      <span className="text-xs text-sand-800 dark:text-sand-300 font-medium">/ mes completo</span>
                    </div>
                    <div className="text-[11px] text-sage-800 dark:text-sage-400 mt-1 font-medium">
                      O aprox. S/ {plan.priceWeekly} por semana
                    </div>
                  </div>

                  {/* Quien atiende */}
                  <div className="mb-6 pb-6 border-b border-sand-100 dark:border-sand-800 text-xs text-sand-800 dark:text-sand-300 flex items-start gap-2">
                    <Shield className="w-4 h-4 text-sage-600 dark:text-sage-400 shrink-0 mt-0.5" />
                    <span><strong>Atendido por:</strong> {plan.practitioner}</span>
                  </div>

                  {/* Lista de características */}
                  <ul className="space-y-3 mb-8 text-xs sm:text-sm text-sand-800 dark:text-sand-300">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-sage-600 dark:text-sage-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Botón CTA a WhatsApp */}
                <a
                  href={`https://wa.me/51999999999?text=${encodeURIComponent(plan.waMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-sm ${
                    plan.popular
                      ? 'bg-sage-600 hover:bg-sage-700 text-white shadow-sage-600/20 hover:shadow-md'
                      : 'bg-sand-100 hover:bg-sand-200 dark:bg-sand-800 dark:hover:bg-sand-700 text-sand-800 dark:text-sand-100'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{plan.ctaText}</span>
                </a>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Vista B2B: Empresas */
          <div className="max-w-3xl mx-auto bg-white dark:bg-sand-900 rounded-3xl p-8 sm:p-10 border border-sand-200 dark:border-sand-800 shadow-xl">
            <div className="text-center max-w-lg mx-auto mb-8">
              <span className="px-3 py-1 rounded-full bg-sage-100 dark:bg-sage-900/60 text-sage-800 dark:text-sage-300 text-xs font-bold uppercase tracking-wider">
                Para Empresas e Instituciones
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-sand-900 dark:text-sand-50 mt-3 mb-2">
                Planes EAP desde S/ 25 a S/ 35 por colaborador
              </h3>
              <p className="text-xs sm:text-sm text-sand-800 dark:text-sand-300">
                Tarifas escalonadas según el tamaño de tu equipo, con cobertura 24/7 y reportes anónimos para RRHH.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-center">
              <div className="p-4 rounded-2xl bg-sand-50 dark:bg-sand-950 border border-sand-200 dark:border-sand-800">
                <div className="text-xs text-sand-800 dark:text-sand-300 mb-1">De 10 a 50 personas</div>
                <div className="text-2xl font-bold text-sand-900 dark:text-sand-100">S/ 35</div>
                <div className="text-[11px] text-sand-800 dark:text-sand-300">colaborador / mes</div>
              </div>
              <div className="p-4 rounded-2xl bg-sand-50 dark:bg-sand-950 border border-sand-200 dark:border-sand-800">
                <div className="text-xs text-sand-800 dark:text-sand-300 mb-1">De 51 a 150 personas</div>
                <div className="text-2xl font-bold text-sand-900 dark:text-sand-100">S/ 30</div>
                <div className="text-[11px] text-sand-800 dark:text-sand-300">colaborador / mes</div>
              </div>
              <div className="p-4 rounded-2xl bg-sage-50 dark:bg-sage-950 border border-sage-200 dark:border-sage-800">
                <div className="text-xs text-sage-800 dark:text-sage-300 mb-1">Más de 150 personas</div>
                <div className="text-2xl font-bold text-sage-700 dark:text-sage-300">S/ 25</div>
                <div className="text-[11px] text-sage-800 dark:text-sage-400">colaborador / mes</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenB2BModal}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-sage-600 hover:bg-sage-700 text-white font-semibold text-sm shadow-md transition-all"
              >
                Solicitar cotización personalizada para mi empresa
              </button>
              <a
                href="https://wa.me/51999999999?text=Hola%20Mente%20en%20L%C3%ADnea,%20quisiera%20cotizar%20el%20servicio%20para%20los%20colaboradores%20de%20mi%20empresa."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-sand-100 dark:bg-sand-800 text-sand-800 dark:text-sand-100 font-semibold text-sm hover:bg-sand-200 transition-all text-center"
              >
                Hablar con un asesor B2B
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
