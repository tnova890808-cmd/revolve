import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0b",
        "ink-2": "#0e0e10",
        panel: "#141417",
        "panel-2": "#1a1a1e",
        line: "#26262c",
        "line-soft": "#1c1c21",
        gold: "#c6a15b",
        "gold-soft": "#d9c08a",
        "gold-deep": "#a9843f",
        cream: "#f5f4f1",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        brand: "0.18em",
        wide2: "0.28em",
      },
      maxWidth: {
        shell: "1320px",
      },
      boxShadow: {
        card: "0 20px 50px -30px rgba(0,0,0,0.9)",
        gold: "0 10px 40px -18px rgba(198,161,91,0.45)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both",
        fadeIn: "fadeIn 0.6s ease both",
        marquee: "marquee 26s linear infinite",
        slideIn: "slideIn 0.35s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
