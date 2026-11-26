import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Clock, Smartphone, PiggyBank, FileAudio, ShieldAlert, Check } from 'lucide-react';
import { CONTENT } from '../content';

export default function BenefitsBento() {
  const { benefits } = CONTENT;

  const icons = [UserCheck, Clock, Smartphone, PiggyBank, FileAudio, ShieldAlert];

  return (
    <section id="beneficios" className="py-20 md:py-32 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sage-200/60 text-forest text-xs font-bold uppercase tracking-wider mb-4">
            <Check className="w-3.5 h-3.5 text-forest" />
            <span>{benefits.eyebrow}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-text-primary tracking-tight mb-4">
            {benefits.title}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
            {benefits.subtitle}
          </p>
        </div>

        {/* Bento Grid de 6 Beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.items.map((item, index) => {
            const Icon = icons[index] || UserCheck;
            const isHighlight = index === 0 || index === 3;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`rounded-3xl p-7 border transition-all duration-200 flex flex-col justify-between ${
                  isHighlight
                    ? 'bg-cream-card border-forest/30 shadow-card hover:-translate-y-1'
                    : 'bg-cream-surface border-sand-300 shadow-soft hover:shadow-card hover:-translate-y-1'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-sage-100 flex items-center justify-center text-forest">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-cream-surface border border-sand-300 text-forest">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-text-primary tracking-tight mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-text-secondary leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-sand-200/80 flex items-center gap-2 text-xs font-semibold text-forest">
                  <Check className="w-4 h-4 text-forest" />
                  <span>{item.result}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
