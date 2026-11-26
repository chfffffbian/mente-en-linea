import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ArrowLeft, ArrowRight, RotateCcw, MessageCircle, AlertTriangle } from 'lucide-react';
import { CONTENT, getWhatsAppUrl } from '../content';

export default function Quiz() {
  const { quiz } = CONTENT;
  const [currentStep, setCurrentStep] = useState(0); // 0 to 3
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState({});
  const [completed, setCompleted] = useState(false);
  const [validationError, setValidationError] = useState('');

  const currentQ = quiz.questions[currentStep];

  const handleNext = () => {
    if (!selectedOption) {
      setValidationError('Elige una opción para continuar.');
      return;
    }

    setValidationError('');
    const updatedAnswers = { ...answers, [currentStep + 1]: selectedOption };
    setAnswers(updatedAnswers);

    if (currentStep < quiz.questions.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(answers[currentStep + 2] || null);
    } else {
      setCompleted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setValidationError('');
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      setSelectedOption(answers[prevStep + 1] || null);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedOption(null);
    setAnswers({});
    setCompleted(false);
    setValidationError('');
  };

  // Lógica de recomendación de plan según P3:
  // Si P3 es "No" o "Prefiero no decirlo" -> Semana de prueba (S/ 25)
  // Si P3 es "Sí" -> Acompañamiento mensual (S/ 89)
  const prevTherapy = answers[3] || 'No';
  const suggestedPlan =
    prevTherapy === 'Sí'
      ? 'Acompañamiento mensual (S/ 89)'
      : 'Semana de prueba (S/ 25)';

  const objetivo = answers[1] || 'Cuidado personal';
  const horario = answers[2] || 'Horario flexible';
  const region = answers[4] || 'Todo el Perú';

  const whatsappMessage = `Hola, hice la guía de inicio. Me interesa: ${objetivo}. Prefiero escribir: ${horario}. Región: ${region}. Plan sugerido: ${suggestedPlan}.`;

  return (
    <section id="quiz" className="py-20 lg:py-28 bg-[#F7F1E8] relative">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#DCE9DD] text-[#1F4D3A] text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#1F4D3A]" />
            <span>{quiz.eyebrow}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1E2A24] tracking-tight leading-tight mb-4 [text-wrap:balance]">
            {quiz.title}
          </h2>
          <p className="text-base sm:text-lg text-[#5B6B62] leading-relaxed font-normal">
            {quiz.subtitle}
          </p>
        </div>

        {/* Tarjeta del Quiz */}
        <div className="bg-[#FBF8F3] rounded-3xl p-6 sm:p-10 border border-[rgba(31,77,58,0.12)] shadow-sm relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!completed ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.25 }}
                className="space-y-6 text-left"
              >
                {/* Header de Pregunta X de 4 (sin "Paso 25%") */}
                <div className="flex items-center justify-between text-xs font-bold text-[#1F4D3A] pb-2">
                  <span>Pregunta {currentStep + 1} de {quiz.questions.length}</span>
                </div>

                {/* Barra de progreso */}
                <div className="w-full bg-[#EAE1D3] h-2 rounded-full overflow-hidden" role="progressbar" aria-valuenow={currentStep + 1} aria-valuemin={1} aria-valuemax={4}>
                  <div
                    className="bg-[#1F4D3A] h-full rounded-full transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / quiz.questions.length) * 100}%` }}
                  />
                </div>

                {/* Pregunta Actual */}
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#1E2A24] pt-2">
                  {currentQ.question}
                </h3>

                {/* Opciones (role="radiogroup", alto >= 48px) */}
                <div
                  role="radiogroup"
                  aria-label={currentQ.question}
                  className="space-y-3 pt-2"
                >
                  {currentQ.options.map((option, idx) => {
                    const isSelected = selectedOption === option;
                    return (
                      <button
                        key={idx}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        onClick={() => {
                          setSelectedOption(option);
                          setValidationError('');
                        }}
                        className={`w-full min-h-[48px] p-4 rounded-2xl border text-left flex items-center justify-between text-sm sm:text-base font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4D3A] ${
                          isSelected
                            ? 'bg-[#DCE9DD]/60 border-[#1F4D3A] text-[#1F4D3A] font-bold shadow-xs'
                            : 'bg-[#F7F1E8] border-[rgba(31,77,58,0.15)] text-[#1E2A24] hover:bg-[#DCE9DD]/30'
                        }`}
                      >
                        <span>{option}</span>
                        <span
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                            isSelected ? 'border-[#1F4D3A] bg-[#1F4D3A]' : 'border-[#5B6B62]/40'
                          }`}
                        >
                          {isSelected && <span className="w-2 h-2 rounded-full bg-[#FBF8F3]" />}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Mensaje de validación con aria-live */}
                <div aria-live="polite" className="min-h-[20px]">
                  {validationError && (
                    <p className="text-xs font-semibold text-[#A63A2E] animate-shake">
                      {validationError}
                    </p>
                  )}
                </div>

                {/* Botones de Navegación: Atrás (desde pregunta 2) y Siguiente */}
                <div className="pt-2 flex items-center justify-between gap-4 border-t border-[rgba(31,77,58,0.1)]">
                  {currentStep > 0 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-5 py-3 rounded-full bg-[#F7F1E8] border border-[rgba(31,77,58,0.15)] text-xs sm:text-sm font-bold text-[#1E2A24] hover:bg-[#DCE9DD]/40 transition-colors flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4D3A]"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Atrás</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-7 py-3 rounded-full bg-[#1F4D3A] hover:bg-[#173B2C] text-[#FBF8F3] text-xs sm:text-sm font-bold shadow-sm transition-all flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4D3A]"
                  >
                    <span>{currentStep === quiz.questions.length - 1 ? 'Ver sugerencia' : 'Siguiente'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </motion.div>
            ) : (
              /* Pantalla de Resultados con MENTI 140px */
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 text-center"
              >
                {/* Mascota MENTI (140px) */}
                <div className="flex justify-center">
                  <img
                    src="/assets/menti-hq.svg"
                    alt="MENTI, la mascota de Mente en Línea"
                    width="140"
                    height="140"
                    loading="lazy"
                    className="w-32 h-32 sm:w-36 sm:h-36 object-contain menti-float"
                  />
                </div>

                {/* Plan sugerido */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#5E7F63] uppercase tracking-wider block">
                    Resultado de tu guía de inicio
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1E2A24] tracking-tight">
                    Te sugerimos empezar con la {suggestedPlan}
                  </h3>
                  <p className="text-sm text-[#5B6B62]">
                    Es una sugerencia para empezar, no un diagnóstico.
                  </p>
                </div>

                {/* Resumen: objetivo, horario y región */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#F7F1E8] border border-[rgba(31,77,58,0.12)] text-left text-xs sm:text-sm space-y-2 max-w-lg mx-auto">
                  <div className="flex justify-between border-b border-[rgba(31,77,58,0.1)] pb-2">
                    <span className="text-[#5B6B62]">Objetivo principal:</span>
                    <span className="font-bold text-[#1E2A24]">{objetivo}</span>
                  </div>
                  <div className="flex justify-between border-b border-[rgba(31,77,58,0.1)] pb-2">
                    <span className="text-[#5B6B62]">Preferencia de horario:</span>
                    <span className="font-bold text-[#1E2A24]">{horario}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5B6B62]">Región:</span>
                    <span className="font-bold text-[#1E2A24]">{region}</span>
                  </div>
                </div>

                {/* Botón Principal y Secundario */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={getWhatsAppUrl(whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#1F4D3A] hover:bg-[#173B2C] text-[#FBF8F3] text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                    <span>Continuar por WhatsApp con mi resumen</span>
                  </a>

                  <button
                    onClick={handleReset}
                    className="px-5 py-3 rounded-full text-xs font-semibold text-[#5B6B62] hover:text-[#1E2A24] transition-colors flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Volver a empezar</span>
                  </button>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Aviso (14 px) y Enlace Discreto a Ayuda Inmediata */}
        <div className="mt-6 text-center space-y-2">
          <p className="text-sm text-[#5B6B62] leading-relaxed">
            {quiz.notice}
          </p>
          <div>
            <a
              href={quiz.urgentAnchor}
              className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#5B6B62] hover:text-[#A63A2E] underline underline-offset-4 transition-colors"
            >
              <span>{quiz.urgentLinkText}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
