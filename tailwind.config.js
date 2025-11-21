/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          green: '#39FF14',
          red: '#FF073A',
        },
        dark: {
          primary: '#000000',
          secondary: '#0a0a0a',
          accent: '#111111',
        }
      },
      fontFamily: {
        display: ['Bebas Neue', 'Arial Black', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'neon-green': '0 0 20px rgba(57, 255, 20, 0.5)',
        'neon-red': '0 0 20px rgba(255, 7, 58, 0.5)',
        'glow-green': '0 0 40px rgba(57, 255, 20, 0.3)',
        'glow-red': '0 0 40px rgba(255, 7, 58, 0.3)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
