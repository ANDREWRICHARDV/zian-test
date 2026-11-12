/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#051933',
          navy: '#0a192f',
          blue: '#3B82F6',
          lightBlue: '#60A5FA',
          cardBg: '#0e2444',
          border: 'rgba(59,130,246,0.2)',
          accentCyan: '#06B6D4',
          emerald: '#10B981',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
