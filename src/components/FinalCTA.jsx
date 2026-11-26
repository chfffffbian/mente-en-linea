import React from 'react';
import { MessageCircle, ShieldCheck, Clock, CheckCircle2, HeartHandshake } from 'lucide-react';
import { CONTENT, getWhatsAppUrl } from '../content';

export default function FinalCTA() {
  const whatsappUrl = getWhatsAppUrl(
    'Hola, quiero dar el primer paso y comenzar mi acompañamiento psicológico en Mente en Línea.'
  );

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-cream to-mint/25 relative overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      {/* Elementos decorativos sutiles */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-sage/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-cream-card border border-sand-300 rounded-3xl p-8 sm:p-12 shadow-lg shadow-forest/5 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Contenido textual y CTA */}
            <div className="md:col-span-8 space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint/50 border border-sage/30 text-forest text-xs font-semibold tracking-wide">
                <HeartHandshake className="w-4 h-4 text-forest" />
                <span>{CONTENT.finalCta.chip}</span>
              </div>

              <h2
                id="final-cta-heading"
                className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-forest tracking-tight leading-tight text-balance"
              >
                {CONTENT.finalCta.title}
              </h2>

              <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-lg mx-auto md:mx-0 text-pretty">
                {CONTENT.finalCta.subtitle}
              </p>

              {/* Botón CTA principal */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-forest hover:bg-forest/90 text-cream-card font-bold text-base shadow-md hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-forest"
                >
                  <MessageCircle className="w-5 h-5 text-mint group-hover:scale-110 transition-transform" />
                  <span>{CONTENT.finalCta.buttonText}</span>
                </a>
              </div>

              {/* Trío de confianza (14 px) */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-text-secondary border-t border-sand-300">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-forest shrink-0" />
                  <span>{CONTENT.finalCta.trio[0]}</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Clock className="w-4 h-4 text-forest shrink-0" />
                  <span>{CONTENT.finalCta.trio[1]}</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                  <span>{CONTENT.finalCta.trio[2]}</span>
                </div>
              </div>
            </div>

            {/* Ilustración de MENTI (190 px, sin texto debajo) */}
            <div className="md:col-span-4 flex items-center justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-sage/20 rounded-full blur-2xl group-hover:bg-sage/30 transition-colors" />
                <img
                  src="/assets/menti-hq.svg"
                  alt="MENTI, la mascota de Mente en Línea"
                  width="190"
                  height="190"
                  className="relative z-10 w-44 sm:w-48 h-auto object-contain menti-float drop-shadow-md"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
