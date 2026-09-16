import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, Pause, RotateCcw, CheckCheck, Mic, Send, Phone, Video, 
  MoreVertical, ArrowLeft, Shield, Sparkles, Volume2, Smile, Paperclip 
} from 'lucide-react';

/**
 * Diálogo realista con contexto peruano para la simulación
 */
const chatSequence = [
  {
    id: 1,
    sender: 'user',
    type: 'text',
    content: 'Hola... La verdad me daba un poco de vergüenza escribir, pero vivo en Tarapoto y aquí casi no hay especialistas. Siento mucha ansiedad por el trabajo y mi familia últimamente 😔',
    time: '09:42 a.m.',
    delay: 1000,
  },
  {
    id: 2,
    sender: 'bot_triage',
    type: 'system',
    content: '🌿 ¡Bienvenido a Mente en Línea! Tu mensaje es 100% privado y seguro. Hemos asignado tu consulta con la Psic. Valeria Ramos (CPsP 38412).',
    time: '09:43 a.m.',
    delay: 2400,
  },
  {
    id: 3,
    sender: 'therapist',
    type: 'text',
    content: 'Hola Carlos 🌿 Gracias por la valentía de dar este primer paso. Es completamente comprensible lo que sientes y te aseguro que aquí no hay juicios ni miradas incómodas.',
    time: '09:44 a.m.',
    delay: 3800,
  },
  {
    id: 4,
    sender: 'therapist',
    type: 'audio',
    duration: '0:38',
    content: 'Nota de voz: Introducción empática y encuadre clínico',
    time: '09:45 a.m.',
    delay: 5800,
  },
  {
    id: 5,
    sender: 'user',
    type: 'text',
    content: 'Muchas gracias Licenciada, poder escuchar su voz y saber que puedo responder a mi tiempo desde mi celular me da mucha tranquilidad.',
    time: '09:47 a.m.',
    delay: 7800,
  }
];

