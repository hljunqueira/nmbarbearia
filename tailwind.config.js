/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fbf7e6',
          100: '#f6ecc3',
          200: '#eedd90',
          300: '#e4cd5e',
          400: '#d4af37', // Gold base
          500: '#b69121', // Darker gold for hover
          600: '#947116',
          700: '#765615',
          800: '#624618',
          900: '#553c1a',
        },
        dark: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#121212', // Main background
          950: '#0a0a0a',
        },
        // Keeping accent for minor highlights if needed, but shifting to muted tones
        accent: {
          500: '#D4AF37', // Mapped to gold for backward compatibility/consistency
        }
      },
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'], // Kept for legacy support
      },
      backgroundImage: {
        // Darker overlays for premium feel
        'hero-pattern': "linear-gradient(to bottom, rgba(18, 18, 18, 0.8), rgba(18, 18, 18, 0.9)), url('/images/fundo3.png')", 
        'timing-pattern': "linear-gradient(to right, rgba(18, 18, 18, 0.9), rgba(18, 18, 18, 0.8)), url('/images/timing-bg.jpg')",
        'contact-pattern': "linear-gradient(to right, rgba(18, 18, 18, 0.95), rgba(18, 18, 18, 0.85)), url('/images/contact-bg.jpg')",
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}