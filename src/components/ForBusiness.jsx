import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, LineChart, ShieldCheck, HeartHandshake, Users2, 
  ArrowRight, Check, FileSpreadsheet, Sparkles 
} from 'lucide-react';

export default function ForBusiness({ onOpenDemoModal }) {
  // Calculadora interactiva rápida de impacto para RRHH
  const [collaborators, setCollaborators] = useState(50);
  const costPerEmployee = collaborators > 150 ? 25 : 32;
  const estimatedInvestment = collaborators * costPerEmployee;

  const b2bBenefits = [
    {
      icon: Users2,
      title: "Cobertura en todo el Perú",
      description: "Ideal para personal en operaciones descentralizadas, minería, plantas y trabajo híbrido."
    },
    {
      icon: ShieldCheck,
      title: "100% Confidencialidad",
      description: "Tus colaboradores escriben desde su WhatsApp personal; RRHH jamás accede a conversaciones."
    },
    {
      icon: LineChart,
      title: "Métricas anónimas para RRHH",
      description: "Reportes trimestrales de clima emocional y adopción para decisiones informadas."
    },
    {
      icon: HeartHandshake,
      title: "Cero fricción de adopción",
      description: "Sin plataformas pesadas ni capacitaciones: se activa con un simple enlace de WhatsApp."
    }
  ];

  const alliedSectors = [
    { name: "AgroExport del Norte", sector: "Agroindustria · Piura e Ica" },
    { name: "Minería Los Andes", sector: "Operaciones Mineras · Arequipa y Puno" },
    { name: "Logística Andina Express", sector: "Transporte y Distribución · Nacional" },
    { name: "FinTech Soluciones", sector: "Tecnología y Trabajo Híbrido · Lima y Remoto" },
  ];

  return (
    <section id="empresas" className="py-28 md:py-36 bg-gradient-to-b from-sand-900 via-sand-950 to-sand-900 text-sand-50 relative overflow-hidden">
      
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage-600/10 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-lavender-600/10 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado B2B con Jerarquía Tipográfica */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-500/20 border border-sage-500/30 text-sage-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>Mente en Línea para Empresas (B2B / EAP)</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-5xl lg:text-6xl text-white tracking-tight mb-5">
            Bienestar emocional para equipos en cualquier rincón del Perú
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-sand-300 leading-relaxed font-normal">
            El estrés causa el 42% del ausentismo laboral. Protege a tu equipo con un beneficio accesible y confidencial.
          </p>
        </div>

        {/* Grid de Beneficios Corporativos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {b2bBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-sand-900/70 border border-sand-800 p-6 rounded-2xl hover:border-sage-500/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-sage-500/20 text-sage-400 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-white mb-2">{benefit.title}</h3>
                <p className="text-xs sm:text-sm text-sand-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Banner Fotográfico de Bienestar de Equipos con Lazy Loading */}
        <div className="mb-16 overflow-hidden rounded-3xl border border-sand-800 relative max-h-64 sm:max-h-72 w-full">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
            alt="Equipo colaborativo en ambiente de trabajo saludable"
            loading="lazy"
            className="w-full h-full object-cover filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-sand-950/90 via-sand-950/40 to-transparent flex items-end p-6 sm:p-8">
            <p className="text-white text-sm sm:text-base font-medium max-w-xl">
              Equipos más motivados y conectados, desde operaciones en regiones hasta oficinas híbridas en Lima.
            </p>
          </div>
        </div>

        {/* Bloque interactivo: Estimador rápido para líderes de talento / RRHH */}
        <div className="bg-sand-900/90 border border-sand-800 rounded-3xl p-6 sm:p-10 mb-16 shadow-xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold text-sage-400 uppercase tracking-wider">
                Simulador de inversión corporativa
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1 mb-3">
                Calcula la inversión para tu planilla
              </h3>
              <p className="text-sm text-sand-300 mb-6">
                Planes corporativos flexibles desde <strong>S/ 25 a S/ 35 por colaborador al mes</strong>, 
                con activación inmediata y sin contratos de permanencia abusivos.
              </p>

              {/* Slider interactivo de colaboradores */}
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-sand-300">Número de colaboradores:</span>
                  <span className="font-bold text-sage-300 text-base">{collaborators} personas</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="300"
                  step="5"
                  value={collaborators}
                  onChange={(e) => setCollaborators(Number(e.target.value))}
                  className="w-full h-2 bg-sand-800 rounded-lg appearance-none cursor-pointer accent-sage-500"
                  aria-label="Número de colaboradores"
                />
                <div className="flex justify-between text-[11px] text-sand-300">
                  <span>10 (Pequeña empresa)</span>
                  <span>150 (Mediana)</span>
                  <span>300+ (Corporación)</span>
                </div>
              </div>
            </div>

            {/* Tarjeta de Resumen Estimado */}
            <div className="lg:col-span-5 bg-sand-950/80 border border-sand-800/80 p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="text-xs text-sand-300 uppercase tracking-wider mb-1">
                  Inversión mensual estimada
                </div>
                <div className="text-4xl font-display font-extrabold text-white mb-2">
                  S/ {estimatedInvestment.toLocaleString('es-PE')}
                  <span className="text-sm font-normal text-sand-300"> / mes</span>
                </div>
                <div className="text-xs text-sage-400 font-medium mb-4">
                  Aprox. S/ {costPerEmployee} por colaborador / mes
                </div>
                <ul className="text-xs text-sand-300 space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-sage-400" />
                    <span>Acompañamiento psicológico ilimitado por WhatsApp</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-sage-400" />
                    <span>Reporte anónimo trimestral para RRHH</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-sage-400" />
                    <span>1 Taller virtual de prevención de burnout al trimestre</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={onOpenDemoModal}
                className="w-full py-3.5 px-5 rounded-xl bg-sage-500 hover:bg-sage-600 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-sage-500/20"
              >
                <span>Solicitar propuesta y demo personalizada</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* Sectores que confían en este modelo */}
        <div className="pt-6 border-t border-sand-800 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-sand-300 mb-6">
            Diseñado para los sectores productivos y organizaciones de todo el país
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {alliedSectors.map((partner, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-sand-900/40 border border-sand-800/60 text-left">
                <div className="font-semibold text-sm text-sand-200">{partner.name}</div>
                <div className="text-[11px] text-sand-300">{partner.sector}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
