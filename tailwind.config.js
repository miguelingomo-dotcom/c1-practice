/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Fondo
        paper: '#FBFAFF',
        paperDark: '#F0ECFB',
        // Texto
        ink: '#191530',
        inkSoft: '#5B5478',
        // Acento principal (marca / selección / enlaces)
        accent: '#7C3AED',
        accentSoft: '#EDE7FE',
        accentDark: '#5B21B6',
        // Semántico: error / incorrecto
        pen: '#E11D48',
        penSoft: '#FECDD3',
        // Semántico: correcto
        correct: '#059669',
        correctSoft: '#D1FAE5',
        // Semántico: aviso
        warn: '#D97706',
        warnSoft: '#FEF3C7',
        // Colores de sección
        teal: '#0D9488',
        tealSoft: '#CCFBF1',
        coral: '#EA580C',
        coralSoft: '#FFEDD5',
        fuchsia: '#C026D3',
        fuchsiaSoft: '#FAE8FF',
        gold: '#CA8A04',
        goldSoft: '#FEF9C3',
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        soft: '0 2px 10px -2px rgba(25, 21, 48, 0.08), 0 1px 2px -1px rgba(25, 21, 48, 0.06)',
        lift: '0 12px 28px -8px rgba(124, 58, 237, 0.28), 0 4px 10px -4px rgba(25, 21, 48, 0.1)',
        glow: '0 0 0 1px rgba(124, 58, 237, 0.12), 0 8px 24px -6px rgba(124, 58, 237, 0.25)',
      },
      keyframes: {
        'blob-move': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(4%, -6%) scale(1.08)' },
          '66%': { transform: 'translate(-3%, 4%) scale(0.96)' },
        },
        'pop-in': {
          '0%': { opacity: '0', transform: 'scale(0.85)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'blob-move': 'blob-move 22s ease-in-out infinite',
        'blob-move-slow': 'blob-move 30s ease-in-out infinite reverse',
        'pop-in': 'pop-in 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}
