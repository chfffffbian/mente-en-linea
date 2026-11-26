import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProblemBento from './components/ProblemBento.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import ChatDemo from './components/ChatDemo.jsx';
import BenefitsBento from './components/BenefitsBento.jsx';
import Quiz from './components/Quiz.jsx';
import CalculatorB2C from './components/CalculatorB2C.jsx';
import Pricing from './components/Pricing.jsx';
import TrustPrivacy from './components/TrustPrivacy.jsx';
import FAQ from './components/FAQ.jsx';
import ForBusiness from './components/ForBusiness.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Footer from './components/Footer.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';

export default function App() {
  // Escala de tamaño tipográfico para accesibilidad (A- / A+)
  const [fontSizeScale, setFontSizeScale] = useState(1.0);

  useEffect(() => {
    document.documentElement.style.setProperty('--font-size-scale', `${fontSizeScale}rem`);
  }, [fontSizeScale]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F1E8] text-[#1E2A24] selection:bg-[#DCE9DD] selection:text-[#1F4D3A] transition-colors duration-200 font-sans">
      
      {/* Skip link accesible para usuarios de teclado y lectores de pantalla */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#1F4D3A] focus:text-[#FBF8F3] focus:rounded-full focus:shadow-lg focus:outline-none"
      >
        Saltar al contenido
      </a>

      {/* Topbar + Navbar Sticky (72px) */}
      <Navbar
        fontSizeScale={fontSizeScale}
        onChangeFontSize={setFontSizeScale}
      />

      <main id="main-content" tabIndex={-1} className="flex-grow focus:outline-none">
        {/* 1. Hero */}
        <Hero />

        {/* 2. El Problema + Mapa del Perú */}
        <ProblemBento />

        {/* 3. Cómo Funciona (Scrollytelling en 4 Pasos) */}
        <HowItWorks />

        {/* 4. Demo del Chat */}
        <ChatDemo />

        {/* 5. Beneficios (Bento 12 columnas) */}
        <BenefitsBento />

        {/* 6. Quiz de Inicio Rápido */}
        <Quiz />

        {/* 7. Calculadora de Ahorro para Personas */}
        <CalculatorB2C />

        {/* 8. Planes y Precios Transparentes */}
        <Pricing />

        {/* 9. Confianza, Límites y Ayuda Inmediata (Crisis) */}
        <TrustPrivacy />

        {/* 10. Preguntas Frecuentes */}
        <FAQ />

        {/* 11. Para Empresas (Fondo Oscuro #12201A) */}
        <ForBusiness />

        {/* 12. CTA Final */}
        <FinalCTA />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* 14. Botón Flotante de WhatsApp (56px, tras >25% scroll, sin popover ni punto) */}
      <FloatingWhatsApp />

    </div>
  );
}
