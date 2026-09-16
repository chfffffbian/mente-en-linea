import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ProblemStats from './components/ProblemStats.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import WhatsAppMockup from './components/WhatsAppMockup.jsx';
import Testimonials from './components/Testimonials.jsx';
import ForBusiness from './components/ForBusiness.jsx';
import TrustSecurity from './components/TrustSecurity.jsx';
import Pricing from './components/Pricing.jsx';
import Footer from './components/Footer.jsx';
import B2BModal from './components/B2BModal.jsx';

export default function App() {
  // Manejo de Modo Oscuro con localStorage (Modo Claro por defecto para nuevos visitantes)
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('mente_linea_dark_mode');
      if (saved !== null) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          return false;
        }
      }
      // Por defecto: Modo Claro (light)
      return false;
    }
    return false;
  });

  const [isB2BModalOpen, setIsB2BModalOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('mente_linea_dark_mode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen flex flex-col bg-warm-cream dark:bg-sand-950 text-sand-900 dark:text-sand-100 selection:bg-sage-200 selection:text-sage-900 transition-colors duration-300">
      
      {/* 1. Header fijo/sticky */}
      <Header 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
        onOpenB2BModal={() => setIsB2BModalOpen(true)}
      />

      <main className="flex-grow">
        {/* 2. Hero con fondo Aurora animado y propuesta de valor */}
        <Hero />

        {/* 3. Problema: Cifras de brecha regional de la Defensoría del Pueblo y MINSA */}
        <ProblemStats />

        {/* 4. Cómo funciona: 4 pasos ilustrados y secuenciales */}
        <HowItWorks />

        {/* 5. Mockup de conversación de WhatsApp animada en tiempo real */}
        <WhatsAppMockup />

        {/* 5.5. Testimonios y prueba social ilustrativa */}
        <Testimonials />

        {/* 6. Para empresas (B2B): Programa de bienestar laboral corporativo */}
        <ForBusiness onOpenDemoModal={() => setIsB2BModalOpen(true)} />

        {/* 7. Confianza y seguridad: Verificación CPsP, supervisión y privacidad */}
        <TrustSecurity />

        {/* 8. Planes y Precios: B2C y B2B transparentes y accesibles */}
        <Pricing onOpenB2BModal={() => setIsB2BModalOpen(true)} />
      </main>

      {/* 9. Footer: Enlaces y Banner de Emergencia verificado MINSA Línea 113 Opción 5 */}
      <Footer />

      {/* Modal B2B para solicitud de cotizaciones y demos */}
      <B2BModal
        isOpen={isB2BModalOpen}
        onClose={() => setIsB2BModalOpen(false)}
      />

    </div>
  );
}
