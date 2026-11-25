import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, ArrowUpRight, Sparkles, Building2, User } from 'lucide-react';
import { CONTENT, getWhatsAppUrl } from '../content';

export default function Navbar({ activeSegment, onToggleSegment, fontSizeScale, onChangeFontSize }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Barra superior de anuncio oficial */}
      <aside aria-label="Aviso de servicio" className="bg-forest text-cream-card py-1.5 px-4 text-center text-xs sm:text-sm font-medium tracking-wide z-50 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span>{CONTENT.navbar.announcement}</span>
        </div>
      </aside>

      {/* Header Sticky con Backdrop Blur */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-md border-b border-sand-300/80 shadow-xs py-3'
            : 'bg-cream/80 backdrop-blur-xs py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo e Isotipo */}
            <a
              href="#"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-forest rounded-xl"
              aria-label="Ir al inicio de Mente en Línea"
            >
              <div className="w-10 h-10 rounded-2xl bg-forest flex items-center justify-center p-1.5 shadow-xs group-hover:scale-105 transition-transform duration-200">
                <img
                  src="/assets/logo-blanco.png"
                  alt="Isotipo Mente en Línea"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display font-extrabold text-lg sm:text-xl text-forest tracking-tight leading-tight">
                  Mente en Línea
                </span>
                <span className="text-[11px] text-text-secondary font-medium tracking-tight -mt-0.5">
                  Acompañamiento por WhatsApp
                </span>
              </div>
            </a>

            {/* Enlaces Desktop */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Navegación principal">
              {CONTENT.navbar.links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="whitespace-nowrap text-sm font-medium text-text-primary hover:text-forest transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Acciones Derecha: Ajuste fuente + Toggle Segmento + CTA */}
            <div className="hidden sm:flex items-center gap-3">
              
              {/* Ajuste de Accesibilidad Tipográfica (A- / A+) */}
              <div className="flex items-center bg-cream-card border border-sand-300 rounded-full p-1" title="Ajustar tamaño de letra">
                <button
                  onClick={() => onChangeFontSize(Math.max(0.9, fontSizeScale - 0.05))}
                  className="px-2 py-0.5 text-xs font-semibold text-text-secondary hover:text-forest transition-colors"
                  aria-label="Reducir tamaño de letra"
                >
                  A-
                </button>
                <span className="text-sand-300">|</span>
                <button
                  onClick={() => onChangeFontSize(Math.min(1.2, fontSizeScale + 0.05))}
                  className="px-2 py-0.5 text-xs font-semibold text-text-secondary hover:text-forest transition-colors"
                  aria-label="Aumentar tamaño de letra"
                >
                  A+
                </button>
              </div>

              {/* Toggle Personas / Empresas */}
              <div className="flex items-center bg-cream-surface border border-sand-300 rounded-full p-0.5" role="group" aria-label="Tipo de servicio">
                <button
                  onClick={() => onToggleSegment('b2c')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                    activeSegment === 'b2c'
                      ? 'bg-forest text-white shadow-xs'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                  aria-pressed={activeSegment === 'b2c'}
                >
                  <User className="w-3 h-3" />
                  <span>Personas</span>
                </button>
                <button
                  onClick={() => onToggleSegment('b2b')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                    activeSegment === 'b2b'
                      ? 'bg-forest text-white shadow-xs'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                  aria-pressed={activeSegment === 'b2b'}
                >
                  <Building2 className="w-3 h-3" />
                  <span>Empresas</span>
                </button>
              </div>

              {/* CTA Pill Verde Bosque */}
              <a
                href={getWhatsAppUrl(
                  activeSegment === 'b2b'
                    ? "Hola, quiero información sobre el beneficio de acompañamiento psicológico para mi empresa."
                    : undefined
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-forest hover:bg-forest-light text-white font-semibold text-xs sm:text-sm shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 fill-white/20 text-whatsapp-green" />
                <span>{CONTENT.navbar.cta}</span>
              </a>
            </div>

            {/* Botón Menú Móvil */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-text-primary hover:bg-sand-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Drawer Móvil Desplegable */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-cream-card border-b border-sand-300 px-5 pt-3 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
            {/* Toggle Personas / Empresas en Móvil */}
            <div className="flex items-center justify-center bg-cream-surface border border-sand-300 rounded-full p-1 max-w-xs mx-auto">
              <button
                onClick={() => {
                  onToggleSegment('b2c');
                  setMobileMenuOpen(false);
                }}
                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-full text-xs font-semibold ${
                  activeSegment === 'b2c' ? 'bg-forest text-white' : 'text-text-secondary'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>Para personas</span>
              </button>
              <button
                onClick={() => {
                  onToggleSegment('b2b');
                  setMobileMenuOpen(false);
                }}
                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-full text-xs font-semibold ${
                  activeSegment === 'b2b' ? 'bg-forest text-white' : 'text-text-secondary'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>Para empresas</span>
              </button>
            </div>

            {/* Enlaces de Navegación */}
            <div className="space-y-1 pt-2">
              {CONTENT.navbar.links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left py-2.5 px-3 rounded-xl text-sm font-semibold text-text-primary hover:bg-cream-surface transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Ajuste de Fuente en Móvil */}
            <div className="flex items-center justify-between pt-2 border-t border-sand-200 text-xs text-text-secondary px-2">
              <span>Tamaño de texto:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onChangeFontSize(Math.max(0.9, fontSizeScale - 0.05))}
                  className="px-2.5 py-1 rounded bg-cream-surface border border-sand-300 font-semibold"
                >
                  A-
                </button>
                <button
                  onClick={() => onChangeFontSize(Math.min(1.2, fontSizeScale + 0.05))}
                  className="px-2.5 py-1 rounded bg-cream-surface border border-sand-300 font-semibold"
                >
                  A+
                </button>
              </div>
            </div>

            {/* CTA Móvil */}
            <div className="pt-2">
              <a
                href={getWhatsAppUrl(
                  activeSegment === 'b2b'
                    ? "Hola, quiero información sobre el servicio de Mente en Línea para empresas."
                    : undefined
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full bg-forest text-white font-bold text-sm flex items-center justify-center gap-2 shadow-card"
              >
                <MessageCircle className="w-4 h-4 text-whatsapp-green" />
                <span>{CONTENT.navbar.cta}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
