import React from 'react';
import { MessageCircle, ShieldCheck, Clock, CheckCircle2, HeartHandshake } from 'lucide-react';
import { CONTENT, getWhatsAppUrl } from '../content';

export default function FinalCTA() {
  const whatsappUrl = getWhatsAppUrl('Hola, quiero dar el primer paso y comenzar mi acompañamiento psicológico en Mente en Línea.');

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-cream to-mint/25 relative overflow-hidden" aria-labelledby="final-cta-heading">
      {/* Elementos decorativos de fondo sutiles */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-sage/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-72 h-72 bg-mint/30 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-cream-card border border-sand-300/80 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-lg shadow-forest/5 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Contenido textual y CTA */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint/50 border border-sage/30 text-forest text-xs font-semibold tracking-wide">
                <HeartHandshake className="w-4 h-4 text-forest" />
                <span>Estamos listos para escucharte</span>
              </div>

              <h2
                id="final-cta-heading"
                className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-forest tracking-tight leading-tight"
              >
                {CONTENT.finalCta.title}
              </h2>

              <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl mx-auto lg:mx-0">
                {CONTENT.finalCta.subtitle}
              </p>

              {/* Botón CTA principal de WhatsApp */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-forest hover:bg-forest/90 text-cream-card font-bold text-base sm:text-lg shadow-md hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-forest"
                >
                  <MessageCircle className="w-6 h-6 text-mint group-hover:scale-110 transition-transform" />
                  <span>{CONTENT.finalCta.buttonText}</span>
                </a>
              </div>

              {/* Badges de confianza y garantías */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-text-secondary border-t border-sand-300/70 pt-6">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-forest shrink-0" />
                  <span>Psicólogo colegiado</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <Clock className="w-4 h-4 text-forest shrink-0" />
                  <span>Respuesta en máx. 24 h</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                  <span>Devolución la primera semana</span>
                </div>
              </div>

            </div>

            {/* Ilustración de MENTI (Mascota) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-sage/20 rounded-full blur-2xl group-hover:bg-sage/30 transition-colors" />
                <img
                  src="/assets/menti-hq.svg"
                  alt="MENTI, la mascota de Mente en Línea"
                  width="180"
                  height="180"
                  className="relative z-10 w-40 sm:w-44 lg:w-48 h-auto object-contain menti-float drop-shadow-md"
                  loading="lazy"
                />
              </div>
              <p className="mt-4 text-xs font-medium text-text-secondary text-center max-w-xs">
                {CONTENT.finalCta.mascotNote}
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
