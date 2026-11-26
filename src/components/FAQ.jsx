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
    <section id="faq" className="py-20 lg:py-28 bg-[#FBF8F3] relative">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#DCE9DD] text-[#1F4D3A] text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#1F4D3A]" />
            <span>{faq.eyebrow}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1E2A24] leading-tight mb-4 [text-wrap:balance]">
            {faq.title}
          </h2>
          <p className="text-base sm:text-lg text-[#5B6B62] leading-relaxed font-normal">
            {faq.subtitle}
          </p>
        </div>

        {/* Acordeón Accesible: fila completa clicable >= 56px, aria-expanded, aria-controls */}
        <div className="space-y-3.5">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-answer-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={index}
                className="bg-[#F7F1E8] rounded-2xl border border-[rgba(31,77,58,0.12)] shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  id={buttonId}
                  onClick={() => toggleAccordion(index)}
                  className="w-full min-h-[56px] p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4D3A]"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-[#1E2A24] leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#F7F1E8] flex items-center justify-center shrink-0 text-[#1F4D3A] transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#DCE9DD]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={contentId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-5 sm:px-6 text-sm text-[#5B6B62] leading-relaxed border-t border-[rgba(31,77,58,0.08)] pt-4 text-left">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bajo el acordeón: "¿Tienes otra duda? Pregúntanos por WhatsApp →" */}
        <div className="mt-10 text-center">
          <a
            href={getWhatsAppUrl("Hola, tengo una pregunta sobre el servicio de Mente en Línea.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#1F4D3A] hover:text-[#0B4A24] transition-colors underline underline-offset-4"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>{faq.contactPrompt}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
