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
        sage: {
          50: '#F4F8F6',
          100: '#E6F0EC',
          200: '#CEE2D8',
          300: '#A9CCBC',
          400: '#7EAF9B',
          500: '#5A937E', // Color representativo salvia
          600: '#457765',
          700: '#386052',
          800: '#2F4D42',
          900: '#274138',
        },
        lavender: {
          50: '#F8F7FD',
          100: '#F1EFFB',
          200: '#E4E0F8',
          300: '#CDC6F3',
          400: '#B0A2EA',
          500: '#8E7DBE', // Acento lavanda cálido
          600: '#7B67B0',
          700: '#67529B',
          800: '#554381',
          900: '#46386B',
        },
        calmblue: {
          50: '#F0F6FA',
          100: '#E0EEF6',
          200: '#C2DEF0',
          300: '#94C7E5',
          400: '#5FA8D6',
          500: '#3D8DC3',
          600: '#2C71A4',
          700: '#255B85',
        },
        sand: {
          50: '#FCFBF8', // Fondo base ultra cálido
          100: '#F7F4EE',
          200: '#EEE7DD',
          300: '#DFD4C2',
          400: '#CABE9F',
          800: '#2A2926',
          900: '#1A1917', // Fondo modo oscuro suave (no negro puro)
          950: '#121110',
        },
        whatsapp: {
          green: '#25D366',
          teal: '#128C7E',
          darkTeal: '#075E54',
          bubbleLight: '#E7FCE3', // Burbuja saliente usuario
          bubbleIn: '#FFFFFF', // Burbuja entrante
          bubbleInDark: '#202C33',
          bubbleOutDark: '#005C4B',
          bgChat: '#EFEAE2',
          bgChatDark: '#0B141A',
          tickBlue: '#53BDEB',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Quicksand', 'sans-serif'],
      },
      animation: {
        'blob-slow': 'blob 18s infinite ease-in-out',
        'pulse-subtle': 'pulseSubtle 3s infinite ease-in-out',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.08)' },
          '66%': { transform: 'translate(-25px, 20px) scale(0.95)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
};
