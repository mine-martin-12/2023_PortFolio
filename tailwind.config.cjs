/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        md: '2.5rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        surface: token('surface'),
        'surface-tint': token('surface-tint'),
        'on-surface': token('on-surface'),
        'on-surface-mute': token('on-surface-mute'),
        primary: token('primary'),
        secondary: token('secondary'),
        accent: token('accent'),
        'accent-dark': token('accent-dark'),
      },
      fontFamily: {
        sans: ['"Google Sans Flex"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Epilogue', '"Google Sans Flex"', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'hero-badge-pulse': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgb(var(--accent) / 0)' },
          '50%': { boxShadow: '0 0 20px 0 rgb(var(--accent) / 0.18)' },
        },
        'loader-bar': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        marquee: 'marquee 24s linear infinite',
        'hero-badge-pulse': 'hero-badge-pulse 3s ease-in-out infinite',
        'loader-bar': 'loader-bar 0.9s ease-out forwards',
      },
    },
  },
  plugins: [],
};
