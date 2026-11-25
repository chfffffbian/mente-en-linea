import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Play, Pause, CheckCheck, RotateCcw, Sparkles, Smartphone, Volume2 } from 'lucide-react';
import { CONTENT, getWhatsAppUrl } from '../content';

export default function ChatDemo() {
  const { chatDemo } = CONTENT;
  const [selectedConv, setSelectedConv] = useState(chatDemo.conversations[0]);
  const [isTyping, setIsTyping] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handleSelectConversation = (conv) => {
    if (conv.id === selectedConv.id) return;
    setIsTyping(true);
    setIsPlayingAudio(false);
    setSelectedConv(conv);

    setTimeout(() => {
      setIsTyping(false);
    }, 700);
  };

  return (
    <section id="chat-demo" className="py-20 md:py-32 bg-cream-surface/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sage-200/60 text-forest text-xs font-bold uppercase tracking-wider mb-4">
            <Smartphone className="w-3.5 h-3.5 text-forest" />
            <span>{chatDemo.eyebrow}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-text-primary tracking-tight mb-4">
            {chatDemo.title}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
            {chatDemo.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
          
          {/* Columna Izquierda: Selector de 3 Situaciones */}
          <div className="lg:col-span-5 text-left space-y-4">
            <span className="text-xs font-bold text-forest uppercase tracking-wider block mb-2">
              Toca un tema para probar la dinámica:
            </span>

            {chatDemo.conversations.map((conv) => {
              const isActive = conv.id === selectedConv.id;
              return (
                <button
                  key={conv.id}
                  onClick={() => handleSelectConversation(conv)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 ${
                    isActive
                      ? 'bg-cream-card border-forest shadow-card scale-[1.02]'
                      : 'bg-cream-surface border-sand-300 hover:border-sage-400 opacity-80'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-forest uppercase">
                      {conv.tabLabel}
                    </span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-whatsapp-green animate-pulse" />
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-text-primary font-medium line-clamp-2">
                    "{conv.userPrompt}"
                  </p>
                </button>
              );
            })}

            <div className="p-4 rounded-2xl bg-cream-card border border-sand-300 text-xs text-text-secondary space-y-1.5 mt-6">
              <div className="font-bold text-forest flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-whatsapp-green" />
                <span>Dinámica de escucha activa</span>
              </div>
              <p>
                Sin presión de encender cámara ni estar en un consultorio frío. Escribes cuando te sientas listo.
              </p>
            </div>
          </div>

          {/* Columna Derecha: Mockup Interactivo de Teléfono WhatsApp */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-[380px] bg-sand-900 rounded-[38px] p-3 shadow-floating border-4 border-sand-800">
              
              {/* Pantalla del Teléfono */}
              <div className="bg-[#EFEAE2] rounded-[30px] overflow-hidden flex flex-col h-[540px] text-left">
                
                {/* Cabecera WhatsApp Business */}
                <div className="bg-[#075E54] text-white p-3.5 flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#128C7E] flex items-center justify-center font-bold text-xs">
                      <img
                        src="/assets/logo-blanco.png"
                        alt="Psicólogo CPsP"
                        className="w-6 h-6 object-contain"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold flex items-center gap-1">
                        <span>Lic. [Psicólogo CPsP]</span>
                        <CheckCheck className="w-3 h-3 text-[#34B7F1]" />
                      </div>
                      <span className="text-[10px] text-[#A7D8D0] block">
                        {isTyping ? "escribiendo..." : "en línea · Lun a Sáb"}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-medium">
                    Ejemplo
                  </span>
                </div>

                {/* Área de Chat con Fondo Estilo WhatsApp */}
                <div className="flex-1 p-3.5 overflow-y-auto space-y-3 text-xs sm:text-sm">
                  
                  {/* Etiqueta Cifrado WhatsApp */}
                  <div className="text-center my-1">
                    <span className="bg-[#FFEECD] text-[#554316] text-[10px] font-medium px-2.5 py-1 rounded-md shadow-2xs inline-block">
                      🔒 Los mensajes están cifrados de extremo a extremo.
                    </span>
                  </div>

                  {/* Mensaje de Usuario */}
                  <div className="flex justify-end">
                    <div className="bg-[#DCF8C6] text-text-primary px-3.5 py-2.5 rounded-2xl rounded-tr-xs max-w-[85%] shadow-xs">
                      <p className="leading-snug">{selectedConv.userPrompt}</p>
                      <div className="flex items-center justify-end gap-1 text-[10px] text-text-muted mt-1">
                        <span>12:15</span>
                        <CheckCheck className="w-3.5 h-3.5 text-[#34B7F1]" />
                      </div>
                    </div>
                  </div>

                  {/* Indicador de "Escribiendo..." o Respuesta del Terapeuta */}
                  <AnimatePresence mode="wait">
                    {isTyping ? (
                      <motion.div
                        key="typing"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex justify-start"
                      >
                        <div className="bg-white px-4 py-2.5 rounded-2xl rounded-tl-xs shadow-xs flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-forest animate-bounce" />
                          <span className="w-2 h-2 rounded-full bg-forest animate-bounce delay-100" />
                          <span className="w-2 h-2 rounded-full bg-forest animate-bounce delay-200" />
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="reply"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-2.5"
                      >
                        {/* Audio simulado del psicólogo */}
                        <div className="bg-white p-3 rounded-2xl rounded-tl-xs shadow-xs max-w-[90%] border border-sand-200">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                              className="w-9 h-9 rounded-full bg-[#128C7E] text-white flex items-center justify-center shrink-0 hover:bg-[#075E54] transition-colors"
                              aria-label={isPlayingAudio ? "Pausar nota de voz" : "Reproducir nota de voz"}
                            >
                              {isPlayingAudio ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                            </button>
                            <div className="flex-1">
                              <div className="h-1.5 bg-sand-200 rounded-full overflow-hidden">
                                <div className={`h-full bg-[#128C7E] rounded-full transition-all duration-300 ${isPlayingAudio ? 'w-3/4' : 'w-1/4'}`} />
                              </div>
                              <div className="flex justify-between text-[10px] text-text-muted mt-1">
                                <span>{isPlayingAudio ? "0:45" : selectedConv.audioDuration}</span>
                                <span className="flex items-center gap-1 font-semibold text-forest">
                                  <Volume2 className="w-3 h-3" /> Audio explicativo
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Texto del Psicólogo */}
                        <div className="bg-white text-text-primary px-3.5 py-2.5 rounded-2xl rounded-tl-xs max-w-[90%] shadow-xs border border-sand-200">
                          <p className="leading-snug">{selectedConv.therapistReply}</p>
                          <div className="mt-2 pt-2 border-t border-sand-100 text-[11px] text-forest font-semibold flex items-center gap-1">
                            <span>🌱</span>
                            <span>{selectedConv.exerciseNote}</span>
                          </div>
                          <span className="text-[10px] text-text-muted block text-right mt-1">
                            12:18
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Barra Inferior Simulada con Botón para Abrir WhatsApp Real */}
                <div className="bg-[#F0F2F5] p-2.5 border-t border-sand-300 flex items-center gap-2">
                  <a
                    href={getWhatsAppUrl(`Hola, me gustó la dinámica del chat sobre "${selectedConv.tabLabel}". Quiero consultar por el acompañamiento.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-full bg-[#075E54] hover:bg-[#128C7E] text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-whatsapp-green" />
                    <span>Empezar este chat en WhatsApp real</span>
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer claro */}
        <p className="text-xs text-text-muted text-center mt-8 italic">
          {chatDemo.disclaimer}
        </p>

      </div>
    </section>
  );
}
