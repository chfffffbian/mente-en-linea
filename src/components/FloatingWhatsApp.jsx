import React, { useState, useEffect } from 'react';
import { MessageCircle, Sparkles, X } from 'lucide-react';
import { getWhatsAppUrl, CONTENT } from '../content';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar después de 300px de scroll
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = getWhatsAppUrl('Hola, vi la web de Mente en Línea y me gustaría hacer una consulta sobre el servicio.');

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-40 flex items-end gap-3 transition-all duration-300 animate-in fade-in slide-in-from-bottom-6"
      role="complementary"
      aria-label="Acceso directo a WhatsApp"
    >
      {/* Tooltip / burbuja flotante de ayuda */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2.5 bg-cream-card text-text-primary px-4 py-2.5 rounded-2xl shadow-xl border border-sand-300/80 text-xs font-medium max-w-xs relative animate-in fade-in">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>¿Tienes dudas? Escríbenos por WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-text-secondary hover:text-text-primary ml-1 p-0.5 rounded-md focus:outline-none"
            aria-label="Cerrar notificación"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Botón flotante circular */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:bg-[#20ba59] transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
        aria-label="Chatear por WhatsApp con Mente en Línea"
      >
        <MessageCircle className="w-7 h-7 fill-white/10" />
        
        {/* Indicador de estado en línea */}
        <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white"></span>
        </span>
      </a>
    </div>
  );
}
