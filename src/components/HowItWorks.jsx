import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ClipboardCheck, UserCheck, Mic, Clock, Sparkles } from 'lucide-react';
import { CONTENT, getWhatsAppUrl } from '../content';

export default function HowItWorks() {
  const { howItWorks } = CONTENT;

  const stepIcons = [MessageSquare, ClipboardCheck, UserCheck, Mic];

  return (
    <section id="como-funciona" className="py-20 md:py-32 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sage-200/60 text-forest text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-forest" />
            <span>{howItWorks.eyebrow}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-text-primary tracking-tight mb-4">
            {howItWorks.title}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
            {howItWorks.subtitle}
          </p>
        </div>

        {/* Scrollytelling de 4 Pasos con Línea de Progreso Lateral */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Línea vertical de progreso */}
          <div 
            className="hidden md:block absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-sage via-forest to-sage-200" 
            aria-hidden="true"
          />

          <div className="space-y-10 md:space-y-12">
            {howItWorks.steps.map((step, index) => {
              const Icon = stepIcons[index] || MessageSquare;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col md:flex-row items-start gap-6 bg-cream-card rounded-3xl p-6 sm:p-8 border border-sand-300 shadow-soft hover:shadow-card transition-all duration-200"
                >
                  {/* Número e Ícono */}
                  <div className="relative z-10 flex items-center justify-center shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-forest text-white flex flex-col items-center justify-center shadow-card">
                      <span className="text-[11px] font-bold text-sage-200 uppercase tracking-widest leading-none">
                        Paso
                      </span>
                      <span className="font-display font-extrabold text-xl leading-tight">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Contenido del Paso */}
                  <div className="flex-1 text-left space-y-2">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary tracking-tight">
                        {step.title}
                      </h3>
                      <span className="px-3 py-0.5 rounded-full bg-sage-200/60 text-forest text-xs font-semibold">
                        {step.highlight}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Banner de Garantía al Pie */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-5 rounded-2xl bg-cream-surface border border-sand-300 text-center flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-forest text-white flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4 text-whatsapp-green" />
            </div>
            <p className="text-xs sm:text-sm text-forest font-semibold">
              {howItWorks.guaranteeNote}
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
