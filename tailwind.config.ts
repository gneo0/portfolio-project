import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#171717",
        "secondary-color": "#4338ca",
        "accent-color": "#ede9fe",
      },
      keyframes: {
        "scroll-x-positive": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "scroll-x-negative": {
          "0%": { transform: "translateX(50%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "scroll-x-positive": "scroll-x-positive 35s linear infinite",
        "scroll-x-negative": "scroll-x-negative 80s linear infinite both",
      },
    },
  },
  plugins: [],
} satisfies Config;
