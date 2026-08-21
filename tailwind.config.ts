import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
      },
      colors: {
        bg: "#090D18",
        surface: "#121A2E",
        "surface-2": "#1A2340",
        border: "#232D50",
        "border-soft": "#181F3A",
        text: "#F4F1E9",
        "text-dim": "#93A0C4",
        "text-faint": "#7885B3",
        amber: "#F2A83D",
        teal: "#4FD9C7",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        card: "0.5rem",
      },
      animation: {
        orbit: "orbit-spin 30s linear infinite",
        "orbit-reverse": "orbit-spin 45s linear infinite reverse",
        "pulse-dot": "pulse-ring-anim 2s ease-out infinite",
        "float-node": "float-node 4s ease-in-out infinite",
      },
      keyframes: {
        "orbit-spin": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "pulse-ring-anim": {
          "0%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(1.35)" },
        },
        "float-node": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
