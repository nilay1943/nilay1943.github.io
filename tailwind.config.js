/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      maxWidth: {
        '7xl': '80rem',
      },
      fontSize: {
        'base': ['16px', '24px'],
        'lg': ['18px', '28px'],
        'xl': ['20px', '30px'],
        '2xl': ['24px', '32px'],
        '3xl': ['30px', '36px'],
        '4xl': ['36px', '40px'],
        '5xl': ['48px', '1'],
        '6xl': ['60px', '1'],
        '7xl': ['72px', '1'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '16px',
          sm: '32px',
          lg: '64px',
          xl: '80px',
          '2xl': '96px',
        },
      },
    },
  },
  plugins: [],
} 