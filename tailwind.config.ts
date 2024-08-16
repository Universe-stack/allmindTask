import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xsm': '320px',

      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      'halluminateGrey': '#F8F9FB',
      'halluminateBlue': '#3b44c6',
      'halluminateYellow':'#f7e5c1',
      'halluminateBlack': '#171717',
      'halluminateWhite': '#FFFFFF'
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-circular)']
      },
      boxShadow: {
        'custom': '0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), 0 2px 4px -1px rgba(0,0,0,.2)',
      }
    },
  },
  plugins: []
};
export default config;
