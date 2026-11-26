import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, MessageSquare, ClipboardCheck, UserCheck, Mic } from 'lucide-react';
import { CONTENT } from '../content';

export default function HowItWorks() {
  const { howItWorks } = CONTENT;
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [MessageSquare, ClipboardCheck, UserCheck, Mic];

  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-[#FBF8F3] relative overflow-hidden">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado Principal */}
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#DCE9DD] text-[#1F4D3A] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#1F4D3A]" />
            <span>{howItWorks.eyebrow}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1E2A24] tracking-tight leading-tight mb-4 [text-wrap:balance]">
            {howItWorks.title}
          </h2>
          <p className="text-base sm:text-lg text-[#5B6B62] leading-relaxed font-normal">
            {howItWorks.subtitle}
          </p>
        </div>

        {/* Scrollytelling en Desktop con Columna Izquierda Sticky y Pasos a la Derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Columna Izquierda Sticky con Barra de Progreso Vertical (4 nodos) */}
          <div className="hidden lg:block lg:col-span-4 sticky top-28 space-y-6 text-left">
            <div className="bg-[#F7F1E8] p-6 rounded-3xl border border-[rgba(31,77,58,0.12)]">
              <span className="text-xs font-bold text-[#1F4D3A] uppercase tracking-wider block mb-2">
                Tu camino paso a paso
              </span>
              <p className="text-xs text-[#5B6B62] leading-relaxed mb-6">
                Acompañamiento sin fricción en la app que ya tienes en el celular.
              </p>

              {/* Barra de progreso vertical con 4 nodos */}
              <div className="relative pl-6 space-y-6 border-l-2 border-[#DCE9DD]">
                {howItWorks.steps.map((step, idx) => {
                  const isActive = activeStep === idx;
                  return (
                    <div
                      key={idx}
                      className="relative cursor-pointer"
                      onClick={() => setActiveStep(idx)}
                    >
                      {/* Nodo indicador */}
                      <span
                        className={`absolute -left-[31px] top-0.5 w-3.5 h-3.5 rounded-full border-2 transition-all ${
                          isActive
                            ? 'bg-[#1F4D3A] border-[#1F4D3A] scale-125'
                            : 'bg-[#FBF8F3] border-[#5E7F63]/50'
                        }`}
                      />
                      <span
                        className={`text-xs font-bold transition-colors block ${
                          isActive ? 'text-[#1F4D3A]' : 'text-[#5B6B62]'
                        }`}
                      >
                        Paso {step.number}: {step.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Columna Derecha con Pasos */}
          <div className="lg:col-span-8 space-y-6">
            {howItWorks.steps.map((step, index) => {
              const Icon = stepIcons[index] || MessageSquare;
              const isActive = activeStep === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onViewportEnter={() => setActiveStep(index)}
                  className={`p-6 sm:p-8 rounded-3xl border text-left transition-all duration-300 ${
                    isActive
                      ? 'bg-[#F7F1E8] border-[#1F4D3A] shadow-md'
                      : 'bg-[#F7F1E8]/70 border-[rgba(31,77,58,0.12)] shadow-xs hover:border-[#5E7F63]/40'
                  }`}
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    {/* Número e ícono */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#1F4D3A] text-[#FBF8F3] flex items-center justify-center shrink-0 shadow-xs">
                      <Icon className="w-6 h-6 text-[#DCE9DD]" />
                    </div>

                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#5E7F63] uppercase tracking-wider">
                          Paso {step.number}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-[#1E2A24] tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#5B6B62] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Nota de garantía al pie */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#DCE9DD]/60 border border-[rgba(31,77,58,0.15)] flex items-center justify-center gap-3 text-center sm:text-left text-xs sm:text-sm font-semibold text-[#1F4D3A]">
              <Clock className="w-5 h-5 text-[#1F4D3A] shrink-0" />
              <span>{howItWorks.guaranteeNote}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
