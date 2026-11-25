import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, Smile, Lock, Award, ShieldCheck, Quote } from 'lucide-react';
import { CONTENT } from '../content';

export default function Testimonials() {
  const { testimonials } = CONTENT;

  const icons = [Smile, Lock, Award];

  return (
    <section className="py-20 md:py-28 bg-cream-surface/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sage-200/60 text-forest text-xs font-bold uppercase tracking-wider mb-4">
            <HeartHandshake className="w-3.5 h-3.5 text-forest" />
            <span>{testimonials.eyebrow}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-text-primary tracking-tight mb-4">
            {testimonials.title}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
            {testimonials.subtitle}
          </p>
        </div>

        {/* 3 Compromisos Éticos Fundamentales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.commitments.map((item, index) => {
            const Icon = icons[index] || Smile;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-cream-card rounded-3xl p-8 border border-sand-300 shadow-soft text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sage-100 text-forest flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-text-primary tracking-tight mb-3">
                    "{item.title}"
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-sand-200/80 flex items-center gap-2 text-xs font-semibold text-forest">
                  <ShieldCheck className="w-4 h-4 text-whatsapp-green" />
                  <span>Compromiso verificado</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Nota de Transparencia Ética */}
        <div className="max-w-2xl mx-auto text-center p-4 rounded-2xl bg-cream-card border border-sand-300 text-xs text-text-muted italic">
          {testimonials.note}
        </div>

      </div>
    </section>
  );
}
