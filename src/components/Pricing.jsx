import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, MessageCircle, Sparkles, Building2, User, ShieldCheck, ArrowRight } from 'lucide-react';
import { CONTENT, getWhatsAppUrl } from '../content';

export default function Pricing({ initialSegment = 'b2c', segment: externalSegment, onToggleSegment }) {
  const { pricing } = CONTENT;
  const [internalSegment, setInternalSegment] = useState(initialSegment);
  const segment = externalSegment !== undefined ? externalSegment : internalSegment;

  const handleSelectSegment = (newSeg) => {
    setInternalSegment(newSeg);
    if (onToggleSegment) {
      onToggleSegment(newSeg);
    }
  };

  return (
    <section id="precios" className="py-20 md:py-32 bg-cream-surface/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sage-200/60 text-forest text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-forest" />
            <span>{pricing.eyebrow}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-text-primary tracking-tight mb-4">
            {pricing.title}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
            {pricing.subtitle}
          </p>

          {/* Selector de Segmento Personas / Empresas */}
          <div className="inline-flex items-center bg-cream-card border border-sand-300 rounded-full p-1 mt-8 shadow-xs">
            <button
              onClick={() => handleSelectSegment('b2c')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                segment === 'b2c'
                  ? 'bg-forest text-white shadow-soft'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Para personas</span>
            </button>
            <button
              onClick={() => handleSelectSegment('b2b')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                segment === 'b2b'
                  ? 'bg-forest text-white shadow-soft'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Para empresas (B2B)</span>
            </button>
          </div>
        </div>

        {/* Vista Planes B2C */}
        {segment === 'b2c' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12">
            {pricing.plans.map((plan) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 ${
                  plan.highlighted
                    ? 'bg-cream-card border-2 border-forest shadow-floating scale-[1.02] z-10'
                    : 'bg-cream-card border border-sand-300 shadow-soft hover:shadow-card'
                } ${plan.disabled ? 'opacity-70 bg-cream' : ''}`}
              >
                {/* Badge Superior */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-forest text-white font-bold text-xs uppercase tracking-wider shadow-xs">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="text-left mb-4">
                    <h3 className="font-display font-bold text-xl text-text-primary mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-text-secondary min-h-[36px]">
                      {plan.description}
                    </p>
                  </div>

                  {/* Precio */}
                  <div className="text-left my-4 pb-4 border-b border-sand-200">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display font-extrabold text-3xl sm:text-4xl text-forest">
                        S/ {plan.price}
                      </span>
                      <span className="text-xs text-text-secondary font-medium">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Lista de Beneficios */}
                  <ul className="text-left space-y-2.5 text-xs sm:text-sm text-text-secondary mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Botón CTA a WhatsApp */}
                <a
                  href={getWhatsAppUrl(plan.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-4 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                    plan.highlighted
                      ? 'bg-forest hover:bg-forest-light text-white shadow-card'
                      : plan.disabled
                      ? 'bg-sand-300 text-text-muted cursor-not-allowed'
                      : 'bg-cream hover:bg-cream-surface border border-sand-300 text-text-primary'
                  }`}
                >
                  <MessageCircle className="w-4 h-4 text-whatsapp-green" />
                  <span>{plan.ctaText}</span>
                </a>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Vista Plan B2B Corporativo */
          <div className="max-w-3xl mx-auto bg-cream-card rounded-3xl p-8 sm:p-12 border-2 border-forest shadow-card mb-12 text-left">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-sand-200">
              <div>
                <span className="px-3 py-1 rounded-full bg-sage-200 text-forest text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                  Beneficio de Bienestar Laboral
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-text-primary">
                  {pricing.b2bPlan.name}
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary mt-1">
                  {pricing.b2bPlan.description}
                </p>
              </div>

              <div className="text-left sm:text-right">
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-forest">
                  S/ {pricing.b2bPlan.price}
                </div>
                <div className="text-xs text-text-secondary">
                  {pricing.b2bPlan.period}
                </div>
              </div>
            </div>

            <ul className="space-y-3 text-sm text-text-secondary mb-8">
              {pricing.b2bPlan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-forest shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={getWhatsAppUrl(pricing.b2bPlan.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-forest hover:bg-forest-light text-white font-bold text-sm flex items-center justify-center gap-2 shadow-card"
              >
                <MessageCircle className="w-4 h-4 text-whatsapp-green" />
                <span>{pricing.b2bPlan.ctaText}</span>
              </a>

              <a
                href="#empresas"
                className="text-xs font-semibold text-text-secondary hover:text-forest underline"
              >
                Ver simulador detallado para planilla →
              </a>
            </div>
          </div>
        )}

        {/* Métodos de Pago y Garantías */}
        <div className="max-w-2xl mx-auto text-center p-4 rounded-2xl bg-cream-card border border-sand-300 text-xs text-text-secondary">
          <p className="font-medium">{pricing.paymentMethods}</p>
        </div>

      </div>
    </section>
  );
}
