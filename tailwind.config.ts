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
        bodyBackgroundColor: 'rgba(10, 10, 10, 1)',
        desktopNavBackgroundColor: 'rgba(33, 31, 35, 0.75)',
        desktopNavLinkBackgroundColor: 'rgba(96, 96, 96, 1)',
        buttonGreenBackgroundColor: 'rgba(211, 233, 122, 1)',
        buttonBlackBackgroundColor: '#222222',
        cardBackgroundColor: '#222222',
        dividerBackgroundColor: '#484848',
        paragraphTextColor: '#C7C7C7',
        blackTextColor: '#0A0A0A',
        borderColor: '#484848',
      },
    },
  },
  plugins: [],
};
export default config;
