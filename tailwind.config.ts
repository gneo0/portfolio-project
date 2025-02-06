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
        "fade-down": {
          "0%": { opacity: "0", left: "50%", width: "80%" },
          "50%": { width: "40%", opacity: "0.3" },
          "100%": { opacity: "1" },
        },
        "opacity-down": {
          "0%": { opacity: "0", top: "-5rem" },
          "100%": { opacity: "1", top: "0rem" },
        },
      },
      animation: {
        "scroll-x-positive": "scroll-x-positive 45s linear infinite both",
        "scroll-x-negative": "scroll-x-negative 80s linear infinite both",
        "fade-down": "fade-down 0.5s linear",
        "opacity-down": "opacity-down 0.7s linear",
      },
    },
  },
  plugins: [],
} satisfies Config;
