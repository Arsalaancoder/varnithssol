/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'rgba(23, 59, 44, 0.12)',
        background: '#EAF0E8',
        foreground: '#202923',
        canvas: '#EAF0E8',
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#202923',
        },
        muted: {
          DEFAULT: '#737D73',
          foreground: '#737D73',
        },
        darkGreen: '#173B2C',
        deepGreen: '#102A21',
        olive: '#899C75',
        forest: '#0E241B',
        charcoal: '#202923',
        warmSand: '#E2E6DF',
        softBorder: 'rgba(23, 59, 44, 0.12)',
        // Yellow CTA Button Palette
        ctaYellow: '#F2C94C',
        ctaYellowHover: '#DFAE22',
        ctaDarkGreen: '#183629',
        ctaDarkGreenHover: '#102A21',
      },
      fontFamily: {
        serif: ['var(--font-heading)', '"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['var(--font-heading)', '"Cormorant Garamond"', 'Georgia', 'serif'],
        heading: ['var(--font-heading)', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['var(--font-body)', 'Manrope', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        body: ['var(--font-body)', 'Manrope', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
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
