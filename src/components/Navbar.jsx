import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { CONTENT, getWhatsAppUrl } from '../content';

export default function Navbar({ fontSizeScale, onChangeFontSize }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showFontMenu, setShowFontMenu] = useState(false);

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
      {/* Topbar Oficial */}
      <aside
        aria-label="Aviso de servicio"
        className="bg-[#1F4D3A] text-[#FBF8F3] py-2 px-4 text-center text-xs sm:text-sm font-medium tracking-wide z-50 relative"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <span>{CONTENT.navbar.topbar}</span>
        </div>
      </aside>

      {/* Navbar Sticky Translúcida con Blur (Altura 72px) */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 h-[72px] flex items-center ${
          scrolled
            ? 'bg-[#F7F1E8]/95 backdrop-blur-md border-b border-[rgba(31,77,58,0.12)] shadow-xs'
            : 'bg-[#F7F1E8]/85 backdrop-blur-md'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo + Mente en Línea (1 sola línea, sin tagline) */}
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4D3A] rounded-xl"
              aria-label="Mente en Línea - Ir al inicio"
            >
              <div className="w-9 h-9 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                <img
                  src="/assets/logo-icon-hq-verde.svg"
                  alt=""
                  aria-hidden="true"
                  width="36"
                  height="36"
                  className="w-9 h-9 object-contain"
                />
              </div>
              <span className="font-display font-bold text-xl sm:text-2xl text-[#0B4A24] tracking-tight leading-none whitespace-nowrap">
                Mente en Línea
              </span>
            </a>

            {/* Enlaces Desktop */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Navegación principal">
              {CONTENT.navbar.links.map((link) => {
                if (link.isSecondary) {
                  return (
                    <button
                      key={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className="whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#1F4D3A] bg-[#DCE9DD]/70 hover:bg-[#DCE9DD] border border-[#5E7F63]/30 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4D3A]"
                    >
                      {link.label}
                    </button>
                  );
                }
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="whitespace-nowrap text-sm font-medium text-[#1E2A24] hover:text-[#1F4D3A] transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4D3A]"
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Acciones Derecha: Botón Aa + CTA WhatsApp */}
            <div className="hidden sm:flex items-center gap-3">
              
              {/* Botón de Tamaño de Texto "Aa" accesible */}
              <div className="relative">
                <button
                  onClick={() => setShowFontMenu(!showFontMenu)}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FBF8F3] border border-[rgba(31,77,58,0.15)] text-xs font-bold text-[#1F4D3A] hover:bg-[#DCE9DD]/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4D3A]"
                  aria-label="Tamaño de texto"
                  aria-expanded={showFontMenu}
                  title="Ajustar tamaño de texto"
                >
                  Aa
                </button>

                {showFontMenu && (
                  <div className="absolute right-0 mt-2 p-1.5 bg-[#FBF8F3] border border-[rgba(31,77,58,0.15)] rounded-2xl shadow-lg flex items-center gap-1 z-50 animate-in fade-in">
                    <button
                      onClick={() => onChangeFontSize(Math.max(0.85, fontSizeScale - 0.05))}
                      className="px-2.5 py-1 text-xs font-semibold text-[#5B6B62] hover:text-[#1F4D3A] hover:bg-[#DCE9DD]/60 rounded-xl transition-colors"
                      aria-label="Reducir tamaño de texto"
                    >
                      A−
                    </button>
                    <span className="text-[#5B6B62]/30">|</span>
                    <button
                      onClick={() => onChangeFontSize(1.0)}
                      className="px-2 py-1 text-[11px] font-semibold text-[#5B6B62] hover:text-[#1F4D3A] hover:bg-[#DCE9DD]/60 rounded-xl transition-colors"
                      aria-label="Restablecer tamaño normal"
                    >
                      100%
                    </button>
                    <span className="text-[#5B6B62]/30">|</span>
                    <button
                      onClick={() => onChangeFontSize(Math.min(1.2, fontSizeScale + 0.05))}
                      className="px-2.5 py-1 text-xs font-semibold text-[#5B6B62] hover:text-[#1F4D3A] hover:bg-[#DCE9DD]/60 rounded-xl transition-colors"
                      aria-label="Aumentar tamaño de texto"
                    >
                      A+
                    </button>
                  </div>
                )}
              </div>

              {/* Botón CTA Principal Desktop */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#1F4D3A] hover:bg-[#173B2C] text-[#FBF8F3] text-sm font-bold shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1F4D3A]"
              >
                <MessageCircle className="w-4 h-4 fill-[#FBF8F3]/20 text-[#25D366]" />
                <span className="whitespace-nowrap">{CONTENT.navbar.cta}</span>
              </a>
            </div>

            {/* Controles Mobile */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1F4D3A] text-[#FBF8F3] text-xs font-bold"
                aria-label="Escribir por WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span className="hidden xs:inline">WhatsApp</span>
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-[#1E2A24] hover:bg-[#DCE9DD]/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4D3A]"
                aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Drawer Mobile */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-[72px] left-0 w-full bg-[#F7F1E8] border-b border-[rgba(31,77,58,0.12)] p-6 shadow-xl animate-in slide-in-from-top-2">
            <nav className="flex flex-col space-y-4 text-left" aria-label="Navegación móvil">
              {CONTENT.navbar.links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left text-base font-semibold py-2 transition-colors ${
                    link.isSecondary
                      ? 'text-[#1F4D3A] font-bold'
                      : 'text-[#1E2A24] hover:text-[#1F4D3A]'
                  }`}
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-4 border-t border-[rgba(31,77,58,0.12)] flex items-center justify-between">
                <span className="text-xs text-[#5B6B62]">Tamaño de texto:</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onChangeFontSize(Math.max(0.85, fontSizeScale - 0.05))}
                    className="px-3 py-1 bg-[#FBF8F3] border border-[rgba(31,77,58,0.15)] rounded-lg text-xs font-bold text-[#1F4D3A]"
                    aria-label="Reducir letra"
                  >
                    A−
                  </button>
                  <button
                    onClick={() => onChangeFontSize(Math.min(1.2, fontSizeScale + 0.05))}
                    className="px-3 py-1 bg-[#FBF8F3] border border-[rgba(31,77,58,0.15)] rounded-lg text-xs font-bold text-[#1F4D3A]"
                    aria-label="Aumentar letra"
                  >
                    A+
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full bg-[#1F4D3A] text-[#FBF8F3] font-bold text-center text-sm flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>{CONTENT.navbar.cta}</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
