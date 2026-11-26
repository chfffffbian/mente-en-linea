import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, MessageCircle, ArrowRight } from 'lucide-react';
import { CONTENT, getWhatsAppUrl } from '../content';

export default function ChatDemo() {
  const { chatDemo } = CONTENT;
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [showReply, setShowReply] = useState(true);
  const messagesEndRef = useRef(null);

  const currentSituation = chatDemo.situations[selectedIdx];

  const handleSelectSituation = (idx) => {
    if (idx === selectedIdx) return;
    setSelectedIdx(idx);
    setShowReply(false);
    setIsTyping(true);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const typingDelay = prefersReducedMotion ? 0 : 900;

    setTimeout(() => {
      setIsTyping(false);
      setShowReply(true);
    }, typingDelay);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showReply, isTyping]);

  return (
    <section id="chat-demo" className="py-20 lg:py-28 bg-[#F7F1E8] relative">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#DCE9DD] text-[#1F4D3A] text-xs font-bold uppercase tracking-wider mb-4">
            <Smartphone className="w-3.5 h-3.5 text-[#1F4D3A]" />
            <span>{chatDemo.eyebrow}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1E2A24] tracking-tight leading-tight mb-4 [text-wrap:balance]">
            {chatDemo.title}
          </h2>
          <p className="text-base sm:text-lg text-[#5B6B62] leading-relaxed font-normal">
            {chatDemo.subtitle}
          </p>
        </div>

        {/* Grid: Selector + Simulador Móvil de WhatsApp */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Columna Izquierda: Tarjeta MENTI + 3 Opciones (tablist) */}
          <div className="lg:col-span-5 text-left space-y-4">
            
            {/* Tarjeta MENTI (96px) */}
            <div className="p-4 rounded-3xl bg-[#FBF8F3] border border-[rgba(31,77,58,0.12)] shadow-xs flex items-center gap-4">
              <img
                src="/assets/menti-hq.svg"
                alt="MENTI, la mascota de Mente en Línea"
                width="96"
                height="96"
                loading="lazy"
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain menti-float shrink-0"
              />
              <p className="text-xs sm:text-sm text-[#1E2A24] leading-relaxed font-medium">
                {chatDemo.mentiWelcome}
              </p>
            </div>

            {/* Selector de Situaciones (role="tablist", alto >= 44px) */}
            <div role="tablist" aria-label="Situaciones de ejemplo" className="space-y-3 pt-2">
              {chatDemo.situations.map((sit, idx) => {
                const isSelected = selectedIdx === idx;
                return (
                  <button
                    key={sit.id}
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => handleSelectSituation(idx)}
                    className={`w-full min-h-[48px] p-4 rounded-2xl border text-left transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4D3A] ${
                      isSelected
                        ? 'bg-[#FBF8F3] border-[#1F4D3A] shadow-sm scale-[1.01]'
                        : 'bg-[#FBF8F3]/60 border-[rgba(31,77,58,0.12)] hover:border-[#5E7F63]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-xs font-bold uppercase tracking-wide ${isSelected ? 'text-[#1F4D3A]' : 'text-[#5B6B62]'}`}>
                        {sit.label}
                      </span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-[#1E2A24] font-medium line-clamp-2">
                      "{sit.userMsg}"
                    </p>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Columna Derecha: Mockup Teléfono (alto 640px) */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-sm sm:max-w-md h-[640px] bg-[#12201A] rounded-[44px] p-3 shadow-2xl border-4 border-[#2C3E34] flex flex-col justify-between">
              
              {/* Pantalla del Teléfono */}
              <div className="w-full h-full bg-[#EFEAE2] rounded-[36px] overflow-hidden flex flex-col justify-between border border-[#D5CDBC] relative">
                
                {/* Cabecera de WhatsApp */}
                <div className="bg-[#1F4D3A] text-white px-4 py-3 flex items-center justify-between shadow-sm shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#DCE9DD] flex items-center justify-center text-[#1F4D3A] font-bold text-sm">
                      <img
                        src="/assets/logo-icon-hq-verde.svg"
                        alt=""
                        aria-hidden="true"
                        width="24"
                        height="24"
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-bold text-[#FBF8F3] leading-tight">
                        {chatDemo.headerTitle}
                      </div>
                      <div className="text-[11px] text-[#DCE9DD] font-medium">
                        {chatDemo.headerStatus}
                      </div>
                    </div>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-[10px] font-bold uppercase tracking-wider text-white">
                    {chatDemo.headerBadge}
                  </span>
                </div>

                {/* Área de Mensajes con Scroll Propio */}
                <div className="flex-1 p-4 overflow-y-auto space-y-3 text-left">
                  {/* Mensaje de Usuario */}
                  <div className="flex justify-end">
                    <div className="bg-[#DCF8C6] text-[#1E2A24] p-3 rounded-2xl rounded-tr-xs text-xs sm:text-sm max-w-[85%] shadow-xs">
                      <p>{currentSituation.userMsg}</p>
                      <span className="text-[10px] text-[#5B6B62] block text-right mt-1">
                        20:14
                      </span>
                    </div>
                  </div>

                  {/* Indicador de escritura (900ms) */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-white text-[#5B6B62] px-3.5 py-2.5 rounded-2xl rounded-tl-xs text-xs shadow-xs flex items-center gap-1.5 border border-[#EAE1D3]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1F4D3A] animate-bounce" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1F4D3A] animate-bounce [animation-delay:0.2s]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1F4D3A] animate-bounce [animation-delay:0.4s]" />
                      </div>
                    </div>
                  )}

                  {/* Respuesta del Psicólogo Colegiado */}
                  {showReply && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white text-[#1E2A24] p-3.5 rounded-2xl rounded-tl-xs text-xs sm:text-sm max-w-[88%] shadow-xs border border-[#EAE1D3]">
                        <p className="leading-relaxed">{currentSituation.psychologistReply}</p>
                        <span className="text-[10px] text-[#5B6B62] block text-left mt-1.5">
                          20:16
                        </span>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Botón CTA FUERA del área de scroll (nada queda tapado) */}
                <div className="p-3 bg-white/90 backdrop-blur-xs border-t border-[#D5CDBC] shrink-0">
                  <a
                    href={getWhatsAppUrl(`Hola, vi la demo de ${currentSituation.label} y me gustaría empezar.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-full bg-[#1F4D3A] hover:bg-[#173B2C] text-[#FBF8F3] text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4D3A]"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>{chatDemo.ctaButton}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Pie (14 px) */}
        <p className="text-sm text-[#5B6B62] mt-8 text-center">
          {chatDemo.footnote}
        </p>

      </div>
    </section>
  );
}
