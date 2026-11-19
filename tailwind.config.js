/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bluspark: {
          navy: '#0D5C91',
          blue: '#056EB5',
          teal: '#269C85',
          bg: '#EDF3F5',
        },
        corporate: {
          green: '#00A859',
          greenHover: '#008F4C',
          greenDark: '#00733D',
          greenLight: '#EAF7EE',
          greenBorder: '#A7E4BF',
        },
        border: '#E5E7EB',
        background: '#ffffff',
        foreground: '#16191D',
        canvas: '#ffffff',
        ink: '#16191D',
        surface: '#ffffff',
        surfaceAlt: '#F8F9FA',
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#16191D',
        },
        muted: {
          DEFAULT: '#5E6874',
          foreground: '#5E6874',
        },
        softBorder: '#E5E7EB',
      },
      fontFamily: {
        sans: ['"Familjen Grotesk"', '"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        familjen: ['"Familjen Grotesk"', 'sans-serif'],
        heading: ['"Familjen Grotesk"', '"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        body: ['"Familjen Grotesk"', '"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      maxWidth: {
        canvas: '1440px',
        container: '1280px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '6px',
        'lg': '8px',
        'xl': '12px',
        '2xl': '16px',
      },
      boxShadow: {
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'card': '0 2px 8px -2px rgba(16, 24, 40, 0.06), 0 1px 4px -1px rgba(16, 24, 40, 0.04)',
        'card-hover': '0 12px 24px -6px rgba(0, 168, 89, 0.12), 0 4px 8px -2px rgba(0, 0, 0, 0.06)',
      },
      animation: {
        marquee: 'marquee var(--duration, 40s) linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap, 1rem)))' }
        }
      }
    },
  },
  plugins: [],
}
