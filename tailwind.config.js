/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          base: '#0D0F12',
          card: '#101620',
          hover: '#141c28',
        },
        steel: {
          DEFAULT: '#869EF8',
          soft: '#a8baf9',
        },
        amber: {
          accent: '#f5a623',
        },
        coral: {
          DEFAULT: '#EE8277',
        },
        sage: {
          DEFAULT: '#8FB996',
        },
        lavender: {
          DEFAULT: '#CBAAF9',
        },
        teal: {
          DEFAULT: '#5EC8C2',
        },
        rose: {
          DEFAULT: '#E58FB1',
        },
      },
      fontFamily: {
        serif: ['var(--font-manrope)', 'sans-serif'],
        display: ['var(--font-manrope)', 'sans-serif'],
        sans: ['var(--font-dm-sans)', 'sans-serif'],
      },
      animation: {
        'pulse-dot': 'pulse-dot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'drift-a': 'drift-a 18s ease-in-out infinite',
        'drift-b': 'drift-b 22s ease-in-out infinite',
        'drift-c': 'drift-c 26s ease-in-out infinite',
        'draw': 'draw 1.4s ease-out 0.8s forwards',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.2)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'drift-a': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(40px, -30px) scale(1.1)' },
        },
        'drift-b': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-50px, 40px) scale(1.15)' },
        },
        'drift-c': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(30px, 50px) scale(0.95)' },
        },
        'draw': {
          '0%': { 'stroke-dashoffset': '300' },
          '100%': { 'stroke-dashoffset': '0' },
        },
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.18 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
