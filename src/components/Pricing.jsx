import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, MessageCircle, ArrowRight, User, Building2 } from 'lucide-react';
import { CONTENT, getWhatsAppUrl } from '../content';

export default function Pricing() {
  const { pricing } = CONTENT;
  const [activeTab, setActiveTab] = useState('personas'); // 'personas' | 'empresas'

  const handleScrollToEmpresas = () => {
    const el = document.getElementById('empresas');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="planes" className="py-20 lg:py-28 bg-[#F7F1E8] relative">
      <div className="max-w-[1216px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado con MENTI 140px arriba */}
        <div className="max-w-[800px] mx-auto text-center mb-12">
          
          {/* MENTI (140 px) */}
          <div className="flex justify-center mb-5">
            <img
              src="/assets/menti-hq.svg"
              alt="MENTI, la mascota de Mente en Línea"
              width="140"
              height="140"
              loading="lazy"
              className="w-28 h-28 sm:w-36 sm:h-36 object-contain menti-float"
            />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#DCE9DD] text-[#1F4D3A] text-xs font-bold uppercase tracking-wider mb-4">
            <span>{pricing.eyebrow}</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1E2A24] tracking-tight leading-tight mb-4 [text-wrap:balance]">
            {pricing.title}
          </h2>

          <p className="text-base sm:text-lg text-[#5B6B62] leading-relaxed font-normal">
            {pricing.subtitle}
          </p>

          {/* Toggle único: "Para personas | Para empresas" */}
          <div className="inline-flex items-center bg-[#FBF8F3] border border-[rgba(31,77,58,0.15)] rounded-full p-1.5 mt-8 shadow-xs">
            <button
              onClick={() => setActiveTab('personas')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'personas'
                  ? 'bg-[#1F4D3A] text-[#FBF8F3] shadow-xs'
                  : 'text-[#5B6B62] hover:text-[#1E2A24]'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Para personas</span>
            </button>
            <button
              onClick={() => setActiveTab('empresas')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'empresas'
                  ? 'bg-[#1F4D3A] text-[#FBF8F3] shadow-xs'
                  : 'text-[#5B6B62] hover:text-[#1E2A24]'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Para empresas</span>
            </button>
          </div>
        </div>

        {/* Vista para Empresas cuando se activa el toggle */}
        {activeTab === 'empresas' ? (
          <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-[#FBF8F3] border-2 border-[#1F4D3A] shadow-md text-center space-y-6 animate-in fade-in">
            <span className="text-xs font-bold text-[#5E7F63] uppercase tracking-wider block">
              Bienestar emocional para tu equipo
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1E2A24]">
              {pricing.b2bBanner.text}
            </h3>
            <p className="text-sm text-[#5B6B62]">
              Reportes agregados para RR. HH. sin vulnerar la privacidad individual. Solicita una cotización o piloto para tu organización.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleScrollToEmpresas}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#1F4D3A] hover:bg-[#173B2C] text-[#FBF8F3] font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <span>{pricing.b2bBanner.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Grid de 4 Planes Personas: tarjetas de igual altura (grid items-stretch), botones abajo */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-8">
            {pricing.plans.map((plan) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 ${
                  plan.highlighted
                    ? 'bg-[#FBF8F3] border-2 border-[#1F4D3A] shadow-md scale-[1.02] z-10'
                    : 'bg-[#FBF8F3] border border-[rgba(31,77,58,0.12)] shadow-xs hover:shadow-sm'
                }`}
              >
                {/* Badge Superior */}
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3.5 py-0.5 rounded-full bg-[#1F4D3A] text-[#FBF8F3] font-bold text-[11px] uppercase tracking-wider shadow-xs whitespace-nowrap">
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Contenido Superior de la Tarjeta */}
                <div className="text-left">
                  <h3 className="font-display font-bold text-xl text-[#1E2A24] mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-[#5B6B62] leading-relaxed mb-5 min-h-[36px]">
                    {plan.description}
                  </p>

                  {/* Precio SIEMPRE en una sola línea */}
                  {plan.priceText ? (
                    <div className="mb-5 pb-5 border-b border-[rgba(31,77,58,0.1)]">
                      <div className="flex items-baseline gap-1.5 flex-wrap">
                        <span className="font-display font-extrabold text-3xl sm:text-4xl text-[#1F4D3A] whitespace-nowrap leading-none">
                          {plan.priceText}
                        </span>
                        <span className="text-xs text-[#5B6B62] whitespace-nowrap font-medium">
                          {plan.periodText}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="mb-5 pb-5 border-b border-[rgba(31,77,58,0.1)]">
                      <span className="text-sm font-bold text-[#5E7F63] block">
                        Próximamente disponible
                      </span>
                    </div>
                  )}

                  {/* Lista de Características */}
                  {plan.features.length > 0 && (
                    <ul className="space-y-2.5 text-xs sm:text-sm text-[#1E2A24] mb-6">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#1F4D3A] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Botón anclado abajo (mt-auto) */}
                <div className="pt-4 mt-auto">
                  <a
                    href={getWhatsAppUrl(plan.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-4 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-xs ${
                      plan.highlighted
                        ? 'bg-[#1F4D3A] hover:bg-[#173B2C] text-[#FBF8F3]'
                        : 'bg-[#F7F1E8] hover:bg-[#DCE9DD]/60 border border-[rgba(31,77,58,0.2)] text-[#1E2A24]'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </motion.div>
            ))}
          </div>
        )}

        {/* Pie (14 px) */}
        <p className="text-sm text-[#5B6B62] text-center max-w-2xl mx-auto pt-4 leading-relaxed">
          {pricing.footnote}
        </p>

      </div>
    </section>
  );
}
