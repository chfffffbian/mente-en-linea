import React, { useState, useEffect } from 'react';
import { MessageCircle, Moon, Sun, Menu, X, ShieldCheck } from 'lucide-react';

/**
 * Header sticky con navegación suave, botón directo a WhatsApp y switch de modo oscuro.
 */
export default function Header({ darkMode, toggleDarkMode, onOpenB2BModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Cómo funciona', href: '#como-funciona' },
    { label: 'El problema', href: '#problema' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Para empresas', href: '#empresas' },
    { label: 'Confianza y ética', href: '#seguridad' },
    { label: 'Planes', href: '#precios' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-warm-cream/90 dark:bg-sand-950/90 backdrop-blur-md shadow-sm border-b border-sand-200/60 dark:border-sand-800/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-sage-500 to-sage-600 flex items-center justify-center text-white shadow-md shadow-sage-500/20 group-hover:scale-105 transition-transform duration-200">
              {/* Isotipo hoja & calma */}
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" stroke="#CDC6F3"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl text-sand-900 dark:text-sand-50 tracking-tight flex items-center gap-1.5">
                Mente en Línea
                <span className="inline-block w-2 h-2 rounded-full bg-sage-500 animate-pulse" title="Servicio activo"></span>
              </span>
              <span className="text-xs text-sand-800 dark:text-sand-300 font-medium tracking-wide">
                Apoyo psicológico por WhatsApp
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-sand-800 dark:text-sand-200 hover:text-sage-700 dark:hover:text-sage-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: Dark mode + WhatsApp CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Toggle Dark Mode */}
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-full text-sand-800 dark:text-sand-300 hover:bg-sand-200/50 dark:hover:bg-sand-800/50 transition-colors focus:outline-none"
              title={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              aria-label="Toggle tema oscuro"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-300" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* CTA WhatsApp Button */}
            <a
              href="https://wa.me/51999999999?text=Hola%20Mente%20en%20L%C3%ADnea,%20deseo%20informaci%C3%B3n%20para%20iniciar%20acompa%C3%B1amiento%20psicol%C3%B3gico."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sage-600 hover:bg-sage-700 text-white font-medium text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Escríbenos por WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-sand-800 dark:text-sand-300 hover:bg-sand-200/50 dark:hover:bg-sand-800/50 transition-colors"
              aria-label="Toggle tema oscuro"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-300" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-sand-800 dark:text-sand-200 hover:bg-sand-200/50 dark:hover:bg-sand-800/50 transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 pt-3 pb-5 px-4 bg-warm-cream/95 dark:bg-sand-900/95 backdrop-blur-lg rounded-2xl border border-sand-200 dark:border-sand-800 shadow-xl space-y-3 animate-in fade-in slide-in-from-top-3 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-sand-800 dark:text-sand-200 hover:text-sage-600"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-sand-200 dark:border-sand-800">
              <a
                href="https://wa.me/51999999999?text=Hola%20Mente%20en%20L%C3%ADnea,%20deseo%20informaci%C3%B3n%20para%20iniciar%20acompa%C3%B1amiento%20psicol%C3%B3gico."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-sage-600 hover:bg-sage-700 text-white font-medium shadow"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Escríbenos por WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
