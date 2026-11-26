import React from 'react';
import { MessageCircle, Mail, MapPin, Instagram, PhoneCall } from 'lucide-react';
import { CONTENT, WHATSAPP_DISPLAY, CONTACT_EMAIL, getWhatsAppUrl } from '../content';

const TikTokIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.34 6.34 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.22a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.65z"/>
  </svg>
);

export default function Footer() {
  const whatsappUrl = getWhatsAppUrl('Hola, deseo contactar al equipo de soporte de Mente en Línea.');

  return (
    <footer id="contacto" className="bg-sand-100/70 border-t border-sand-300 pt-16 pb-12 transition-colors text-text-primary" aria-label="Pie de página">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Aviso Breve de Emergencia */}
        <aside
          aria-label="Aviso de atención en emergencias"
          className="mb-12 p-4 rounded-2xl bg-cream-card border border-sand-300 text-xs text-text-secondary flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left"
        >
          <div className="flex items-center gap-2">
            <span className="font-semibold text-forest">Aviso:</span>
            <span>{CONTENT.footer.emergencyNotice}</span>
          </div>
          <a
            href="tel:113"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-forest text-white text-xs font-semibold shrink-0 hover:bg-forest-light transition-colors"
          >
            <PhoneCall className="w-3 h-3" />
            <span>Llamar al 113</span>
          </a>
        </aside>

        {/* Columnas principales de contenido */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12 mb-12">
          
          {/* Columna 1: Identidad de Marca y Misión */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-forest text-white flex items-center justify-center p-2 shadow-xs">
                <img
                  src="/assets/logo-icon-hq.svg"
                  alt=""
                  aria-hidden="true"
                  width="28"
                  height="28"
                  className="w-full h-full object-contain filter invert opacity-95"
                />
              </div>
              <span className="font-display font-extrabold text-xl text-forest tracking-tight">
                {CONTENT.brand.name}
              </span>
            </div>

            <p className="text-xs text-text-secondary leading-relaxed font-normal">
              {CONTENT.footer.description}
            </p>

            <div className="text-[11px] text-forest font-medium">
              Acompañamiento psicológico confidencial por WhatsApp
            </div>

            {/* Redes sociales */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={CONTENT.brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl bg-cream-card border border-sand-300 flex items-center justify-center text-text-secondary hover:text-forest hover:border-forest transition-colors"
                aria-label="Instagram"
                title="Instagram: @menteenlineaperu"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CONTENT.brand.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl bg-cream-card border border-sand-300 flex items-center justify-center text-text-secondary hover:text-forest hover:border-forest transition-colors"
                aria-label="TikTok"
                title="TikTok: @menteenlineaperu"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl bg-cream-card border border-sand-300 flex items-center justify-center text-text-secondary hover:text-forest hover:border-forest transition-colors"
                aria-label="WhatsApp"
                title={`WhatsApp: ${WHATSAPP_DISPLAY}`}
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Columna 2: Navegación Rápida (6 Enlaces) */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-forest mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs text-text-secondary">
              {CONTENT.footer.navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-forest transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Ética y Marco Legal */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-forest mb-4">
              Ética y Privacidad
            </h4>
            <ul className="space-y-2.5 text-xs text-text-secondary">
              <li>
                <a href="#seguridad" className="hover:text-forest transition-colors">
                  Psicólogos colegiados habilitados
                </a>
              </li>
              <li>
                <a href="#seguridad" className="hover:text-forest transition-colors">
                  Ley de Protección de Datos (Ley 29733)
                </a>
              </li>
              <li>
                <a href="#seguridad" className="hover:text-forest transition-colors">
                  Consentimiento informado previo
                </a>
              </li>
              <li>
                <a href="#seguridad" className="hover:text-forest transition-colors">
                  Alcance y límites del servicio
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto Oficial */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-forest mb-4">
              Contacto y Cobertura
            </h4>
            <ul className="space-y-3 text-xs text-text-secondary">
              {CONTACT_EMAIL && (
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-forest shrink-0" />
                  <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-forest transition-colors">
                    {CONTACT_EMAIL}
                  </a>
                </li>
              )}
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-forest shrink-0" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-forest transition-colors font-medium">
                  WhatsApp: {WHATSAPP_DISPLAY}
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
            Acompañamiento psicológico por WhatsApp · Cuidado emocional a tu alcance 🌿
          </div>
        </div>

      </div>
    </footer>
  );
}
