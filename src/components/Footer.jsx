import React from 'react';
import { HeartPulse, PhoneCall, MessageCircle, ShieldCheck, Mail, MapPin, Instagram } from 'lucide-react';
import { CONTENT, WHATSAPP_DISPLAY, getWhatsAppUrl } from '../content';

export default function Footer() {
  const whatsappUrl = getWhatsAppUrl('Hola, deseo contactar al equipo de soporte de Mente en Línea.');

  return (
    <footer className="bg-sand-100/70 border-t border-sand-300 pt-16 pb-12 transition-colors text-text-primary" aria-label="Pie de página">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BANNER DE CRISIS Y ATENCIÓN EN EMERGENCIA OFICIAL (MINSA PERÚ) */}
        <aside
          aria-label="Información de atención en caso de emergencia"
          className="mb-14 p-6 sm:p-7 rounded-3xl bg-amber-500/10 border border-amber-500/30 text-sand-900"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5 justify-between">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-2xl bg-amber-500/20 text-amber-800 shrink-0 mt-0.5">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-base sm:text-lg text-amber-950 mb-1">
                  Aviso importante de atención en crisis
                </h3>
                <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed max-w-3xl">
                  {CONTENT.footer.emergencyNotice} Si tú o alguien que conoces necesita contención inmediata, llama gratis a la 
                  <strong className="font-semibold text-amber-950"> Línea 113 (Opción 5) del MINSA</strong> las 24 horas del día o acude al Centro de Salud Mental Comunitario más cercano.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 shrink-0 w-full sm:w-auto">
              <a
                href="tel:113"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-semibold text-xs transition-colors shadow-xs"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Llamar al 113 (Opción 5)</span>
              </a>
              <a
                href="https://wa.me/51955557000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-cream-card border border-amber-300 text-amber-950 font-medium text-xs hover:bg-amber-50 transition-colors"
                title="WhatsApp Oficial MINSA Salud Mental: 955 557 000"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp MINSA: 955 557 000</span>
              </a>
              <a
                href="https://wa.me/51952842623"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-cream-card border border-amber-300 text-amber-950 font-medium text-xs hover:bg-amber-50 transition-colors"
                title="WhatsApp Oficial MINSA Salud Mental (Respaldo): 952 842 623"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Respaldo: 952 842 623</span>
              </a>
            </div>
          </div>
        </aside>

        {/* Columnas principales de contenido */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12 mb-12">
          
          {/* Columna 1: Identidad de Marca y Misión */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-forest flex items-center justify-center p-1.5 shadow-xs">
                <img
                  src="/assets/logo-blanco.png"
                  alt="Logotipo de Mente en Línea"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <span className="font-display font-extrabold text-xl text-forest tracking-tight">
                {CONTENT.brand.name}
              </span>
            </div>

            <p className="text-xs text-text-secondary leading-relaxed font-normal">
              {CONTENT.footer.description}
            </p>

            <div className="text-[11px] text-forest flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 shrink-0 text-forest" />
              <span>Iniciativa alineada a la Ley N° 30947</span>
            </div>

            {/* Redes sociales */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={CONTENT.brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl bg-cream-card border border-sand-300 flex items-center justify-center text-text-secondary hover:text-forest hover:border-forest transition-colors"
                aria-label="Instagram de Mente en Línea"
                title="Instagram: @menteenlineaperu"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CONTENT.brand.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl bg-cream-card border border-sand-300 flex items-center justify-center text-text-secondary hover:text-forest hover:border-forest transition-colors font-bold text-xs"
                aria-label="TikTok de Mente en Línea"
                title="TikTok: @menteenlineaperu"
              >
                Tk
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl bg-cream-card border border-sand-300 flex items-center justify-center text-text-secondary hover:text-forest hover:border-forest transition-colors"
                aria-label="WhatsApp de Mente en Línea"
                title={`WhatsApp: ${WHATSAPP_DISPLAY}`}
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Columna 2: Navegación Rápida */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-forest mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs text-text-secondary">
              <li>
                <a href="#como-funciona" className="hover:text-forest transition-colors">
                  Cómo funciona
                </a>
              </li>
              <li>
                <a href="#problema" className="hover:text-forest transition-colors">
                  El problema y mapa del Perú
                </a>
              </li>
              <li>
                <a href="#demo-chat" className="hover:text-forest transition-colors">
                  Simulador de WhatsApp
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-forest transition-colors">
                  Beneficios del servicio
                </a>
              </li>
              <li>
                <a href="#quiz" className="hover:text-forest transition-colors">
                  Test de orientación
                </a>
              </li>
              <li>
                <a href="#empresas" className="hover:text-forest transition-colors">
                  Mente en Línea para Empresas (B2B)
                </a>
              </li>
              <li>
                <a href="#precios" className="hover:text-forest transition-colors">
                  Planes y tarifas
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-forest transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Ética y Marco Legal */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-forest mb-4">
              Ética y Marco Legal
            </h4>
            <ul className="space-y-2.5 text-xs text-text-secondary">
              <li>
                <a href="#confianza" className="hover:text-forest transition-colors">
                  Colegiatura CPsP verificada
                </a>
              </li>
              <li>
                <a href="#confianza" className="hover:text-forest transition-colors">
                  Ley N° 29733 (Protección de Datos)
                </a>
              </li>
              <li>
                <a href="#confianza" className="hover:text-forest transition-colors">
                  Consentimiento informado previo
                </a>
              </li>
              <li>
                <a href="#confianza" className="hover:text-forest transition-colors">
                  Alcance y límites del servicio
                </a>
              </li>
              <li>
                <span className="text-text-secondary/70 italic">
                  Libro de reclamaciones virtual
                </span>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto Oficial */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-forest mb-4">
              Contacto y Cobertura
            </h4>
            <ul className="space-y-3 text-xs text-text-secondary">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-forest shrink-0" />
                <a href={`mailto:${CONTENT.footer.contact.email}`} className="hover:text-forest transition-colors">
                  {CONTENT.footer.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-forest shrink-0" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-forest transition-colors font-medium">
                  WhatsApp: {CONTENT.footer.contact.whatsapp}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                <span>Cobertura nacional en Lima y todas las regiones del Perú</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Separador y Copyright */}
        <div className="pt-8 border-t border-sand-300 text-center sm:flex sm:justify-between sm:items-center text-xs text-text-secondary">
          <div>
            {CONTENT.footer.copyright}
          </div>
          <div className="mt-2 sm:mt-0 text-[11px] text-text-secondary/80">
            Acompañamiento psicológico asincrónico por WhatsApp · Diseñado para la realidad del Perú 🌿
          </div>
        </div>

      </div>
    </footer>
  );
}
