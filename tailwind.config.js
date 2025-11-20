/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          bg: '#ffffff',
          surface: '#f8f9fa',
          text: '#1a1a1a',
          muted: '#666666',
        },
        dark: {
          bg: '#0f0f0f',
          surface: '#1a1a1a',
          text: '#ffffff',
          muted: '#aaaaaa',
        }
      },
      backgroundImage: {
        'gradient-dark': 'radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)',
        'gradient-light': 'radial-gradient(125% 125% at 50% 10%, #f8f9fa 40%, #e0e7ff 100%)',
      },
      boxShadow: {
        'glow-navy': '0 6px 30px rgba(6, 34, 77, 0.18)',
        'glow-teal': '0 8px 30px rgba(6, 182, 212, 0.12)',
        'glow-amber': '0 8px 30px rgba(245, 158, 11, 0.12)',
      },
      animation: {
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}



