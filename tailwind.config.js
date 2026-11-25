/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Paleta oficial Mente en Línea
        cream: {
          DEFAULT: '#F7F1E8', // Arena/crema cálido fondo
          card: '#FBF8F3',    // Crema más claro para tarjetas
          surface: '#F2ECE1',
        },
        sage: {
          DEFAULT: '#5E7F63', // Verde salvia marca/acentos
          50: '#F4F7F4',
          100: '#E4EDE5',
          200: '#DCE9DD',    // Menta suave superficies
          300: '#B8D1BA',
          400: '#8AAFA0',
          500: '#5E7F63',
          600: '#4D6B52',
          700: '#3D5441',
          800: '#2D3D30',
          900: '#1F2A21',
        },
        forest: {
          DEFAULT: '#1F4D3A', // Verde bosque profundo texto de marca, botones, sección oscura
          light: '#28634B',
          dark: '#16382A',
          b2b: '#12201A',    // Fondo sección B2B oscura
          b2bCard: '#1B2E25',// Tarjetas B2B
          b2bAccent: '#7FD6A5', // Acento verde menta B2B
        },
        text: {
          primary: '#1E2A24',
          secondary: '#5B6B62',
          muted: '#8A9990',
        },
        sand: {
          50: '#FBF8F3',
          100: '#F7F1E8',
          200: '#EAE1D3',
          300: '#DACDBB',
          400: '#B8A892',
          800: '#2C2B27',
          900: '#1E2A24',
          950: '#12201A',
        },
        whatsapp: {
          green: '#25D366',
          teal: '#128C7E',
          darkTeal: '#075E54',
          bubbleLight: '#DCF8C6',
          bubbleIncoming: '#FFFFFF',
        }
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', '"League Spartan"', 'system-ui', 'sans-serif'],
        sans: ['Inter', '"DM Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '20px',
        '3xl': '28px',
        '4xl': '36px',
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(31, 77, 58, 0.05)',
        'card': '0 12px 36px rgba(31, 77, 58, 0.08)',
        'floating': '0 20px 48px rgba(31, 77, 58, 0.12)',
      }
    },
  },
  plugins: [],
}
