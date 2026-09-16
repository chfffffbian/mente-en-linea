import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Info, AlertTriangle, CheckCircle, Sparkles } from 'lucide-react';

/**
 * Datos de las regiones del Perú con énfasis en las zonas de mayor brecha de atención
 */
const regionsData = [
  {
    id: 'loreto',
    name: 'Loreto',
    category: 'priority',
    brecha: '80%+',
    stat: '82% de brecha en salud mental',
    description: 'Menos de 1 psicólogo por cada 45,000 habitantes en cuencas ribereñas. Traslados fluviales de días para llegar a un centro.',
    color: 'sage',
    coords: { x: 260, y: 85, width: 140, height: 110 },
    badge: 'Región Prioritaria',
    path: 'M 210,60 L 330,40 L 390,95 L 360,165 L 290,160 L 255,140 L 220,120 Z'
  },
  {
    id: 'piura',
    name: 'Piura',
    category: 'priority',
    brecha: '78%',
    stat: '78% sin acceso oportuno',
    description: 'Demanda crítica en valles agrícolas y caletas costeras. Hospitales provinciales desbordados con citas diferidas a 3 meses.',
    color: 'sage',
    coords: { x: 70, y: 100, width: 60, height: 50 },
    badge: 'Región Prioritaria',
    path: 'M 75,90 L 115,95 L 120,135 L 85,145 L 70,120 Z'
  },
  {
    id: 'lambayeque',
    name: 'Lambayeque',
    category: 'priority',
    brecha: '75%',
    stat: '75% de desatención periférica',
    description: 'Concentración exclusiva en Chiclayo; distritos rurales y agrícolas carecen de acompañamiento psicológico continuo.',
    color: 'lavender',
    coords: { x: 85, y: 145, width: 50, height: 40 },
    badge: 'Región Prioritaria',
    path: 'M 85,145 L 120,135 L 130,165 L 95,175 Z'
  },
  {
    id: 'ucayali',
    name: 'Ucayali',
    category: 'priority',
    brecha: '85%',
    stat: '85% de brecha asistencial',
    description: 'Fuerte dispersión geográfica. Dificultad extrema para retener especialistas clínicos fuera de Pucallpa.',
    color: 'lavender',
    coords: { x: 250, y: 220, width: 90, height: 80 },
    badge: 'Región Prioritaria',
    path: 'M 255,190 L 320,195 L 350,265 L 285,285 L 255,230 Z'
  },
  {
    id: 'madrededios',
    name: 'Madre de Dios',
    category: 'priority',
    brecha: '83%',
    stat: '83% sin cobertura clínica',
    description: 'Campamentos y comunidades nativas sin consultorios de apoyo emocional. WhatsApp permite llegar donde no hay carreteras.',
    color: 'lavender',
    coords: { x: 330, y: 310, width: 85, height: 65 },
    badge: 'Región Prioritaria',
    path: 'M 320,285 L 395,295 L 420,345 L 345,360 Z'
  },
  {
    id: 'puno',
    name: 'Puno',
    category: 'priority',
    brecha: '82%',
    stat: '82% de déficit en atención',
    description: 'Menos de 2 psicólogos clínicos por 50,000 hab. en el altiplano. Estigma social elevado y falta de canales privados confidenciales.',
    color: 'sage',
    coords: { x: 340, y: 400, width: 75, height: 85 },
    badge: 'Región Prioritaria',
    path: 'M 335,370 L 390,360 L 415,440 L 355,475 L 330,420 Z'
  },
  {
    id: 'lima',
    name: 'Lima y Callao',
    category: 'metropolitan',
    brecha: '65% sat.',
    stat: '65% especialistas concentrados, pero saturados',
    description: 'Concentra la mayoría de psicólogos, pero los costos privados (S/ 150/sesión) y el tráfico de 2h imposibilitan la terapia continua.',
    color: 'calmblue',
    coords: { x: 165, y: 285, width: 55, height: 60 },
    badge: 'Saturación Urbana',
    path: 'M 160,265 L 195,270 L 205,330 L 170,335 Z'
  },
  {
    id: 'cusco',
    name: 'Cusco',
    category: 'standard',
    brecha: '72%',
    stat: '72% sin cobertura rural',
    description: 'Alta presión laboral en sectores turismo, servicios y comunidades altoandinas sin acceso a salud mental.',
    color: 'neutral',
    coords: { x: 275, y: 350, width: 65, height: 60 },
    badge: 'Zona Altoandina',
    path: 'M 265,320 L 330,315 L 335,370 L 280,380 Z'
  }
];

