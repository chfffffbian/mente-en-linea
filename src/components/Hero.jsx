import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ShieldCheck, UserCheck, Clock, HeartHandshake, ArrowRight, Play, Sparkles } from 'lucide-react';
import { CONTENT, getWhatsAppUrl } from '../content';

export default function Hero({ activeSegment, onOpenChatDemo }) {
  const currentHero = activeSegment === 'b2b' ? CONTENT.hero.b2b : CONTENT.hero.b2c;

  // Animación cinética palabra por palabra
  const words = currentHero.titlePart1.trim().split(" ");

  return (
    <section className="relative overflow-hidden pt-8 pb-20 md:pt-14 md:pb-28 bg-cream">
      
      {/* Fondo Machu Picchu con niebla y textura suave */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-10 mix-blend-multiply"
        style={{ backgroundImage: "url('/assets/wallpapermachupicchu.webp')" }}
        aria-hidden="true"
      />

      {/* Blobs orgánicos decorativos */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-sage-200/50 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-1/3 right-[-100px] w-[450px] h-[450px] bg-sage-100/60 rounded-full blur-2xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Columna Izquierda: Copywriting de Respuesta Directa */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Badge de Alcance Nacional */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-card border border-sage/30 text-forest text-xs sm:text-sm font-semibold shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-sage animate-soft-pulse" />
              <span>{currentHero.badge}</span>
            </motion.div>

            {/* Titular Cinético con Énfasis en "cuídate." */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-text-primary tracking-tight leading-[1.12]">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, scale: 0.92, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: words.length * 0.08 + 0.1, ease: "easeOut" }}
                className="relative inline-block text-sage"
              >
                {currentHero.titleHighlight}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-sage/30"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path d="M0 15 Q 50 0 100 15" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </motion.span>
            </h1>

            {/* Subtítulo Empático */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl font-normal leading-relaxed"
            >
              {currentHero.subtitle}
            </motion.p>

            {/* CTAs Principales */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2"
            >
              <a
                href={getWhatsAppUrl(
                  activeSegment === 'b2b'
                    ? "Hola, deseo coordinar un piloto de 30 días para mi empresa con Mente en Línea."
                    : undefined
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-forest hover:bg-forest-light text-white font-bold text-base shadow-card hover:shadow-floating hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <MessageCircle className="w-5 h-5 text-whatsapp-green fill-white/20" />
                <span>{currentHero.primaryCta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenChatDemo}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-cream-card hover:bg-cream-surface border border-sand-300 text-text-primary font-semibold text-sm shadow-soft hover:shadow-card transition-all"
              >
                <Play className="w-4 h-4 text-forest fill-forest/20" />
                <span>{currentHero.secondaryCta}</span>
              </button>
            </motion.div>

            {/* Microcopy de Confianza y Garantía */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="text-xs text-text-muted font-medium pt-1"
            >
              {currentHero.microcopy}
            </motion.p>
          </div>

          {/* Columna Derecha: Mockup Visual con Blob y Burbujas de Chat */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Blob de Arte Detrás */}
            <div className="absolute inset-0 max-w-md mx-auto bg-sage-200/80 blob-organic -z-0 scale-105" />

            {/* Contenedor Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative z-10 w-full max-w-md rounded-3xl overflow-hidden shadow-floating border border-sand-300 bg-cream-card p-3"
            >
              {/* Imagen de Mockup / Paciente sonriendo */}
              <div className="rounded-2xl overflow-hidden relative aspect-[4/3] bg-sand-200">
                <img
                  src="/assets/mockup-referencia.jpg"
                  alt="Acompañamiento psicológico por WhatsApp con Mente en Línea"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  onError={(e) => {
                    // Fallback a foto cálida de mujer en entorno acogedor si el archivo no cargase
                    e.currentTarget.src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                
                {/* Micro Badge en la foto */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[11px] font-bold text-forest shadow-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-whatsapp-green animate-pulse" />
                  <span>Psicólogo activo en WhatsApp</span>
                </div>
              </div>

              {/* Burbuja de Chat Flotante Animada */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-3 bg-cream-surface rounded-2xl p-3.5 border border-sand-300 space-y-2 text-left"
              >
                {/* Mensaje de Usuario */}
                <div className="flex justify-end">
                  <div className="bg-whatsapp-bubbleLight text-text-primary px-3.5 py-2 rounded-2xl rounded-tr-xs text-xs sm:text-sm max-w-[85%] shadow-xs">
                    <p>{currentHero.floatingChat.userMsg}</p>
                    <span className="text-[10px] text-text-muted block text-right mt-0.5">
                      {currentHero.floatingChat.userTime}
                    </span>
                  </div>
                </div>

                {/* Mensaje de Terapeuta */}
                <div className="flex justify-start">
                  <div className="bg-white text-text-primary px-3.5 py-2 rounded-2xl rounded-tl-xs text-xs sm:text-sm max-w-[85%] shadow-xs border border-sand-200">
                    <p>{currentHero.floatingChat.therapistMsg}</p>
                    <span className="text-[10px] text-text-muted block text-left mt-0.5">
                      {currentHero.floatingChat.therapistTime}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Franja de Confianza (4 Pilares) */}
        <div className="mt-16 pt-8 border-t border-sand-300/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            {CONTENT.hero.trustItems.map((item, index) => {
              const icons = { ShieldCheck, UserCheck, Clock, HeartHandshake };
              const IconComponent = icons[item.icon] || ShieldCheck;
              return (
                <div key={index} className="flex items-start gap-3.5 p-2">
                  <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center shrink-0 text-forest">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xs sm:text-sm font-bold text-text-primary leading-tight">
                      {item.title}
                    </h2>
                    <p className="text-[11px] sm:text-xs text-text-secondary mt-0.5">
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
