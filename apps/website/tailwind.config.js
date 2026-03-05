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
        primary: '#3B82F6',
        'primary-hover': '#2563EB',
        secondary: '#8B5CF6',
        'background-light': '#F8FAFC',
        'background-dark': '#0B0F19',
        'surface-dark': '#151B2B',
        'accent-glow': 'rgba(59, 130, 246, 0.5)'
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
