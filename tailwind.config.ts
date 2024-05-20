import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-linear': 'linear-gradient(90deg, #A54E2B 0%, #DC9853 100%)',
      },
      fontFamily: {
        sans: ['Cabin Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
