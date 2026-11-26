import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ArrowRight, CheckCircle2, RotateCcw, MessageCircle, Sparkles, Shield } from 'lucide-react';
import { CONTENT, getWhatsAppUrl } from '../content';

export default function Quiz() {
  const { quiz } = CONTENT;
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [completed, setCompleted] = useState(false);

  const handleSelectOption = (questionId, option) => {
    const updated = { ...answers, [questionId]: option.text };
    setAnswers(updated);

    if (currentStep < quiz.questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setCompleted(false);
  };

  // Construcción del mensaje prellenado personalizado para WhatsApp
  const generateWhatsAppMessage = () => {
    const q1 = answers[1] || "apoyo general";
    const q2 = answers[2] || "horarios flexibles";
    const q3 = answers[3] || "primera vez";

    return `Hola Mente en Línea, completé el test en su web y me recomendaron iniciar acompañamiento.

📋 Mis respuestas:
- Motivo principal: ${q1}
- Espacio para escribir: ${q2}
- Experiencia previa: ${q3}

¿Cómo puedo empezar con mi psicólogo colegiado?`;
  };

  const currentQ = quiz.questions[currentStep];

  return (
    <section id="quiz" className="py-20 md:py-32 bg-cream-surface/70 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sage-200/60 text-forest text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-forest" />
            <span>{quiz.eyebrow}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-text-primary tracking-tight mb-4">
            {quiz.title}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            {quiz.subtitle}
          </p>
        </div>

        {/* Tarjeta Contenedora del Quiz */}
        <div className="bg-cream-card rounded-3xl p-6 sm:p-10 border border-sand-300 shadow-card relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!completed ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Barra de Progreso */}
                <div className="flex items-center justify-between text-xs font-semibold text-text-secondary pb-3 border-b border-sand-200">
                  <span>Pregunta {currentStep + 1} de {quiz.questions.length}</span>
                  <span className="text-forest">Paso {Math.round(((currentStep + 1) / quiz.questions.length) * 100)}%</span>
                </div>

                <div className="w-full bg-sand-200 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-forest h-full rounded-full transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / quiz.questions.length) * 100}%` }}
                  />
                </div>

                {/* Pregunta Actual */}
                <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary pt-2">
                  {currentQ.question}
                </h3>

                {/* Opciones */}
                <div className="grid grid-cols-1 gap-3 pt-2">
                  {currentQ.options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(currentQ.id, option)}
                      className="w-full text-left p-4 rounded-2xl bg-cream hover:bg-cream-surface border border-sand-300 hover:border-forest text-sm sm:text-base font-medium text-text-primary flex items-center justify-between group transition-all duration-150"
                    >
                      <span>{option.text}</span>
                      <ArrowRight className="w-4 h-4 text-forest opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>

                {/* Botón Volver */}
                {currentStep > 0 && (
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="text-xs font-semibold text-text-secondary hover:text-forest transition-colors pt-2 inline-flex items-center gap-1"
                  >
                    ← Pregunta anterior
                  </button>
                )}
              </motion.div>
            ) : (
              /* Pantalla de Resultado con MENTI */
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center space-y-6"
              >
                <div className="flex justify-center">
                  <div className="w-32 h-32 relative">
                    <img
                      src="/assets/menti-hq.svg"
                      alt="MENTI, la mascota de Mente en Línea"
                      width="140"
                      height="140"
                      loading="lazy"
                      className="w-full h-full object-contain menti-float"
                    />
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sage-200 text-forest text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-forest" />
                  <span>Tu recomendación personalizada</span>
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-text-primary">
                  El Plan Acompañamiento Mensual es el ideal para ti
                </h3>

                <p className="text-sm sm:text-base text-text-secondary max-w-xl mx-auto leading-relaxed">
                  Por tu disponibilidad y tus objetivos, tener un <strong>psicólogo colegiado fijo</strong> en WhatsApp te permitirá reflexionar a tu ritmo sin la rigidez de citas semanales.
                </p>

                {/* Resumen de Respuestas */}
                <div className="bg-cream p-4 rounded-2xl border border-sand-300 text-left text-xs sm:text-sm text-text-secondary space-y-1.5 max-w-md mx-auto">
                  <div className="font-bold text-forest mb-2">Tu resumen para iniciar:</div>
                  <p>• <strong>Objetivo:</strong> {answers[1]}</p>
                  <p>• <strong>Horario ideal:</strong> {answers[2]}</p>
                  <p>• <strong>Experiencia previa:</strong> {answers[3]}</p>
                </div>

                {/* Botón CTA a WhatsApp con mensaje prellenado */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={getWhatsAppUrl(generateWhatsAppMessage())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-7 py-4 rounded-full bg-forest hover:bg-forest-light text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-card hover:shadow-floating transition-all"
                  >
                    <MessageCircle className="w-5 h-5 text-whatsapp-green fill-white/20" />
                    <span>Continuar por WhatsApp con este resumen</span>
                  </a>

                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-5 py-3 rounded-full bg-cream hover:bg-cream-surface border border-sand-300 text-text-secondary font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Volver a responder</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Aviso Legal de Salud Mental */}
          <div className="mt-8 pt-5 border-t border-sand-200/80 flex items-start gap-2.5 text-[11px] text-text-muted text-left">
            <Shield className="w-4 h-4 text-forest shrink-0 mt-0.5" />
            <p>{quiz.disclaimer}</p>
          </div>

        </div>

      </div>
    </section>
  );
}
