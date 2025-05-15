/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-space-grotesk)'],
      },
      colors: {
        military: {
          950: '#0a0f1c',
          900: '#0A0C0F',
          800: '#1A1D21',
          700: '#2A2D31',
          600: '#3A3D41',
          500: '#4A4D51',
        },
        alert: {
          red: '#FF3B30',
          amber: '#FF9500',
          green: '#34C759',
        },
        accent: {
          primary: '#FFD700',    // Military gold
          secondary: '#C0C0C0',  // Military silver
          warning: '#FF9500',    // Warning orange
          danger: '#FF3B30',     // Danger red
          success: '#34C759',    // Success green
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      borderWidth: {
        '3': '3px',
      },
      boxShadow: {
        'military': '0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
} 