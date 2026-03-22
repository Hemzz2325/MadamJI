/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: {
          50:  '#fdf4ff',
          100: '#fce8ff',
          200: '#ffc6ff',
          300: '#f0a0f0',
          400: '#d968d9',
          500: '#bdb2ff',
          600: '#9083e0',
          700: '#6b56c0',
          800: '#4a3a9e',
          900: '#2e2170',
        },
        violet: {
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#bdb2ff',
          400: '#a094f5',
          500: '#8778e8',
          600: '#6d5fdc',
          700: '#5346cc',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%':   { boxShadow: '0 0 10px rgba(255,198,255,0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(189,178,255,0.8)' },
        }
      }
    },
  },
  plugins: [],
}
