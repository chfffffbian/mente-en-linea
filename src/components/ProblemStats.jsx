import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Users, DollarSign, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';

/**
 * Componente auxiliar para animar números progresivamente cuando entran en pantalla
 */
function AnimatedCounter({ target, suffix = "", prefix = "", duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseFloat(target);
    const totalSteps = 60 * duration;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      const progress = stepCount / totalSteps;
      // Curva easeOutExpo
      const current = Math.round(start + (end - start) * (1 - Math.pow(1 - progress, 3)));
      setCount(current);

      if (stepCount >= totalSteps) {
        setCount(end);
        clearInterval(timer);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="font-display font-black tracking-tight">
      {prefix}{count}{suffix}
    </span>
  );
}

import PeruMap from './PeruMap.jsx';

/**
 * Sección El Problema: Cifras de impacto validadas en la investigación EXPOINNOVA
 */
export default function ProblemStats() {
  const stats = [
    {
      id: 1,
      number: 80,
      prefix: "",
      suffix: "%+",
      label: "Brecha de atención regional",
      detail: "En regiones como Loreto, Puno y Ucayali, más del 80% de la población no tiene acceso a servicios de salud mental (cercana al 89% en Loreto y Puno).",
      icon: TrendingUp,
      color: "sage"
    },
    {
      id: 2,
      number: 9,
      prefix: "",
      suffix: " de 10",
      label: "Sin atención oportuna",
      detail: "Cerca del 90% (9 de cada 10) de personas con problemas de salud mental en el Perú no consulta a un profesional debido a barreras económicas, desconocimiento y estigma.",
      icon: Users,
      color: "lavender"
    },
    {
      id: 3,
      number: 200,
      prefix: "S/ ",
      suffix: "",
      label: "Costo por sesión privada",
      detail: "El costo de una sesión privada oscila entre S/ 100 y S/ 300, frente a un sueldo mínimo legal de S/ 1,130.",
      icon: DollarSign,
      color: "calmblue"
    },
    {
      id: 4,
      number: 5,
      prefix: "< ",
      suffix: " esp.",
      label: "Especialistas por 100k hab.",
      detail: "Aproximadamente la mitad de los psicólogos del país ejerce en Lima. En zonas de la Amazonía y la sierra alta hay menos de 5 psicólogos clínicos por cada 100,000 habitantes.",
      icon: AlertCircle,
      color: "sage"
    }
  ];

  return (
    <section id="problema" className="py-28 md:py-36 bg-warm-cream dark:bg-sand-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de Sección con Mayor Jerarquía */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sand-200/80 dark:bg-sand-800/80 text-xs font-semibold text-sand-800 dark:text-sand-200 uppercase tracking-widest mb-4"
          >
            Realidad de la Salud Mental en el Perú
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-5xl md:text-5xl lg:text-6xl text-sand-900 dark:text-sand-50 mb-6 tracking-tight"
          >
            La descentralización de la salud mental es una urgencia nacional
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-sand-700 dark:text-sand-300 font-normal leading-relaxed"
          >
            Investigaciones del proyecto EXPOINNOVA y reportes del MINSA evidencian cómo las distancias geográficas, 
            la saturación hospitalaria y los altos costos aíslan a millones de personas tanto en Lima como en las regiones del país.
          </motion.p>
        </div>

        {/* Grid de Métricas con Contadores Animados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white/90 dark:bg-sand-900/80 backdrop-blur-sm p-7 rounded-2xl border border-sand-200/90 dark:border-sand-800 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-sage-50 dark:bg-sage-950/60 text-sage-600 dark:text-sage-400 flex items-center justify-center mb-4">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl text-sand-900 dark:text-sand-50 mb-2 font-display font-extrabold">
                    <AnimatedCounter
                      target={stat.number}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      duration={1.8}
                    />
                  </div>
                  <h3 className="font-semibold text-base text-sand-900 dark:text-sand-100 mb-2">
                    {stat.label}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-sand-700 dark:text-sand-300 leading-relaxed mt-2 border-t border-sand-100 dark:border-sand-800/80 pt-3 font-normal">
                  {stat.detail}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Nota discreta de transparencia académica */}
        <p className="text-center text-xs text-sand-500 dark:text-sand-400 italic -mt-8 mb-14">
          Cifras de brecha regional agregadas a partir de reportes de la Defensoría del Pueblo del Perú (2025).
        </p>

        {/* MAPA INTERACTIVO DEL PERÚ - REFUERZO VISUAL DE COBERTURA NACIONAL */}
        <PeruMap />

        {/* Comparativa: Modelo Tradicional vs Mente en Línea */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/95 dark:bg-sand-900 rounded-3xl p-7 sm:p-12 border border-sand-200 dark:border-sand-800 shadow-sm"
        >
          {/* Columna Tradicional */}
          <div className="space-y-4 pr-0 md:pr-6 border-b md:border-b-0 md:border-r border-sand-200 dark:border-sand-800 pb-6 md:pb-0">
            <div className="flex items-center gap-2 text-rose-800 dark:text-rose-400 font-bold text-lg">
              <span className="w-4 h-4 rounded-full bg-rose-500/20 border border-rose-500 flex items-center justify-center text-xs">✕</span>
              <span>La barrera del modelo tradicional</span>
            </div>
            <ul className="space-y-3.5 text-sm text-sand-700 dark:text-sand-300">
              <li className="flex items-start gap-2.5">
                <span className="text-rose-600 dark:text-rose-400 font-bold">✕</span>
                <span>Tener que desplazarse horas en el tráfico o viajar a otra ciudad para hallar un consultorio.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-600 dark:text-rose-400 font-bold">✕</span>
                <span>Costos inasumibles: entre S/ 100 y S/ 300 por sesión de atención privada.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-600 dark:text-rose-400 font-bold">✕</span>
                <span>Temor al estigma social de ser visto entrando a un consultorio psiquiátrico.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-600 dark:text-rose-400 font-bold">✕</span>
                <span>Videollamadas rígidas que exigen privacidad total y conexión wifi de alta velocidad.</span>
              </li>
            </ul>
          </div>

          {/* Columna Mente en Línea */}
          <div className="space-y-4 pl-0 md:pl-2">
            <div className="flex items-center gap-2 text-sage-800 dark:text-sage-400 font-bold text-lg">
              <CheckCircle className="w-5 h-5 text-sage-600 dark:text-sage-400" />
              <span>La respuesta de Mente en Línea</span>
            </div>
            <ul className="space-y-3.5 text-sm text-sand-800 dark:text-sand-200">
              <li className="flex items-start gap-2.5">
                <span className="text-sage-600 dark:text-sage-400 font-bold">✓</span>
                <span><strong>100% por WhatsApp:</strong> funciona con señal móvil básica y paquetes prepago de datos.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-sage-600 dark:text-sage-400 font-bold">✓</span>
                <span><strong>Accesible de verdad:</strong> Planes desde S/ 89 al mes (o S/ 49 con practicante supervisado).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-sage-600 dark:text-sage-400 font-bold">✓</span>
                <span><strong>Privacidad absoluta:</strong> Nadie en tu entorno sabe que estás conversando con un especialista.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-sage-600 dark:text-sage-400 font-bold">✓</span>
                <span><strong>Acompañamiento reflexivo continuo:</strong> Escribes tus pensamientos a tu ritmo, sin agendar citas rígidas.</span>
              </li>
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
