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
        "secondary-color": "#71717a",
        "accent-color": "#818cf8",
      },
      keyframes: {
        "scroll-x-positive": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        "scroll-x-positive": "scroll-x-positive 35s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
