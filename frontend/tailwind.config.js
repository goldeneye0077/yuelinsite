import tailwindcssAnimate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1180px',
      },
    },
    extend: {
      colors: {
        border: 'rgb(var(--tw-color-border) / <alpha-value>)',
        input: 'rgb(var(--tw-color-input) / <alpha-value>)',
        ring: 'rgb(var(--tw-color-ring) / <alpha-value>)',
        background: 'rgb(var(--tw-color-background) / <alpha-value>)',
        foreground: 'rgb(var(--tw-color-foreground) / <alpha-value>)',
        primary: {
          DEFAULT: 'rgb(var(--tw-color-primary) / <alpha-value>)',
          foreground: 'rgb(var(--tw-color-primary-foreground) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--tw-color-secondary) / <alpha-value>)',
          foreground: 'rgb(var(--tw-color-secondary-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'rgb(var(--tw-color-muted) / <alpha-value>)',
          foreground: 'rgb(var(--tw-color-muted-foreground) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'rgb(var(--tw-color-accent) / <alpha-value>)',
          foreground: 'rgb(var(--tw-color-accent-foreground) / <alpha-value>)',
          sky: 'rgb(var(--tw-color-accent-sky) / <alpha-value>)',
        },
        destructive: {
          DEFAULT: 'rgb(var(--tw-color-destructive) / <alpha-value>)',
          foreground: 'rgb(var(--tw-color-destructive-foreground) / <alpha-value>)',
        },
        card: {
          DEFAULT: 'rgb(var(--tw-color-card) / <alpha-value>)',
          foreground: 'rgb(var(--tw-color-card-foreground) / <alpha-value>)',
        },
        popover: {
          DEFAULT: 'rgb(var(--tw-color-popover) / <alpha-value>)',
          foreground: 'rgb(var(--tw-color-popover-foreground) / <alpha-value>)',
        },
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 12px 32px rgba(15, 23, 42, 0.08)',
        glow: '0 0 0 1px rgba(99, 102, 241, 0.15), 0 18px 48px rgba(14, 165, 233, 0.08)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'soft-pulse': {
          '0%, 100%': { opacity: '0.72' },
          '50%': { opacity: '1' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-3px)' },
          '40%': { transform: 'translateX(3px)' },
          '60%': { transform: 'translateX(-2px)' },
          '80%': { transform: 'translateX(2px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 280ms cubic-bezier(0.22, 1, 0.36, 1)',
        'soft-pulse': 'soft-pulse 1.6s ease-in-out infinite',
        shake: 'shake 240ms ease-in-out',
      },
      backgroundImage: {
        'accent-gradient':
          'linear-gradient(135deg, rgb(var(--tw-color-primary) / 1) 0%, rgb(var(--tw-color-accent-sky) / 1) 100%)',
      },
    },
  },
  plugins: [tailwindcssAnimate],
}
