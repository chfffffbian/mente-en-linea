import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, TrendingUp, Users, DollarSign, Stethoscope, MapPin } from 'lucide-react';
import { CONTENT } from '../content';
import PeruMap from './PeruMap';

export default function ProblemBento() {
  const { problem } = CONTENT;

  const statIcons = [AlertCircle, Users, DollarSign, Stethoscope];

  return (
    <section id="problema" className="py-20 md:py-28 bg-cream-surface/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sage-200/60 text-forest text-xs font-bold uppercase tracking-wider mb-4">
            <AlertCircle className="w-3.5 h-3.5 text-forest" />
            <span>{problem.eyebrow}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-text-primary tracking-tight leading-tight mb-5">
            {problem.title}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
            {problem.description}
          </p>
        </div>

        {/* Bento Grid Principal: 4 Tarjetas de Cifras Verificadas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problem.stats.map((stat, index) => {
            const Icon = statIcons[index] || AlertCircle;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-cream-card rounded-3xl p-6 sm:p-7 border border-sand-300 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-sage-100 flex items-center justify-center text-forest mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="font-display font-extrabold text-3xl sm:text-4xl text-forest tracking-tight mb-2">
                    {stat.value}
                  </div>
                  <h3 className="text-sm font-bold text-text-primary mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-normal">
                    {stat.description}
                  </p>
                </div>

                {/* Fuente Oficial en letra pequeña */}
                <div className="pt-4 mt-6 border-t border-sand-200/80 text-[11px] text-text-muted italic">
                  Fuente: {stat.source}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mapa Interactivo del Perú con Realidad Regional */}
        <div className="bg-cream-card rounded-3xl border border-sand-300 p-6 sm:p-10 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Explicación y Cierre de Urgencia */}
            <div className="lg:col-span-5 text-left space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-surface border border-sand-300 text-xs font-semibold text-text-secondary">
                <MapPin className="w-3.5 h-3.5 text-sage" />
                <span>Explora la realidad regional</span>
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-text-primary tracking-tight">
                La distancia física no puede seguir siendo un obstáculo para sanar.
              </h3>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                Toca o pasa el cursor sobre cada región para conocer la brecha de atención. En comunidades de la selva o el altiplano, las personas esperan meses por una cita médica presencial.
              </p>
              
              <div className="p-4 rounded-2xl bg-cream-surface border border-sand-300 text-sm text-forest font-semibold">
                "{problem.closing}"
              </div>
            </div>

            {/* Componente del Mapa SVG */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="w-full max-w-lg">
                <PeruMap />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
