import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingDown, MessageCircle } from 'lucide-react';
import { CONTENT, getWhatsAppUrl } from '../content';

export default function CalculatorB2C() {
  const { calculatorB2C } = CONTENT;
  const [sessionCost, setSessionCost] = useState(calculatorB2C.sessionCostDefault);

  const traditionalMonthly = sessionCost * calculatorB2C.monthlySessions;
  const menteMonthly = calculatorB2C.menteEnLineaMonthly;
  const monthlySavings = traditionalMonthly - menteMonthly;
  const annualSavings = monthlySavings * 12;

  const formatNumber = (num) => {
    return num.toLocaleString('en-US');
  };

  return (
    <section className="py-20 md:py-28 bg-cream relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sage-200/60 text-forest text-xs font-bold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5 text-forest" />
            <span>{calculatorB2C.eyebrow}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-text-primary tracking-tight mb-4">
            {calculatorB2C.title}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
            {calculatorB2C.subtitle}
          </p>
        </div>

        {/* Tarjeta de Calculadora Interactiva */}
        <div className="bg-cream-card rounded-3xl p-6 sm:p-10 border border-sand-300 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Columna Slider */}
            <div className="lg:col-span-7 text-left space-y-6">
              <div>
                <label htmlFor="session-slider" className="text-xs font-bold text-forest uppercase tracking-wider block mb-2">
                  Costo estimado por sesión tradicional en tu ciudad:
                </label>
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-2xl sm:text-3xl font-display font-extrabold text-text-primary">
                    S/ {sessionCost}
                    <span className="text-xs font-normal text-text-secondary ml-1">/ sesión</span>
                  </span>
                  <span className="text-xs text-text-muted">
                    Rango: S/ {calculatorB2C.sessionCostMin} a S/ {calculatorB2C.sessionCostMax}
                  </span>
                </div>

                <input
                  id="session-slider"
                  type="range"
                  min={calculatorB2C.sessionCostMin}
                  max={calculatorB2C.sessionCostMax}
                  step={10}
                  value={sessionCost}
                  onChange={(e) => setSessionCost(Number(e.target.value))}
                  className="w-full h-3 bg-sand-200 rounded-lg appearance-none cursor-pointer accent-forest"
                  aria-label="Costo por sesión privada tradicional"
                />

                <div className="flex justify-between text-xs font-medium text-text-muted mt-2">
                  <span>S/ {calculatorB2C.sessionCostMin}</span>
                  <span>S/ {calculatorB2C.sessionCostDefault}</span>
                  <span>S/ {calculatorB2C.sessionCostMax}</span>
                </div>
              </div>

              {/* Detalle comparativo */}
              <div className="p-4 rounded-2xl bg-cream-surface border border-sand-300 text-xs sm:text-sm text-text-secondary space-y-2">
                <div className="flex justify-between">
                  <span>4 sesiones presenciales al mes:</span>
                  <span className="font-bold text-text-primary">S/ {formatNumber(traditionalMonthly)}</span>
                </div>
                <div className="flex justify-between text-forest font-semibold">
                  <span>{calculatorB2C.row2Text}</span>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-text-muted">
                <p className="italic">
                  {calculatorB2C.referenceText}
                </p>
                <p className="font-medium text-forest/90">
                  {calculatorB2C.mandatoryNote}
                </p>
              </div>
            </div>

            {/* Columna Resumen de Ahorro */}
            <div className="lg:col-span-5 bg-cream-surface rounded-2xl p-6 sm:p-7 border border-sand-300 text-center flex flex-col justify-between h-full space-y-6">
              <div>
                <div className="inline-flex items-center gap-1 text-xs font-bold text-forest bg-sage-200/70 px-3 py-1 rounded-full mb-3">
                  <TrendingDown className="w-3.5 h-3.5" />
                  <span>Tu ahorro estimado</span>
                </div>

                <div className="font-display font-extrabold text-4xl sm:text-5xl text-forest tracking-tight">
                  S/ {formatNumber(monthlySavings > 0 ? monthlySavings : 0)}
                  <span className="text-xs sm:text-sm font-normal text-text-secondary block mt-1">
                    al mes frente a sesiones presenciales
                  </span>
                </div>

                <div className="mt-4 pt-4 border-t border-sand-300 text-xs text-text-secondary">
                  Ahorro anual proyectado: <strong className="text-forest text-sm">S/ {formatNumber(annualSavings > 0 ? annualSavings : 0)}</strong>
                </div>
              </div>

              <a
                href={getWhatsAppUrl(`Hola, calculé mi ahorro en su web (S/ ${monthlySavings}/mes). Deseo empezar mi acompañamiento por S/ 89.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full bg-forest hover:bg-forest-light text-white font-bold text-sm flex items-center justify-center gap-2 shadow-card hover:shadow-floating transition-all"
              >
                <MessageCircle className="w-4 h-4 text-whatsapp-green" />
                <span>{calculatorB2C.ctaText}</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