export default function WhatsAppMockup() {
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Efecto para orquestar la simulación paso a paso
  useEffect(() => {
    if (!isAutoPlaying) return;

    if (currentStep < chatSequence.length) {
      const nextMsg = chatSequence[currentStep];
      
      // Si el siguiente mensaje es del terapeuta o bot, mostrar "escribiendo..."
      if (nextMsg.sender === 'therapist' || nextMsg.sender === 'bot_triage') {
        const typingTimer = setTimeout(() => {
          setIsTyping(true);
        }, 600);

        const msgTimer = setTimeout(() => {
          setIsTyping(false);
          setDisplayedMessages((prev) => [...prev, nextMsg]);
          setCurrentStep((prev) => prev + 1);
        }, 2200);

        return () => {
          clearTimeout(typingTimer);
          clearTimeout(msgTimer);
        };
      } else {
        const userTimer = setTimeout(() => {
          setDisplayedMessages((prev) => [...prev, nextMsg]);
          setCurrentStep((prev) => prev + 1);
        }, 1200);

        return () => clearTimeout(userTimer);
      }
    }
  }, [currentStep, isAutoPlaying]);

  const handleReset = () => {
    setDisplayedMessages([]);
    setCurrentStep(0);
    setIsTyping(false);
    setIsAutoPlaying(true);
  };

  const handleShowAll = () => {
    setIsTyping(false);
    setDisplayedMessages(chatSequence);
    setCurrentStep(chatSequence.length);
    setIsAutoPlaying(false);
  };

  return (
    <section id="demo-chat" className="py-28 md:py-36 bg-warm-cream dark:bg-sand-900/30 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado con Jerarquía Tipográfica Clara */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-100 dark:bg-sage-900/60 text-xs font-semibold text-sage-800 dark:text-sage-300 uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Experiencia en Tiempo Real</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-5xl lg:text-6xl text-sand-900 dark:text-sand-50 mb-5 tracking-tight">
            Así de natural y seguro se siente usar Mente en Línea
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-sand-700 dark:text-sand-300 font-normal leading-relaxed">
            Sin salas de espera, sin el estrés de mirarse a una cámara. Solo tú, tu celular y un profesional colegiado escuchándote con empatía.
          </p>
        </div>

        {/* Mockup Container */}
        <div className="max-w-md mx-auto">
          
          {/* Controles de la animación */}
          <div className="flex items-center justify-between mb-3 px-2 text-xs text-sand-700 dark:text-sand-300">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Simulación en vivo</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white dark:bg-sand-800 border border-sand-200 dark:border-sand-700 hover:bg-sand-50 dark:hover:bg-sand-700 transition-colors shadow-xs"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reiniciar</span>
              </button>
              <button
                onClick={handleShowAll}
                className="px-2.5 py-1 rounded-lg bg-white dark:bg-sand-800 border border-sand-200 dark:border-sand-700 hover:bg-sand-50 dark:hover:bg-sand-700 transition-colors shadow-xs"
              >
                <span>Ver completo</span>
              </button>
            </div>
          </div>

          {/* Marco Smartphone */}
          <div className="relative mx-auto rounded-[38px] border-[6px] border-sand-300 dark:border-sand-800 bg-sand-900 shadow-2xl overflow-hidden">
            
            {/* Notch / Dynamic Island */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-4 bg-sand-950 rounded-full z-30 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-sand-800 mr-2"></div>
              <div className="w-2 h-2 rounded-full bg-sand-900"></div>
            </div>

            {/* Cabecera de WhatsApp */}
            <div className="bg-[#075E54] dark:bg-[#1F2C34] text-white pt-8 pb-3 px-3 shadow-md relative z-20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ArrowLeft className="w-5 h-5 text-white/80 cursor-pointer" />
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-sage-400 to-lavender-400 flex items-center justify-center text-white font-bold text-xs border border-white/20">
                    VR
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#075E54]"></span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-sm leading-tight">Psic. Valeria Ramos</span>
                    <Shield className="w-3.5 h-3.5 text-sky-300 fill-sky-300" title="Verificada CPsP" />
                  </div>
                  <span className="text-[11px] text-emerald-200 font-normal">
                    {isTyping ? (
                      <span className="italic font-medium animate-pulse">escribiendo...</span>
                    ) : (
                      'en línea · CPsP 38412'
                    )}
                  </span>
                </div>
              </div>

              {/* Botones WhatsApp Header */}
              <div className="flex items-center gap-3 text-white/80">
                <Video className="w-4 h-4 opacity-50 cursor-not-allowed" title="Sin videollamadas invasivas" />
                <Phone className="w-4 h-4 opacity-50 cursor-not-allowed" title="Atención por chat a tu ritmo" />
                <MoreVertical className="w-4 h-4 cursor-pointer" />
              </div>
            </div>

            {/* Cuerpo del Chat con Fondo Pattern */}
            <div className="wa-pattern h-[440px] overflow-y-auto p-4 flex flex-col justify-start space-y-3 text-xs sm:text-sm">
              
              {/* Aviso de Encriptación de Extremo a Extremo */}
              <div className="mx-auto my-1 px-3 py-1.5 rounded-lg bg-[#FFEECD]/90 dark:bg-amber-950/70 border border-amber-200 dark:border-amber-900/60 text-amber-900 dark:text-amber-200 text-[10px] text-center max-w-[280px] shadow-xs">
                🔒 Los mensajes y notas de voz están cifrados de extremo a extremo. Nadie fuera de este chat puede leerlos.
              </div>

              {/* Mensajes Renderizados Dinámicamente */}
              <AnimatePresence>
                {displayedMessages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 12, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.25 }}
                    className={`flex flex-col ${
                      msg.sender === 'user'
                        ? 'items-end'
                        : msg.type === 'system'
                        ? 'items-center my-2'
                        : 'items-start'
                    }`}
                  >
                    {/* Mensaje de Sistema / Triaje */}
                    {msg.type === 'system' ? (
                      <div className="bg-sage-100 dark:bg-sage-950/80 border border-sage-200 dark:border-sage-800 text-sage-900 dark:text-sage-200 px-3 py-2 rounded-xl text-[11px] text-center max-w-[90%] shadow-xs">
                        {msg.content}
                      </div>
                    ) : msg.type === 'audio' ? (
                      /* Nota de Voz Simulada */
                      <div className="bg-white dark:bg-[#202C33] text-sand-900 dark:text-sand-100 p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] border border-sand-200/50 dark:border-sand-700/50">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                            className="w-9 h-9 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs transition-colors"
                            aria-label="Reproducir nota de voz"
                          >
                            {isPlayingAudio ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
                          </button>
                          
                          {/* Ondas de Audio */}
                          <div className="flex items-center gap-1 flex-1 h-7">
                            {[12, 24, 16, 28, 10, 20, 26, 14, 22, 8, 18, 25, 14].map((height, i) => (
                              <div
                                key={i}
                                className={`w-1 rounded-full transition-all duration-200 ${
                                  isPlayingAudio
                                    ? 'bg-emerald-500 wave-bar'
                                    : i < 5
                                    ? 'bg-emerald-500 h-3'
                                    : 'bg-sand-300 dark:bg-sand-600'
                                }`}
                                style={{ height: isPlayingAudio ? undefined : `${height}px` }}
                              />
                            ))}
                          </div>
                          
                          <div className="text-[10px] text-sand-800 dark:text-sand-300 font-mono">
                            {msg.duration}
                          </div>
                        </div>
                        <div className="text-[10px] text-sand-800 dark:text-sand-300 text-right mt-1 flex items-center justify-end gap-1">
                          <span>{msg.time}</span>
                        </div>
                      </div>
                    ) : (
                      /* Mensaje de Texto Normal */
                      <div
                        className={`p-3 rounded-2xl shadow-xs max-w-[85%] text-xs leading-relaxed ${
                          msg.sender === 'user'
                            ? 'bg-[#E7FCE3] dark:bg-[#005C4B] text-[#111B21] dark:text-sand-50 rounded-tr-none'
                            : 'bg-white dark:bg-[#202C33] text-[#111B21] dark:text-sand-50 rounded-tl-none border border-sand-200/40 dark:border-sand-700/30'
                        }`}
                      >
                        <p>{msg.content}</p>
                        <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-sand-800 dark:text-sand-300">
                          <span>{msg.time}</span>
                          {msg.sender === 'user' && (
                            <CheckCheck className="w-3.5 h-3.5 text-[#53BDEB]" />
                          )}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Indicador de "Escribiendo..." */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-1.5 bg-white dark:bg-[#202C33] text-sand-800 dark:text-sand-300 px-3 py-2 rounded-2xl rounded-tl-none w-20 shadow-xs border border-sand-200/50 dark:border-sand-700/50"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce"></span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.4s]"></span>
                </motion.div>
              )}
            </div>

            {/* Barra Inferior de Entrada (Simulada) */}
            <div className="bg-[#F0F2F5] dark:bg-[#1F2C34] p-2 flex items-center gap-2 border-t border-sand-200/80 dark:border-sand-800">
              <div className="flex items-center gap-1.5 text-sand-800 dark:text-sand-300">
                <Smile className="w-5 h-5 cursor-pointer" />
                <Paperclip className="w-5 h-5 cursor-pointer" />
              </div>
              <div className="flex-1 bg-white dark:bg-[#2A3942] rounded-full px-3 py-1.5 text-xs text-sand-800 dark:text-sand-300 border border-sand-200 dark:border-transparent">
                Escribe un mensaje...
              </div>
              <div className="w-8 h-8 rounded-full bg-[#00A884] text-white flex items-center justify-center shrink-0">
                <Mic className="w-4 h-4" />
              </div>
            </div>

          </div>
        </div>

        {/* Resumen de características clave debajo del mockup */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-sand-800 dark:text-sand-300 max-w-xl mx-auto">
            💡 Puedes mandar notas de voz cuando te sea difícil escribir. Tu terapeuta escucha con calma y te responde con reflexiones claras y pautas prácticas.
          </p>
        </div>

      </div>
    </section>
  );
}
