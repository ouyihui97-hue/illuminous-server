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
        background: "#0a0a0f",
        primary: "#08FDD8",
        secondary: "#FF00FF",
        accent: "#8B5CF6",
        text: "#ffffff",
        "text-secondary": "#9ca3af",
      },
      fontFamily: {
        sans: ["Rajdhani", "sans-serif"],
        mono: ["Orbitron", "monospace"],
      },
      letterSpacing: {
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
      },
      animation: {
        "glow-pulse": "glow-pulse 2s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%": { boxShadow: "0 0 20px #08FDD8" },
          "100%": { boxShadow: "0 0 40px #08FDD8, 0 0 60px #08FDD8" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
