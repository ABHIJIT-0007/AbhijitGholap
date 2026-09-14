/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./standalone-preview.html",
  ],
  theme: {
    extend: {
      colors: {
        architectural: {
          dark: '#0C0C0C',
          surface: '#141414',
          panel: '#181818',
          accent: '#B85D3B', // Refined terracotta accent
          border: 'rgba(255, 255, 255, 0.1)',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
    },
  },
  plugins: [],
}
