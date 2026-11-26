import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Play, ShieldCheck, UserCheck, Clock, HeartHandshake, ArrowRight } from 'lucide-react';
import { CONTENT, getWhatsAppUrl } from '../content';

export default function Hero() {
  const { hero } = CONTENT;

  const handleOpenChatDemo = () => {
    const el = document.getElementById('chat-demo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const trustIcons = [ShieldCheck, UserCheck, Clock, HeartHandshake];

  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden" id="top">
      
      {/* Fondo Machu Picchu con Overlay Crema rgba(247,241,232,0.92) y degradé a sólido */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/assets/machu-picchu.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-30 filter saturate-50"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[#F7F1E8]/92 bg-gradient-to-b from-[#F7F1E8]/85 via-[#F7F1E8]/95 to-[#F7F1E8]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid Principal: Texto Izquierda + Visual Derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Columna Izquierda: Copywriting de Respuesta Directa */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Etiqueta de Alcance Nacional */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCE9DD] border border-[#5E7F63]/30 text-xs font-bold text-[#1F4D3A] tracking-wide"
            >
              <span className="w-2 h-2 rounded-full bg-[#1F4D3A] animate-pulse" />
              <span>{hero.badge}</span>
            </motion.div>

            {/* H1 Principal con text-wrap:balance */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#1E2A24] tracking-tight leading-[1.08] [text-wrap:balance]"
            >
              {hero.titlePart1}
              <span className="text-[#5E7F63]">{hero.titleHighlight}</span>
            </motion.h1>

            {/* Subtítulo Empático */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-[#5B6B62] font-normal leading-relaxed max-w-2xl"
            >
              {hero.subtitle}
            </motion.p>

            {/* CTAs Principales */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2"
            >
              <a
                href={getWhatsAppUrl("Hola, quiero hablar con un psicólogo colegiado por WhatsApp.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-full bg-[#1F4D3A] hover:bg-[#173B2C] text-[#FBF8F3] font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all transform active:translate-y-[1px] focus:outline-none focus-visible:ring-3 focus-visible:ring-[#1F4D3A]"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366] fill-[#FBF8F3]/20" />
                <span>{hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleOpenChatDemo}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-full bg-[#FBF8F3] hover:bg-[#F2ECE1] border-1.5 border-[#1F4D3A] text-[#1F4D3A] font-semibold text-sm transition-all focus:outline-none focus-visible:ring-3 focus-visible:ring-[#1F4D3A]"
              >
                <Play className="w-4 h-4 fill-[#1F4D3A]/20 text-[#1F4D3A]" />
                <span>{hero.secondaryCta}</span>
              </button>
            </motion.div>

            {/* Microtexto (14px, #5B6B62) */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm text-[#5B6B62] font-medium pt-1"
            >
              {hero.microcopy}
            </motion.p>
          </div>

          {/* Columna Derecha: Foto en Blob --mint con Radio 40px y Burbuja de Chat Flotante */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-sm sm:max-w-md"
            >
              {/* Contenedor en Blob --mint (#DCE9DD) con radio 40px */}
              <div className="relative rounded-[40px] bg-[#DCE9DD] p-3 sm:p-4 shadow-lg border border-[rgba(31,77,58,0.12)] overflow-hidden">
                
                {/* Foto /assets/hero-mujer.jpg (4:5 en desktop, 1:1 en móvil) */}
                <div className="relative rounded-[32px] overflow-hidden aspect-square sm:aspect-[4/5] bg-[#EAE1D3]">
                  <img
                    src="/assets/hero-mujer.jpg"
                    alt="Acompañamiento psicológico por WhatsApp con psicólogo colegiado"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                    width="400"
                    height="500"
                  />
                  
                  {/* Insignia "Conversación de ejemplo" */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#FBF8F3]/95 backdrop-blur-xs text-xs font-bold text-[#1F4D3A] shadow-xs flex items-center gap-1.5 border border-[rgba(31,77,58,0.1)]">
                    <span className="w-2 h-2 rounded-full bg-[#5E7F63] animate-pulse" />
                    <span>{hero.chatBadge}</span>
                  </div>
                </div>

                {/* Burbuja de Chat Flotante: 20:14 y 20:16 */}
                <div className="mt-3 bg-[#FBF8F3] rounded-2xl p-3 sm:p-3.5 border border-[rgba(31,77,58,0.12)] space-y-2.5 text-left shadow-xs">
                  {/* Mensaje de Usuario */}
                  <div className="flex justify-end">
                    <div className="bg-[#DCF8C6] text-[#1E2A24] px-3.5 py-2 rounded-2xl rounded-tr-xs text-xs sm:text-sm max-w-[88%] shadow-xs">
                      <p>{hero.floatingChat.userMsg}</p>
                      <span className="text-[10px] text-[#5B6B62] block text-right mt-0.5">
                        {hero.floatingChat.userTime}
                      </span>
                    </div>
                  </div>

                  {/* Mensaje de Psicólogo */}
                  <div className="flex justify-start">
                    <div className="bg-white text-[#1E2A24] px-3.5 py-2 rounded-2xl rounded-tl-xs text-xs sm:text-sm max-w-[88%] shadow-xs border border-[#EAE1D3]">
                      <p>{hero.floatingChat.therapistMsg}</p>
                      <span className="text-[10px] text-[#5B6B62] block text-left mt-0.5">
                        {hero.floatingChat.therapistTime}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>

        {/* Franja de Confianza (14 px, #5B6B62, ícono 44 px) */}
        <div className="mt-14 pt-8 border-t border-[rgba(31,77,58,0.12)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            {hero.trustItems.map((item, index) => {
              const IconComponent = trustIcons[index] || ShieldCheck;
              return (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#DCE9DD] flex items-center justify-center shrink-0 text-[#1F4D3A]">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-[#1E2A24] leading-tight">
                      {item.title}
                    </h2>
                    <p className="text-sm text-[#5B6B62] mt-0.5 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
