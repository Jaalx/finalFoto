import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        paper: '#f7f5f0',
        ink: '#161514',
        muted: '#8a857d',
        rule: '#d9d3c5',
      },
      letterSpacing: {
        tightest: '-0.04em',
        editorial: '0.18em',
      },
      maxWidth: {
        prose: '65ch',
        page: '1200px',
      },
    },
  },
  plugins: [],
};

export default config;
