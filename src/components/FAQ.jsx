import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { CONTENT, getWhatsAppUrl } from '../content';

export default function FAQ() {
  const { faq } = CONTENT;
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-cream relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sage-200/60 text-forest text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-forest" />
            <span>{faq.eyebrow}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-text-primary tracking-tight mb-4">
            {faq.title}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
            {faq.subtitle}
          </p>
        </div>

        {/* Lista Acordeón */}
        <div className="space-y-4">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-cream-card rounded-2xl border border-sand-300 shadow-soft overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-text-primary leading-snug">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-cream-surface flex items-center justify-center shrink-0 text-forest transition-transform duration-200 ${isOpen ? 'rotate-180 bg-sage-200' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-6 sm:px-6 text-sm text-text-secondary leading-relaxed border-t border-sand-200/60 pt-4 text-left">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Contacto directo si tiene otra duda */}
        <div className="mt-12 text-center p-6 rounded-3xl bg-cream-surface border border-sand-300">
          <p className="text-sm text-text-primary font-semibold mb-3">
            ¿Tienes alguna otra duda o consulta particular?
          </p>
          <a
            href={getWhatsAppUrl("Hola, tengo una pregunta antes de empezar con el servicio de Mente en Línea.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-forest hover:text-forest-light transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-whatsapp-green" />
            <span>Pregúntanos directamente por WhatsApp →</span>
          </a>
        </div>

      </div>
    </section>
  );
}
