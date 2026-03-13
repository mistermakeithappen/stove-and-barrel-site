import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: "#e1ddda",
        charcoal: "#302d33",
        rusticRed: "#922b2a",
        gold: "#ccb186",
        dark: "#1f1f1f",
        deepBlack: "#141414",
        mutedGray: "#a6a6a6",
      },
      fontFamily: {
        'abril-fatface': ['var(--font-abril)'],
        'abril': ['var(--font-abril)'],
        'heading': ['var(--font-abril)'],
        'arapey': ['var(--font-arapey)'],
        'body': ['var(--font-arapey)'],
        'impact': ['"Bebas Neue"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
