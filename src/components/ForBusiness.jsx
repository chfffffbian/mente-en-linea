import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield, Scale, Zap, ArrowRight, MessageCircle, Check } from 'lucide-react';
import { CONTENT, getWhatsAppUrl } from '../content';

export default function ForBusiness() {
  const { forBusiness } = CONTENT;
  const { simulator } = forBusiness;
  
  const [collaborators, setCollaborators] = useState(simulator.defaultVal);
  const [inputVal, setInputVal] = useState(String(simulator.defaultVal));
  const [errorMsg, setErrorMsg] = useState('');

  const icons = [Globe, Shield, Scale, Zap];

  const handleSliderChange = (e) => {
    const val = Number(e.target.value);
    setCollaborators(val);
    setInputVal(String(val));
    setErrorMsg('');
  };

  const handleInputChange = (e) => {
    const raw = e.target.value;
    setInputVal(raw);
    const parsed = Number(raw);

    if (isNaN(parsed) || raw.trim() === '' || parsed < simulator.min) {
      setErrorMsg(simulator.minError);
      setCollaborators(simulator.min);
    } else {
      setErrorMsg('');
      setCollaborators(Math.min(simulator.max, parsed));
    }
  };

  const formatCurrency = (val) => {
    return val.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  };

  const priceNet = simulator.pricePerWorker * collaborators;
  const totalWithIgv = priceNet * (1 + simulator.igvRate);

  const whatsappMsg = `Hola, quiero información sobre un piloto de Mente en Línea para mi empresa (${collaborators} colaboradores).`;

  return (
    <section id="empresas" className="py-20 lg:py-28 bg-[#12201A] text-[#FBF8F3] relative overflow-hidden">
      
      {/* Resplandores oscuros de fondo */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#1F4D3A]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#7FD6A5]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-[1216px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <div className="max-w-[800px] mx-auto text-center mb-16">
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
            <span>{forBusiness.eyebrow}</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-5 [text-wrap:balance]">
            {forBusiness.title}
          </h2>

          <p className="text-base sm:text-lg text-[#DCE9DD]/90 leading-relaxed font-normal">
            {forBusiness.description}
          </p>
        </div>

        {/* 4 Tarjetas de Pilares (sin etiquetas inferiores) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {forBusiness.cards.map((card, index) => {
            const Icon = icons[index] || Globe;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1B2E25] rounded-3xl p-6 sm:p-7 border border-[#263F33] hover:border-[#7FD6A5]/40 transition-all duration-200 text-left flex flex-col justify-start"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#12201A] border border-[#263F33] text-[#7FD6A5] flex items-center justify-center mb-5 shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-[#DCE9DD]/80 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Simulador Interactivo */}
        <div className="bg-[#1B2E25] border border-[#263F33] rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Input y Sliders */}
            <div className="lg:col-span-7 text-left space-y-6">
              <div>
                <span className="text-xs font-bold text-[#7FD6A5] uppercase tracking-wider block mb-1">
                  Simulador de inversión
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                  {simulator.title}
                </h3>
              </div>

              {/* Control de Colaboradores */}
              <div className="space-y-4 pt-2">
                <div className="flex justify-between items-baseline text-sm">
                  <label htmlFor="collab-input" className="text-sm text-[#DCE9DD]">
                    {simulator.label}:
                  </label>
                  
                  <div className="flex items-center gap-2">
                    <input
                      id="collab-input"
                      type="number"
                      min={simulator.min}
                      max={simulator.max}
                      step={simulator.step}
                      value={inputVal}
                      onChange={handleInputChange}
                      className="w-20 px-2.5 py-1 rounded-xl bg-[#12201A] border border-[#263F33] text-sm font-bold text-white text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7FD6A5]"
                      aria-label="Número de colaboradores"
                    />
                    <span className="font-display font-extrabold text-xl sm:text-2xl text-white">
                      colaboradores
                    </span>
                  </div>
                </div>

                {/* Error de validación si < 50 */}
                {errorMsg && (
                  <p className="text-xs font-semibold text-[#FF8E7E] animate-shake">
                    {errorMsg}
                  </p>
                )}

                <input
                  type="range"
                  min={simulator.min}
                  max={simulator.max}
                  step={simulator.step}
                  value={collaborators}
                  onChange={handleSliderChange}
                  className="w-full h-2.5 bg-[#12201A] rounded-lg appearance-none cursor-pointer accent-[#7FD6A5]"
                  aria-label="Número de colaboradores"
                  aria-valuetext={`${collaborators} colaboradores`}
                />

                {/* Marcas en su posición real (50 -> 0%, 150 -> 22.2%, 500+ -> 100%) */}
                <div className="relative text-[11px] font-semibold text-[#DCE9DD]/70 h-5">
                  <span className="absolute left-0">50 (mínimo)</span>
                  <span className="absolute left-[22.22%] -translate-x-1/2">150</span>
                  <span className="absolute right-0">500+</span>
                </div>
              </div>

              {/* Nota oficial */}
              <div className="pt-2 text-xs text-[#DCE9DD]/70">
                <p>{simulator.note}</p>
              </div>
            </div>

            {/* Tarjeta de Resumen Financiero */}
            <div className="lg:col-span-5 bg-[#12201A] border border-[#263F33] p-6 sm:p-8 rounded-2xl text-left flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-bold text-[#DCE9DD]/70 uppercase tracking-widest block mb-2">
                  {simulator.resultHeader}
                </span>
                
                {/* Total con IGV */}
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-1 whitespace-nowrap">
                  S/ {formatCurrency(totalWithIgv)}
                </div>

                {/* Neto con espacios normales */}
                <div className="text-xs text-[#DCE9DD]/80">
                  con IGV incluido (neto S/ {formatCurrency(priceNet)})
                </div>

                <div className="text-xs text-[#7FD6A5] font-semibold mt-3 pt-3 border-t border-[#263F33]">
                  {simulator.rateText}
                </div>

                {/* Bullets */}
                <ul className="text-xs text-[#DCE9DD]/90 space-y-2 mt-4">
                  {simulator.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#7FD6A5] shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botón CTA */}
              <a
                href={getWhatsAppUrl(whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-full bg-[#7FD6A5] hover:bg-[#6ec292] text-[#12201A] font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7FD6A5]"
              >
                <MessageCircle className="w-4 h-4 fill-[#12201A]/20" />
                <span>{simulator.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