export default function PeruMap() {
  const [activeRegion, setActiveRegion] = useState(regionsData[0]);
  const [hoveredRegion, setHoveredRegion] = useState(null);

  const currentDisplay = hoveredRegion || activeRegion;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="my-16 bg-warm-cream/90 dark:bg-sand-900/80 backdrop-blur-md rounded-3xl border border-sand-200/90 dark:border-sand-800 p-6 sm:p-10 shadow-sm"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Columna Izquierda: Información de la Región Seleccionada */}
        <div className="lg:col-span-6 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-100 dark:bg-sage-900/60 text-xs font-semibold text-sage-800 dark:text-sage-300">
            <MapPin className="w-3.5 h-3.5 text-sage-600" />
            <span>Mapa de Impacto y Cobertura Nacional</span>
          </div>

          <div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-sand-900 dark:text-sand-50 mb-2">
              Un problema nacional con brechas críticas en regiones
            </h3>
            <p className="text-sm text-sand-700 dark:text-sand-300 leading-relaxed font-normal">
              Haz clic o pasa el cursor sobre las regiones destacadas para explorar los datos de salud mental validados en la investigación <strong>EXPOINNOVA</strong>.
            </p>
          </div>

          {/* Tarjeta dinámica del departamento */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentDisplay.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="p-5 rounded-2xl bg-white/90 dark:bg-sand-950/70 border border-sand-200 dark:border-sand-800 shadow-xs"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-sage-500 animate-ping" />
                  <h4 className="font-display font-bold text-xl text-sand-900 dark:text-sand-50">
                    {currentDisplay.name}
                  </h4>
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                  currentDisplay.category === 'priority'
                    ? 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300'
                    : 'bg-sage-100 text-sage-800 dark:bg-sage-950/60 dark:text-sage-300'
                }`}>
                  {currentDisplay.badge}
                </span>
              </div>

              <div className="text-2xl font-display font-extrabold text-sage-700 dark:text-sage-400 mb-1">
                {currentDisplay.stat}
              </div>

              <p className="text-xs sm:text-sm text-sand-700 dark:text-sand-300 leading-relaxed mb-4">
                {currentDisplay.description}
              </p>

              <div className="pt-3 border-t border-sand-100 dark:border-sand-800 flex items-center justify-between text-xs text-sand-600 dark:text-sand-400">
                <span className="flex items-center gap-1 font-medium text-sage-700 dark:text-sage-300">
                  <CheckCircle className="w-3.5 h-3.5 text-sage-600" />
                  Conexión directa por WhatsApp
                </span>
                <span>Cobertura 100% activa</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Selector rápido en botones de píldora */}
          <div className="pt-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-sand-500 dark:text-sand-400 mb-2">
              Explorar regiones clave:
            </div>
            <div className="flex flex-wrap gap-2">
              {regionsData.map((reg) => (
                <button
                  key={reg.id}
                  onClick={() => setActiveRegion(reg)}
                  onMouseEnter={() => setHoveredRegion(reg)}
                  onMouseLeave={() => setHoveredRegion(null)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    activeRegion.id === reg.id
                      ? 'bg-sage-600 text-white shadow-xs scale-105'
                      : 'bg-sand-100 dark:bg-sand-800/80 text-sand-800 dark:text-sand-200 hover:bg-sand-200 dark:hover:bg-sand-700'
                  }`}
                >
                  {reg.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Columna Derecha: Mapa SVG Line-Art Simplificado del Perú */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
          
          <div className="relative w-full max-w-[420px] aspect-[4/5] bg-sand-100/40 dark:bg-sand-950/40 rounded-3xl border border-sand-200/60 dark:border-sand-800/60 p-4 flex items-center justify-center overflow-hidden">
            
            {/* SVG del Mapa con Departamentos y Silueta */}
            <svg
              viewBox="0 0 450 520"
              className="w-full h-full filter drop-shadow-sm select-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Océano Pacífico (Indicador de Costa) */}
              <path
                d="M 50,70 Q 110,230 180,480"
                fill="none"
                stroke="#94C7E5"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.5"
              />
              <text x="35" y="320" fill="#94C7E5" fontSize="11" fontFamily="'Plus Jakarta Sans', sans-serif" opacity="0.7" transform="rotate(-65 35 320)">
                Océano Pacífico
              </text>

              {/* Silueta Base de Fondo del Perú */}
              <path
                d="M 70,100 L 130,45 L 210,35 L 340,30 L 400,90 L 370,170 L 390,260 L 430,340 L 360,480 L 310,485 L 220,380 L 160,260 L 100,165 Z"
                fill="#F3ECE1"
                className="dark:fill-sand-900 transition-colors"
                stroke="#DFD4C2"
                strokeWidth="2"
                strokeLinejoin="round"
              />

              {/* Departamentos y Regiones */}
              {regionsData.map((reg) => {
                const isSelected = activeRegion.id === reg.id;
                const isHovered = hoveredRegion?.id === reg.id;
                const isActive = isSelected || isHovered;

                // Color dinámico según categoría
                let fillColor = '#E6F0EC'; // Sage claro por defecto
                let strokeColor = '#5A937E';

                if (reg.color === 'lavender') {
                  fillColor = isActive ? '#CDC6F3' : '#E4E0F8';
                  strokeColor = '#8E7DBE';
                } else if (reg.color === 'sage') {
                  fillColor = isActive ? '#7EAF9B' : '#CEE2D8';
                  strokeColor = '#457765';
                } else if (reg.color === 'calmblue') {
                  fillColor = isActive ? '#94C7E5' : '#C2DEF0';
                  strokeColor = '#3D8DC3';
                } else {
                  fillColor = isActive ? '#DFD4C2' : '#EEE7DD';
                  strokeColor = '#A89F91';
                }

                return (
                  <g
                    key={reg.id}
                    className="cursor-pointer transition-transform duration-200"
                    onClick={() => setActiveRegion(reg)}
                    onMouseEnter={() => setHoveredRegion(reg)}
                    onMouseLeave={() => setHoveredRegion(null)}
                  >
                    <path
                      d={reg.path}
                      fill={fillColor}
                      stroke={strokeColor}
                      strokeWidth={isActive ? "2.5" : "1.5"}
                      className="transition-all duration-200 hover:opacity-95"
                    />

                    {/* Pin e indicador en el centro de la región */}
                    <circle
                      cx={reg.coords.x}
                      cy={reg.coords.y}
                      r={isActive ? 6 : 4}
                      fill={strokeColor}
                      className="transition-all duration-200"
                    />
                    
                    {/* Nombre del departamento */}
                    <text
                      x={reg.coords.x}
                      y={reg.coords.y - 8}
                      textAnchor="middle"
                      fontSize="10"
                      fontWeight="700"
                      fill="#274138"
                      className="dark:fill-sand-100 pointer-events-none tracking-tight font-display"
                    >
                      {reg.name}
                    </text>
                  </g>
                );
              })}

              {/* Conectores sutiles hacia la costa / Lima */}
              <line x1="180" y1="300" x2="280" y2="100" stroke="#5A937E" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
              <line x1="180" y1="300" x2="360" y2="420" stroke="#8E7DBE" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
              <line x1="180" y1="300" x2="95" y2="120" stroke="#5A937E" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
            </svg>

            {/* Leyenda al pie del mapa */}
            <div className="absolute bottom-3 left-4 right-4 bg-white/90 dark:bg-sand-900/90 backdrop-blur-xs p-2 rounded-xl border border-sand-200/80 dark:border-sand-800 flex items-center justify-around text-[10px] text-sand-700 dark:text-sand-300">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-sage-500"></span>
                <span>Región Prioritaria</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-lavender-500"></span>
                <span>Foco de Cobertura</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-calmblue-500"></span>
                <span>Lima / Urbano</span>
              </div>
            </div>

          </div>

          <p className="text-[11px] text-sand-500 dark:text-sand-400 mt-3 text-center">
            📍 Servicio 100% activo en los 24 departamentos y la provincia constitucional del Callao.
          </p>

        </div>

      </div>
    </motion.div>
  );
}
