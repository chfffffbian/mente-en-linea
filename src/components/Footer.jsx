import React from 'react';
import { HeartPulse, PhoneCall, MessageCircle, ExternalLink, ShieldCheck, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-sand-100 dark:bg-sand-950 border-t border-sand-200 dark:border-sand-800/80 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BANNER DE CRISIS Y EMERGENCIA OFICIAL (VERIFICADO MINSA PERÚ) */}
        <div className="mb-14 p-6 sm:p-7 rounded-3xl bg-amber-500/10 dark:bg-amber-950/30 border border-amber-500/30 dark:border-amber-800/50">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5 justify-between">
            <div className="flex items-start gap-3.5">
              <div className="p-2 rounded-xl bg-amber-500/20 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-amber-950 dark:text-amber-200 mb-1">
                  Aviso importante de atención en crisis
                </h4>
                <p className="text-xs sm:text-sm text-amber-900/90 dark:text-amber-300/80 leading-relaxed max-w-3xl">
                  Mente en Línea es un servicio de acompañamiento y orientación psicológica, no un centro de urgencias psiquiátricas. 
                  Si estás en una situación de peligro inminente o riesgo de autolesión, comunícate de inmediato y sin costo a la 
                  <strong> Línea 113 (Opción 5) del MINSA</strong> (atención psicológica 24/7 gratuita a nivel nacional), 
                  al <strong>SAMU (106)</strong> o acude al Centro de Salud Mental Comunitaria (CSMC) más cercano.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <a
                href="tel:113"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs transition-colors shadow-xs"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Llamar al 113 (Opción 5)</span>
              </a>
              <a
                href="https://wa.me/51955557000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white dark:bg-sand-900 border border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-300 font-medium text-xs transition-colors"
                title="WhatsApp Oficial MINSA Salud Mental: 955 557 000"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp MINSA: 955 557 000</span>
              </a>
              <a
                href="https://wa.me/51952842623"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white dark:bg-sand-900 border border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-300 font-medium text-xs transition-colors"
                title="WhatsApp Oficial MINSA Salud Mental (Respaldo): 952 842 623"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Respaldo: 952 842 623</span>
              </a>
            </div>
          </div>
        </div>

        {/* Links y datos principales */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Columna 1: Info Brand */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-sage-600 flex items-center justify-center text-white font-bold text-sm shadow-xs">
                ML
              </div>
              <span className="font-display font-bold text-lg text-sand-900 dark:text-sand-50">
                Mente en Línea
              </span>
            </div>
            <p className="text-xs text-sand-800 dark:text-sand-300 leading-relaxed font-normal">
              Conectamos el talento psicológico con las personas de todo el Perú a través de WhatsApp. Descentralizando el bienestar emocional sin barreras geográficas.
            </p>
            <div className="text-[11px] text-sage-800 dark:text-sage-400 flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Iniciativa alineada a la Ley N° 30947</span>
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h5 className="font-semibold text-xs uppercase tracking-wider text-sand-800 dark:text-sand-300 mb-4">
              Navegación
            </h5>
            <ul className="space-y-2.5 text-xs text-sand-800 dark:text-sand-300">
              <li><a href="#como-funciona" className="hover:text-sage-600 transition-colors">Cómo funciona</a></li>
              <li><a href="#problema" className="hover:text-sage-600 transition-colors">El problema en provincias</a></li>
              <li><a href="#demo-chat" className="hover:text-sage-600 transition-colors">Simulación del chat</a></li>
              <li><a href="#empresas" className="hover:text-sage-600 transition-colors">Para empresas (B2B EAP)</a></li>
              <li><a href="#precios" className="hover:text-sage-600 transition-colors">Planes y tarifas</a></li>
            </ul>
          </div>

          {/* Columna 3: Legal & Ética */}
          <div>
            <h5 className="font-semibold text-xs uppercase tracking-wider text-sand-800 dark:text-sand-300 mb-4">
              Ética y Marco Legal
            </h5>
            <ul className="space-y-2.5 text-xs text-sand-800 dark:text-sand-300">
              <li><a href="#" className="hover:text-sage-600 transition-colors">Verificación de Colegiatura CPsP</a></li>
              <li><a href="#" className="hover:text-sage-600 transition-colors">Políticas de Privacidad de Datos</a></li>
              <li><a href="#" className="hover:text-sage-600 transition-colors">Términos del Servicio</a></li>
              <li><a href="#" className="hover:text-sage-600 transition-colors">Consentimiento Informado</a></li>
              <li><a href="#" className="hover:text-sage-600 transition-colors">Libro de Reclamaciones Virtual</a></li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h5 className="font-semibold text-xs uppercase tracking-wider text-sand-800 dark:text-sand-300 mb-4">
              Contacto
            </h5>
            <ul className="space-y-2.5 text-xs text-sand-800 dark:text-sand-300">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sage-600" />
                <span>contacto@menteenlinea.pe</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-sage-600" />
                <span>WhatsApp: +51 999 999 999</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-sage-600" />
                <span>Lima & Cobertura a nivel nacional</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright y Créditos */}
        <div className="pt-8 border-t border-sand-200 dark:border-sand-800 text-center sm:flex sm:justify-between sm:items-center text-xs text-sand-800 dark:text-sand-300">
          <div>
            © {new Date().getFullYear()} Mente en Línea. Todos los derechos reservados.
          </div>
          <div className="mt-2 sm:mt-0 text-[11px]">
            Diseñado con empatía para conectar a todo el Perú 🌿
          </div>
        </div>

      </div>
    </footer>
  );
}
