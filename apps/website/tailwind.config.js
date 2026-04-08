// const { createGlobPatternsForDependencies } = require('@nx/next/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './{src,pages,components,app}/**/*.{ts,tsx,js,jsx,html}',
    '!./{src,pages,components,app}/**/*.{stories,spec}.{ts,tsx,js,jsx,html}'
    //     ...createGlobPatternsForDependencies(__dirname)
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#256af4',
        'primary-hover': '#1a55d6',
        secondary: '#8B5CF6',
        'background-light': '#F8FAFC',
        'background-dark': '#111318',
        'surface-dark': '#1b1f27',
        'border-dark': '#282e39',
        'text-secondary': '#9ca6ba',
        'neon-accent': '#00f0ff',
        'accent-glow': 'rgba(37, 106, 244, 0.5)'
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
      borderRadius: {
        '3xl': '2rem'
      },
      boxShadow: {
        neon: '0 0 20px rgba(59, 130, 246, 0.3)',
        'neon-strong': '0 0 30px rgba(139, 92, 246, 0.4)',
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: []
}
