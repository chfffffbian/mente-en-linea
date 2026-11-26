import React from 'react';
import { MessageCircle, Mail, MapPin, Instagram, PhoneCall } from 'lucide-react';
import {
  CONTENT,
  WHATSAPP_NUMBER,
  CONTACT_EMAIL,
  PRIVACY_URL,
  TERMS_URL,
  COMPLAINTS_URL,
  INSTAGRAM_URL,
  TIKTOK_URL,
  getWhatsAppUrl,
} from '../content';

const TikTokIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.34 6.34 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.22a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.65z"/>
  </svg>
);

export default function Footer() {
  const whatsappUrl = getWhatsAppUrl('Hola, deseo contactar al equipo de soporte de Mente en Línea.');

  const legalLinks = [
    { label: 'Política de privacidad', href: PRIVACY_URL },
    { label: 'Términos y condiciones', href: TERMS_URL },
    { label: 'Libro de reclamaciones', href: COMPLAINTS_URL },
  ].filter((link) => Boolean(link.href && link.href.trim() !== ''));

  return (
    <footer id="contacto" className="bg-[#FBF8F3] border-t border-[rgba(31,77,58,0.12)] pt-16 pb-20 transition-colors text-text-primary" aria-label="Pie de página">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Aviso Breve Único de Emergencia */}
        <aside
          aria-label="Aviso de atención en emergencias"
          className="mb-12 p-4 rounded-2xl bg-cream-card border border-sand-300 text-xs sm:text-sm text-text-secondary flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left shadow-xs"
        >
          <div className="flex items-center gap-2">
            <span className="font-semibold text-forest">Aviso:</span>
            <span>{CONTENT.footer.emergencyNotice}</span>
          </div>
          <a
            href="tel:113"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-forest text-white text-xs font-semibold shrink-0 hover:bg-forest/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-forest"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>{CONTENT.footer.emergencyButton}</span>
          </a>
        </aside>

        {/* Columnas principales */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 mb-12">
          
          {/* Identidad de Marca y Misión */}
          <div className="md:col-span-5 space-y-4">
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
              <span className="font-display font-black text-xl text-forest">
                {CONTENT.brand.name}
              </span>
            </div>

            <p className="text-sm text-text-secondary leading-relaxed font-normal max-w-sm">
              {CONTENT.footer.description}
            </p>

            {/* Redes sociales (mínimo 44x44 px de área táctil) */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-cream-card border border-sand-300 flex items-center justify-center text-text-secondary hover:text-forest hover:border-forest transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                aria-label="Instagram"
                title="Instagram: @menteenlineaperu"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-cream-card border border-sand-300 flex items-center justify-center text-text-secondary hover:text-forest hover:border-forest transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                aria-label="TikTok"
                title="TikTok: @menteenlineaperu"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
              {WHATSAPP_NUMBER && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-cream-card border border-sand-300 flex items-center justify-center text-text-secondary hover:text-forest hover:border-forest transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                  aria-label="WhatsApp"
                  title="WhatsApp de Mente en Línea"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Navegación (6 links) */}
          <div className="md:col-span-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-forest mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm text-text-secondary">
              {CONTENT.footer.navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-forest transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Información legal (solo si URLs existen) */}
          {legalLinks.length > 0 && (
            <div className="md:col-span-2">
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-forest mb-4">
                Información
              </h4>
              <ul className="space-y-2.5 text-sm text-text-secondary">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="hover:text-forest transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Contacto */}
          <div className={legalLinks.length > 0 ? "md:col-span-2" : "md:col-span-4"}>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-forest mb-4">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              {WHATSAPP_NUMBER && (
                <li className="flex items-center gap-2.5">
                  <MessageCircle className="w-4 h-4 text-forest shrink-0" />
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-forest transition-colors font-medium"
                  >
                    WhatsApp: {CONTENT.footer.whatsappDisplay}
                  </a>
                </li>
              )}
              {CONTACT_EMAIL && (
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-forest shrink-0" />
                  <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-forest transition-colors">
                    {CONTACT_EMAIL}
                  </a>
                </li>
              )}
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                <span>{CONTENT.footer.coverageNotice}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Separador y Copyright exacto */}
        <div className="pt-8 border-t border-sand-300 text-center text-xs text-text-secondary">
          <p>{CONTENT.footer.copyright}</p>
        </div>

      </div>
    </footer>
  );
}
