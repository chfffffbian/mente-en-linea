import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Users, DollarSign, Stethoscope, MapPin } from 'lucide-react';
import { CONTENT } from '../content';
import PeruMap from './PeruMap';

export default function ProblemBento() {
  const { problem } = CONTENT;
  const [activeRegion, setActiveRegion] = useState(problem.map.regions[0]);

  const statIcons = [AlertCircle, Users, DollarSign, Stethoscope];

  return (
    <section id="problema" className="py-20 lg:py-28 bg-[#F7F1E8] relative">
      <div className="max-w-[1216px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="max-w-[800px] mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#DCE9DD] text-[#1F4D3A] text-xs font-bold uppercase tracking-wider mb-4">
            <AlertCircle className="w-3.5 h-3.5 text-[#1F4D3A]" />
            <span>{problem.eyebrow}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1E2A24] tracking-tight leading-tight mb-5 [text-wrap:balance]">
            {problem.title}
          </h2>
          <p className="text-base sm:text-lg text-[#5B6B62] leading-relaxed font-normal">
            {problem.description}
          </p>
        </div>

        {/* 4 Tarjetas de Estadísticas (cifra con nowrap y clamp(32px,4vw,48px); fuente siempre completa) */}
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
                className="bg-[#FBF8F3] rounded-3xl p-6 sm:p-7 border border-[rgba(31,77,58,0.12)] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-[#DCE9DD] flex items-center justify-center text-[#1F4D3A] mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  {/* Cifra con nowrap y clamp(32px, 4vw, 48px) */}
                  <div className="font-display font-extrabold text-[#1F4D3A] tracking-tight mb-2 whitespace-nowrap text-[clamp(32px,4vw,48px)] leading-none">
                    {stat.value}
                  </div>

                  <p className="text-sm font-medium text-[#1E2A24] leading-relaxed mb-3">
                    {stat.label}
                  </p>
                </div>

                {/* Fuente Oficial Completa */}
                <div className="pt-4 mt-4 border-t border-[rgba(31,77,58,0.1)] text-xs text-[#5B6B62] italic">
                  {stat.source}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bloque Mapa Interactivo (2 columnas iguales, gap 48; móvil: mapa primero) */}
        <div className="bg-[#FBF8F3] rounded-3xl border border-[rgba(31,77,58,0.12)] p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Columna Izquierda (en móvil va después del mapa) */}
            <div className="order-2 lg:order-1 text-left space-y-6">
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCE9DD] text-xs font-semibold text-[#1F4D3A]">
                <MapPin className="w-3.5 h-3.5 text-[#1F4D3A]" />
                <span>Realidad regional</span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#1E2A24] tracking-tight leading-snug">
                {problem.map.title}
              </h3>

              <p className="text-sm sm:text-base text-[#5B6B62] leading-relaxed">
                {problem.map.instruction}
              </p>

              {/* Cita destacada */}
              <blockquote className="p-4 rounded-2xl bg-[#DCE9DD]/50 border border-[rgba(31,77,58,0.15)] text-sm sm:text-base text-[#1F4D3A] font-semibold italic">
                "{problem.map.quote}"
              </blockquote>

              {/* Chips de Región (alto 44px) */}
              <div>
                <span className="text-xs font-bold text-[#1F4D3A] uppercase tracking-wider block mb-3">
                  Regiones para consultar:
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {problem.map.regions.map((reg) => {
                    const isSelected = activeRegion.id === reg.id;
                    return (
                      <button
                        key={reg.id}
                        onClick={() => setActiveRegion(reg)}
                        className={`h-11 px-4 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4D3A] ${
                          isSelected
                            ? 'bg-[#1F4D3A] text-[#FBF8F3] shadow-sm scale-105'
                            : 'bg-[#F7F1E8] border border-[rgba(31,77,58,0.15)] text-[#1E2A24] hover:bg-[#DCE9DD]/60'
                        }`}
                        aria-pressed={isSelected}
                      >
                        {reg.name}
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Columna Derecha: Mapa Interactivo SVG (en móvil va primero) */}
            <div className="order-1 lg:order-2 flex justify-center">
              <PeruMap
                activeRegion={activeRegion}
                onSelectRegion={setActiveRegion}
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
