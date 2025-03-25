/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0096FF',
        secondary: '#1B2B3A',
        'deep-blue': '#003B6D',
        'light-blue': '#E6F3FF',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      backgroundColor: {
        'hero': '#0A192F',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 