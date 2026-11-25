import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProblemBento from './components/ProblemBento.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import ChatDemo from './components/ChatDemo.jsx';
import BenefitsBento from './components/BenefitsBento.jsx';
import Quiz from './components/Quiz.jsx';
import CalculatorB2C from './components/CalculatorB2C.jsx';
import Testimonials from './components/Testimonials.jsx';
import ForBusiness from './components/ForBusiness.jsx';
import TrustPrivacy from './components/TrustPrivacy.jsx';
import Pricing from './components/Pricing.jsx';
import FAQ from './components/FAQ.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Footer from './components/Footer.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';
import B2BModal from './components/B2BModal.jsx';

export default function App() {
  // Detección inicial de segmento mediante UTM params o almacenamiento
  const [activeSegment, setActiveSegment] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const utmSource = (params.get('utm_source') || '').toLowerCase();
      const utmCampaign = (params.get('utm_campaign') || '').toLowerCase();
      const segmentParam = (params.get('segment') || '').toLowerCase();

      if (
        segmentParam === 'b2b' ||
        segmentParam === 'empresas' ||
        utmSource.includes('linkedin') ||
        utmSource.includes('b2b') ||
        utmCampaign.includes('b2b') ||
        utmCampaign.includes('empresa') ||
        utmCampaign.includes('rrhh') ||
        utmCampaign.includes('sst')
      ) {
        return 'b2b';
      }
    }
    return 'b2c';
  });

  // Escala de tamaño tipográfico para accesibilidad (A- / A+)
  const [fontSizeScale, setFontSizeScale] = useState(1.0);
  const [isB2BModalOpen, setIsB2BModalOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty('--font-size-scale', `${fontSizeScale}rem`);
  }, [fontSizeScale]);

  const handleToggleSegment = (segment) => {
    setActiveSegment(segment);
  };

  const handleOpenChatDemo = () => {
    const el = document.getElementById('demo-chat');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream text-text-primary selection:bg-mint selection:text-forest transition-colors duration-300 font-sans">
      
      {/* 0. Barra de Anuncio Oficial y Navbar Sticky Blur */}
      <Navbar
        activeSegment={activeSegment}
        onToggleSegment={handleToggleSegment}
        fontSizeScale={fontSizeScale}
        onChangeFontSize={setFontSizeScale}
      />

      <main className="flex-grow">
        {/* 1. Hero con Animación Cinética y Propuesta de Valor */}
        <Hero
          activeSegment={activeSegment}
          onOpenChatDemo={handleOpenChatDemo}
        />

        {/* 2. El Problema: Bento Grid de 4 Cifras Verificadas + Mapa Interactivo del Perú */}
        <ProblemBento />

        {/* 3. Cómo Funciona: Scrollytelling en 4 Pasos + Garantía de 24 Horas */}
        <HowItWorks />

        {/* 4. Simulador Interactivo de Conversación de WhatsApp con Nota de Voz */}
        <ChatDemo />

        {/* 5. Beneficios Reales: Bento Grid de 6 Tarjetas con Badges */}
        <BenefitsBento />

        {/* 6. Test Rápido de Orientación en 1 Minuto con Recomendación y Mascota MENTI */}
        <Quiz />

        {/* 7. Calculadora de Ahorro para Personas (B2C) */}
        <CalculatorB2C />

        {/* 8. Nuestro Compromiso Ético y Transparencia */}
        <Testimonials />

        {/* 9. Mente en Línea para Empresas (B2B EAP en Modo Oscuro Sofisticado) */}
        <ForBusiness onOpenDemoModal={() => setIsB2BModalOpen(true)} />

        {/* 10. Seguridad, Ética y Marco Legal (CPsP, Ley 29733, Límites y MINSA 113) */}
        <TrustPrivacy />

        {/* 11. Planes y Precios Transparentes (Semana S/ 25, Mensual S/ 89, Trimestral S/ 239) */}
        <Pricing
          segment={activeSegment}
          onToggleSegment={handleToggleSegment}
        />

        {/* 12. Preguntas Frecuentes (FAQ Accordion Accesible con JSON-LD) */}
        <FAQ />

        {/* 13. Llamado a la Acción Final con Mascota MENTI */}
        <FinalCTA />
      </main>

      {/* 14. Footer Completo con Banner de Crisis MINSA 113, Redes y Legal */}
      <Footer />

      {/* 15. Botón Flotante de WhatsApp para Contacto Directo */}
      <FloatingWhatsApp />

      {/* Modal B2B para Solicitud de Propuestas Corporativas y Piloto */}
      <B2BModal
        isOpen={isB2BModalOpen}
        onClose={() => setIsB2BModalOpen(false)}
      />

    </div>
  );
}
