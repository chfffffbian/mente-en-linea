import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, GraduationCap, FileCheck, LockKeyhole, FileSpreadsheet, Check, X, PhoneCall, AlertTriangle } from 'lucide-react';
import { CONTENT, VERIFICACION_COLEGIATURA, MINSA_113_ROUTE } from '../content';

export default function TrustPrivacy() {
  const { trustPrivacy } = CONTENT;

  const pillarIcons = {
    GraduationCap,
    FileCheck,
    LockKeyhole,
    FileSpreadsheet,
  };

  // Filtrar pilares: tarjeta de colegiatura solo si VERIFICACION_COLEGIATURA === true
  const visiblePillars = trustPrivacy.pillars.filter(
    (p) => !p.requiresVerification || VERIFICACION_COLEGIATURA
  );

  return (
    <section id="confianza" className="py-20 lg:py-28 bg-[#FBF8F3] relative">
      <div className="max-w-[1216px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#DCE9DD] text-[#1F4D3A] text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#1F4D3A]" />
            <span>{trustPrivacy.eyebrow}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1E2A24] tracking-tight leading-tight mb-4 [text-wrap:balance]">
            {trustPrivacy.title}
          </h2>
          <p className="text-base sm:text-lg text-[#5B6B62] leading-relaxed font-normal">
            {trustPrivacy.subtitle}
          </p>
        </div>

        {/* Tarjetas de Pilares (sin etiquetas inferiores) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {visiblePillars.map((pillar, index) => {
            const Icon = pillarIcons[pillar.icon] || FileCheck;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#F7F1E8] rounded-3xl p-7 border border-[rgba(31,77,58,0.12)] shadow-xs text-left"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#DCE9DD] text-[#1F4D3A] flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-[#1E2A24] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#5B6B62] leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bloque: Lo que sí hacemos y lo que no */}
        <div className="bg-[#F7F1E8] rounded-3xl border border-[rgba(31,77,58,0.12)] p-6 sm:p-10 mb-16 shadow-xs">
          <div className="text-center max-w-[800px] mx-auto mb-10">
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1E2A24] tracking-tight mb-2">
              {trustPrivacy.limits.title}
            </h3>
            <p className="text-sm sm:text-base text-[#5B6B62]">
              {trustPrivacy.limits.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            
            {/* Columna SÍ: Estilo --mint (#DCE9DD) */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#DCE9DD]/60 border border-[#5E7F63]/30 space-y-4">
              <span className="text-xs font-bold text-[#1F4D3A] uppercase tracking-wider block">
                Lo que sí hacemos:
              </span>
              <ul className="space-y-3 text-sm text-[#1E2A24]">
                {trustPrivacy.limits.yes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-[#1F4D3A] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Columna NO: Estilo neutro (#EFE9DE, íconos grises, sin rosa ni rojo) */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#EFE9DE] border border-[#DACDBB] space-y-4">
              <span className="text-xs font-bold text-[#5B6B62] uppercase tracking-wider block">
                Lo que no hacemos:
              </span>
              <ul className="space-y-3 text-sm text-[#5B6B62]">
                {trustPrivacy.limits.no.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <X className="w-5 h-5 text-[#5B6B62] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* BLOQUE DE AYUDA (ÚNICO; el rojo solo aquí; texto 16 px, apilado; id="crisis") */}
        <div
          id="crisis"
          className="p-8 sm:p-10 rounded-3xl bg-[#FBEDEA] border-2 border-[#A63A2E]/30 text-center space-y-5 max-w-3xl mx-auto shadow-sm"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#A63A2E]/10 text-[#A63A2E] text-xs font-bold uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 text-[#A63A2E]" />
            <span>Atención Inmediata</span>
          </div>

          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#A63A2E] tracking-tight">
            {trustPrivacy.crisis.title}
          </h3>

          <div className="space-y-3 text-base text-[#1E2A24] leading-relaxed">
            <p className="font-medium">
              Si piensas en hacerte daño o estás en peligro, no esperes: llama gratis a la <span className="font-bold">{MINSA_113_ROUTE}</span>, las 24 horas.
            </p>
            <p className="text-sm sm:text-base text-[#5B6B62]">
              {trustPrivacy.crisis.textPhonesPrefix}{' '}
              <a href="https://wa.me/51955557000" target="_blank" rel="noopener noreferrer" className="font-bold text-[#1F4D3A] underline hover:text-[#0B4A24]">
                955 557 000
              </a>
              {' · '}
              <a href="https://wa.me/51952842623" target="_blank" rel="noopener noreferrer" className="font-bold text-[#1F4D3A] underline hover:text-[#0B4A24]">
                952 842 623
              </a>
            </p>
            <p className="text-xs sm:text-sm text-[#5B6B62]">
              {trustPrivacy.crisis.text2}
            </p>
          </div>

          <div className="pt-2 flex justify-center">
            <a
              href={trustPrivacy.crisis.buttonTel}
              className="h-[52px] px-8 rounded-full bg-[#A63A2E] hover:bg-[#8F3026] text-white font-bold text-base flex items-center justify-center gap-2 shadow-md transition-all focus:outline-none focus-visible:ring-3 focus-visible:ring-[#A63A2E]"
            >
              <PhoneCall className="w-5 h-5 text-white" />
              <span>{trustPrivacy.crisis.buttonText}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
