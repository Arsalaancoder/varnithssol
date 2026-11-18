/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: '#e3e8f0',
        background: '#ffffff',
        foreground: '#00184a',
        canvas: '#ffffff',
        ink: '#00184a',
        brandBlue: {
          DEFAULT: '#1e5bc6',
          hover: '#15469e',
        },
        accent: {
          DEFAULT: '#f6650a',
          hover: '#c2410c',
        },
        surface: '#ffffff',
        surfaceAlt: '#f7f9fc',
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#00184a',
        },
        muted: {
          DEFAULT: '#5b6b85',
          foreground: '#5b6b85',
        },
        softBorder: '#e3e8f0',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      maxWidth: {
        'canvas': '1440px',
      },
      borderRadius: {
        'editorial': '24px',
        'editorial-lg': '32px',
        'editorial-xl': '40px',
      },
      boxShadow: {
        'soft-card': '0 10px 30px -10px rgba(16, 42, 33, 0.08)',
        'elevated': '0 20px 45px -15px rgba(16, 42, 33, 0.14)',
        'glow': '0 0 40px rgba(137, 156, 117, 0.25)',
        'cta': '0 4px 18px rgba(242, 201, 76, 0.35)',
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap, 1rem)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap, 1rem)))" },
        },
      },
      animation: {
        marquee: "marquee var(--duration, 20s) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration, 20s) linear infinite",
      },
    },
  },
  plugins: [],
}
