import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ShieldCheck, MapPin, Sparkles, CheckCircle2, HeartHandshake } from 'lucide-react';

/**
 * Sección Hero con fondo Aurora animado y propuesta de valor orientada a regiones fuera de Lima.
 */
export default function Hero({ onExploreClick }) {
  return (
    <section className="relative min-h-[92vh] pt-36 pb-28 md:pt-44 md:pb-36 flex items-center justify-center overflow-hidden">
      
      {/* Fondo Aurora Mesh Gradient con Fotografía Paisajística Sutil */}
      <div className="aurora-bg">
        <img
          src="https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1600&q=80"
          alt="Montañas y naturaleza con niebla suave"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-10 dark:opacity-15 mix-blend-overlay pointer-events-none"
        />
        <div className="aurora-blob-1" />
        <div className="aurora-blob-2" />
        <div className="aurora-blob-3" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge superior: Enfoque nacional inclusivo */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage-100/80 dark:bg-sage-900/50 border border-sage-200 dark:border-sage-800 text-sage-800 dark:text-sage-200 text-xs sm:text-sm font-medium mb-8 backdrop-blur-sm shadow-xs"
        >
          <MapPin className="w-3.5 h-3.5 text-sage-600 dark:text-sage-400" />
          <span>Disponible en todo el Perú</span>
          <span className="w-1.5 h-1.5 rounded-full bg-sage-500"></span>
        </motion.div>

        {/* Titular Emocional Principal de Alcance Nacional */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-sand-900 dark:text-sand-50 tracking-tight leading-[1.12] mb-6 max-w-4xl mx-auto"
        >
          Encontrar un psicólogo de confianza no debería ser tan difícil,{' '}
          <span className="relative inline-block text-sage-700 dark:text-sage-300">
            estés donde estés.
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-sage-400/40 dark:text-sage-500/30" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0 15 Q 50 0 100 15" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
            </svg>
          </span>
        </motion.h1>

        {/* Subtítulo con propuesta de valor concisa */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl text-sand-700 dark:text-sand-300 max-w-2xl mx-auto mb-12 leading-relaxed font-normal"
        >
          Terapia accesible por <strong>WhatsApp</strong> con psicólogos colegiados (CPsP). A tu ritmo, <strong>sin videollamadas</strong> ni salas de espera.
        </motion.p>

        {/* Grupo de CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          {/* Botón Principal a WhatsApp */}
          <a
            href="https://wa.me/51999999999?text=Hola%20Mente%20en%20L%C3%ADnea,%20quisiera%20empezar%20mi%20acompa%C3%B1amiento%20psicol%C3%B3gico."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-sage-600 hover:bg-sage-700 active:scale-98 text-white font-semibold text-base shadow-lg shadow-sage-600/25 hover:shadow-xl hover:shadow-sage-600/35 transition-all duration-200 group"
          >
            <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span>Hablar con un especialista por WhatsApp</span>
          </a>

          {/* Botón Secundario ver demo */}
          <a
            href="#demo-chat"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-sand-100/90 dark:bg-sand-900/80 hover:bg-sand-200/80 dark:hover:bg-sand-800 border border-sand-300 dark:border-sand-800 text-sand-800 dark:text-sand-200 font-medium text-base transition-colors"
          >
            <span>Ver cómo funciona el chat</span>
            <span className="text-xs px-2 py-0.5 rounded-md bg-lavender-100 dark:bg-lavender-900/60 text-lavender-700 dark:text-lavender-300 font-semibold">Demo interactiva</span>
          </a>
        </motion.div>

        {/* Pilares de confianza rápidos (Pills) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto pt-4 border-t border-sand-200/80 dark:border-sand-800/80 text-left"
        >
          <div className="flex items-center gap-2 p-2 text-xs sm:text-sm text-sand-700 dark:text-sand-300 font-medium">
            <CheckCircle2 className="w-4 h-4 text-sage-600 dark:text-sage-400 shrink-0" />
            <span>100% texto y notas de voz</span>
          </div>
          <div className="flex items-center gap-2 p-2 text-xs sm:text-sm text-sand-700 dark:text-sand-300 font-medium">
            <ShieldCheck className="w-4 h-4 text-sage-600 dark:text-sage-400 shrink-0" />
            <span>Psicólogos CPsP verificados</span>
          </div>
          <div className="flex items-center gap-2 p-2 text-xs sm:text-sm text-sand-700 dark:text-sand-300 font-medium">
            <HeartHandshake className="w-4 h-4 text-sage-600 dark:text-sage-400 shrink-0" />
            <span>Desde S/ 89 al mes</span>
          </div>
          <div className="flex items-center gap-2 p-2 text-xs sm:text-sm text-sand-700 dark:text-sand-300 font-medium">
            <Sparkles className="w-4 h-4 text-lavender-500 shrink-0" />
            <span>Sin horarios forzados</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
