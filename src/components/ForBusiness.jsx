import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Globe, Shield, Scale, Zap, ArrowRight, MessageCircle, Check } from 'lucide-react';
import { CONTENT, getWhatsAppUrl } from '../content';

export default function ForBusiness() {
  const { b2b } = CONTENT;
  const [collaborators, setCollaborators] = useState(100);

  const priceNet = b2b.pricePerCollab * collaborators;
  const igv = priceNet * b2b.igvRate;
  const totalWithIgv = priceNet + igv;

  const icons = [Globe, Shield, Scale, Zap];

  const formatCurrency = (val) => {
    return val.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  };

  return (
    <section id="empresas" className="py-20 md:py-32 bg-[#12201A] text-[#E6F0EB] relative overflow-hidden">
      
      {/* Fondo con resplandores suaves oscuros */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#1F4D3A]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#7FD6A5]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado B2B */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1B2E25] border border-[#7FD6A5]/30 text-[#7FD6A5] text-xs font-bold uppercase tracking-wider mb-4">
            <div className="w-4 h-4 text-[#7FD6A5]">
              <img
                src="/assets/logo-icon-hq.svg"
                alt=""
                aria-hidden="true"
                width="16"
                height="16"
                className="w-full h-full object-contain filter invert opacity-90"
              />
            </div>
            <span>{b2b.eyebrow}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-5">
            {b2b.title}
          </h2>
          <p className="text-base sm:text-lg text-sand-300 leading-relaxed font-normal">
            {b2b.subtitle}
          </p>
        </div>

        {/* 4 Tarjetas de Pilares B2B */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {b2b.cards.map((card, index) => {
            const Icon = icons[index] || Globe;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1B2E25] rounded-3xl p-6 sm:p-7 border border-[#263F33] hover:border-[#7FD6A5]/40 transition-all duration-200 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-[#12201A] border border-[#263F33] text-[#7FD6A5] flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-sand-300 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#263F33] text-[11px] text-[#7FD6A5] flex items-center gap-1.5 font-medium">
                  <Check className="w-3.5 h-3.5" />
                  <span>Mente en Línea Empresas</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Calculadora B2B Interactiva */}
        <div className="bg-[#1B2E25] border border-[#263F33] rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input y Sliders */}
            <div className="lg:col-span-7 text-left space-y-6">
              <div>
                <span className="text-xs font-bold text-[#7FD6A5] uppercase tracking-wider block mb-1">
                  Simulador de inversión
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                  {b2b.calculatorTitle}
                </h3>
                <p className="text-xs sm:text-sm text-sand-300">
                  Piloto flexible de 30 a 60 días para equipos a nivel nacional.
                </p>
              </div>

              {/* Slider de Colaboradores */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-baseline text-sm">
                  <span className="text-sand-300">Nº de colaboradores:</span>
                  <span className="font-display font-extrabold text-2xl text-white">
                    {collaborators} colaboradores
                  </span>
                </div>

                <input
                  type="range"
                  min={b2b.minCollaborators}
                  max={500}
                  step={10}
                  value={collaborators}
                  onChange={(e) => setCollaborators(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#12201A] rounded-lg appearance-none cursor-pointer accent-[#7FD6A5]"
                  aria-label="Número de colaboradores"
                />

                <div className="flex justify-between text-xs text-sand-400">
                  <span>50 (Mínimo piloto)</span>
                  <span>150 (Mediana empresa)</span>
                  <span>500+ (Corporación)</span>
                </div>
              </div>

              {/* Nota sobre beneficio preventivo */}
              <div className="p-4 rounded-2xl bg-[#12201A] border border-[#263F33] text-xs space-y-1.5 text-sand-300">
                <p className="leading-relaxed">
                  Complemento a la prevención de riesgos psicosociales (Ley 29783) para cuidar la salud emocional de tu equipo y favorecer un clima laboral saludable.
                </p>
              </div>
            </div>

            {/* Tarjeta de Resumen Financiero B2B */}
            <div className="lg:col-span-5 bg-[#12201A] border border-[#263F33] p-6 sm:p-8 rounded-2xl text-left flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[11px] font-bold text-sand-400 uppercase tracking-widest block mb-1">
                  Inversión mensual estimada
                </span>
                
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-1">
                  S/ {formatCurrency(totalWithIgv)}
                  <span className="text-xs font-normal text-sand-400 block mt-0.5">
                    con IGV incluido (neto S/ {formatCurrency(priceNet)})
                  </span>
                </div>

                <div className="text-xs text-[#7FD6A5] font-semibold mt-3 pt-3 border-t border-[#263F33]">
                  S/ 20 + IGV por colaborador al mes
                </div>

                <ul className="text-xs text-sand-300 space-y-2 mt-4">
                  {b2b.benefitsList.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#7FD6A5] shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={getWhatsAppUrl(`Hola, deseo solicitar una propuesta para un piloto de 30 días para mi empresa (${collaborators} colaboradores).`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-full bg-[#7FD6A5] hover:bg-[#6ec292] text-[#12201A] font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-[#12201A]/20" />
                <span>{b2b.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
