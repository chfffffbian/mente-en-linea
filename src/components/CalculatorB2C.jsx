import React, { useState } from 'react';
import { Calculator, ArrowRight, MessageCircle } from 'lucide-react';
import { CONTENT, getWhatsAppUrl } from '../content';

export default function CalculatorB2C() {
  const { calculatorB2C } = CONTENT;
  const [sessionCost, setSessionCost] = useState(calculatorB2C.defaultVal);
  const [inputVal, setInputVal] = useState(String(calculatorB2C.defaultVal));
  const [errorMsg, setErrorMsg] = useState('');

  const handleSliderChange = (e) => {
    const val = Number(e.target.value);
    setSessionCost(val);
    setInputVal(String(val));
    setErrorMsg('');
  };

  const handleInputChange = (e) => {
    const raw = e.target.value;
    setInputVal(raw);
    const parsed = Number(raw);

    if (isNaN(parsed) || raw.trim() === '' || parsed < calculatorB2C.min || parsed > calculatorB2C.max) {
      setErrorMsg(calculatorB2C.errorMsg);
    } else {
      setErrorMsg('');
      setSessionCost(parsed);
    }
  };

  const formatNumber = (num) => {
    return num.toLocaleString('en-US');
  };

  const traditionalMonthly = sessionCost * 4;
  const monthlySavings = 4 * sessionCost - 89;
  const annualSavings = monthlySavings * 12;

  return (
    <section id="calculadora" className="py-20 lg:py-28 bg-[#F7F1E8] relative">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-[800px] mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#DCE9DD] text-[#1F4D3A] text-xs font-bold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5 text-[#1F4D3A]" />
            <span>{calculatorB2C.eyebrow}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1E2A24] leading-tight mb-4 [text-wrap:balance]">
            {calculatorB2C.title}
          </h2>
          <p className="text-base sm:text-lg text-[#5B6B62] leading-relaxed font-normal">
            {calculatorB2C.subtitle}
          </p>
        </div>

        {/* Tarjeta de Calculadora Interactiva */}
        <div className="bg-[#FBF8F3] rounded-3xl p-6 sm:p-10 border border-[rgba(31,77,58,0.12)] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Columna Izquierda: Slider + Input */}
            <div className="lg:col-span-7 text-left space-y-6">
              
              <div>
                <label htmlFor="session-cost-input" className="text-xs font-bold text-[#1F4D3A] uppercase tracking-wider block mb-2">
                  {calculatorB2C.controlLabel}:
                </label>

                {/* Valor grande + Input numérico */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display font-extrabold text-3xl sm:text-4xl text-[#1E2A24] whitespace-nowrap">
                      S/ {sessionCost}
                    </span>
                    <span className="text-xs text-[#5B6B62] font-medium">por sesión</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#5B6B62]">Editar:</span>
                    <input
                      id="session-cost-input"
                      type="number"
                      min={calculatorB2C.min}
                      max={calculatorB2C.max}
                      step={10}
                      value={inputVal}
                      onChange={handleInputChange}
                      className="w-20 px-2.5 py-1 rounded-xl bg-[#FBF8F3] border border-[rgba(31,77,58,0.2)] text-sm font-bold text-[#1E2A24] text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4D3A]"
                      aria-label="Costo por sesión presencial en soles"
                    />
                  </div>
                </div>

                {/* Mensaje de error si el input sale de rango */}
                {errorMsg && (
                  <p className="text-xs font-semibold text-[#A63A2E] mb-2 animate-shake">
                    {errorMsg}
                  </p>
                )}

                {/* Slider (S/ 40 a 300, paso 10) */}
                <input
                  type="range"
                  min={calculatorB2C.min}
                  max={calculatorB2C.max}
                  step={calculatorB2C.step}
                  value={sessionCost}
                  onChange={handleSliderChange}
                  className="w-full h-2 bg-[#EAE1D3] rounded-lg appearance-none cursor-pointer accent-[#1F4D3A]"
                  aria-valuetext={`S/ ${sessionCost} por sesión`}
                />

                {/* Marcas en su posición real (40 -> 0%, 100 -> 23%, 300 -> 100%) */}
                <div className="relative text-[11px] font-semibold text-[#5B6B62] mt-2 h-5">
                  <span className="absolute left-0">S/ 40</span>
                  <span className="absolute left-[23.08%] -translate-x-1/2">S/ 100</span>
                  <span className="absolute right-0">S/ 300</span>
                </div>
              </div>

              {/* Filas comparativas */}
              <div className="p-4 rounded-2xl bg-[#FBF8F3] border border-[rgba(31,77,58,0.1)] space-y-2.5 text-xs sm:text-sm">
                <div className="flex justify-between items-center text-[#1E2A24]">
                  <span>{calculatorB2C.row1Label}:</span>
                  <span className="font-bold whitespace-nowrap">S/ {formatNumber(traditionalMonthly)}</span>
                </div>
                <div className="flex justify-between items-center text-[#1F4D3A] font-semibold pt-1 border-t border-[rgba(31,77,58,0.08)]">
                  <span>{calculatorB2C.row2Label}</span>
                </div>
              </div>

              {/* Textos de referencia y nota obligatoria (14px) */}
              <div className="space-y-2 pt-1 text-sm">
                <p className="text-[#5B6B62] italic leading-snug">
                  {calculatorB2C.referenceText}
                </p>
                <p className="text-[#1E2A24] font-medium leading-snug">
                  {calculatorB2C.noteText}
                </p>
              </div>

            </div>

            {/* Columna Derecha: Resultado del Ahorro */}
            <div className="lg:col-span-5 bg-[#FBF8F3] rounded-2xl p-6 sm:p-7 border border-[rgba(31,77,58,0.12)] text-center flex flex-col justify-between h-full space-y-6">
              
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1 text-xs font-bold text-[#1F4D3A] bg-[#DCE9DD] px-3.5 py-1 rounded-full">
                  <span>{calculatorB2C.badgeLabel}</span>
                </div>

                {monthlySavings > 0 ? (
                  <div className="space-y-1">
                    <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#1F4D3A] whitespace-nowrap">
                      S/ {formatNumber(monthlySavings)} <span className="text-base font-normal text-[#5B6B62]">{calculatorB2C.monthlyLabel}</span>
                    </div>
                    <p className="text-xs text-[#5B6B62]">
                      {calculatorB2C.comparisonLabel}
                    </p>
                    <div className="pt-2">
                      <span className="inline-block px-3 py-1 rounded-xl bg-[#DCE9DD]/50 text-xs font-bold text-[#1F4D3A]">
                        {calculatorB2C.annualPrefix} {formatNumber(annualSavings)}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="p-3 rounded-xl bg-[#FBEDEA] text-[#A63A2E] text-xs font-semibold">
                    {calculatorB2C.noSavingsText}
                  </div>
                )}
              </div>

              {/* Botón CTA */}
              <div className="pt-2">
                <a
                  href={getWhatsAppUrl("Hola, calculé mi ahorro en la web y quiero empezar mi acompañamiento en Mente en Línea.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-full bg-[#1F4D3A] hover:bg-[#173B2C] text-[#FBF8F3] font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>{calculatorB2C.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
