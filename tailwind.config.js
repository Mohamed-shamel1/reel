/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Noor Al-Shifaa Authentic Brand Medical Palette
        medicalTeal: {
          DEFAULT: '#1FA1B8', // Signature cyan/teal
          50: '#E9F7FA',
          100: '#DEF4F7',
          200: '#BAE7EF',
          300: '#7ED3E2',
          400: '#4EC4D8',
          500: '#22B3CC',
          600: '#1FA1B8',
          700: '#1B8FA3',
          800: '#157A8C',
          900: '#0F5F6D',
          950: '#0A434D',
        },
        navyDeep: {
          DEFAULT: '#0A1926',
          canvas: '#061018',
          card: '#0D2230',
          elevated: '#112B3C',
          border: '#1A435D',
          glow: 'rgba(31, 161, 184, 0.25)',
        },
        amberInstallment: {
          DEFAULT: '#F59E0B', // Soft gold/amber for 0% installments
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
        },
        creamPaper: {
          DEFAULT: '#FBF9F3', // Warm clean notebook paper
          line: '#CBD5E1',    // Clean blue-slate ruled lines
          margin: '#F43F5E',  // Pink/red vertical margin line
          border: '#E2DAC8',
          shadow: 'rgba(15, 23, 42, 0.08)',
        },
        // Backward-compatible semantic aliases
        mustard: {
          DEFAULT: '#F59E0B',
          50: '#FFFBEB',
          100: '#FEF3C7',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
        },
        emeraldBrand: {
          DEFAULT: '#1FA1B8',
          hover: '#157A8C',
          light: '#E9F7FA',
          tag: '#0F5F6D',
        },
        emeraldDeep: {
          DEFAULT: '#0A1926',
          card: '#0D2230',
          border: '#1A435D',
          glow: '#1FA1B8',
        },
      },
      fontFamily: {
        cairo: ['Cairo', 'Almarai', 'sans-serif'],
        almarai: ['Almarai', 'sans-serif'],
        plex: ['"IBM Plex Sans Arabic"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace', 'sans-serif'],
      },
      boxShadow: {
        'pip': '0 16px 40px -6px rgba(0, 0, 0, 0.5), 0 0 0 4px #1FA1B8',
        'teal-glow': '0 20px 45px -10px rgba(10, 25, 38, 0.7), 0 0 30px rgba(31, 161, 184, 0.35)',
        'gold-tag': '0 6px 18px rgba(245, 158, 11, 0.35)',
        'yellow-tag': '0 6px 18px rgba(245, 158, 11, 0.35)',
        'notebook': '0 25px 60px -12px rgba(15, 23, 42, 0.25)',
        'card-glow': '0 20px 45px -10px rgba(10, 25, 38, 0.7), 0 0 30px rgba(31, 161, 184, 0.35)',
      },
    },
  },
  plugins: [],
}