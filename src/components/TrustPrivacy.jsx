import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, GraduationCap, FileCheck, LockKeyhole, FileSpreadsheet, AlertTriangle, PhoneCall, Check, X } from 'lucide-react';
import { CONTENT } from '../content';

export default function TrustPrivacy() {
  const { trustPrivacy } = CONTENT;

  const pillarIcons = [GraduationCap, FileCheck, LockKeyhole, FileSpreadsheet];

  return (
    <section id="seguridad" className="py-20 md:py-32 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sage-200/60 text-forest text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-forest" />
            <span>{trustPrivacy.eyebrow}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-text-primary tracking-tight mb-4">
            {trustPrivacy.title}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
            {trustPrivacy.subtitle}
          </p>
        </div>

        {/* Bento de 4 Pilares de Confianza y Ley 29733 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustPrivacy.pillars.map((pillar, index) => {
            const Icon = pillarIcons[index] || GraduationCap;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-cream-card rounded-3xl p-7 border border-sand-300 shadow-soft text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-sage-100 text-forest flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-text-primary mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-sand-200/80 text-[11px] font-semibold text-forest flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-forest" />
                  <span>Estándar ético</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bloque Honesto y Transparente: "Lo que somos y lo que NO somos" */}
        <div className="bg-cream-card rounded-3xl border-2 border-forest/20 p-6 sm:p-10 shadow-card">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-text-primary tracking-tight mb-2">
              {trustPrivacy.limitsBox.title}
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary">
              La honestidad clínica es la base de la confianza. Establecemos límites claros desde el primer contacto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            
            {/* Lo que SÍ somos */}
            <div className="p-6 rounded-2xl bg-cream-surface border border-sand-300 space-y-3">
              <span className="text-xs font-bold text-forest uppercase tracking-wider block">
                ✓ Lo que sí somos:
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm text-text-primary">
                {trustPrivacy.limitsBox.whatWeAre.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lo que NO somos */}
            <div className="p-6 rounded-2xl bg-[#FFF8F6] border border-[#FADCD5] space-y-3">
              <span className="text-xs font-bold text-[#A83D2A] uppercase tracking-wider block">
                ✕ Lo que NO somos:
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#5C2B22]">
                {trustPrivacy.limitsBox.whatWeAreNot.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <X className="w-4 h-4 text-[#A83D2A] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Caja Roja Suave de Derivación a Emergencias Oficial MINSA */}
          <div className="mt-8 p-5 rounded-2xl bg-[#FFF5F2] border border-[#FADCD5] flex flex-col sm:flex-row items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#FADCD5] text-[#A83D2A] flex items-center justify-center shrink-0">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="text-xs font-bold text-[#A83D2A] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" />
                <span>¿Estás en situación de crisis o emergencia?</span>
              </div>
              <p className="text-xs text-[#5C2B22] leading-relaxed">
                {trustPrivacy.limitsBox.emergencyHelpText}
              </p>
            </div>
            <a
              href="tel:113"
              className="whitespace-nowrap px-4 py-2.5 rounded-full bg-[#A83D2A] hover:bg-[#8F3322] text-white text-xs font-bold transition-colors shadow-xs"
            >
              Llamar gratis al 113
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
