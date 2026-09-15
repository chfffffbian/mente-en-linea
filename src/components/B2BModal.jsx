import React, { useState } from 'react';
import { X, Building2, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

export default function B2BModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    employees: '50',
    location: '',
    phone: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Preparar mensaje de WhatsApp estructurado para atención inmediata
    const text = `Hola equipo de Mente en Línea, solicito información B2B:
- Nombre: ${formData.name}
- Cargo: ${formData.role}
- Empresa: ${formData.company}
- Colaboradores aprox: ${formData.employees}
- Región/Ubicación: ${formData.location || 'Perú'}
- Teléfono: ${formData.phone}`;

    setTimeout(() => {
      window.open(`https://wa.me/51999999999?text=${encodeURIComponent(text)}`, '_blank');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-sand-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white dark:bg-sand-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-sand-200 dark:border-sand-800 text-sand-900 dark:text-sand-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-sand-800 dark:text-sand-300 hover:bg-sand-100 dark:hover:bg-sand-800 transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="p-2 rounded-xl bg-sage-100 dark:bg-sage-900 text-sage-600 dark:text-sage-400">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl">
                Propuesta de Bienestar para tu Empresa
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-sand-800 dark:text-sand-300 mb-6">
              Te preparamos una cotización a medida y una demo guiada sobre cómo funciona el triaje y el acompañamiento para tus equipos.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-1 text-sand-800 dark:text-sand-200">Nombre completo *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Carmen Salazar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-sand-300 dark:border-sand-700 bg-sand-50 dark:bg-sand-950 focus:outline-none focus:ring-2 focus:ring-sage-500"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1 text-sand-800 dark:text-sand-200">Cargo / Área *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Jefa de RRHH / Bienestar"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-sand-300 dark:border-sand-700 bg-sand-50 dark:bg-sand-950 focus:outline-none focus:ring-2 focus:ring-sage-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-1 text-sand-800 dark:text-sand-200">Empresa *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. AgroExport Norte S.A.C."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-sand-300 dark:border-sand-700 bg-sand-50 dark:bg-sand-950 focus:outline-none focus:ring-2 focus:ring-sage-500"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1 text-sand-800 dark:text-sand-200">Colaboradores aprox.</label>
                  <select
                    value={formData.employees}
                    onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-sand-300 dark:border-sand-700 bg-sand-50 dark:bg-sand-950 focus:outline-none focus:ring-2 focus:ring-sage-500"
                  >
                    <option value="10-30">10 a 30 colaboradores</option>
                    <option value="31-70">31 a 70 colaboradores</option>
                    <option value="71-150">71 a 150 colaboradores</option>
                    <option value="150+">Más de 150 colaboradores</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-1 text-sand-800 dark:text-sand-200">Región / Operaciones</label>
                  <input
                    type="text"
                    placeholder="Ej. Piura / Operación Mina"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-sand-300 dark:border-sand-700 bg-sand-50 dark:bg-sand-950 focus:outline-none focus:ring-2 focus:ring-sage-500"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1 text-sand-800 dark:text-sand-200">WhatsApp de contacto *</label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej. 987 654 321"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-sand-300 dark:border-sand-700 bg-sand-50 dark:bg-sand-950 focus:outline-none focus:ring-2 focus:ring-sage-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 rounded-xl bg-sage-600 hover:bg-sage-700 text-white font-semibold flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enviar y contactar por WhatsApp Corporativo</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-sage-100 dark:bg-sage-900 text-sage-600 dark:text-sage-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-display font-bold text-xl">¡Solicitud recibida!</h4>
            <p className="text-sm text-sand-800 dark:text-sand-300 max-w-sm mx-auto">
              Te estamos redirigiendo a nuestro WhatsApp corporativo con los detalles de <strong>{formData.company}</strong> para agendar una sesión informativa.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-xl bg-sand-100 dark:bg-sand-800 text-sand-800 dark:text-sand-200 text-xs font-semibold"
            >
              Cerrar ventana
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
