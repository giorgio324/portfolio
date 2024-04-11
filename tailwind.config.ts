import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bodyBackgroundColor: 'rgba(34, 40, 49, 1)',
        desktopNavBackgroundColor: 'rgba(33, 31, 35, 0.35)',
        desktopNavLinkBackgroundColor: 'rgba(96, 96, 96, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
