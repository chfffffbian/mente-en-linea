import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Clock, Smartphone, PiggyBank, FileAudio, ShieldAlert, Sparkles } from 'lucide-react';
import { CONTENT } from '../content';

export default function BenefitsBento() {
  const { benefits } = CONTENT;

  const icons = {
    UserCheck,
    Clock,
    Smartphone,
    PiggyBank,
    FileAudio,
    ShieldAlert,
  };

  // Mapeo explícito de clases span de 12 columnas para Tailwind
  const spanClasses = {
    7: 'lg:col-span-7',
    5: 'lg:col-span-5',
    4: 'lg:col-span-4',
    12: 'lg:col-span-12',
  };

  return (
    <section id="beneficios" className="py-20 lg:py-28 bg-[#F7F1E8] relative">
      <div className="max-w-[1216px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#DCE9DD] text-[#1F4D3A] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#1F4D3A]" />
            <span>{benefits.eyebrow}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1E2A24] leading-tight mb-4 [text-wrap:balance]">
            {benefits.title}
          </h2>
          <p className="text-base sm:text-lg text-[#5B6B62] leading-relaxed font-normal">
            {benefits.subtitle}
          </p>
        </div>

        {/* Bento Grid de 12 columnas con gap-4 (16px) en desktop, 1 columna en móvil */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {benefits.items.map((item, index) => {
            const Icon = icons[item.icon] || UserCheck;
            const spanClass = spanClasses[item.span] || 'lg:col-span-4';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`${spanClass} bg-[#FBF8F3] rounded-3xl p-7 border border-[rgba(31,77,58,0.12)] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 text-left flex flex-col justify-start`}
              >
                {/* Ícono de 48px */}
                <div className="w-12 h-12 rounded-2xl bg-[#DCE9DD] text-[#1F4D3A] flex items-center justify-center shrink-0 mb-5">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#1E2A24] mb-2">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-[#5B6B62] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
