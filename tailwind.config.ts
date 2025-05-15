import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        military: {
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
        }
      }
    },
  },
  plugins: [],
};

export default config; 